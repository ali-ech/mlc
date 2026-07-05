import { ScrollReveal } from "./ScrollReveal";
import { InquiryForm } from "./InquiryForm";
import { firmInfo } from "../data/content";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactItems: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}[] = [
  { icon: MapPin, label: "Office", value: `${firmInfo.address.line1}, ${firmInfo.address.line2}, ${firmInfo.address.country}` },
  { icon: Phone, label: "Telephone", value: firmInfo.phone, href: `tel:${firmInfo.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: firmInfo.email, href: `mailto:${firmInfo.email}` },
  { icon: Clock, label: "Hours", value: firmInfo.hours },
];

export function Contact({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="contact" className="contact-v3" aria-labelledby={standalone ? undefined : "contact-heading"}>
      <div className="container-grid">
        {!standalone && (
          <ScrollReveal>
            <p className="eyebrow mb-4">Contact</p>
            <h2 id="contact-heading" className="display-lg">
              Begin the Conversation
            </h2>
            <p className="lead mt-4 max-w-xl">
              Confidential inquiries welcomed. Our team responds within one business day.
            </p>
          </ScrollReveal>
        )}

        <div className={`contact-v3__grid ${standalone ? "" : "mt-12"}`}>
          <ScrollReveal className="contact-v3__info" delay={0.1}>
            <div className="contact-v3__info-inner">
              <h3 className="font-serif text-xl font-medium text-white">Firm Details</h3>
              <ul className="contact-v3__list mt-8">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="contact-v3__list-item">
                      <Icon className="h-4 w-4 shrink-0 text-[var(--color-gold-light)]" aria-hidden="true" />
                      <div>
                        <p className="contact-v3__list-label">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="contact-v3__list-value contact-v3__list-value--link">
                            {item.value}
                          </a>
                        ) : (
                          <p className="contact-v3__list-value">{item.value}</p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <p className="contact-v3__direct mt-8 text-[0.8125rem] text-white/40">
                Direct line to {firmInfo.founder}:{" "}
                <a href={`mailto:${firmInfo.founderEmail}`} className="text-[var(--color-gold-light)] underline underline-offset-2">
                  {firmInfo.founderEmail}
                </a>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="contact-v3__form" delay={0.15}>
            <div className="contact-v3__form-card">
              <InquiryForm idPrefix="contact" title="Send a Message" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
