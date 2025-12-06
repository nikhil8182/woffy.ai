import { initializeApp, getApps } from "firebase/app";
import { getVertexAI, getGenerativeModel } from "firebase/vertexai";

// Firebase config (reuse from existing)
const firebaseConfig = {
  apiKey: "AIzaSyCU_ASRnbMtNuZYxR9IG6MNL7RVIkiCwhU",
  authDomain: "woffy-ai.firebaseapp.com",
  projectId: "woffy-ai",
  storageBucket: "woffy-ai.firebasestorage.app",
  messagingSenderId: "190287770784",
  appId: "1:190287770784:web:d0cb3f472607bcd2a985c5",
  measurementId: "G-19TGTWL0LC"
};

// Initialize Firebase (check if already initialized)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Vertex AI
const vertexAI = getVertexAI(app);

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
  return getGenerativeModel(vertexAI, {
    model: "gemini-1.5-flash",
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

export { app, vertexAI };

