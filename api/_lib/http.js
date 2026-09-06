import { createHash } from "node:crypto";

export function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.end(JSON.stringify(body));
}

export function prepare(req, res, env) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    json(res, 405, {
      error: "Please use the website form to send this request.",
    });
    return false;
  }
  const origins = new Set(["https://woffy.ai", "https://www.woffy.ai"]);
  for (const host of [
    env.VERCEL_URL,
    env.VERCEL_BRANCH_URL,
    env.VERCEL_PROJECT_PRODUCTION_URL,
  ]) {
    if (host) origins.add(`https://${host}`);
  }
  if (env.NODE_ENV !== "production") {
    origins.add("http://localhost:5173");
    origins.add("http://localhost:3000");
  }
  if (
    (req.headers?.origin && !origins.has(req.headers.origin)) ||
    req.headers?.["sec-fetch-site"] === "cross-site"
  ) {
    json(res, 403, { error: "Please send this request from woffy.ai." });
    return false;
  }
  if (
    !String(req.headers?.["content-type"] || "")
      .toLowerCase()
      .startsWith("application/json")
  ) {
    json(res, 415, { error: "Please send a JSON request." });
    return false;
  }
  return true;
}

export function bodyOf(req, maxBytes = 18000) {
  const raw =
    typeof req.body === "string" ? req.body : JSON.stringify(req.body ?? {});
  if (Buffer.byteLength(raw, "utf8") > maxBytes)
    throw new Error("Request is too long. Please shorten it and try again.");
  const body = JSON.parse(raw);
  if (!body || typeof body !== "object" || Array.isArray(body))
    throw new Error("Please check the form and try again.");
  return body;
}

// Per-instance protection; configure Vercel Firewall for a global limit.
// Only address hashes are held in memory, never email addresses or messages.
export function createLimiter({ limit, windowMs, now = Date.now }) {
  const buckets = new Map();
  return (req) => {
    const time = now();
    const address =
      req.headers?.["x-vercel-forwarded-for"] ||
      req.headers?.["x-forwarded-for"] ||
      req.socket?.remoteAddress ||
      "unknown";
    const key = createHash("sha256")
      .update(String(address).split(",")[0].trim())
      .digest("hex");
    for (const [id, bucket] of buckets)
      if (bucket.until <= time) buckets.delete(id);
    let bucket = buckets.get(key);
    if (!bucket) {
      if (buckets.size >= 4096) return 60;
      bucket = { count: 0, until: time + windowMs };
      buckets.set(key, bucket);
    }
    if (bucket.count >= limit)
      return Math.max(1, Math.ceil((bucket.until - time) / 1000));
    bucket.count += 1;
    return 0;
  };
}

export function rateLimited(req, res, limiter) {
  const retryAfter = limiter(req);
  if (!retryAfter) return false;
  res.setHeader("Retry-After", String(retryAfter));
  json(res, 429, {
    error:
      "You have sent several requests. Please wait a minute and try again.",
  });
  return true;
}
