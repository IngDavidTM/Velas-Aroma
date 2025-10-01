export const contactInfo = {
  phone: "+593 98 783 2616",
  email: "hola@velasyaroma.ec",
  instagram: "@velasyaroma.ec",
  instagramUrl: "https://instagram.com/velasyaroma.ec",
  whatsappUrl: "https://wa.me/593987832616",
  address: "Pasaje Rumiñahui y Francisco de Orellana, Tumbaco",
  schedule: "Lun-Vie 09:00-18:00 · Sáb 10:00-14:00",
};

export const aromaOptions = [
  "Chocolate",
  "Champagne",
  "Bosque navideño",
  "Violeta",
  "Menta",
  "Manzanilla",
  "Hierba luisa",
  "Argán",
  "Maracuyá",
  "Jazmín",
  "Eucalipto",
  "Manzana y canela",
  "Vainilla macadamia",
  "Frutos rojos",
  "Belle Glamour",
] as const;

export type Aroma = (typeof aromaOptions)[number];

export const serviceChips = [
  "Cumpleaños",
  "Bautizos",
  "Baby shower",
  "Matrimonios",
  "Regalos corporativos",
  "Otros",
];

export const shippingFaq = [
  {
    question: "¿Realizan pedidos personalizados?",
    answer:
      "Sí, puedes escoger aroma, color y empaques. Escríbenos con al menos 10 días de anticipación para coordinar producción.",
  },
  {
    question: "¿Puedo armar combos?",
    answer:
      "Ofrecemos combos por categoría y combos personalizados. Contáctanos para recibir propuestas según presupuesto.",
  },
  {
    question: "¿Qué pasa en fechas especiales?",
    answer:
      "En San Valentín, Día de la Madre y temporada navideña abrimos cupos limitados; reserva con anticipación para asegurar disponibilidad.",
  },
];
