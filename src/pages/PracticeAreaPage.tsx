import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Droplets,
  Leaf,
  Pill,
  Scale,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { InquiryForm } from "../components/InquiryForm";
import { practiceAreas } from "../data/content";

const iconMap: Record<string, LucideIcon> = {
  Pill,
  Leaf,
  Sprout,
  Droplets,
  Scale,
};

interface PracticeAreaPageProps {
  id: string;
}

export function PracticeAreaPage({ id }: PracticeAreaPageProps) {
  const area = practiceAreas.find((a) => a.id === id);

  if (!area) {
    return (
      <div className="page-enter">
        <Header />
        <main className="detail-page">
          <div className="container-grid detail-page__inner">
            <h1 className="display-lg">Practice Area Not Found</h1>
            <Link to="/practice-areas" className="btn btn-outline mt-8">
              <ArrowLeft className="h-4 w-4" /> Back to Practice Areas
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = iconMap[area.icon];
  const others = practiceAreas.filter((a) => a.id !== id).slice(0, 3);

  return (
    <div className="page-enter">
      <Header />
      <main className="detail-page">
        <div className="detail-page__hero">
          <div className="container-grid">
            <Link to="/practice-areas" className="detail-page__back">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All Practice Areas
            </Link>
            <div className="detail-page__hero-content">
              <span className="detail-page__icon-badge">
                <Icon aria-hidden="true" />
              </span>
              <h1 className="display-lg">{area.title}</h1>
              <p className="detail-page__hero-sub">{area.summary}</p>
            </div>
          </div>
        </div>

        <div className="container-grid detail-page__body">
          <div className="detail-page__grid">
            <div className="detail-page__main">
              <h2 className="detail-page__heading">Overview</h2>
              <p className="mt-4 text-[1.0625rem] leading-[1.85] text-[var(--color-grey)]">
                {area.overview}
              </p>

              <h2 className="detail-page__heading mt-12">Services and Capabilities</h2>
              <ul className="detail-page__list mt-6">
                {area.details.map((detail) => (
                  <li key={detail}>
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-gold)]" aria-hidden="true" />
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="detail-page__related mt-16">
                <h3 className="eyebrow mb-6">Related Practice Areas</h3>
                <div className="detail-page__related-grid">
                  {others.map((rel) => {
                    const RelIcon = iconMap[rel.icon];
                    return (
                      <Link key={rel.id} to={`/practice/${rel.id}`} className="detail-page__related-card">
                        <RelIcon className="h-4 w-4 text-[var(--color-gold)]" aria-hidden="true" />
                        <span>{rel.title}</span>
                        <ArrowRight className="ml-auto h-3.5 w-3.5 opacity-40" aria-hidden="true" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <aside className="detail-page__sidebar">
              <div className="detail-page__form-card">
                <InquiryForm
                  idPrefix={`practice-${area.id}`}
                  title="Contact Us"
                  subtitle="Reach out to our team about your matter"
                  compact
                />
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
