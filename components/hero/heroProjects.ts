export type HeroProjectId =
  | "descubre-pasto"
  | "alquiler-equipos"
  | "nexus-7"
  | "monitor-recuperacion";

export interface HeroProject {
  id: HeroProjectId;
  name: string;
  tag: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  /** Color de acento del proyecto (para brillos y botones). */
  accent: string;
}

export const heroProjects: Record<HeroProjectId, HeroProject> = {
  "descubre-pasto": {
    id: "descubre-pasto",
    name: "Descubre Pasto",
    tag: "Turismo · IA",
    summary:
      "Guía turística de San Juan de Pasto con un asistente de IA (Groq · Llama 3.3) que sugiere recorridos culturales y gastronómicos. Ahora la estoy llevando de web a app móvil con estilo neón nocturno.",
    highlights: [
      "Rutas sugeridas por IA a partir de consultas sencillas",
      "Diseño adaptable a móvil",
      "Versión web desplegada en Vercel",
    ],
    technologies: ["Next.js", "TypeScript", "API Groq", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/moreno-stack/descubre-pasto",
    liveUrl: "https://descubre-pasto.vercel.app",
    accent: "#22D3EE",
  },
  "alquiler-equipos": {
    id: "alquiler-equipos",
    name: "Alquiler de Equipos",
    tag: "Python · PySide6 · IA",
    summary:
      "Sistema inteligente de alquiler de equipos: app de escritorio con roles de administrador, empleado y cliente, inventario, reservas y módulos de IA explicable con consultas en lenguaje natural.",
    highlights: [
      "Consultas Text-to-SQL con IA (Groq)",
      "Más de 460 pruebas automatizadas (TDD)",
      "Ejecutable empaquetado con PyInstaller",
    ],
    technologies: ["Python", "PySide6", "SQL", "IA · Groq", "TDD"],
    githubUrl: "https://github.com/moreno-stack/AlquilerEquipos",
    accent: "#818CF8",
  },
  "nexus-7": {
    id: "nexus-7",
    name: "Nexus-7",
    tag: "Unity · C#",
    summary:
      "Escape Espacial: Nexus-7 es un videojuego 3D en Unity: una gran nave espacial con salas conectadas, puertas, ventanales y mapa en el inventario, que evoluciona hacia acción y supervivencia.",
    highlights: [
      "Una sola nave con salas unidas en orden",
      "Menú principal: nueva partida, continuar, configuración",
      "Desarrollo por fases con diseño, plan y pruebas",
    ],
    technologies: ["Unity 3D", "C#", "POO", "Máquinas de estados"],
    githubUrl: "https://github.com/moreno-stack/Nexuz-7",
    accent: "#F472B6",
  },
  "monitor-recuperacion": {
    id: "monitor-recuperacion",
    name: "Monitor de Recuperación",
    tag: "Wear OS · Galaxy Watch",
    summary:
      "Monitor de Recuperación Inteligente: app para smartwatch de bienestar deportivo que calcula una puntuación de recuperación de 0 a 100 con IA, pensada para el Samsung Galaxy Watch4.",
    highlights: [
      "Puntuación 0–100 con línea base de 28 días",
      "Funciona en el reloj, sin app compañera",
      "Solo bienestar deportivo, sin diagnósticos médicos",
    ],
    technologies: ["Wear OS", "Android Studio", "IA", "TDD"],
    githubUrl: "https://github.com/moreno-stack",
    accent: "#34D399",
  },
};
