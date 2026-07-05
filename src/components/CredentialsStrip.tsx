const credentials = [
  "Drug Regulatory Authority of Pakistan",
  "Drug Courts of Pakistan",
  "Provincial Quality Control Boards",
  "High Court Appellate Proceedings",
  "Pharmaceutical Licensing and Registration",
  "GMP Compliance Advisory",
] as const;

export function CredentialsStrip() {
  const items = [...credentials, ...credentials];

  return (
    <div className="credentials-strip" aria-hidden="true">
      <div className="credentials-strip__track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="credentials-strip__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
