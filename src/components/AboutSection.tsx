import { ArrowRight, Handshake } from "lucide-react";
import { organisation } from "../data/organisation";
import { ProvisionalBrandMark } from "./ProvisionalBrandMark";
export function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-intro">
        <p className="section-kicker">Who we are</p>
        <h2>
          We work alongside refugee communities, people seeking asylum and host
          communities to support dignity, self-reliance and access to
          opportunity.
        </h2>
        <p>
          Ineza Refugees Initiative is an independent Ugandan not-for-profit
          organisation committed to protecting rights and empowering refugees
          towards a better future.
        </p>
        <div className="about-actions">
          <a href="#contact">
            <span>
              <Handshake />
            </span>
            Partner with us
          </a>
          <a href="#approach">
            <span>
              <ArrowRight />
            </span>
            Learn about IRI
          </a>
        </div>
      </div>
      <div className="line-divider">
        <i></i>
        <span></span>
        <i></i>
      </div>
      <div id="approach" className="about-belief">
        <div className="belief-mark">
          <ProvisionalBrandMark />
          <p>
            Dignity
            <br />
            Empowerment
            <br />
            Hope
          </p>
        </div>
        <div>
          <h3>
            We believe humanitarian support should do more than respond to
            immediate needs. It should strengthen people’s ability to shape
            their own futures.
          </h3>
          <p>
            Our approach combines protection, livelihoods, education, health and
            youth empowerment while placing refugee voices at the centre of the
            work.
          </p>
          <ul>
            {organisation.values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
