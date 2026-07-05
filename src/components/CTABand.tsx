import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { images } from "../data/content";

export function CTABand() {
  return (
    <section
      className="cta-band py-[var(--section-py)]"
      aria-label="Call to action"
      style={{ "--cta-bg-image": `url(${images.cta})` } as CSSProperties}
    >
      <span className="cta-band__accent" aria-hidden="true">
        MLC
      </span>

      <div className="container-grid relative">
        <ScrollReveal>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionLabel index="05" label="Get in Touch" light />
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.02em] text-white">
                Facing a Regulatory or Compliance Challenge?
              </h2>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-16">
              <p className="text-[1.0625rem] leading-[1.75] text-white/55">
                Our team is ready to assess your matter and provide clear, strategic guidance
                tailored to Pakistan&apos;s regulatory framework.
              </p>
              <Link to="/contact" className="btn btn-gold mt-10">
                Speak with Our Team
                <ArrowRight className="btn__arrow h-3.5 w-3.5 stroke-[1.5]" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
