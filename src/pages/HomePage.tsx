import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { CredentialsStrip } from "../components/CredentialsStrip";
import { About } from "../components/About";
import { PracticeAreas } from "../components/PracticeAreas";
import { Team } from "../components/Team";
import { Differentiators } from "../components/Differentiators";
import { TrustedClients } from "../components/TrustedClients";
import { CTABand } from "../components/CTABand";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CredentialsStrip />
        <About />
        <PracticeAreas />
        <Team />
        <Differentiators />
        <TrustedClients />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
