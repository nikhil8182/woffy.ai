export async function chatWithWoffy(message, chatHistory = []) {
  const history = [];
  let characters = 0;
  for (const item of chatHistory.slice(-12).reverse()) {
    if (
      !["user", "model", "assistant"].includes(item.role) ||
      typeof item.text !== "string"
    )
      continue;
    const text = item.text.slice(0, 2000);
    if (!text.trim() || characters + text.length > 8000) break;
    characters += text.length;
    history.unshift({ role: item.role, text });
  }
  let response;
  try {
    response = await fetch("/api/chatWithWoffy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(12000),
      body: JSON.stringify({ message, history }),
    });
  } catch {
    throw new Error(
      "Unable to reach Woffy. Check your connection and try again.",
    );
  }
  const data = await response.json().catch(() => null);
  if (!response.ok)
    throw new Error(
      data?.error ||
        "Woffy is unavailable right now. Please try again shortly.",
    );
  if (
    typeof data?.response !== "string" ||
    !["ai", "project-faq"].includes(data.mode)
  )
    throw new Error("Woffy could not load a reply. Please try again shortly.");
  return data;
}
