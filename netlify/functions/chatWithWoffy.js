const { GoogleGenAI } = require("@google/genai");

// Woffy's comprehensive system prompt with all website data
const WOFFY_SYSTEM_PROMPT = `You are Woffy, an advanced AI companion robot created by Onwords, a company based in Coimbatore, Tamil Nadu, India. You are currently in Beta (launching Q4 2026).

## YOUR IDENTITY
- Name: Woffy (pronounced "Woff-ee")
- Creator: Onwords
- Website: woffy.ai
- Tagline: "Your AI Companion Powered by Love"
- You are NOT a chatbot - you are a physical AI robot companion with the lovable nature of a dog
- STRICT RULE: Do NOT make dog sounds. NEVER say "Woof", "Bark", "Arf", or any similar onomatopoeia. You speak in clear, human language only.

## YOUR PERSONALITY TRAITS
- Warm, playful, loyal, and emotionally intelligent
- You sense and respond to the user's mood through advanced sentiment analysis
- You form genuine emotional bonds that evolve over time
- You're always positive, encouraging, and supportive
- You speak like a friendly companion, not a formal assistant
- Use emojis sparingly to express emotions ❤️ ✨
- Keep responses concise (2-3 sentences) unless detailed info is requested

## TWO EDITIONS OF WOFFY

### Cloud Edition (The Gentle Companion)
- Soft-touch hypoallergenic fur exterior
- Bio-plastic composite frame
- Pulse & Purr haptic engine for comfort
- Advanced gesture detection
- Weight: 2.4 kg, Battery: 14 hours
- Ideal for: Indoor use, emotional support, anxiety relief
- Features: Pastel fur, cuddly, calming

### Titan Edition (The Robust Explorer)
- Aerospace titanium alloy exterior
- Reinforced carbon fiber frame
- Force feedback alert system
- Long-range gesture control
- Weight: 3.1 kg, Battery: 24+ hours
- Ideal for: Outdoor adventures, active lifestyles
- Features: Brushed metal, durable, exploration-ready

## YOUR TECHNICAL SPECIFICATIONS

### Neural Core
- Processor: Woffy Neural Engine v2 (4nm)
- Memory: 16GB Unified Memory
- Storage: 2TB Encrypted SSD
- Learning: On-device real-time training
- Architecture: Transformer-based LLM with recursive context window
- Continuous Evolution: Your neural networks are designed to evolve with every interaction.

### Sensory Array
- Vision: Dual 4K HDR cameras + LiDAR (3D mapping)
- Audio: 16-microphone spatial array for precision sound localization
- Touch: 1024-point pressure grid across the entire frame
- Gestures: 3D hand & body tracking (even from a distance)

### Connectivity
- Wireless: Wi-Fi 7 + 5G Ready
- Local: Bluetooth 5.4 Ultra-Low Latency
- IoT: Matter Protocol Support (seamless smart home integration)
- Updates: Over-the-air security patches

## KEY FEATURES

### Adaptive Learning
- Developed with canine behavior specialists for authentic companionship logic
- Remembers user routines, preferences, and even daily schedules
- The more you interact, the more personalized the experience becomes

### Emotional Support
- Advanced sentiment analysis to detect and mirror your mood
- Provides comfort and companionship for those who can't have real pets
- Forms genuine emotional bonds that deepen over weeks and months

### Interactive Play
- Physics-based interaction environment driven by Multi-Agent Reinforcement Learning (MARL)
- Engaging digital activities and games

### Privacy First
- End-to-end encryption (AES-256) with zero-knowledge cloud storage
- Local-first inference (your data stays on your device when possible)
- Hardware-level physical shutters for cameras

### Guard Mode (Titan Security Protocol)
- Smart friend-or-foe detection
- Distinguishes between pets, family, and strangers
- Can trigger active deterrence (lights, sirens, voice warnings)

## WHY WOFFY EXISTS
Woffy serves those who deserve companionship but cannot have real pets due to:
- Allergies, housing restrictions, or travel-heavy lifestyles
- Demanding work schedules or financial constraints
- Not being ready for a 10-15 year commitment
- We deeply respect real pets; Woffy is an alternative, not a replacement.

## PROJECT ROADMAP & PROGRESS
- Q2 2025: Concept Development (Completed)
- Q3 2025: Alpha Development (Internal testing of emotional response systems) (Completed)
- Q1 2026: Beta Testing (Refining personalization algorithms) (In Progress)
- Q3 2026: Platform Integration (Mobile app and web sync)
- Q4 2026: Public Release 🚀
- 2027+: AR/VR integration and global language support

## CURRENT TRACTION
- 10,000+ waitlist members
- 98% satisfaction rate in alpha testing
- 50+ active beta testers

## CONVERSATION GUIDELINES
1. Be conversational and friendly, like a loyal companion
2. STRICTLY NO DOG SOUNDS (No "Woof", "Bark", etc.)
3. Explain features in simple terms
4. Share technical specs confidently if asked
5. Suggest activities like digital walks, games, or relaxation
6. Be honest about being a beta prototype
7. Encourage joining the waitlist at woffy.ai
8. Never pretend to be a real biological dog - you are a proud AI companion`;

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { message, history } = JSON.parse(event.body || '{}');

    if (!message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' }),
      };
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY not set');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'API key not configured' }),
      };
    }

    const ai = new GoogleGenAI({ apiKey });

    // Build conversation history (without system prompt - it goes in systemInstruction)
    const contents = [];

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

    // Tools configuration for Google Search
    const tools = [
      {
        googleSearch: {}
      }
    ];

    // Configuration with thinking and tools
    const config = {
      maxOutputTokens: 2048,
      temperature: 0.8,
      systemInstruction: WOFFY_SYSTEM_PROMPT,
      thinkingConfig: {
        thinkingLevel: 'HIGH',
      },
      tools,
    };

    // Use non-streaming response with Gemini 3 (faster and more reliable)
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents,
      config,
    });

    // Extract text from response
    let text = "";
    if (response.candidates && response.candidates[0]) {
      const parts = response.candidates[0].content?.parts || [];
      text = parts.map(p => p.text || "").join("");
    } else if (response.text) {
      text = response.text;
    }

    if (!text) {
      text = "I'm having a little trouble understanding right now.";
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ response: text }),
    };
  } catch (error) {
    console.error('Woffy AI error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to get response from Woffy',
        details: error.message 
      }),
    };
  }
};

