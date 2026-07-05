interface BrandLogoProps {
  variant?: "header-light" | "header-dark" | "footer";
  showEst?: boolean;
  founded?: number;
}

function ScalesMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M24 4v6M24 10l-14 28h28L24 10z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 38h28" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path
        d="M6 42c0-3.5 3.5-6 8-6s8 2.5 8 6M26 42c0-3.5 3.5-6 8-6s8 2.5 8 6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M10 42v4c0 2 1.5 3.5 4 3.5M34 42v4c0 2-1.5 3.5-4 3.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path d="M24 10v28" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <text
        x="24"
        y="24"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Georgia, serif"
        fontSize="7"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        MLC
      </text>
    </svg>
  );
}

export function BrandLogo({ variant = "header-dark", showEst = false, founded = 2003 }: BrandLogoProps) {
  return (
    <span className={`brand-logo brand-logo--${variant}`}>
      <ScalesMark className="brand-logo__mark" />
      <span className="brand-logo__wordmark">
        <span className="brand-logo__script">Muntaha</span>
        <span className="brand-logo__caps">Law Consultants</span>
        {showEst && <span className="brand-logo__est">Est. {founded}</span>}
      </span>
    </span>
  );
}
