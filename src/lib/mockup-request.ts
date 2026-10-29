/** Shape and validation for the mockup form. Shared by the form and the API route. */

export type MockupRequest = {
  name: string;
  email: string;
  businessType: string;
  website: string;
  need: string;
};

export type MockupErrors = Partial<Record<keyof MockupRequest, string>>;

const LIMITS: Record<keyof MockupRequest, number> = {
  name: 120,
  email: 200,
  businessType: 60,
  website: 300,
  need: 4000,
};

export function validateMockupRequest(values: MockupRequest): MockupErrors {
  const errors: MockupErrors = {};
  if (!values.name.trim()) errors.name = "Tell us your name.";
  if (!values.email.trim()) errors.email = "We need an email to send your mockup to.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "That email doesn't look right.";
  if (!values.businessType) errors.businessType = "Pick the closest match.";
  if (values.website.trim() && !/^(https?:\/\/)?[^\s.]+\.[^\s]{2,}$/i.test(values.website.trim())) {
    errors.website = "Enter a web address like yourbusiness.com, or leave it blank.";
  }
  if (values.need.trim().length < 10) errors.need = "A sentence or two is plenty.";

  for (const field of Object.keys(LIMITS) as (keyof MockupRequest)[]) {
    if (!errors[field] && values[field].length > LIMITS[field]) errors[field] = "That's a bit long. Trim it down?";
  }
  return errors;
}

/** Coerces untrusted JSON into a trimmed MockupRequest, or null if it's the wrong shape. */
export function parseMockupRequest(input: unknown): MockupRequest | null {
  if (!input || typeof input !== "object") return null;
  const obj = input as Record<string, unknown>;
  const fields = ["name", "email", "businessType", "website", "need"] as const;
  if (!fields.every((f) => typeof obj[f] === "string")) return null;
  return Object.fromEntries(fields.map((f) => [f, (obj[f] as string).trim()])) as MockupRequest;
}
