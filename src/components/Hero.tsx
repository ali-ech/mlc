import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Scale, Shield, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { firmInfo, images } from "../data/content";

const heroStats = [
  { value: String(firmInfo.founded), label: "Established", icon: Building2 },
  { value: "20+", label: "Years of Practice", icon: Shield },
  { value: "Nationwide", label: "DRAP Representation", icon: Scale },
] as const;

const floatingTags = ["DRAP", "Drug Courts", "GMP Compliance", "Licensing"] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="hero-v2" aria-label="Hero">
      {/* Background image — full bleed with diagonal mask */}
      <div className="hero-v2__bg" aria-hidden="true">
        <img src={images.hero} alt="" className="hero-v2__bg-img img-premium" />
        <div className="hero-v2__bg-gradient" />
      </div>

      {/* Decorative orbs */}
      <div className="hero-v2__orb hero-v2__orb--1" aria-hidden="true" />
      <div className="hero-v2__orb hero-v2__orb--2" aria-hidden="true" />

      {/* Vertical accent text */}
      <div className="hero-v2__vertical-text" aria-hidden="true">
        Regulatory Law · Since {firmInfo.founded}
      </div>

      <div className="hero-v2__inner container-grid">
        <div className="hero-v2__content">
          <motion.div
            className="hero-v2__eyebrow-wrap"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="hero-v2__eyebrow-line" />
            <p className="eyebrow">Pharmaceutical and Corporate Law</p>
          </motion.div>

          <motion.h1
            className="hero-v2__headline"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Trusted Legal Counsel for{" "}
            <span className="hero-v2__headline-accent">Pakistan&apos;s</span>
            <br />
            Regulated Industries
          </motion.h1>

          <motion.p
            className="hero-v2__sub"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Dedicated representation before DRAP, Drug Courts, and Provincial Quality Control
            Boards — for pharmaceutical, nutraceutical, herbal, and homeopathic enterprises.
          </motion.p>

          <motion.div
            className="hero-v2__actions"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Link to="/contact" className="btn btn-gold">
              Schedule a Consultation
              <ArrowRight className="btn__arrow h-3.5 w-3.5 stroke-[1.5]" aria-hidden="true" />
            </Link>
            <Link to="/practice-areas" className="btn btn-ghost-dark">
              Explore Practice Areas
            </Link>
          </motion.div>

          <motion.div
            className="hero-v2__tags"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {floatingTags.map((tag) => (
              <span key={tag} className="hero-v2__tag">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Floating stat cards */}
        <motion.div
          className="hero-v2__stats"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {heroStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="hero-v2__stat"
                whileHover={prefersReducedMotion ? undefined : { y: -6, transition: { duration: 0.3 } }}
              >
                <Icon className="hero-v2__stat-icon" aria-hidden="true" />
                <span className="hero-v2__stat-value">{stat.value}</span>
                <span className="hero-v2__stat-label">{stat.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
