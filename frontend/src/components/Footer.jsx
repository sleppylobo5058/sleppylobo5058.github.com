import { BRAND, NAV_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="border-t border-white/10 py-14">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-signal rounded-full" />
              <span className="font-display font-extrabold text-lg tracking-tight">{BRAND.name}</span>
            </div>
            <p className="text-muted-foreground text-sm mt-3 max-w-xs">{BRAND.slogan}</p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="font-mono text-sm text-muted-foreground hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs font-mono text-muted-foreground">
          <span>© {new Date().getFullYear()} {BRAND.name} — {BRAND.owner}</span>
          <span>Hecho con precisión en {BRAND.location}</span>
        </div>
      </div>
    </footer>
  );
}
