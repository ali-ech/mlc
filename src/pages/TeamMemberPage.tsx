import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { InquiryForm } from "../components/InquiryForm";
import { teamMembers } from "../data/content";

interface TeamMemberPageProps {
  id: string;
}

export function TeamMemberPage({ id }: TeamMemberPageProps) {
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="page-enter">
        <Header />
        <main className="detail-page">
          <div className="container-grid detail-page__inner">
            <h1 className="display-lg">Team Member Not Found</h1>
            <Link to="/team" className="btn btn-outline mt-8">
              <ArrowLeft className="h-4 w-4" /> Back to Team
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const others = teamMembers.filter((m) => m.id !== id).slice(0, 3);

  return (
    <div className="page-enter">
      <Header />
      <main className="detail-page">
        <div className="detail-page__hero detail-page__hero--team">
          <div className="container-grid">
            <Link to="/team" className="detail-page__back">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Our Team
            </Link>
            <div className="detail-page__team-hero">
              <div className="detail-page__team-photo">
                <img
                  src={member.image}
                  alt={member.name}
                  className="img-premium"
                  style={
                    "imagePosition" in member && member.imagePosition
                      ? { objectPosition: member.imagePosition }
                      : undefined
                  }
                />
              </div>
              <div>
                <h1 className="display-lg">{member.name}</h1>
                <p className="mt-3 font-serif text-lg italic text-[var(--color-gold-light)]">
                  {member.title}
                </p>
                <p className="mt-1.5 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-white/55">
                  {member.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-grid detail-page__body">
          <div className="detail-page__grid">
            <div className="detail-page__main">
              <h2 className="detail-page__heading">Biography</h2>
              <p className="mt-4 text-[1.0625rem] leading-[1.85] text-[var(--color-grey)]">
                {member.fullBio}
              </p>

              <h2 className="detail-page__heading mt-12">Areas of Expertise</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {member.expertise.map((item) => (
                  <span key={item} className="credential-tag">
                    {item}
                  </span>
                ))}
              </div>

              <div className="detail-page__related mt-16">
                <h3 className="eyebrow mb-6">Other Team Members</h3>
                <div className="detail-page__related-grid">
                  {others.map((other) => (
                    <Link key={other.id} to={`/team/${other.id}`} className="detail-page__related-card">
                      <img src={other.image} alt="" className="detail-page__related-avatar" />
                      <div>
                        <span className="block font-medium text-[var(--color-ink)]">{other.name}</span>
                        <span className="text-[0.75rem] text-[var(--color-grey-light)]">{other.title}</span>
                      </div>
                      <ArrowRight className="ml-auto h-3.5 w-3.5 opacity-40" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <aside className="detail-page__sidebar">
              <div className="detail-page__form-card">
                <InquiryForm
                  idPrefix={`team-${member.id}`}
                  title="Contact Us"
                  subtitle="Schedule a confidential consultation"
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
