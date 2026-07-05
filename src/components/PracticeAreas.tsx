import { Link } from "react-router-dom";
import {
  ArrowRight,
  Droplets,
  Leaf,
  Pill,
  Scale,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { practiceAreas } from "../data/content";

const iconMap: Record<string, LucideIcon> = {
  Pill,
  Leaf,
  Sprout,
  Droplets,
  Scale,
};

export function PracticeAreas({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="practice-areas"
      className="relative py-[var(--section-py)]"
      aria-labelledby={standalone ? undefined : "practice-heading"}
    >
      <div className="section-watermark section-watermark--left" aria-hidden="true">
        02
      </div>

      <div className="container-grid relative">
        {!standalone && (
          <ScrollReveal>
            <SectionLabel index="02" label="Practice Areas" />
            <div className="section-header section-header--wide">
              <h2 id="practice-heading" className="display-lg">
                Focused Counsel Across Regulated Sectors
              </h2>
              <p className="lead">
                Specialized legal services tailored to the unique regulatory landscapes of
                Pakistan&apos;s pharmaceutical and allied health industries.
              </p>
            </div>
          </ScrollReveal>
        )}

        <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${standalone ? "" : "mt-16"}`}>
          {practiceAreas.map((area, index) => {
            const Icon = iconMap[area.icon];
            const number = String(index + 1).padStart(2, "0");

            return (
              <ScrollReveal key={area.id} delay={index * 0.07}>
                <Link
                  to={`/practice/${area.id}`}
                  id={area.id === "drap" ? "drap" : undefined}
                  className="practice-card practice-card--link group"
                >
                  <div className="mb-8 flex items-start justify-between">
                    <span className="practice-card__number" aria-hidden="true">
                      {number}
                    </span>
                    <Icon
                      className="mt-2 h-5 w-5 stroke-[1.25] text-[var(--color-grey-light)] transition-colors duration-500 group-hover:text-[var(--color-gold)]"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] font-medium leading-snug text-[var(--color-ink)]">
                    {area.title}
                  </h3>

                  <p className="mt-4 flex-1 text-[0.9375rem] leading-[1.75] text-[var(--color-grey)]">
                    {area.summary}
                  </p>

                  <span className="practice-card__link mt-8 flex items-center gap-2 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-[var(--color-grey-light)] transition-colors group-hover:text-[var(--color-gold)]">
                    View Details
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
