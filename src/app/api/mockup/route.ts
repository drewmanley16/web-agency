import { Resend } from "resend";
import { siteConfig } from "@/config/site";
import { parseMockupRequest, validateMockupRequest } from "@/lib/mockup-request";

/**
 * Receives the mockup form and emails the lead to `siteConfig.leadInbox`.
 * Needs RESEND_API_KEY (set in Vercel, and in .env.local for local testing).
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  // Honeypot: real visitors never see or fill this field.
  if (body && typeof body === "object" && "company" in body && body.company) {
    return Response.json({ ok: true });
  }

  const data = parseMockupRequest(body);
  if (!data) return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });

  const errors = validateMockupRequest(data);
  if (Object.keys(errors).length > 0) return Response.json({ ok: false, errors }, { status: 422 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[mockup] RESEND_API_KEY is not set; lead was not sent.");
    return Response.json({ ok: false, error: "Email is not configured." }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: siteConfig.emailFrom,
    to: siteConfig.leadInbox,
    replyTo: data.email,
    subject: `Mockup request: ${data.name} (${data.businessType})`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Business type: ${data.businessType}`,
      `Website: ${data.website || "None"}`,
      "",
      "What they need:",
      data.need,
      "",
      "Reply to this email to answer them directly.",
    ].join("\n"),
  });

  if (error) {
    console.error("[mockup] Resend error:", error);
    return Response.json({ ok: false, error: "Could not send." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
