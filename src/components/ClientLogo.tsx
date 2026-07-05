import type { CSSProperties } from "react";

interface ClientLogoProps {
  abbr: string;
  name: string;
  color: string;
  size?: "sm" | "md";
}

export function ClientLogo({ abbr, name, color, size = "md" }: ClientLogoProps) {
  return (
    <div
      className={`client-logo-mark client-logo-mark--${size}`}
      style={{ "--logo-color": color } as CSSProperties}
      aria-label={name}
    >
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="48" height="48" rx="10" fill={`${color}18`} />
        <rect x="1" y="1" width="46" height="46" rx="9" stroke={color} strokeOpacity="0.35" strokeWidth="1" />
        <text
          x="24"
          y="28"
          textAnchor="middle"
          fill={color}
          fontFamily="Georgia, serif"
          fontSize="13"
          fontWeight="600"
          letterSpacing="0.05em"
        >
          {abbr}
        </text>
      </svg>
      <span className="client-logo-mark__name">{name}</span>
    </div>
  );
}
