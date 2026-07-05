import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { teamMembers } from "../data/content";

export function Team({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="team"
      className={`relative overflow-hidden bg-[var(--color-bg)] py-[var(--section-py)] ${
        standalone ? "" : "border-t border-[var(--color-border)]"
      }`}
      aria-labelledby={standalone ? undefined : "team-heading"}
    >
      <div className="section-watermark section-watermark--left" aria-hidden="true">
        03
      </div>

      <div className="container-grid relative">
        {!standalone && (
          <ScrollReveal>
            <SectionLabel index="03" label="Our Team" />
            <div className="section-header section-header--wide">
              <h2 id="team-heading" className="display-lg">
                The People Behind the Practice
              </h2>
              <p className="lead">
                A focused team of regulatory specialists — combining prosecution experience,
                DRAP expertise, and dedicated advocacy for Pakistan&apos;s regulated industries.
              </p>
            </div>
          </ScrollReveal>
        )}

        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 ${standalone ? "" : "mt-16"}`}>
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 0.08}>
              <Link to={`/team/${member.id}`} className="team-card team-card--link group">
                <div className="team-card__accent" aria-hidden="true" />
                <div className="team-card__image-wrap">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.title}`}
                    className="team-card__image img-premium"
                    style={
                      "imagePosition" in member && member.imagePosition
                        ? { objectPosition: member.imagePosition }
                        : undefined
                    }
                  />
                </div>

                <div className="team-card__body">
                  <h3 className="font-serif text-[clamp(1.25rem,2vw,1.375rem)] font-medium text-[var(--color-ink)]">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-[0.8125rem] font-medium tracking-[0.04em] text-[var(--color-gold)]">
                    {member.title}
                  </p>
                  <p className="mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-[var(--color-grey-light)]">
                    {member.subtitle}
                  </p>

                  <span className="team-card__toggle">
                    Read More
                    <ArrowRight
                      className="h-3 w-3 stroke-[1.5] transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center" delay={0.2}>
          <Link to="/contact" className="btn btn-gold">
            Speak with Our Team
            <ArrowRight className="btn__arrow h-3.5 w-3.5 stroke-[1.5]" aria-hidden="true" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
