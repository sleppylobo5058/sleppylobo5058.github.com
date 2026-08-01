export const BRAND = {
  name: "CodeWolf",
  slogan: "Software que impulsa tu negocio",
  owner: "Cesar Ramos",
  location: "Monterrey, México",
  email: "cesar5.ramos58@gmail.com",
  phone: "+52 81 3173 2022",
  whatsapp: "528131732022",
};

export const WHATSAPP_URL = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
  "Hola CodeWolf, me interesa crear un proyecto con ustedes."
)}`;

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Manifiesto", href: "#manifiesto" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];
