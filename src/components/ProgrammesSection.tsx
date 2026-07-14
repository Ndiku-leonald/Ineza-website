import { useState } from "react";
import { programmes } from "../data/programmes";
import { ProgrammeCard } from "./ProgrammeCard";
export function ProgrammesSection() {
  const [active, setActive] = useState(programmes[0].id);
  return (
    <section id="programmes" className="programmes-section">
      <div className="programmes-layout">
        <aside>
          <div>
            <p>Proposed programme</p>
            <h2>
              Programmes built around dignity, resilience and opportunity.
            </h2>
            <span>
              Our proposed programmes respond to connected challenges affecting
              livelihoods, health, education and youth opportunity.
            </span>
            <nav aria-label="Programme navigation">
              {programmes.map((p) => (
                <button
                  key={p.id}
                  className={active === p.id ? "active" : ""}
                  onClick={() =>
                    document
                      .getElementById(`programme-${p.id}`)
                      ?.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                >
                  {p.number} {p.title}
                </button>
              ))}
            </nav>
          </div>
          <div>
            <p>
              Support practical, community-centred pathways towards
              self-reliance.
            </p>
            <a href="#contact">Partner with IRI</a>
          </div>
        </aside>
        <div className="programme-stack">
          {programmes.map((p) => (
            <ProgrammeCard key={p.id} programme={p} onActive={setActive} />
          ))}
        </div>
      </div>
      <p className="media-note">
        Sample thematic photography supplied for design review. The people shown
        are not presented as IRI participants. Publication rights and consent
        require confirmation.
      </p>
    </section>
  );
}
