export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: [string, string, string];
  technologies: string[];
  whatsappMessage: string;
  accentColor: "cyan" | "indigo" | "emerald";
}

export const servicePackages: ServicePackage[] = [
  {
    id: "desarrollo-web-landing",
    title: "Desarrollo de Sitios Web & Landing Pages de Alto Impacto",
    subtitle: "Presencia digital rápida, moderna y orientada a conversión",
    description:
      "Construcción de sitios corporativos, portafolios profesionales y páginas de aterrizaje optimizadas para velocidad móvil, posicionamiento SEO y captación directa de clientes.",
    deliverables: [
      "Diseño y desarrollo 100% responsive (móvil, tablet y escritorio)",
      "Integración directa con WhatsApp, formularios y redes sociales",
      "Despliegue en la nube en Vercel con certificado SSL y carga ultrarrápida",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],
    whatsappMessage:
      "Hola Samuel, vi tu portafolio SAMG.dev y me interesa cotizar el servicio de Desarrollo de Sitio Web / Landing Page de Alto Impacto.",
    accentColor: "cyan",
  },
  {
    id: "diseno-uiux-3d",
    title: "Diseño UI/UX & Experiencias Interactivas 3D (WebGL)",
    subtitle: "Interfaces memorables con estética contemporánea y 60 FPS",
    description:
      "Creación de interfaces bajo principios de usabilidad académica, microinteracciones fluidas con Framer Motion y escenas 3D ligeras en Three.js para diferenciar marcas tecnológicas.",
    deliverables: [
      "Sistema visual personalizado con jerarquía clara y contraste accesible",
      "Componentes interactivos animados y escenas WebGL optimizadas",
      "Código modular y tipado listo para escalar en producción",
    ],
    technologies: [
      "Three.js / R3F",
      "Framer Motion",
      "UI/UX Design",
      "Glassmorphism",
    ],
    whatsappMessage:
      "Hola Samuel, vi tu portafolio SAMG.dev y me gustaría conversar sobre Diseño UI/UX y Experiencias Interactivas 3D.",
    accentColor: "indigo",
  },
  {
    id: "digitalizacion-restaurantes-pos",
    title: "Digitalización para Restaurantes y Comercios Locales",
    subtitle: "Soluciones diseñadas desde la experiencia operativa real en salón",
    description:
      "Implementación de catálogos interactivos, menús digitales QR, paneles de seguimiento de pedidos y flujos ágiles de atención inspirados en la operación real de restaurantes y bares.",
    deliverables: [
      "Menú o catálogo digital interactivo administrable y rápido en celular",
      "Flujo estructurado de pedidos hacia WhatsApp o panel operativo",
      "Capacitación práctica de uso para el equipo de atención al cliente",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "UX Gastronómico",
      "WhatsApp Workflows",
    ],
    whatsappMessage:
      "Hola Samuel, tengo un restaurante/comercio y me interesa tu servicio de Digitalización, Menú QR o Gestión de Pedidos.",
    accentColor: "emerald",
  },
  {
    id: "soporte-maquetacion-software",
    title: "Soporte Técnico, Maquetación & Colaboración en Software",
    subtitle: "Refuerzo proactivo para equipos de desarrollo y proyectos académicos",
    description:
      "Apoyo comprometido en maquetación de componentes frontend, migración a TypeScript/Tailwind, control de versiones con Git/GitHub, pruebas funcionales y documentación limpia.",
    deliverables: [
      "Componentes reutilizables en React / Next.js fieles al diseño",
      "Flujo ordenado mediante ramas y Pull Requests en GitHub",
      "Documentación clara, validación sin errores de compilación y entrega puntual",
    ],
    technologies: ["Git & GitHub", "React 19", "TypeScript", "Python / Java / C#"],
    whatsappMessage:
      "Hola Samuel, revisé tu perfil en GitHub (moreno-stack) y me gustaría contactarte para colaborar en un proyecto de software o vinculación.",
    accentColor: "cyan",
  },
];

