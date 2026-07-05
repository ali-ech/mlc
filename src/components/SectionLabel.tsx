interface SectionLabelProps {
  index: string;
  label: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionLabel({ index, label, align = "left", light = false }: SectionLabelProps) {
  return (
    <div
      className={`section-label ${align === "center" ? "section-label--center" : ""} ${
        light ? "section-label--light" : ""
      }`}
    >
      <span className="section-label__index" aria-hidden="true">
        {index}
      </span>
      <span className="section-label__rule" aria-hidden="true" />
      <span className="section-label__text">{label}</span>
    </div>
  );
}
