import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "Our Story" },
  { href: "#products", label: "Products" },
  { href: "#capabilities", label: "Printing Capabilities" },
  { href: "#why-us", label: "Why HH Textiles" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = links.map((l) => document.querySelector(l.href));
      const y = window.scrollY + 120;
      let current = "";
      sections.forEach((s, i) => {
        if (s instanceof HTMLElement && s.offsetTop <= y) current = links[i].href;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-bold text-xl md:text-2xl tracking-tight text-primary"
          aria-label="HH Textiles — home"
        >
          HH<span className="text-accent">·</span>TEXTILES
        </button>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className={`text-sm font-medium tracking-wide transition-colors relative ${
                active === l.href ? "text-primary" : "text-foreground/70 hover:text-primary"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1.5 left-0 right-0 h-px bg-accent transition-transform origin-left ${
                  active === l.href ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          ))}
          <button
            onClick={() => go("#contact")}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[color:var(--olive-deep)] transition-colors"
          >
            Get a Quote
          </button>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-left text-base font-medium text-foreground/80"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go("#contact")}
              className="bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-medium text-center"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
