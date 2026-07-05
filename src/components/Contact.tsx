import { ScrollReveal } from "./ScrollReveal";
import { InquiryForm } from "./InquiryForm";
import { firmInfo } from "../data/content";
import { Clock, Globe, Link as LinkIcon, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const whatsappHref = `https://wa.me/${firmInfo.whatsapp.replace(/\D/g, "")}`;

const contactItems: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}[] = [
  {
    icon: MapPin,
    label: "Office",
    value: `${firmInfo.address.line1}, ${firmInfo.address.line2}, ${firmInfo.address.city}, ${firmInfo.address.country}`,
  },
  {
    icon: Phone,
    label: "Telephone",
    value: firmInfo.phone,
    href: `tel:${firmInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: firmInfo.whatsapp,
    href: whatsappHref,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: `${firmInfo.email} · ${firmInfo.founderEmail}`,
    href: `mailto:${firmInfo.email}`,
  },
  {
    icon: Globe,
    label: "Website",
    value: firmInfo.websiteDisplay,
    href: firmInfo.website,
    external: true,
  },
  {
    icon: Clock,
    label: "Hours",
    value: firmInfo.hours,
  },
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
              Confidential inquiries welcomed. Reach us by phone, WhatsApp, or email — our team responds promptly.
            </p>
          </ScrollReveal>
        )}

        <div className={`contact-v3__grid ${standalone ? "" : "mt-12"}`}>
          <ScrollReveal className="contact-v3__info" delay={0.1}>
            <div className="contact-v3__info-inner">
              <h3 className="font-serif text-xl font-medium text-white">Firm Details</h3>
              <p className="mt-2 text-[0.875rem] text-white/50">
                {firmInfo.founder}, {firmInfo.founderTitle}
              </p>
              <ul className="contact-v3__list mt-8">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="contact-v3__list-item">
                      <Icon className="h-4 w-4 shrink-0 text-[var(--color-gold-light)]" aria-hidden="true" />
                      <div>
                        <p className="contact-v3__list-label">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="contact-v3__list-value contact-v3__list-value--link"
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                          >
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
              <div className="contact-v3__social mt-8">
                <a
                  href={firmInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.8125rem] text-[var(--color-gold-light)] transition-opacity hover:opacity-80"
                >
                  <LinkIcon className="h-4 w-4 stroke-[1.25]" aria-hidden="true" />
                  LinkedIn · {firmInfo.linkedinName}
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="contact-v3__form" delay={0.15}>
            <div className="contact-v3__form-card">
              <InquiryForm idPrefix="contact" title="Contact Us" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
