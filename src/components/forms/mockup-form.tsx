"use client";

import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { submitMockupRequest } from "@/lib/submit-mockup-request";
import { validateMockupRequest as validate, type MockupErrors, type MockupRequest } from "@/lib/mockup-request";
import { siteConfig } from "@/config/site";
import { buttonClasses } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icons";

type Field = keyof MockupRequest;
type Errors = MockupErrors;
type Status = "idle" | "submitting" | "success" | "error";

const businessTypes = [...siteConfig.audience, "Other"];

const empty: MockupRequest = { name: "", email: "", businessType: "", website: "", need: "" };

export function MockupForm() {
  const [values, setValues] = useState<MockupRequest>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitted, setSubmitted] = useState(false);
  const [company, setCompany] = useState(""); // honeypot
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const uid = useId();

  const update = (field: Field, value: string) => {
    const next = { ...values, [field]: value };
    setValues(next);
    // Re-validate live only after the first submit attempt.
    if (submitted) setErrors(validate(next));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);

    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0] as Field | undefined;
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      await submitMockupRequest({
        ...values,
        company,
        name: values.name.trim(),
        email: values.email.trim(),
        website: values.website.trim(),
        need: values.need.trim(),
      });
      setStatus("success");
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setValues(empty);
    setErrors({});
    setSubmitted(false);
    setStatus("idle");
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-card border border-white/15 p-6 outline-none md:p-10"
      >
        <span aria-hidden="true" className="block size-10 rounded-full bg-accent" />
        <p className="mt-8 font-display text-title font-bold">Got it, {values.name.trim().split(" ")[0]}.</p>
        <p className="mt-4 max-w-[44ch] leading-relaxed text-muted-inverse">
          We&apos;ll look at your business and email a homepage mockup to{" "}
          <span className="text-paper">{values.email.trim()}</span>. If we have questions first, we&apos;ll ask there.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 text-sm text-paper underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-paper"
        >
          Send another request
        </button>
      </div>
    );
  }

  const fieldId = (f: Field) => `${uid}-${f}`;
  const errorId = (f: Field) => `${uid}-${f}-error`;
  const describe = (f: Field) => (errors[f] ? errorId(f) : undefined);

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} aria-describedby={`${uid}-required`}>
      <p id={`${uid}-required`} className="sr-only">
        All fields are required except website.
      </p>

      {/* Spam trap: hidden from people, filled in by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
        </label>
      </div>

      <div className="grid gap-x-6 md:grid-cols-2">
        <FormField label="Your name" htmlFor={fieldId("name")} error={errors.name} errorId={errorId("name")}>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={describe("name")}
            className={inputClass}
          />
        </FormField>

        <FormField label="Email" htmlFor={fieldId("email")} error={errors.email} errorId={errorId("email")}>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={describe("email")}
            className={inputClass}
          />
        </FormField>

        <FormField
          label="Business type"
          htmlFor={fieldId("businessType")}
          error={errors.businessType}
          errorId={errorId("businessType")}
        >
          <div className="relative">
            <select
              id={fieldId("businessType")}
              name="businessType"
              value={values.businessType}
              onChange={(e) => update("businessType", e.target.value)}
              aria-invalid={!!errors.businessType}
              aria-describedby={describe("businessType")}
              className={`${inputBase} cursor-pointer appearance-none pr-8 ${values.businessType ? "text-paper" : "text-muted-inverse"}`}
            >
              <option value="" disabled>
                Choose one
              </option>
              {businessTypes.map((type) => (
                <option key={type} value={type} className="text-ink">
                  {type}
                </option>
              ))}
            </select>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-1 size-2 -translate-y-3/4 rotate-45 border-r border-b border-paper/60"
            />
          </div>
        </FormField>

        <FormField
          label="Current website"
          hint="Optional"
          htmlFor={fieldId("website")}
          error={errors.website}
          errorId={errorId("website")}
        >
          <input
            id={fieldId("website")}
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="yourbusiness.com"
            value={values.website}
            onChange={(e) => update("website", e.target.value)}
            aria-invalid={!!errors.website}
            aria-describedby={describe("website")}
            className={inputClass}
          />
        </FormField>
      </div>

      <FormField label="What do you need?" htmlFor={fieldId("need")} error={errors.need} errorId={errorId("need")}>
        <textarea
          id={fieldId("need")}
          name="need"
          rows={3}
          placeholder="e.g. Our site is from 2016 and people keep calling to ask our hours. We want online booking."
          value={values.need}
          onChange={(e) => update("need", e.target.value)}
          aria-invalid={!!errors.need}
          aria-describedby={describe("need")}
          className={`${inputClass} resize-y leading-relaxed`}
        />
      </FormField>

      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={buttonClasses("primary", "hover:bg-paper hover:text-ink disabled:cursor-wait disabled:opacity-70")}
        >
          {status === "submitting" ? "Sending…" : "Get my free mockup"}
          <ArrowRight className="size-3.5 transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5" />
        </button>
        <p className="text-sm text-muted-inverse">Free. No obligation. No sales call unless you want one.</p>
      </div>

      <p aria-live="polite" className="mt-4 text-sm text-accent empty:hidden">
        {status === "error" &&
          `Something went wrong sending that. Try again, or email us at ${siteConfig.email}.`}
      </p>
    </form>
  );
}

const inputBase =
  "block w-full rounded-none border-0 border-b border-white/25 bg-transparent px-0 py-3 text-[17px] placeholder:text-white/45 transition-[border-color,box-shadow] duration-200 hover:border-white/50 focus:border-accent focus:shadow-[0_1px_0_0_var(--color-accent)] focus:outline-none focus-visible:outline-none aria-[invalid=true]:border-accent";
const inputClass = `${inputBase} text-paper`;

type FormFieldProps = {
  label: string;
  hint?: string;
  htmlFor: string;
  error?: string;
  errorId: string;
  children: ReactNode;
};

function FormField({ label, hint, htmlFor, error, errorId, children }: FormFieldProps) {
  return (
    <div className="pt-7">
      <label htmlFor={htmlFor} className="eyebrow flex justify-between text-muted-inverse">
        {label}
        {hint && <span className="text-white/45 normal-case tracking-normal">{hint}</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={errorId} className="mt-2 text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  );
}
