import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BRAND, NAV_LINKS, WHATSAPP_URL } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        data-testid="site-header"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "backdrop-blur-xl bg-black/60 border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <a href="#inicio" data-testid="logo-link" className="flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 bg-signal rounded-full group-hover:scale-125 transition-transform" />
            <span className="font-display font-extrabold text-lg tracking-tight">{BRAND.name}</span>
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-${l.label.toLowerCase()}`}
                className="text-sm font-mono text-muted-foreground hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-signal hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            data-testid="header-cta"
            className="hidden md:inline-flex items-center gap-1.5 bg-signal hover:bg-signal-hover text-white text-sm font-medium px-5 py-2.5 rounded-sm transition-colors"
          >
            Inicia tu proyecto <ArrowUpRight size={16} />
          </a>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
            aria-label="Abrir menú"
          >
            <Menu size={26} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col p-6 md:hidden"
          >
            <div className="flex justify-between items-center h-14">
              <span className="font-display font-extrabold text-lg">{BRAND.name}</span>
              <button data-testid="mobile-menu-close" onClick={() => setOpen(false)} aria-label="Cerrar menú">
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col gap-2 mt-10">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display font-extrabold text-5xl tracking-tight py-2 hover:text-signal transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-auto bg-signal text-white text-center py-4 rounded-sm font-medium"
            >
              Escríbeme por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
