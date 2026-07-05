import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
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
  const isHome = location.pathname === "/";
  const hasDarkHero =
    isHome ||
    location.pathname.startsWith("/practice/") ||
    location.pathname.startsWith("/team/") ||
    ["/about", "/practice-areas", "/team", "/contact"].includes(location.pathname);
  const solid = !hasDarkHero || isScrolled || menuOpen;

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-50 ${
        solid ? "site-header--solid" : "site-header--transparent"
      }`}
    >
      <div className="container-grid grid h-full grid-cols-[1fr_auto_1fr] items-center gap-4">
        <Link to="/" className="group flex items-center gap-3 no-underline" onClick={closeMenu}>
          <span className="site-header__mark font-serif" aria-hidden="true">
            {firmInfo.shortName}
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="site-header__name font-sans text-[0.6rem] font-semibold uppercase tracking-[0.22em]">
              {firmInfo.name}
            </span>
            <span className="site-header__est mt-0.5 font-sans text-[0.5625rem] font-normal tracking-[0.14em] uppercase">
              Est. {firmInfo.founded}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 xl:gap-10 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? "nav-link--active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4">
          <Link
            to="/contact"
            className="btn btn-gold hidden !py-3 !px-5 !text-[0.625rem] md:inline-flex"
            onClick={closeMenu}
          >
            Book a Consultation
            <ArrowRight className="btn__arrow h-3.5 w-3.5 stroke-[1.5]" aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="site-header__menu-btn flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="h-5 w-5 stroke-[1.25]" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5 stroke-[1.25]" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            className="fixed inset-0 top-[var(--header-height)] z-40 bg-[var(--color-bg)] lg:hidden"
            aria-label="Mobile navigation"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="container-grid flex h-full flex-col justify-center gap-0 py-12">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.to}
                    className="group flex items-center justify-between border-b border-[var(--color-border)] py-6"
                    onClick={closeMenu}
                  >
                    <span className="font-serif text-2xl font-medium text-[var(--color-ink)]">
                      {link.label}
                    </span>
                    <ArrowRight
                      className="h-4 w-4 stroke-[1.25] text-[var(--color-grey-faint)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-ink)]"
                      aria-hidden="true"
                    />
                  </Link>
                </motion.li>
              ))}
              <motion.li
                className="mt-10"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.45 }}
              >
                <Link to="/contact" className="btn btn-gold w-full" onClick={closeMenu}>
                  Book a Consultation
                  <ArrowRight className="btn__arrow h-3.5 w-3.5 stroke-[1.5]" aria-hidden="true" />
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
