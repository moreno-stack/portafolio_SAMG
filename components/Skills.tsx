"use client";

import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Blocks, Code2, Users, Wrench } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/variants";

const QuantumScene = dynamic(() => import("@/components/canvas/QuantumScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-20 w-20 animate-pulse rounded-full border border-stone-300 bg-stone-100" />
    </div>
  ),
});

type SkillItem = {
  name: string;
  level: number;
  stage: string;
  summary: string;
};

type SkillCategory = {
  id: string;
  title: string;
  accent: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    id: "frontend-ui",
    title: "Desarrollo Web & UI",
    accent: "#8E5B47",
    icon: Blocks,
    skills: [
      {
        name: "HTML5 Semántico & CSS3 Responsive",
        level: 85,
        stage: "Sólido",
        summary:
          "Maquetación adaptable a computador, tablet y móvil con buenas prácticas de estructura.",
      },
      {
        name: "JavaScript & TypeScript",
        level: 75,
        stage: "Intermedio",
        summary:
          "Manejo del DOM, eventos, consumo de APIs REST y tipado de componentes.",
      },
      {
        name: "React & Next.js (App Router)",
        level: 74,
        stage: "En práctica",
        summary:
          "Creación de interfaces por componentes reutilizables y despliegue en Vercel.",
      },
      {
        name: "Tailwind CSS & Diseño de Interfaces",
        level: 82,
        stage: "Sólido",
        summary:
          "Aplicación de jerarquía tipográfica, contraste visual y sistemas de grillas.",
      },
    ],
  },
  {
    id: "programacion-bd",
    title: "Programación & Bases de Datos",
    accent: "#18181B",
    icon: Code2,
    skills: [
      {
        name: "Java & Programación Orientada a Objetos",
        level: 78,
        stage: "Universitario",
        summary:
          "Clases, herencia, polimorfismo, interfaces y modelado mediante diagramas UML.",
      },
      {
        name: "Python & Aplicaciones de Escritorio",
        level: 76,
        stage: "Universitario",
        summary:
          "Lógica algorítmica, estructuras de datos e interfaces gráficas con PySide6.",
      },
      {
        name: "Bases de Datos Relacionales (SQL)",
        level: 72,
        stage: "Intermedio",
        summary:
          "Diseño entidad-relación, consultas SELECT/JOIN y persistencia de datos.",
      },
      {
        name: "C# & Fundamentos en Unity 3D",
        level: 68,
        stage: "Académico",
        summary:
          "Scripts de comportamiento, control de estados básicos e interacción en entornos 3D.",
      },
    ],
  },
  {
    id: "herramientas-git",
    title: "Herramientas de Desarrollo",
    accent: "#8E5B47",
    icon: Wrench,
    skills: [
      {
        name: "Git & GitHub (moreno-stack)",
        level: 80,
        stage: "Uso diario",
        summary:
          "Control de versiones, ramas, commits ordenados y publicación de repositorios.",
      },
      {
        name: "Visual Studio Code & Entorno Dev",
        level: 85,
        stage: "Uso diario",
        summary:
          "Depuración de código, extensiones de productividad y validación con ESLint.",
      },
      {
        name: "Despliegue Web en Vercel",
        level: 78,
        stage: "Intermedio",
        summary:
          "Publicación continua de proyectos web conectados directamente con GitHub.",
      },
      {
        name: "Inglés Técnico Básico (Cambridge)",
        level: 65,
        stage: "Básico A2",
        summary:
          "Comprensión de lectura de documentación oficial, guías y foros técnicos.",
      },
    ],
  },
  {
    id: "competencias-personales",
    title: "Habilidades Personales",
    accent: "#22C55E",
    icon: Users,
    skills: [
      {
        name: "Atención al Cliente y Comunicación",
        level: 95,
        stage: "Destacado",
        summary:
          "Trato amable, respetuoso y escucha activa adquirida en entornos comerciales reales.",
      },
      {
        name: "Trabajo en Equipo y Colaboración",
        level: 94,
        stage: "Destacado",
        summary:
          "Buena integración en grupos de estudio universitarios y turnos laborales.",
      },
      {
        name: "Responsabilidad y Puntualidad",
        level: 96,
        stage: "Destacado",
        summary:
          "Compromiso constante con horarios, entregas académicas y metas asignadas.",
      },
      {
        name: "Disposición de Aprendizaje",
        level: 95,
        stage: "Destacado",
        summary:
          "Actitud proactiva para aprender nuevas tecnologías y recibir retroalimentación.",
      },
    ],
  },
];

export default function Skills() {
  const [activeId, setActiveId] = useState<string>("frontend-ui");
  const activeCategory =
    skillCategories.find((cat) => cat.id === activeId) ?? skillCategories[0];

  return (
    <section
      id="habilidades"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <motion.div
        variants={staggerContainer(0.08, 0.04)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Barra superior de sinergia editorial con numeración continua: 06 (Sección adicional antes del pie de página) */}
        <motion.div variants={fadeIn("up", 0.03)} className="editorial-index-bar">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--clay)]">
            06 / Habilidades y Competencias
          </span>
          <span className="font-mono text-xs text-[var(--muted-foreground)]">
            [SECCIÓN ADICIONAL · 5.° SEMESTRE ING. SOFTWARE]
          </span>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.05)}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <h2 className="font-display text-5xl uppercase leading-none sm:text-6xl md:text-7xl lg:text-8xl">
              Mis <span className="text-outline">Habilidades</span>
            </h2>
            <p className="mt-3 max-w-xl text-xs font-medium leading-relaxed text-[var(--muted-foreground)] sm:text-sm">
              Conocimientos técnicos que he construido hasta quinto semestre de
              Ingeniería de Software en la UCC, junto con las habilidades
              interpersonales fortalecidas en mi experiencia laboral.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              const isSelected = category.id === activeCategory.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveId(category.id)}
                  className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition sm:py-2.5 sm:text-sm ${
                    isSelected
                      ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]"
                      : "border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  <Icon className="size-4 shrink-0" />
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-10 grid items-stretch gap-6 sm:mt-12 lg:grid-cols-12 lg:gap-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            {activeCategory.skills.map((skill, idx) => (
              <motion.div
                key={`${activeCategory.id}-${skill.name}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="editorial-card flex flex-col justify-between p-5 transition duration-300 hover:-translate-y-1 hover:!border-[var(--clay)] hover:!bg-[#FCFBF9] sm:p-6"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-[var(--foreground)] sm:text-base">
                      {skill.name}
                    </h3>
                    <span className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--background)] px-2.5 py-0.5 font-mono text-[11px] font-bold text-[var(--clay)]">
                      {skill.stage} · {skill.level}%
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--muted-foreground)] sm:text-sm">
                    {skill.summary}
                  </p>
                </div>

                <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-[var(--border)]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    className="h-full rounded-full bg-[var(--primary)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="editorial-card relative flex min-h-[290px] flex-col justify-between overflow-hidden p-6 sm:min-h-[330px] lg:col-span-4">
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                Figura 3D · {activeCategory.title}
              </span>
              <span className="size-2.5 rounded-full bg-[var(--clay)]" />
            </div>

            <div className="absolute inset-0">
              <Suspense fallback={null}>
                <QuantumScene
                  variant="compact"
                  accentColor={activeCategory.accent}
                  className="h-full w-full"
                />
              </Suspense>
            </div>

            <div className="relative z-10 rounded-full border border-[var(--border)] bg-[var(--background)]/92 px-4 py-2 text-center text-xs font-medium backdrop-blur-xs">
              Mueve el cursor para rotar el poliedro 3D
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
