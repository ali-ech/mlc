import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Clock, Link as LinkIcon, Mail, MapPin, Phone } from "lucide-react";
import { firmInfo, navLinks, practiceAreas } from "../data/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__main">
        <div className="container-grid">
          <div className="site-footer__grid">
            <div className="site-footer__brand">
              <Link to="/" className="site-footer__logo group">
                <span className="site-header__mark site-header__mark--footer font-serif" aria-hidden="true">
                  {firmInfo.shortName}
                </span>
                <span className="flex flex-col">
                  <span className="site-footer__logo-name">{firmInfo.name}</span>
                  <span className="site-footer__logo-est">Est. {firmInfo.founded}</span>
                </span>
              </Link>
              <p className="site-footer__tagline">
                Focused legal counsel for Pakistan&apos;s pharmaceutical, nutraceutical, herbal, and
                homeopathic industries since {firmInfo.founded}.
              </p>
              <Link to="/contact" className="btn btn-gold site-footer__cta">
                Book a Consultation
                <ArrowRight className="btn__arrow h-3.5 w-3.5 stroke-[1.5]" aria-hidden="true" />
              </Link>
            </div>

            <nav className="site-footer__col" aria-label="Footer navigation">
              <p className="site-footer__col-title">Navigation</p>
              <ul className="site-footer__links">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="site-footer__link group">
                      {link.label}
                      <ArrowUpRight
                        className="site-footer__link-icon"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="site-footer__col" aria-label="Practice areas">
              <p className="site-footer__col-title">Practice Areas</p>
              <ul className="site-footer__links">
                {practiceAreas.map((area) => (
                  <li key={area.id}>
                    <Link to={`/practice/${area.id}`} className="site-footer__link group">
                      {area.title}
                      <ArrowUpRight className="site-footer__link-icon" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="site-footer__col">
              <p className="site-footer__col-title">Contact</p>
              <ul className="site-footer__contact">
                <li>
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    {firmInfo.address.line1}
                    <br />
                    {firmInfo.address.line2}
                    <br />
                    {firmInfo.address.country}
                  </span>
                </li>
                <li>
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <a href={`tel:${firmInfo.phone.replace(/\s/g, "")}`}>{firmInfo.phone}</a>
                </li>
                <li>
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <a href={`mailto:${firmInfo.email}`}>{firmInfo.email}</a>
                </li>
                <li>
                  <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{firmInfo.hours}</span>
                </li>
              </ul>
              <a
                href={firmInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social"
                aria-label="Muntaha Law Consultants on LinkedIn"
              >
                <LinkIcon className="h-4 w-4 stroke-[1.25]" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer__bar">
        <div className="container-grid site-footer__bar-inner">
          <p>&copy; {currentYear} {firmInfo.name}. All rights reserved.</p>
          <p>{firmInfo.founder}, Advocate · Karachi, Pakistan</p>
          <p className="site-footer__disclaimer">
            The information on this site is for general guidance only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
