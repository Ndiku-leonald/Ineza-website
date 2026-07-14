import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProgrammesSection } from "./components/ProgrammesSection";
import { AccountabilitySection } from "./components/AccountabilitySection";
import { GetInvolvedSection } from "./components/GetInvolvedSection";
import { Footer } from "./components/Footer";
import { InteriorPage } from "./components/InteriorPage";
export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  if (path !== "/") return <InteriorPage path={path} />;
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ProgrammesSection />
        <AccountabilitySection />
        <GetInvolvedSection />
      </main>
      <Footer />
    </>
  );
}
