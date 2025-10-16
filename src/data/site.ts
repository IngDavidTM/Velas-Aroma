export const contactInfo = {
  phone: "+593 98 783 2616",
  email: "hola@velasyaroma.ec",
  instagram: "@velasyaroma.ec",
  instagramUrl: "https://instagram.com/velasyaroma.ec",
  whatsappUrl: "https://wa.me/593987832616",
  address: "Pasaje Rumiñahui y Francisco de Orellana, Tumbaco",
  schedule: "Lun a vie 09:00-18:00 · Sáb 10:00-14:00",
};

export const defaultWhatsappMessage =
  "Hola, quisiera más información sobre Velas & Aroma.";

export const buildWhatsappLink = (message: string = defaultWhatsappMessage) =>
  `${contactInfo.whatsappUrl}?text=${encodeURIComponent(message)}`;

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
      "Sí. Puedes elegir el aroma y el color de tus velas. Escríbenos con al menos 7 días de anticipación para coordinar la producción.",
  },
  {
    question: "¿Puedo armar combos?",
    answer:
      "Ofrecemos combos por categoría y también combos personalizados. Contáctanos para recibir opciones adaptadas a tu presupuesto.",
  },
  {
    question: "¿Qué pasa en fechas especiales?",
    answer:
      "En San Valentín, Día de la Madre y Navidad trabajamos con cupos limitados. Te recomendamos reservar con anticipación para asegurar disponibilidad.",
  },
];
