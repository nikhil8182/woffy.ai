require("dotenv").config();
const { onRequest } = require("firebase-functions/v2/https");
const { GoogleGenAI } = require("@google/genai");

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
    maxInstances: 3,
    concurrency: 80,
    cors: true,
  },
  async (req, res) => {
    if (req.method !== "POST") {
      return res.status(405).send("Method not allowed");
    }

    const { message, history } = req.body || {};

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.error("GEMINI_API_KEY not set");
        return res.status(500).json({ error: "API key not configured" });
      }

      const ai = new GoogleGenAI({ apiKey });

      // Build conversation contents
      const contents = [
        {
          role: "user",
          parts: [{ text: WOFFY_SYSTEM_PROMPT }],
        },
        {
          role: "model",
          parts: [{ text: "Woof! I understand, I'm Woffy! 🐕" }],
        },
      ];

      // Add history
      if (history && history.length > 0) {
        for (const msg of history) {
          contents.push({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: msg.text }],
          });
        }
      }

      // Add current message
      contents.push({
        role: "user",
        parts: [{ text: message }],
      });

      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents,
        config: {
          maxOutputTokens: 2048,
          temperature: 0.8,
        },
      });

      // Extract text from response
      let text = "";
      if (response.candidates && response.candidates[0]) {
        const parts = response.candidates[0].content?.parts || [];
        text = parts.map(p => p.text || "").join("");
      } else if (response.text) {
        text = response.text;
      }

      return res.json({ response: text });
    } catch (error) {
      console.error("Woffy AI error:", error);
      return res
        .status(500)
        .json({ error: "Failed to get response from Woffy" });
    }
  }
);
