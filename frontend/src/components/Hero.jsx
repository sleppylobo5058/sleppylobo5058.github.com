import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/site";

const lineParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
};
const lineChild = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

const Line = ({ children, className = "" }) => (
  <span className="block overflow-hidden">
    <motion.span variants={lineChild} className={`block ${className}`}>
      {children}
    </motion.span>
  </span>
);

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* abstract glow */}
      <motion.div
        style={{ y: glowY }}
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full blur-[120px] opacity-40"
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,#FF2A00_0%,transparent_60%)]" />
      </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:80px_80px]"
      />

      <div className="relative max-w-[1400px] mx-auto w-full px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="font-mono text-xs text-signal">/ ESTUDIO DE SOFTWARE</span>
          <span className="h-px w-16 bg-white/20" />
          <span className="font-mono text-xs text-muted-foreground">{BRAND.location}</span>
        </motion.div>

        <motion.h1
          style={{ y: textY }}
          variants={lineParent}
          initial="hidden"
          animate="show"
          data-testid="hero-heading"
          className="font-display font-extrabold tracking-tighter leading-[0.92] text-[15vw] md:text-[10vw] lg:text-[8.5vw]"
        >
          <Line>Software que</Line>
          <Line className="text-signal">impulsa tu</Line>
          <Line>negocio.</Line>
        </motion.h1>

        <motion.div
          style={{ opacity: fade }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <p className="max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
            Diseño y desarrollo <span className="text-white">páginas web</span> y{" "}
            <span className="text-white">aplicaciones a la medida</span> para ventas, control de
            inventarios y recolección de datos. Herramientas que trabajan por ti.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              data-testid="hero-cta"
              className="inline-flex items-center gap-2 bg-signal hover:bg-signal-hover text-white font-medium px-7 py-4 rounded-sm transition-colors"
            >
              Inicia tu proyecto <ArrowUpRight size={18} />
            </a>
            <a
              href="#servicios"
              data-testid="hero-services-link"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white font-medium px-7 py-4 rounded-sm transition-colors"
            >
              Ver servicios
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-[10px] tracking-widest">DESLIZA</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
