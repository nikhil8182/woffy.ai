export async function joinWaitlist({
  email,
  name = "",
  interest = "",
  website = "",
  consent,
}) {
  let response;
  try {
    response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({ email, name, interest, website, consent }),
    });
  } catch {
    throw new Error(
      "We could not confirm your signup. Check your connection and try again; a retry will not add you twice.",
    );
  }
  const data = await response.json().catch(() => null);
  if (!response.ok || data?.ok !== true)
    throw new Error(
      data?.error || "We could not save your signup. Please try again shortly.",
    );
  return data;
}
