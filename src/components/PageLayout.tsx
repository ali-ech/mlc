import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageHero } from "./PageHero";

interface PageLayoutProps {
  children: ReactNode;
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageLayout({ children, eyebrow, title, description }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow={eyebrow} title={title} description={description} />
        {children}
      </main>
      <Footer />
    </>
  );
}
