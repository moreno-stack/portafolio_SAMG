export interface Project {
  id: string;
  title: string;
  category: "Desarrollo Web" | "Interfaces & 3D" | "Académico UCC";
  description: string;
  problemSolved: string;
  impactMetric: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "descubre-pasto-ia",
    title: "Descubre Pasto — Guía Web con Asistente IA",
    category: "Desarrollo Web",
    description:
      "Aplicación web enfocada en el turismo de San Juan de Pasto que integra la API de Groq (Llama 3.3) para sugerir recorridos culturales y gastronómicos a partir de consultas sencillas.",
    problemSolved:
      "Proyecto práctico para aprender integración de APIs de inteligencia artificial, rutas dinámicas y diseño adaptable a dispositivos móviles.",
    impactMetric: "Proyecto Web • Desplegado en Vercel",
    image: "/images/descubre-pasto.svg",
    technologies: ["Next.js", "TypeScript", "API Groq", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/moreno-stack/descubre-pasto",
    liveUrl: "https://descubre-pasto.vercel.app",
    featured: true,
  },
  {
    id: "portafolio-diseno-interfaces",
    title: "Portafolio Personal — Diseño de Interfaces",
    category: "Interfaces & 3D",
    description:
      "Proyecto académico para la asignatura de Diseño de Interfaces en la UCC. Implementa diseño editorial adaptable a PC, tablet y móvil, junto con una figura geométrica interactiva en Three.js.",
    problemSolved:
      "Aplica principios de jerarquía visual, tipografía, usabilidad y maquetación por componentes con React y Tailwind CSS.",
    impactMetric: "Entrega Académica UCC • 100% Responsive",
    image: "/images/portfolio-3d.svg",
    technologies: [
      "Next.js",
      "React",
      "Three.js / R3F",
      "Framer Motion",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/moreno-stack/portafolio",
    liveUrl: "https://github.com/moreno-stack/portafolio",
    featured: true,
  },
  {
    id: "alquiler-equipos-python",
    title: "Sistema de Alquiler de Equipos e Inventario",
    category: "Académico UCC",
    description:
      "Aplicación de escritorio desarrollada en Python con interfaz gráfica en PySide6 y base de datos relacional para gestionar reservas de equipos, control de entregas y consultas SQL.",
    problemSolved:
      "Proyecto de semestre enfocado en modelado de bases de datos, control de estados de préstamos y validación de formularios.",
    impactMetric: "Proyecto de Semestre • Python + SQL",
    image: "/images/gastropos.svg",
    technologies: ["Python", "PySide6", "SQL", "Alembic", "Git"],
    githubUrl: "https://github.com/moreno-stack/AlquilerEquipos",
    liveUrl: "https://github.com/moreno-stack/AlquilerEquipos",
  },
  {
    id: "escape-espacial-nexus-7",
    title: "Escape Espacial: Nexus-7 — Prototipo en Unity",
    category: "Interfaces & 3D",
    description:
      "Prototipo de videojuego 3D desarrollado en C# y Unity como práctica de programación orientada a objetos, lógica de estados para patrullaje básico e interacción con el entorno.",
    problemSolved:
      "Permitió afianzar conceptos de lógica de programación en C#, manejo de eventos, colisiones 3D y trabajo organizado por fases.",
    impactMetric: "Práctica en Unity 3D • Lógica en C#",
    image: "/images/nexus-7.svg",
    technologies: ["C#", "Unity 3D", "POO", "Control de Estados"],
    githubUrl: "https://github.com/moreno-stack/Nexuz-7",
    liveUrl: "https://github.com/moreno-stack/Nexuz-7",
  },
  {
    id: "monitor-recuperacion-smartwatch",
    title: "Monitor de Recuperación Inteligente — App para Smartwatch",
    category: "Interfaces & 3D",
    description:
      "Aplicación para smartwatch de bienestar deportivo que calcula una puntuación de recuperación de 0 a 100 con IA, a partir de una línea base de 28 días. Pensada para funcionar directamente en el Samsung Galaxy Watch4, sin app compañera.",
    problemSolved:
      "Proyecto por fases con pruebas (TDD), interfaz diseñada para pantallas redondas pequeñas y enfoque exclusivo en bienestar deportivo, sin diagnósticos médicos.",
    impactMetric: "App Wear OS • Galaxy Watch4",
    image: "/images/portfolio-3d.svg",
    technologies: ["Wear OS", "Android Studio", "IA", "TDD"],
    githubUrl: "https://github.com/moreno-stack",
    liveUrl: "https://github.com/moreno-stack",
  },
  {
    id: "control-emergencia-api",
    title: "Control de Emergencias — API y Vista Móvil",
    category: "Desarrollo Web",
    description:
      "Práctica de desarrollo web con un servidor ligero en Node.js y una interfaz móvil para registrar, clasificar y consultar reportes de incidentes con hora local de Colombia.",
    problemSolved:
      "Ejercicio práctico de comunicación cliente-servidor (REST), manejo de archivos JSON y diseño de interfaces para pantallas pequeñas.",
    impactMetric: "Práctica Full-Stack • Vista en Vercel",
    image: "/images/clima-narino.svg",
    technologies: ["Node.js", "JavaScript", "API REST", "HTML/CSS"],
    githubUrl: "https://github.com/moreno-stack/Control_Emergencia",
    liveUrl: "https://app-movile.vercel.app",
  },
  {
    id: "smart-library-web-gov",
    title: "Smart Library POO & Rediseño Web Gov.co",
    category: "Académico UCC",
    description:
      "Talleres universitarios que reúnen un sistema de préstamos bibliotecarios en Java aplicando Programación Orientada a Objetos (UML) y un ejercicio de rediseño accesible de portal web.",
    problemSolved:
      "Refuerza los fundamentos de herencia, polimorfismo e interfaces en Java junto con maquetación semántica en HTML5 y CSS3.",
    impactMetric: "Talleres Ingeniería UCC • Java & Web",
    image: "/images/taskflow-ucc.svg",
    technologies: ["Java POO", "Diagramas UML", "HTML5", "CSS3 Responsive"],
    githubUrl: "https://github.com/moreno-stack/Smart_library",
    liveUrl: "https://web-gov-co.vercel.app",
  },
];
