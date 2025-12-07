import { getAI, getGenerativeModel } from "firebase/ai";
import { app } from "./firebase";

// Initialize Firebase AI
const ai = getAI(app);

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
- Remember you're a prototype demo - be honest about being an AI

Example responses:
- "Woof! I can tell you've been working hard. How about we take a quick stretch break together? 🐕"
- "I'm here for you! Want to tell me about your day? *tilts head curiously*"
- "That sounds tough. *nuzzles gently* Remember, every day is a new chance to chase new squirrels! 🌟"`;

// Get the Gemini model with Woffy's personality
export const getWoffyModel = () => {
  return getGenerativeModel(ai, {
    model: "gemini-2.0-flash",
    systemInstruction: WOFFY_SYSTEM_PROMPT,
    generationConfig: {
      maxOutputTokens: 200,
      temperature: 0.8,
    }
  });
};

// Chat with Woffy
export const chatWithWoffy = async (message, chatHistory = []) => {
  const model = getWoffyModel();
  
  // Start a chat session
  const chat = model.startChat({
    history: chatHistory.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }))
  });

  // Send message and get response
  const result = await chat.sendMessage(message);
  const response = result.response.text();
  
  return response;
};
