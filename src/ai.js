// Use Netlify function (works for dev and production)
const FUNCTION_URL =
  import.meta.env.VITE_WOFFY_FUNCTION_URL ||
  (import.meta.env.DEV
    ? "http://localhost:8888/.netlify/functions/chatWithWoffy"
    : "/.netlify/functions/chatWithWoffy");

// Chat with Woffy via HTTP Function (public)
export const chatWithWoffy = async (message, chatHistory = []) => {
  try {
    const res = await fetch(FUNCTION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message,
        history: chatHistory.map((m) => ({ role: m.role, text: m.text })),
      }),
    });

    if (!res.ok) {
      console.error("Woffy API error status:", res.status);
      return "I had a little hiccup. Try again?";
    }

    const data = await res.json();
    return data.response || "I had a little hiccup. Try again?";
  } catch (error) {
    console.error("Woffy AI error:", error);
    return "Something went wrong. Can you try again?";
  }
};
