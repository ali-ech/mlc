import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Globe,
  Link as LinkIcon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { firmInfo, navLinks, practiceAreas } from "../data/content";
import { BrandLogo } from "./BrandLogo";

const whatsappHref = `https://wa.me/${firmInfo.whatsapp.replace(/\D/g, "")}`;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__main">
        <div className="container-grid">
          <div className="site-footer__grid">
            <div className="site-footer__brand">
              <Link to="/" className="site-footer__logo group">
                <BrandLogo variant="footer" />
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
                      <ArrowUpRight className="site-footer__link-icon" aria-hidden="true" />
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
                    {firmInfo.address.city}, {firmInfo.address.country}
                  </span>
                </li>
                <li>
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <a href={`tel:${firmInfo.phone.replace(/\s/g, "")}`}>{firmInfo.phone}</a>
                </li>
                <li>
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    WhatsApp {firmInfo.whatsapp}
                  </a>
                </li>
                <li>
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    <a href={`mailto:${firmInfo.email}`}>{firmInfo.email}</a>
                    <br />
                    <a href={`mailto:${firmInfo.founderEmail}`}>{firmInfo.founderEmail}</a>
                  </span>
                </li>
                <li>
                  <Globe className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <a href={firmInfo.website} target="_blank" rel="noopener noreferrer">
                    {firmInfo.websiteDisplay}
                  </a>
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
                aria-label={`${firmInfo.linkedinName} on LinkedIn`}
              >
                <LinkIcon className="h-4 w-4 stroke-[1.25]" aria-hidden="true" />
                {firmInfo.linkedinName}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer__bar">
        <div className="container-grid site-footer__bar-inner">
          <p>&copy; {currentYear} {firmInfo.name}. All rights reserved.</p>
          <p>
            {firmInfo.founder}, {firmInfo.founderTitle} · {firmInfo.address.city}, Pakistan
          </p>
          <p className="site-footer__disclaimer">
            The information on this site is for general guidance only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
