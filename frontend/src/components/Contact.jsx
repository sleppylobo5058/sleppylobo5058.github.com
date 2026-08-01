import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { BRAND, WHATSAPP_URL } from "@/lib/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const FIELD =
  "w-full bg-black/40 border border-white/15 rounded-sm px-4 py-3.5 text-white placeholder:text-muted-foreground/70 focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal transition-colors font-body";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Completa nombre, correo y mensaje.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      setDone(true);
      toast.success("¡Mensaje enviado! Te responderé muy pronto.");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      toast.error("No se pudo enviar. Intenta por WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" data-testid="contact-section" className="relative py-28 md:py-40 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-xs text-signal">/ CONTACTO</span>
          <h2 className="font-display font-extrabold tracking-tighter text-4xl sm:text-5xl lg:text-6xl leading-[0.95] mt-5">
            Hagamos que
            <br />
            <span className="text-signal">suceda.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-6 max-w-md">
            Cuéntame sobre tu proyecto y te responderé con una propuesta clara. Sin compromiso.
          </p>

          <div className="mt-10 space-y-4">
            <a href={`mailto:${BRAND.email}`} data-testid="contact-email" className="flex items-center gap-4 group">
              <div className="w-11 h-11 flex items-center justify-center border border-white/15 rounded-sm group-hover:border-signal transition-colors">
                <Mail size={18} className="text-signal" />
              </div>
              <span className="text-white group-hover:text-signal transition-colors">{BRAND.email}</span>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" data-testid="contact-phone" className="flex items-center gap-4 group">
              <div className="w-11 h-11 flex items-center justify-center border border-white/15 rounded-sm group-hover:border-signal transition-colors">
                <Phone size={18} className="text-signal" />
              </div>
              <span className="text-white group-hover:text-signal transition-colors">{BRAND.phone}</span>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 flex items-center justify-center border border-white/15 rounded-sm">
                <MapPin size={18} className="text-signal" />
              </div>
              <span className="text-muted-foreground">{BRAND.location}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="border border-white/10 bg-card/40 rounded-sm p-7 md:p-10"
        >
          {done ? (
            <div data-testid="contact-success" className="flex flex-col items-start justify-center h-full min-h-[360px]">
              <CheckCircle2 size={48} className="text-signal mb-6" />
              <h3 className="font-display font-bold text-3xl tracking-tight">¡Gracias!</h3>
              <p className="text-muted-foreground mt-3">
                Tu mensaje llegó a mi bandeja. Te responderé lo antes posible.
              </p>
              <button
                data-testid="contact-reset"
                onClick={() => setDone(false)}
                className="mt-8 border border-white/20 hover:border-white px-6 py-3 rounded-sm transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={submit} data-testid="contact-form" className="space-y-5">
              <div>
                <label className="font-mono text-xs text-muted-foreground block mb-2">NOMBRE *</label>
                <input data-testid="contact-input-name" className={FIELD} value={form.name} onChange={update("name")} placeholder="Tu nombre" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-xs text-muted-foreground block mb-2">CORREO *</label>
                  <input data-testid="contact-input-email" type="email" className={FIELD} value={form.email} onChange={update("email")} placeholder="tu@correo.com" />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted-foreground block mb-2">EMPRESA</label>
                  <input data-testid="contact-input-company" className={FIELD} value={form.company} onChange={update("company")} placeholder="Opcional" />
                </div>
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground block mb-2">MENSAJE *</label>
                <textarea data-testid="contact-input-message" rows={5} className={`${FIELD} resize-none`} value={form.message} onChange={update("message")} placeholder="Cuéntame qué necesitas..." />
              </div>
              <button
                type="submit"
                data-testid="contact-submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-signal hover:bg-signal-hover disabled:opacity-60 text-white font-medium px-7 py-4 rounded-sm transition-colors"
              >
                {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {loading ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
