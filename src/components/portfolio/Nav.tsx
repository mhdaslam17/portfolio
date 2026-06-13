import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass-strong flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 shadow-elevated">
        <a href="#top" className="flex items-center gap-2 font-[Space_Grotesk] text-sm font-bold tracking-wide">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground text-xs">MA</span>
          <span className="hidden sm:inline">Mohamed Aslam</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-primary to-accent px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105 md:inline-block"
        >
          Let's talk
        </a>
        <button
          aria-label="Toggle menu"
          className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>
      {open && (
        <div className="glass-strong absolute top-20 mx-4 w-[calc(100%-2rem)] max-w-5xl rounded-2xl p-4 md:hidden">
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}