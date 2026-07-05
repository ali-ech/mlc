import { BrowserRouter, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PracticeAreasPage } from "./pages/PracticeAreasPage";
import { TeamPage } from "./pages/TeamPage";
import { ContactPage } from "./pages/ContactPage";
import { PracticeAreaPage } from "./pages/PracticeAreaPage";
import { TeamMemberPage } from "./pages/TeamMemberPage";
import { useEffect } from "react";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function PracticeRoute() {
  const { id } = useParams<{ id: string }>();
  return <PracticeAreaPage id={id ?? ""} />;
}

function TeamRoute() {
  const { id } = useParams<{ id: string }>();
  return <TeamMemberPage id={id ?? ""} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="page-enter">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/practice-areas" element={<PracticeAreasPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/practice/:id" element={<PracticeRoute />} />
          <Route path="/team/:id" element={<TeamRoute />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
