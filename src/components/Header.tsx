import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useScrollHeader } from "../hooks/useScrollHeader";
import { firmInfo, navLinks } from "../data/content";

export function Header() {
  const isScrolled = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);
  const hasDarkHero =
    location.pathname === "/" ||
    location.pathname.startsWith("/practice/") ||
    location.pathname.startsWith("/team/") ||
    ["/about", "/practice-areas", "/team", "/contact"].includes(location.pathname);
  const solid = !hasDarkHero || isScrolled || menuOpen;

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname === path;

  const mobileMenu =
    typeof document !== "undefined"
      ? createPortal(
          <AnimatePresence>
            {menuOpen && (
              <>
                <motion.button
                  type="button"
                  className="mobile-menu__backdrop"
                  aria-label="Close menu"
                  onClick={closeMenu}
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.nav
                  id="mobile-menu"
                  className="mobile-menu"
                  aria-label="Mobile navigation"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="mobile-menu__inner container-grid">
                    <p className="mobile-menu__label">Menu</p>
                    <ul className="mobile-menu__links">
                      {navLinks.map((link, i) => (
                        <motion.li
                          key={link.label}
                          initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Link
                            to={link.to}
                            className={`mobile-menu__link ${isActive(link.to) ? "mobile-menu__link--active" : ""}`}
                            onClick={closeMenu}
                          >
                            <span className="mobile-menu__link-text">{link.label}</span>
                            <ArrowRight className="mobile-menu__link-icon" aria-hidden="true" />
                          </Link>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mobile-menu__footer">
                      <Link to="/contact" className="btn btn-gold mobile-menu__cta" onClick={closeMenu}>
                        Book a Consultation
                        <ArrowRight className="btn__arrow h-3.5 w-3.5 stroke-[1.5]" aria-hidden="true" />
                      </Link>
                      <a
                        href={`tel:${firmInfo.phone.replace(/\s/g, "")}`}
                        className="mobile-menu__phone"
                        onClick={closeMenu}
                      >
                        <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {firmInfo.phone}
                      </a>
                    </div>
                  </div>
                </motion.nav>
              </>
            )}
          </AnimatePresence>,
          document.body
        )
      : null;

  return (
    <>
      <header
        className={`site-header fixed top-0 left-0 right-0 z-[100] ${
          solid ? "site-header--solid" : "site-header--transparent"
        } ${menuOpen ? "site-header--menu-open" : ""}`}
      >
        <div className="site-header__bar container-grid">
          <Link to="/" className="site-header__brand group" onClick={closeMenu}>
            <span className="site-header__mark font-serif" aria-hidden="true">
              {firmInfo.shortName}
            </span>
            <span className="site-header__brand-text">
              <span className="site-header__name">{firmInfo.name}</span>
              <span className="site-header__est">Est. {firmInfo.founded}</span>
            </span>
          </Link>

          <nav className="site-header__desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`nav-link ${isActive(link.to) ? "nav-link--active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <Link to="/contact" className="btn btn-gold site-header__cta" onClick={closeMenu}>
              Book a Consultation
              <ArrowRight className="btn__arrow h-3.5 w-3.5 stroke-[1.5]" aria-hidden="true" />
            </Link>

            <button
              type="button"
              className="site-header__menu-btn"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <X className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>
      {mobileMenu}
    </>
  );
}
