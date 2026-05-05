import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/listings", label: "Properties" },
  { to: "/about", label: "About" },
  { to: "/agents", label: "Agents" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Sell With Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-5">
        <Link to="/" className="font-serif text-2xl tracking-tight font-bold uppercase">
          E-Z Sell <span className="text-gold">Realty</span>
        </Link>
        <nav className="hidden md:flex gap-10 uppercase text-xs tracking-widest font-semibold">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+17183966666"
          className="hidden md:inline-block text-sm font-bold border-b-2 border-foreground pb-1 hover:border-gold hover:text-gold transition-colors"
        >
          (718) 396-6666
        </a>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4 bg-background">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="uppercase text-xs tracking-widest font-semibold"
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:+17183966666" className="text-sm font-bold text-gold">
            (718) 396-6666
          </a>
        </nav>
      )}
    </header>
  );
}
