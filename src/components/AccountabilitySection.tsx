export function AccountabilitySection() {
  return (
    <section id="accountability" className="accountability-section">
      <div>
        <p className="section-kicker">Our vision</p>
        <h2>
          A <em>dignified life</em> for all refugees in Uganda.
        </h2>
      </div>
      <div>
        <h3>Accountability is part of the work.</h3>
        <p>
          We are committed to honesty, transparency and responsible
          collaboration with the communities we serve, supporters, partners and
          humanitarian stakeholders.
        </p>
        <nav>
          {[
            "Governance",
            "Safeguarding",
            "Reports and policies",
            "Contact and feedback",
          ].map((x) => (
            <a href="#contact" key={x}>
              {x}
              <span>Information awaiting organisational approval.</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
