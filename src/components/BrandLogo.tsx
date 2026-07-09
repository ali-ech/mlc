interface BrandLogoProps {
  /** light = white logo (transparent bg), dark = charcoal logo from business card */
  variant?: "light" | "dark";
  size?: "header" | "footer";
}

export function BrandLogo({ variant = "dark", size = "header" }: BrandLogoProps) {
  const height = size === "footer" ? "3.25rem" : "3rem";

  return (
    <span
      className={`brand-logo brand-logo--${variant} brand-logo--${size}`}
      role="img"
      aria-label="Muntaha Law Consultants"
    >
      <img
        src="/brand/logo-dark.png?v=9"
        alt=""
        className="brand-logo__img"
        width={537}
        height={165}
        decoding="async"
        aria-hidden="true"
        style={{ height, width: "auto", maxWidth: "none" }}
      />
    </span>
  );
}
