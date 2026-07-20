import { useEffect, useRef, useState } from "react";
import { navigation } from "../data/navigation";
import { ProvisionalBrandMark } from "./ProvisionalBrandMark";

const ZOHO_MAIL_SIGN_IN =
  "https://accounts.zoho.com/signin?servicename=VirtualOffice&signupurl=https://www.zoho.com/mail/signup.html&serviceurl=https://mail.zoho.com";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  function close(restore = false) {
    setOpen(false);
    if (restore) requestAnimationFrame(() => button.current?.focus());
  }
  useEffect(() => {
    if (open) menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
  }, [open]);
  return (
    <nav className="floating-nav" aria-label="Primary">
      <a className="nav-brand" href="/">
        <ProvisionalBrandMark />
        <span>
          <strong>INEZA</strong>
          <small>Refugees Initiative</small>
        </span>
      </a>
      <div className="nav-links">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a className="nav-staff-mail" href={ZOHO_MAIL_SIGN_IN}>
          Staff Mail
        </a>
        <a className="nav-donate" href="/donate">
          Donate
        </a>
      </div>
      <div className="mobile-nav-actions">
        <a className="mobile-nav-staff" href={ZOHO_MAIL_SIGN_IN}>
          Staff
        </a>
        <button
          ref={button}
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <i></i>
          <i></i>
        </button>
      </div>
      <div
        ref={menu}
        id="mobile-menu"
        className={`mobile-dropdown ${open ? "is-open" : ""}`}
        onKeyDown={(e) => {
          if (e.key === "Escape") close(true);
        }}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => close()}>
            {item.label}
          </a>
        ))}
        <a
          className="mobile-staff-mail"
          href={ZOHO_MAIL_SIGN_IN}
          onClick={() => close()}
        >
          Staff Mail
        </a>
        <a className="mobile-donate" href="/donate" onClick={() => close()}>
          Donate for Refugees
        </a>
      </div>
    </nav>
  );
}
