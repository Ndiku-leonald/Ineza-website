import { useEffect, useRef, useState } from "react";
import { navigation } from "../data/navigation";
import { ProvisionalBrandMark } from "./ProvisionalBrandMark";
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
        <a className="nav-donate" href="/donate">
          Donate
        </a>
      </div>
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
        <a href="/donate" onClick={() => close()}>
          Donate for Refugees
        </a>
      </div>
    </nav>
  );
}
