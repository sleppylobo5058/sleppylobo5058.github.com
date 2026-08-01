import { motion } from "framer-motion";
import { Target, Zap, TrendingUp } from "lucide-react";

const CHAPTERS = [
  {
    num: "01",
    title: "Precisión",
    icon: Target,
    body: "Cada proyecto nace de entender tu operación real. Construyo herramientas que resuelven tu problema exacto, sin funciones de relleno ni complejidad inútil.",
  },
  {
    num: "02",
    title: "Velocidad",
    icon: Zap,
    body: "Interfaces rápidas y flujos directos. Tu equipo captura ventas, actualiza inventario y recolecta datos en segundos, desde cualquier dispositivo.",
  },
  {
    num: "03",
    title: "Escalabilidad",
    icon: TrendingUp,
    body: "Tecnología moderna que crece contigo. Desde una página web hasta un sistema completo: hecho para soportar más clientes, más datos y más ventas.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Manifesto() {
  return (
    <section id="manifiesto" data-testid="manifesto-section" className="relative py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20 md:mb-28"
        >
          <span className="font-mono text-xs text-signal">/ MANIFIESTO</span>
          <h2 className="font-display font-extrabold tracking-tighter text-4xl sm:text-5xl lg:text-6xl leading-[0.95] mt-5">
            No vendo software.
            <br />
            <span className="text-muted-foreground">Construyo ventaja competitiva.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-x-10 gap-y-16">
          {CHAPTERS.map((c, i) => (
            <motion.div
              key={c.num}
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              data-testid={`manifesto-chapter-${c.num}`}
              className={`relative ${i === 1 ? "md:mt-20" : ""} ${i === 2 ? "md:mt-40" : ""}`}
            >
              <div className="font-display font-extrabold text-6xl md:text-7xl text-signal/90 tracking-tighter">
                {c.num}
              </div>
              <div className="flex items-center gap-3 mt-6 mb-4">
                <c.icon size={20} className="text-white" />
                <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight">{c.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base border-t border-white/10 pt-5">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
