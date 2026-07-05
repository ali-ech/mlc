import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { ClientLogo } from "./ClientLogo";
import { clients } from "../data/content";

const trustStats = [
  { value: "150+", label: "Matters Handled" },
  { value: "8", label: "Industry Sectors" },
  { value: "100%", label: "Confidential" },
] as const;

export function TrustedClients() {
  const marqueeItems = [...clients, ...clients];

  return (
    <section id="clients" className="clients-v3" aria-labelledby="clients-heading">
      <div className="container-grid">
        <div className="clients-v3__header">
          <ScrollReveal>
            <div className="clients-v3__intro">
              <p className="eyebrow mb-3">Our Clients</p>
              <h2 id="clients-heading" className="display-lg">
                Trusted Across Pakistan&apos;s Regulated Industries
              </h2>
              <p className="clients-v3__desc lead mt-4">
                From pharmaceutical manufacturers to homeopathic clinics — we represent clients at
                every stage of the regulatory lifecycle.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="clients-v3__stats">
              {trustStats.map((s) => (
                <div key={s.label} className="clients-v3__stat">
                  <span className="clients-v3__stat-value">{s.value}</span>
                  <span className="clients-v3__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.12}>
          <div className="clients-v3__carousel" aria-label="Client organisations">
            <div className="clients-v3__carousel-track">
              {marqueeItems.map((client, i) => (
                <div key={`${client.id}-${i}`} className="clients-v3__slide">
                  <ClientLogo abbr={client.abbr} name={client.name} color={client.color} size="md" />
                  <span className="clients-v3__slide-sector">{client.sector}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="clients-v3__mobile-grid" aria-label="Selected client organisations">
            {clients.map((client) => (
              <div key={client.id} className="clients-v3__slide clients-v3__slide--static">
                <ClientLogo abbr={client.abbr} name={client.name} color={client.color} size="sm" />
                <span className="clients-v3__slide-sector">{client.sector}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <div className="clients-v3__footer">
            <p className="clients-v3__disclaimer">
              Placeholder logos — replace with authorised client marks before launch
            </p>
            <Link to="/contact" className="clients-v3__cta btn btn-outline">
              Become a Client
              <ArrowRight className="btn__arrow h-3.5 w-3.5 stroke-[1.5]" aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
