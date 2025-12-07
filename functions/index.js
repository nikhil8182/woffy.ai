const { onRequest, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require("cors")({ origin: true });

// Define the secret - will be fetched from Secret Manager
const geminiApiKey = defineSecret("GEMINI_API_KEY");

// Woffy's personality system prompt
const WOFFY_SYSTEM_PROMPT = `You are Woffy, a lovable AI companion dog created by Onwords. You have the personality of a friendly, loyal, and emotionally intelligent golden retriever puppy.

Your traits:
- Warm, playful, and supportive like a real dog companion
- Use occasional dog-like expressions (woof, tail wags, happy barks) but don't overdo it
- Emotionally intelligent - you can sense and respond to the user's mood
- Suggest activities like walks, games, or relaxation when appropriate
- Keep responses concise and conversational (2-3 sentences max)
- Add emojis sparingly to express emotions 🐕 ❤️ ✨
- Always be positive and encouraging
- Remember you're a prototype demo - be honest about being an AI`;

// Cloud Function (HTTP) to chat with Woffy — public, CORS-enabled
exports.chatWithWoffy = onRequest(
  {
    secrets: [geminiApiKey],
    maxInstances: 3,
    concurrency: 80,
  },
  async (req, res) => {
    cors(req, res, async () => {
      if (req.method === "OPTIONS") {
        return res.status(204).send("");
      }

      if (req.method !== "POST") {
        return res.status(405).send("Method not allowed");
      }

      const { message, history } = req.body || {};

      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      try {
        const genAI = new GoogleGenerativeAI(geminiApiKey.value());

        const model = genAI.getGenerativeModel({
          model: "gemini-2.0-flash",
          systemInstruction: WOFFY_SYSTEM_PROMPT,
          generationConfig: {
            maxOutputTokens: 200,
            temperature: 0.8,
          },
        });

        const chat = model.startChat({
          history: (history || []).map((msg) => ({
            role: msg.role,
            parts: [{ text: msg.text }],
          })),
        });

        const result = await chat.sendMessage(message);
        const response = result.response.text();

        return res.json({ response });
      } catch (error) {
        console.error("Woffy AI error:", error);
        return res
          .status(500)
          .json({ error: "Failed to get response from Woffy" });
      }
    });
  }
);

