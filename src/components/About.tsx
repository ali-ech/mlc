import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { firmInfo, images } from "../data/content";

const credentials = [
  "Former Drug Court Prosecutor",
  "DRAP Registration Board",
  "Provincial Quality Control",
  "High Court Appellate Practice",
] as const;

export function About({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--color-bg-alt)] py-[var(--section-py)]"
      aria-labelledby={standalone ? undefined : "about-heading"}
    >
      <div className="section-watermark section-watermark--right" aria-hidden="true">
        01
      </div>

      <div className="container-grid relative">
        {!standalone && (
          <ScrollReveal>
            <SectionLabel index="01" label="About the Firm" />
            <div className="section-header section-header--wide">
              <h2 id="about-heading" className="display-lg">
                Two Decades of Regulatory Expertise
              </h2>
              <p className="lead">
                A singular focus on pharmaceutical and allied health law — built on prosecution
                experience, private practice depth, and an unwavering commitment to client advocacy.
              </p>
            </div>
          </ScrollReveal>
        )}

        <div className={`grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-20 xl:gap-28 ${standalone ? "" : "mt-20"}`}>
          <ScrollReveal className="lg:col-span-5" delay={0.1}>
            <div className="relative">
              <div className="portrait-frame">
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-[var(--color-border)]">
                  <img
                    src={images.founderPortrait}
                    alt={`${firmInfo.founder}, ${firmInfo.founderTitle} at ${firmInfo.name}`}
                    className="h-full w-full object-cover object-top img-premium transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <div className="portrait-frame__accent" aria-hidden="true" />
              </div>

              <div className="mt-10 border-t border-[var(--color-border)] pt-8">
                <p className="font-serif text-[clamp(1.375rem,2vw,1.625rem)] font-medium text-[var(--color-ink)]">
                  {firmInfo.founder}
                </p>
                <p className="mt-2 text-[0.8125rem] tracking-[0.06em] text-[var(--color-gold)] uppercase">
                  {firmInfo.founderTitle}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {credentials.map((item) => (
                    <span key={item} className="credential-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" delay={0.15}>
            <div className="space-y-7 text-[1.0625rem] leading-[1.85] text-[var(--color-grey)]">
              <p>
                With over two decades of experience, {firmInfo.founder} established{" "}
                {firmInfo.name} in {firmInfo.founded} and has since built one of Pakistan&apos;s
                most focused legal practices in pharmaceutical and regulatory law.
              </p>
              <p>
                His career began as a Prosecutor in the Drug Court, providing firsthand insight
                into regulatory enforcement mechanisms and compliance standards within the
                pharmaceutical sector — knowledge that continues to inform every matter the firm
                handles.
              </p>
              <p>
                Transitioning into private practice, Mr. Shah now dedicates his practice to
                defending and advising clients across the pharmaceutical, nutraceutical, herbal,
                and homeopathic industries. The firm represents clients before the Drug Court,
                Provincial Quality Control Boards, and DRAP throughout Pakistan.
              </p>
            </div>

            <blockquote className="pull-quote mt-14">
              <span className="pull-quote__mark" aria-hidden="true">
                &ldquo;
              </span>
              <p className="relative font-serif text-[clamp(1.375rem,2.5vw,1.75rem)] italic leading-[1.45] text-[var(--color-ink-muted)]">
                Having served on both sides of the courtroom — prosecution and defense — allows
                us to anticipate regulatory challenges before they arise and craft stronger,
                more strategic defenses for our clients.
              </p>
              <footer className="mt-8 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[var(--color-grey-light)]">
                — {firmInfo.founder}, {firmInfo.founderTitle}
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-24" delay={0.2}>
          <div className="about-banner">
            <img
              src={images.about}
              alt="Classical courthouse columns symbolizing justice and institutional authority"
              className="about-banner__img img-premium"
            />
            <div className="about-banner__overlay" aria-hidden="true" />
            <p className="about-banner__caption">
              Institutional Authority · Regulatory Precision · Client Advocacy
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
