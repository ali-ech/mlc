import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import { formSubjects } from "../data/content";

interface InquiryFormProps {
  compact?: boolean;
  idPrefix?: string;
  title?: string;
  subtitle?: string;
}

export function InquiryForm({
  compact = false,
  idPrefix = "inq",
  title = "Send a Message",
  subtitle = "All fields marked * are required",
}: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`inquiry-form__success ${compact ? "inquiry-form__success--compact" : ""}`}>
        <div className="inquiry-form__success-icon" aria-hidden="true">
          <Send className="h-5 w-5 stroke-[1.5]" />
        </div>
        <p className="font-serif text-xl font-medium text-[var(--color-ink)]">Message Received</p>
        <p className="mt-2 text-[0.875rem] text-[var(--color-grey)]">
          We will respond within one business day.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className="btn btn-outline mt-6">
          Send Another
        </button>
      </div>
    );
  }

  return (
    <div className={`inquiry-form ${compact ? "inquiry-form--compact" : ""}`}>
      <div className="inquiry-form__header">
        <h3 className="font-serif text-lg font-medium text-[var(--color-ink)]">{title}</h3>
        {subtitle && (
          <p className="mt-1 text-[0.75rem] text-[var(--color-grey-light)]">{subtitle}</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="inquiry-form__fields" noValidate>
        <div className={`inquiry-form__row ${compact ? "inquiry-form__row--stack" : ""}`}>
          <div className={`inquiry-form__field ${focused === "name" ? "inquiry-form__field--focused" : ""}`}>
            <label htmlFor={`${idPrefix}-name`}>Full Name *</label>
            <input
              id={`${idPrefix}-name`}
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
            />
          </div>
          <div className={`inquiry-form__field ${focused === "email" ? "inquiry-form__field--focused" : ""}`}>
            <label htmlFor={`${idPrefix}-email`}>Email *</label>
            <input
              id={`${idPrefix}-email`}
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
            />
          </div>
        </div>

        {!compact && (
          <div className="inquiry-form__row">
            <div className={`inquiry-form__field ${focused === "phone" ? "inquiry-form__field--focused" : ""}`}>
              <label htmlFor={`${idPrefix}-phone`}>Phone</label>
              <input
                id={`${idPrefix}-phone`}
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+92 300 0000000"
                onFocus={() => setFocused("phone")}
                onBlur={() => setFocused(null)}
              />
            </div>
            <div className={`inquiry-form__field ${focused === "subject" ? "inquiry-form__field--focused" : ""}`}>
              <label htmlFor={`${idPrefix}-subject`}>Practice Area *</label>
              <select
                id={`${idPrefix}-subject`}
                name="subject"
                required
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
              >
                <option value="">Select area</option>
                {formSubjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div className={`inquiry-form__field ${focused === "message" ? "inquiry-form__field--focused" : ""}`}>
          <label htmlFor={`${idPrefix}-message`}>Message *</label>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            required
            rows={compact ? 3 : 4}
            placeholder="Describe your inquiry..."
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
          />
        </div>

        <button type="submit" className="btn btn-gold inquiry-form__submit">
          {compact ? "Send Inquiry" : "Send Message"}
          <ArrowRight className="btn__arrow h-3.5 w-3.5 stroke-[1.5]" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}
