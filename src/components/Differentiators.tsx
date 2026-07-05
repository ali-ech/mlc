import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { differentiators } from "../data/content";

export function Differentiators() {
  return (
    <section
      className="border-y border-[var(--color-border)] bg-gradient-to-b from-[var(--color-bg-alt)] to-[var(--color-bg)] py-[var(--section-py)]"
      aria-label="Why Muntaha Law Consultants"
    >
      <div className="container-grid">
        <ScrollReveal>
          <SectionLabel index="04" label="Why Muntaha Law Consultants" align="center" />
          <div className="section-header section-header--center">
            <h2 className="display-lg">A Practice Built on Depth, Not Breadth</h2>
            <p className="lead">
              Measured expertise, institutional knowledge, and a record of advocacy before
              Pakistan&apos;s most consequential regulatory bodies.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 0.1}>
              <div className="stat-block">
                <span className="stat-block__value">{item.value}</span>
                <span className="stat-block__divider" aria-hidden="true" />
                <p className="stat-block__label">{item.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
