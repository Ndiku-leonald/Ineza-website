import { useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Navbar } from "./Navbar";
export function HeroSection() {
  const reduced = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);
  function move(e: React.PointerEvent<HTMLElement>) {
    if (reduced || e.pointerType === "touch") return;
    const x = e.clientX / innerWidth - 0.5,
      y = e.clientY / innerHeight - 0.5;
    e.currentTarget.style.setProperty("--mx", `${x * 18}px`);
    e.currentTarget.style.setProperty("--my", `${y * 14}px`);
  }
  return (
    <section id="top" className="hero-landing" onPointerMove={move}>
      <Navbar />
      {!videoFailed && (
        <video
          className="hero-media"
          autoPlay={!reduced}
          muted
          loop
          playsInline
          poster="/images/editorial/children-together.jpg"
          onError={() => setVideoFailed(true)}
          aria-hidden="true"
        >
          <source src="/media/iri-hero.mp4" type="video/mp4" />
        </video>
      )}
      <div className="hero-fallback" aria-hidden="true"></div>
      <div className="hero-shade"></div>
      <svg className="hero-motif" viewBox="0 0 500 500" aria-hidden="true">
        <circle cx="250" cy="250" r="178" />
        <path d="M75 292c72-12 104-86 175-91 69-5 109 57 175 42" />
        <path d="M121 363c76-30 112-93 184-90 48 2 76 28 111 55" />
      </svg>
      <div className="hero-content">
        <p className="hero-status">
          Independent nonprofit organisation <span>•</span> Uganda
        </p>
        <h1>
          A <em>dignified life</em>
          <br />
          for every refugee.
        </h1>
        <p className="hero-lede">
          Ineza Refugees Initiative works alongside refugee and host communities
          to protect rights, strengthen livelihoods and create pathways towards
          sustainable futures.
        </p>
        <div className="hero-cta">
          <span>
            <b className="desktop-copy">
              Protecting rights. Strengthening livelihoods. Building dignified
              futures.
            </b>
            <b className="mobile-copy">Building dignified futures together.</b>
          </span>
          <a href="#programmes">Explore our programmes</a>
          <a href="#get-involved">Support our work</a>
        </div>
      </div>
    </section>
  );
}
