import { motion } from "framer-motion";
import { Globe, ShoppingCart, Boxes, Database, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const IMG = {
  web: "https://images.unsplash.com/photo-1702144418583-db89bc40c33d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxNzV8MHwxfHNlYXJjaHwzfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMG9mZmljZSUyMGRhcmt8ZW58MHx8fHwxNzg0ODM5OTA2fDA&ixlib=rb-4.1.0&q=85",
  sales: "https://images.pexels.com/photos/17249214/pexels-photo-17249214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  inventory: "https://images.pexels.com/photos/30341205/pexels-photo-30341205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  data: "https://images.unsplash.com/photo-1544380904-c686aad2fc40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHRlY2glMjBkYXRhJTIwZGFya3xlbnwwfHx8fDE3ODQ2NDUxMzZ8MA&ixlib=rb-4.1.0&q=85",
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function ServiceCard({ index, icon: Icon, title, desc, tags, image, className = "", imgClass = "" }) {
  return (
    <motion.div
      variants={card}
      data-testid={`service-card-${index}`}
      className={`group relative overflow-hidden border border-white/10 bg-card/40 rounded-sm ${className}`}
    >
      {image && (
        <div className={`relative overflow-hidden ${imgClass}`}>
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 [filter:grayscale(30%)]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        </div>
      )}
      <div className="relative p-7 md:p-9">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex items-center justify-center border border-white/15 rounded-sm bg-black/30 group-hover:border-signal transition-colors">
              <Icon size={20} className="text-signal" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">0{index}</span>
          </div>
          <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-signal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight mt-6">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mt-3 max-w-md">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((t) => (
            <span key={t} className="font-mono text-[11px] text-muted-foreground border border-white/10 rounded-full px-3 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicios" data-testid="services-section" className="relative py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="font-mono text-xs text-signal">/ SERVICIOS</span>
            <h2 className="font-display font-extrabold tracking-tighter text-4xl sm:text-5xl lg:text-6xl leading-[0.95] mt-5">
              Lo que construyo
              <br />
              para tu negocio.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Soluciones digitales a la medida, desde la idea hasta el lanzamiento y el soporte continuo.
          </p>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <ServiceCard
            index={1}
            icon={Globe}
            title="Creación de páginas web"
            desc="Sitios web modernos, rápidos y responsivos que presentan tu marca con impacto y convierten visitantes en clientes."
            tags={["Diseño a medida", "Responsivo", "SEO", "Alto rendimiento"]}
            image={IMG.web}
            imgClass="h-56 md:h-72"
            className="md:col-span-8 md:row-span-2"
          />
          <ServiceCard
            index={2}
            icon={ShoppingCart}
            title="Apps de ventas"
            desc="Registra ventas, clientes y cobros en tiempo real desde el celular o la computadora."
            tags={["Punto de venta", "Reportes"]}
            className="md:col-span-4"
          />
          <ServiceCard
            index={3}
            icon={Boxes}
            title="Apps de inventario"
            desc="Controla existencias, entradas y salidas con alertas de stock y trazabilidad total."
            tags={["Stock en vivo", "Alertas"]}
            className="md:col-span-4"
          />
          <ServiceCard
            index={4}
            icon={Database}
            title="Recolección de datos"
            desc="Formularios y sistemas para capturar, organizar y visualizar la información de tu operación. Toma decisiones con datos reales, no con intuición."
            tags={["Formularios", "Dashboards", "Exportación", "Móvil y web"]}
            image={IMG.data}
            imgClass="h-48 md:h-56"
            className="md:col-span-12"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-5 border-t border-white/10 pt-10"
        >
          <p className="font-display font-bold text-2xl md:text-3xl tracking-tight max-w-lg">
            ¿No ves exactamente lo que necesitas?
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            data-testid="services-whatsapp-cta"
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-signal hover:text-white font-medium px-7 py-4 rounded-sm transition-colors"
          >
            Cuéntame tu idea <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
