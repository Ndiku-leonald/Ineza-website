import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { programmes } from "../data/programmes";
import { organisation } from "../data/organisation";

const pages = {
  "/about": {
    label: "About IRI",
    title: "A Ugandan initiative grounded in dignity.",
    intro:
      "An independent not-for-profit organisation supporting refugees, people seeking asylum and host communities.",
    hero: "/images/editorial/children-together.jpg",
    sections: [
      [
        "Our purpose",
        "IRI was formed by development-oriented people committed to sustainable development, reliable information and practical opportunity.",
      ],
      ["Vision", organisation.vision],
      ["Mission", organisation.mission],
    ],
    images: [
      "/images/editorial/community-gathering.jpg",
      "/images/editorial/clean-water.jpg",
    ],
  },
  "/our-approach": {
    label: "Our approach",
    title: "Working with communities, not around them.",
    intro:
      "Proposed work begins with listening, responsible collaboration and evidence that helps programmes adapt.",
    hero: "/images/editorial/community-gathering.jpg",
    sections: [
      [
        "Community voice",
        "People with lived experience should help shape priorities, delivery and learning.",
      ],
      [
        "Responsible partnership",
        "IRI intends to work with public institutions, schools, health facilities and humanitarian organisations through approved agreements.",
      ],
      [
        "Learning and accountability",
        "Baseline research, routine monitoring and community feedback will guide decisions as programmes progress.",
      ],
    ],
    images: [
      "/images/editorial/nutrition-workshop.jpg",
      "/images/editorial/health-learning.jpg",
    ],
  },
  "/get-involved": {
    label: "Get involved",
    title: "Bring useful support closer to community priorities.",
    intro:
      "Partner, share expertise, express volunteer interest or support a planned programme.",
    hero: "/images/youth-empowerment.webp",
    sections: [
      [
        "Partner with IRI",
        "Institutional partnerships are subject to alignment, due diligence and a formal agreement.",
      ],
      [
        "Share expertise",
        "Specialists in health, education, agriculture, safeguarding and research may register interest.",
      ],
      [
        "Stay informed",
        "Verified organisational updates will be published as they are approved.",
      ],
    ],
    images: [
      "/images/editorial/community-farming.jpg",
      "/images/editorial/field-harvest.jpg",
    ],
  },
  "/contact": {
    label: "Contact",
    title: "Begin a clear, responsible conversation.",
    intro:
      "The IRI domain and contact email are confirmed. Please do not send sensitive health, protection or beneficiary information by email.",
    hero: "/images/editorial/nutrition-workshop.jpg",
    sections: [
      [
        "General contact",
        "Email info@ineza.org.ug for general, programme and partnership enquiries.",
      ],
      [
        "Safeguarding",
        "A dedicated confidential safeguarding channel awaits organisational approval.",
      ],
      [
        "Office details",
        "Telephone number and physical office address await organisational approval.",
      ],
    ],
    images: ["/images/editorial/children-together.jpg"],
  },
  "/donate": {
    label: "Donate for Refugees",
    title: "Support pathways towards dignity and self-reliance.",
    intro:
      "IRI is preparing a responsible donation pathway. No online payment provider is connected yet.",
    hero: "/images/editorial/field-harvest.jpg",
    sections: [
      [
        "Why support IRI",
        "Support can help develop planned work across food and nutrition, health, education and youth opportunity.",
      ],
      [
        "Accountability",
        "Approved reports and financial information will be published as organisational systems develop.",
      ],
      [
        "Payment information",
        "Verified donation and payment information will be published after organisational approval.",
      ],
    ],
    images: ["/images/editorial/community-farming.jpg"],
  },
  "/reports": {
    label: "Accountability",
    title: "Trust grows through clear information.",
    intro:
      "IRI will publish approved governance, safeguarding, policy and financial documents here.",
    hero: "/images/editorial/clean-water.jpg",
    sections: [
      ["Reports and policies", "Information awaiting organisational approval."],
      [
        "Audited statements",
        "Information awaiting organisational approval. Unverified work-plan budgets are not published.",
      ],
      ["Registration", `URSB Registration No. ${organisation.registration}.`],
    ],
    images: [],
  },
} satisfies Record<
  string,
  {
    label: string;
    title: string;
    intro: string;
    hero: string;
    sections: string[][];
    images: string[];
  }
>;

export function InteriorPage({ path }: { path: string }) {
  if (path === "/programmes") return <ProgrammesPage />;
  const page = pages[path as keyof typeof pages] ?? pages["/about"];
  return (
    <>
      <header className="interior-header">
        <Navbar />
        <img src={page.hero} alt="" />
        <div>
          <p>{page.label}</p>
          <h1>{page.title}</h1>
          <span>{page.intro}</span>
        </div>
      </header>
      <main className="interior-main">
        <div className="interior-copy">
          {page.sections.map(([title, body]) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{body}</p>
            </section>
          ))}
        </div>
        {page.images.length > 0 && (
          <div className="editorial-gallery">
            {page.images.map((src, index) => (
              <figure key={src}>
                <img
                  src={src}
                  alt={
                    index === 0
                      ? "Thematic community programme photograph"
                      : "Thematic image supporting the page topic"
                  }
                />
                <figcaption>
                  Sample thematic image · not presented as an IRI activity
                </figcaption>
              </figure>
            ))}
          </div>
        )}
        <div className="page-next">
          <a href="/programmes">Explore planned programmes →</a>
          <a href="/contact">Contact IRI →</a>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ProgrammesPage() {
  return (
    <>
      <header className="interior-header">
        <Navbar />
        <img src="/images/programmes-background.webp" alt="" />
        <div>
          <p>Planned work · 2025–2030</p>
          <h1>Four connected programme areas.</h1>
          <span>
            Proposed work addressing livelihoods, health, education and youth
            opportunity.
          </span>
        </div>
      </header>
      <main className="interior-main">
        <div className="programme-page-list">
          {programmes.map((p) => (
            <article key={p.id}>
              <img src={p.image} alt={p.alt} />
              <div>
                <span>{p.number} · Planned programme</span>
                <h2>{p.title}</h2>
                <p>{p.description}</p>
                <ul>
                  {p.focus.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="page-next">
          <a href="/get-involved">Ways to get involved →</a>
          <a href="/contact">Discuss a programme →</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
