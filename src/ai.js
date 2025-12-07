import { GoogleGenerativeAI } from "@google/generative-ai";

// API Key from environment variable
// Create .env.local file with: VITE_GEMINI_API_KEY=your_key_here
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

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

// Chat with Woffy
export const chatWithWoffy = async (message, chatHistory = []) => {
  // Check if API key is configured
  if (!API_KEY) {
    return "*tilts head* Woof! I need my AI brain connected. Add VITE_GEMINI_API_KEY to .env.local file! 🐕";
  }

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: WOFFY_SYSTEM_PROMPT,
      generationConfig: {
        maxOutputTokens: 200,
        temperature: 0.8,
      }
    });

    const chat = model.startChat({
      history: chatHistory.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage(message);
    return result.response.text();
  } catch (error) {
    console.error("Woffy AI error:", error);
    return "*tilts head* Woof... Something went wrong. Can you try again? 🐕";
  }
};
