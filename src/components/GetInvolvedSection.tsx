import { Bell, Handshake, HeartHandshake } from "lucide-react";
export function GetInvolvedSection() {
  return (
    <section id="get-involved" className="involved-section">
      <div>
        <h2>Help build pathways towards dignity and self-reliance.</h2>
        <p>
          Partner with IRI, support a programme, share professional expertise or
          stay informed about future opportunities.
        </p>
      </div>
      <div className="involved-actions">
        <a href="#contact">
          <Handshake />
          Partner with us
        </a>
        <a href="#contact">
          <Bell />
          Stay informed
        </a>
        <a id="donate" href="#contact">
          <HeartHandshake />
          Donate for Refugees
        </a>
      </div>
      <p className="donation-note">
        Verified donation and payment information will be published after
        organisational approval.
      </p>
    </section>
  );
}
