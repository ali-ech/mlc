interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <div className="page-hero">
      <div className="container-grid page-hero__inner">
        {eyebrow && <p className="eyebrow page-hero__eyebrow">{eyebrow}</p>}
        <h1 className="display-lg page-hero__title">{title}</h1>
        {description && <p className="page-hero__desc lead">{description}</p>}
      </div>
    </div>
  );
}
