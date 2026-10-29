import type { MockupRequest } from "@/lib/mockup-request";

/**
 * Sends the mockup form to `/api/mockup`, which emails the lead via Resend.
 * Throws on any failure so the form shows its error state, never a false success.
 */
export async function submitMockupRequest(data: MockupRequest & { company?: string }): Promise<void> {
  const res = await fetch("/api/mockup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Mockup request failed with status ${res.status}`);
  }
}
