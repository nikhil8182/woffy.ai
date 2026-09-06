import { createHash } from "node:crypto";
import {
  bodyOf,
  createLimiter,
  json,
  prepare,
  rateLimited,
} from "./_lib/http.js";

// Public Firebase configuration. REST writes obey existing create-only rules.
const FIREBASE_PROJECT = "woffy-ai";
const FIREBASE_WEB_KEY = "AIzaSyCU_ASRnbMtNuZYxR9IG6MNL7RVIkiCwhU";

function validateSignup(body) {
  if (typeof body.email !== "string")
    throw new Error("Please enter a valid email address.");
  const email = body.email.trim().toLowerCase();
  if (email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email))
    throw new Error("Please enter a valid email address.");
  if (body.consent !== true)
    throw new Error(
      "Please agree to receive Woffy build updates before signing up.",
    );
  const name = body.name ?? "";
  const interest = body.interest ?? "";
  if (typeof name !== "string" || name.length > 100)
    throw new Error("Please keep your name within 100 characters.");
  if (typeof interest !== "string" || interest.length > 80)
    throw new Error("Please choose an interest from the form.");
  return { email, name: name.trim(), interest: interest.trim() };
}

async function confirmationEmail({
  fetchImpl,
  env,
  signup,
  documentId,
  logger,
}) {
  if (!env.RESEND_API_KEY || !env.WOFFY_UPDATES_FROM_EMAIL) return;
  try {
    const response = await fetchImpl("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `woffy-welcome-${documentId}`,
      },
      signal: AbortSignal.timeout(4000),
      body: JSON.stringify({
        from: env.WOFFY_UPDATES_FROM_EMAIL,
        to: [signup.email],
        reply_to: "hello@woffy.ai",
        subject: "You’re on the Woffy build updates list",
        text: "Thanks for following Woffy. Your email has been registered for occasional updates about our companion robotics project, including what we build, test and learn.\n\nWoffy is in research and development. This is not a preorder or a guarantee of beta access.\n\nTo leave the list or ask about your information, reply to this email or contact hello@woffy.ai.\n\nThe Woffy team\nhttps://woffy.ai",
      }),
    });
    if (!response.ok)
      logger.warn("woffy_signup_confirmation_unavailable", {
        status: response.status,
      });
  } catch {
    logger.warn("woffy_signup_confirmation_unavailable", {
      reason: "request_failed",
    });
  }
}

export function createWaitlistHandler({
  fetchImpl = fetch,
  env = process.env,
  limiter = createLimiter({ limit: 6, windowMs: 60000 }),
  now = () => new Date(),
  logger = console,
} = {}) {
  return async function handler(req, res) {
    if (!prepare(req, res, env) || rateLimited(req, res, limiter)) return;
    let signup;
    try {
      const body = bodyOf(req, 3000);
      const website = body.website ?? "";
      if (typeof website !== "string" || website.length > 200)
        throw new Error("Please check the form and try again.");
      if (website.trim()) return json(res, 200, { ok: true });
      signup = validateSignup(body);
    } catch (error) {
      return json(res, 400, {
        error:
          error instanceof SyntaxError
            ? "Please send a valid JSON request."
            : error.message,
      });
    }
    const documentId = createHash("sha256").update(signup.email).digest("hex");
    const project = env.WOFFY_FIREBASE_PROJECT_ID || FIREBASE_PROJECT;
    const apiKey = env.WOFFY_FIREBASE_WEB_API_KEY || FIREBASE_WEB_KEY;
    const endpoint = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(project)}/databases/(default)/documents/waitlist?documentId=${documentId}`;
    try {
      const stored = await fetchImpl(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        signal: AbortSignal.timeout(8000),
        body: JSON.stringify({
          fields: {
            email: { stringValue: signup.email },
            name: { stringValue: signup.name },
            interest: { stringValue: signup.interest },
            consent: { booleanValue: true },
            consentVersion: { stringValue: "build-updates-2026-09-06" },
            source: { stringValue: "woffy_website_build_updates" },
            createdAt: { timestampValue: now().toISOString() },
          },
        }),
      });
      // Create-only: no collection reads or overwrites, and no public enumeration.
      if (stored.status === 409) return json(res, 200, { ok: true });
      if (!stored.ok) {
        logger.warn("woffy_signup_storage_unavailable", {
          status: stored.status,
        });
        return json(res, 503, {
          error:
            "We could not save your signup right now. Please try again shortly or contact hello@woffy.ai.",
        });
      }
      await confirmationEmail({ fetchImpl, env, signup, documentId, logger });
      return json(res, 200, { ok: true });
    } catch {
      logger.warn("woffy_signup_storage_unavailable", {
        reason: "request_failed",
      });
      return json(res, 503, {
        error:
          "We could not confirm your signup. Please try again; a retry will not add you twice.",
      });
    }
  };
}

export default createWaitlistHandler();
