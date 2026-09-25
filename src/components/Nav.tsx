"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { hash: "#layers", label: "Layers" },
  { hash: "#questions", label: "Questions" },
];

export function Nav() {
  const path = usePathname();
  const home = path === "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById("nav");
    if (!nav) return;
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const section = (hash: string) => (home ? hash : `/${hash}`);

  return (
    <header className={`nav${open ? " open" : ""}`} id="nav">
      <div className="nav-inner">
        <Link className="brand" href="/" aria-label="Synx tools">
          <img className="wordmark" src="/img/wordmark.png" alt="Synx Tools" />
        </Link>
        <nav className="nav-links" id="menu" onClick={() => setOpen(false)}>
          <div className="nav-drop">
            <a href={section("#suite")}>Tools</a>
            <div className="nav-drop-menu">
              <a className="bios" href="/bios">Synx BIOS</a>
              <a className="dns" href="/dns">Synx DNS</a>
              <a className="pass" href="/pass">Synx Pass</a>
              <a className="trade" href="/trade">Synx Trade</a>
            </div>
          </div>
          <a href="https://realtimeweb.org" target="_blank" rel="noreferrer">
            Real Time Web
          </a>
          {links.map((item) => (
            <a key={item.hash} href={section(item.hash)}>
              {item.label}
            </a>
          ))}
          <Link href="/who" aria-current={path === "/who" ? "page" : undefined}>
            Who we are
          </Link>
          <a href="https://morph.space" target="_blank" rel="noreferrer">
            Morph Space
          </a>
        </nav>
        <div className="nav-actions">
          <a className="btn btn-ghost btn-sm" href={section("#connected")}>
            Connections
          </a>
          <a className="btn btn-primary btn-sm" href={section("#suite")}>
            See the tools
          </a>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
