import { useEffect, useState } from "react";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#strategy", label: "Strategy" },
  { href: "#theory", label: "Social Theory" },
  { href: "#impact", label: "Impact" },
  { href: "#team", label: "Team" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-editorial flex h-16 items-center justify-between">
        <a href="#overview" className="flex items-center gap-2 group">
          <span className="h-7 w-7 rounded-full bg-foreground grid place-items-center">
            <span className="font-serif text-background text-sm leading-none">S</span>
          </span>
          <span className="font-serif text-lg tracking-tight">
            Sublet<span className="text-muted-foreground">CMU</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#solution"
          className="hidden md:inline-flex items-center text-sm font-medium text-background bg-foreground px-4 py-2 rounded-full hover:bg-accent transition-colors"
        >
          View Solution
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-4 h-px bg-foreground relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-foreground before:-top-1.5 after:content-[''] after:absolute after:w-4 after:h-px after:bg-foreground after:top-1.5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-editorial py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-foreground/80 hover:text-foreground py-1"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
