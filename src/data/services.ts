export type Service = {
  tipo: "eventos" | "mayor" | "personalizado" | "wax-melts";
  descripcion: string;
  cta?: string;
};

export const services: Service[] = [
  {
    tipo: "eventos",
    descripcion:
      "Diseñamos kits para cumpleaños, bautizos, baby showers, matrimonios y celebraciones corporativas. Personaliza aromas, colores y empaques desde 20 unidades.",
    cta: "Solicitar cotización",
  },
  {
    tipo: "mayor",
    descripcion:
      "Producción al por mayor con plazos de 15 a 20 días hábiles. Ofrecemos precios especiales y apoyo en diseño de etiquetas.",
    cta: "Agenda una llamada",
  },
  {
    tipo: "personalizado",
    descripcion:
      "Cuéntanos tu evento y creamos un brief con cantidades, paleta y fragancias. Incluye muestras previas y entrega coordinada.",
    cta: "Llenar formulario",
  },
  {
    tipo: "wax-melts",
    descripcion:
      "Combos personalizados desde $1 con formas temáticas, ideales para detalles y recordatorios.",
    cta: "Conoce los combos",
  },
];
