"use client";

import { useEffect, useState } from "react";

// ---------------------------------------------------------------
// Sidebar nav: the active section's line grows and brightens.
// ---------------------------------------------------------------
const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function SideNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    function onScroll() {
      // At the very bottom, the last section wins even if it never
      // reaches the reference line.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 40) {
        setActive(NAV[NAV.length - 1].id);
        return;
      }
      let current = NAV[0].id;
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id;
      }
      setActive(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav aria-label="In-page navigation" className="hidden lg:block">
      <ul className="mt-16 space-y-4">
        {NAV.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a href={`#${id}`} className="group flex items-center gap-4 py-1">
                <span
                  aria-hidden
                  className={`h-px transition-all duration-300 ${
                    isActive ? "w-16 bg-accent" : "w-8 bg-faint group-hover:w-16 group-hover:bg-body"
                  }`}
                />
                <span
                  className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                    isActive ? "text-accent" : "text-faint group-hover:text-body"
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// ---------------------------------------------------------------
// Copy-email button for the contact section.
// ---------------------------------------------------------------
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable; the mailto link next to this still works.
    }
  }

  return (
    <button
      onClick={copy}
      className="rounded-md border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
      aria-live="polite"
    >
      {copied ? "copied ✓" : "copy"}
    </button>
  );
}
