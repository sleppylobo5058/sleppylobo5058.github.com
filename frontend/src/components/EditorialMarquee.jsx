import Marquee from "react-fast-marquee";

const WORDS = [
  "PÁGINAS WEB",
  "APPS DE VENTAS",
  "CONTROL DE INVENTARIO",
  "RECOLECCIÓN DE DATOS",
  "A LA MEDIDA",
];

export default function EditorialMarquee() {
  return (
    <section data-testid="marquee-section" className="py-10 md:py-16 border-y border-white/10 bg-black/40">
      <Marquee speed={40} gradient={false} autoFill>
        {WORDS.map((w, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`font-display font-extrabold uppercase text-6xl md:text-8xl tracking-tight mx-8 ${
                i % 2 === 0 ? "text-white" : "text-stroke"
              }`}
            >
              {w}
            </span>
            <span className="text-signal text-5xl md:text-7xl mx-4">✳</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
