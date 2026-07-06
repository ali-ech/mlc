interface BrandLogoProps {
  /** light = white text (transparent bg), dark = charcoal text (transparent bg) */
  variant?: "light" | "dark";
}

export function BrandLogo({ variant = "dark" }: BrandLogoProps) {
  return (
    <span
      className={`brand-logo brand-logo--${variant}`}
      role="img"
      aria-label="Muntaha Law Consultants"
    >
      <span className="brand-logo__script" aria-hidden="true">
        Muntaha
      </span>
      <span className="brand-logo__caps" aria-hidden="true">
        LAW CONSULTANTS
      </span>
    </span>
  );
}
