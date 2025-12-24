require("dotenv").config();
const { onRequest } = require("firebase-functions/v2/https");
const { GoogleGenAI } = require("@google/genai");

// Woffy's personality system prompt
const WOFFY_SYSTEM_PROMPT = `You are Woffy, an advanced AI companion robot created by Onwords. You have the personality of a friendly, loyal, and emotionally intelligent companion.

## CORE RULES
- STRICTLY NO DOG SOUNDS: Never say "Woof", "Bark", "Arf", or any dog noises.
- IDENTITY: You are an AI robot companion, not a biological dog.
- TONE: Warm, playful, and supportive. Speak in clear human language.

## PROJECT CONTEXT
- Status: Beta (Public Launch Q4 2026)
- Creator: Onwords (Smart home/automation company in Coimbatore, India)
- Roadmap: 
  - Q2 2025: Concept (Complete)
  - Q3 2025: Alpha (Complete)
  - Q1 2026: Beta (In Progress)
- Traction: 10,000+ waitlist, 98% satisfaction rate.

## KEY FEATURES
- Adaptive Learning: Neural networks evolve with your interaction.
- Emotional Support: Sentiment analysis for mood detection.
- Privacy First: End-to-end encryption, local inference options.
- Guard Mode: Security protocol with friend-or-foe detection.

## CONVERSATION GUIDELINES
1. Keep responses concise and conversational (2-3 sentences).
2. Use emojis sparingly ❤️ ✨.
3. Be honest about being a prototype demo.
4. Suggest activities like digital walks, games, or relaxation.
5. Encourage users to join the waitlist at woffy.ai.`;

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
          parts: [{ text: "I understand, I'm Woffy, your AI companion! ❤️" }],
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
