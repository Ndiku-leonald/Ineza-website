import { contact } from "../data/contact";
import { organisation } from "../data/organisation";
import { navigation } from "../data/navigation";
import { ProvisionalBrandMark } from "./ProvisionalBrandMark";
export function Footer() {
  return (
    <footer id="contact">
      <div className="footer-main">
        <div>
          <ProvisionalBrandMark inverse />
          <h2>{organisation.name}</h2>
          <p>Working towards a dignified life for every refugee.</p>
        </div>
        <nav aria-label="Footer">
          {navigation.slice(0, 3).map((x) => (
            <a href={x.href} key={x.href}>
              {x.label}
            </a>
          ))}
          <a href="/reports">Accountability</a>
          <a href="/contact">Contact</a>
        </nav>
        <div>
          <p>
            {organisation.acronym} · {organisation.domain}
          </p>
          <p>URSB Registration No. {organisation.registration}</p>
          <p>
            {contact.email.value}
            <small>
              {contact.email.requiresConfirmation
                ? "Requires confirmation before production."
                : ""}
            </small>
          </p>
          <a href="/donate">Donate for Refugees</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ineza Refugees Initiative.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
