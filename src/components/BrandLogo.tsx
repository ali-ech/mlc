interface BrandLogoProps {
  variant?: "header-light" | "header-dark" | "footer";
}

export function BrandLogo({ variant = "header-dark" }: BrandLogoProps) {
  const src =
    variant === "header-light" || variant === "footer"
      ? "/brand/logo-light.png"
      : "/brand/logo-dark.png";

  return (
    <span className={`brand-logo brand-logo--${variant}`}>
      <img
        src={src}
        alt="Muntaha Law Consultants"
        className="brand-logo__img"
        width={220}
        height={64}
        decoding="async"
      />
    </span>
  );
}
