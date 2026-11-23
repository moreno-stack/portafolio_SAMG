"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, GraduationCap } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/variants";

export interface ExperienceItem {
  id: string;
  title: string;
  institution: string;
  location: string;
  period: string;
  type: "academica" | "laboral";
  description: string;
  highlights: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "ucc-ingenieria-software",
    title: "Ingeniería de Software (5.° Semestre en curso)",
    institution: "Universidad Cooperativa de Colombia (UCC)",
    location: "Sede Pasto, Nariño",
    period: "Actualidad — 5.° Semestre",
    type: "academica",
    description:
      "Formación universitaria en desarrollo de software, programación orientada a objetos, estructuras de datos, bases de datos relacionales y diseño de interfaces centradas en el usuario.",
    highlights: [
      "Proyectos académicos en Next.js, TypeScript, Python, Java y C# (Unity)",
      "Prácticas de trabajo colaborativo con control de versiones en Git y GitHub",
    ],
  },
  {
    id: "asados-barril-beer-point",
    title: "Atención al Cliente, Gestión de Pedidos y Apoyo Logístico",
    institution: "Restaurante Asados al Barril & Bar Beer Point",
    location: "Pasto, Nariño",
    period: "Experiencia Laboral",
    type: "laboral",
    description:
      "Desempeño en labores de servicio en salón, toma y gestión ágil de pedidos y apoyo logístico, fortaleciendo mis habilidades de comunicación, trabajo en equipo y resolución de imprevistos en jornadas de alta afluencia.",
    highlights: [
      "Coordinación efectiva con el equipo de trabajo para cumplir las metas del turno",
      "Trato amable, respetuoso y puntual orientado a la satisfacción del cliente",
    ],
  },
  {
    id: "sector-comercial-pinateria",
    title: "Ventas y Atención al Cliente en Entorno Comercial",
    institution: "Sector Comercial y Piñatería",
    location: "Pasto, Nariño",
    period: "Experiencia Laboral",
    type: "laboral",
    description:
      "Asesoría directa al público, organización de mercancía, alistamiento de pedidos y apoyo operativo en piso de venta.",
    highlights: [
      "Comunicación asertiva y disposición permanente para ayudar al cliente",
    ],
  },
  {
    id: "bachiller-lajas",
    title: "Bachiller Académico",
    institution: "I.E.M. Nuestra Señora de las Lajas",
    location: "Pasto, Nariño",
    period: "Educación Media",
    type: "academica",
    description:
      "Culminación de estudios de secundaria con énfasis académico, destacándome por la responsabilidad, el respeto institucional y el interés por las tecnologías de la información.",
    highlights: [
      "Base académica sólida y compromiso con el aprendizaje continuo",
    ],
  },
  {
    id: "cambridge-academy-ingles",
    title: "Formación en Idioma Inglés (Nivel Básico)",
    institution: "Cambridge Academy",
    location: "Pasto, Nariño",
    period: "Formación Complementaria",
    type: "academica",
    description:
      "Curso de formación en competencias básicas de inglés orientadas a la comprensión de lectura y vocabulario técnico utilizado en programación.",
    highlights: [
      "Lectura comprensiva de documentación técnica y recursos de desarrollo",
    ],
  },
];

type FilterType = "todas" | "academica" | "laboral";

export default function Experience() {
  const [filter, setFilter] = useState<FilterType>("todas");

  const filteredItems =
    filter === "todas"
      ? experienceItems
      : experienceItems.filter((it) => it.type === filter);

  return (
    <section
      id="experiencia"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <motion.div
        variants={staggerContainer(0.08, 0.04)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        {/* Barra superior de sinergia editorial con numeración continua: 04 */}
        <motion.div variants={fadeIn("up", 0.03)} className="editorial-index-bar">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--clay)]">
            04 / Experiencia académica y laboral
          </span>
          <span className="font-mono text-xs text-[var(--muted-foreground)]">
            [FORMACIÓN UCC &amp; EXPERIENCIA EN PASTO]
          </span>
        </motion.div>

        {/* Cabecera estilo Lively Workbook */}
        <motion.div
          variants={fadeIn("up", 0.05)}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <h2 className="font-display text-5xl uppercase leading-none sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-outline">Formación</span> &amp; Experiencia
          </h2>

          {/* Pestañas de filtrado */}
          <div className="flex flex-wrap gap-2">
            {(
              [
                { id: "todas", label: "Todas [05]" },
                { id: "academica", label: "Académica" },
                { id: "laboral", label: "Laboral" },
              ] as const
            ).map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                    active
                      ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]"
                      : "border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Línea de tiempo vertical con efecto hover editorial 100% legible */}
        <ol className="relative border-l-2 border-cyan-500/40 ml-4 mt-10 space-y-4 sm:mt-12">
          {filteredItems.map((it, index) => {
            const isAcademica = it.type === "academica";
            return (
              <motion.li
                key={it.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="ml-5 sm:ml-7"
              >
                <span className="absolute -left-[9px] mt-7 size-4 rounded-full border-2 border-[var(--background)] bg-[var(--primary)]" />

                <div className="editorial-card group p-5 transition duration-300 hover:-translate-y-1 hover:!border-[var(--clay)] hover:!bg-[#FCFBF9] sm:px-8 sm:py-6">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-xs font-semibold text-[var(--foreground)] transition-colors group-hover:border-[var(--clay)]/40">
                        {isAcademica ? (
                          <GraduationCap className="size-3.5 text-[var(--clay)]" />
                        ) : (
                          <Briefcase className="size-3.5 text-[var(--clay)]" />
                        )}
                        <span>{isAcademica ? "Académica" : "Laboral"}</span>
                      </span>
                      <h3 className="text-base font-extrabold text-[var(--foreground)] transition-colors group-hover:text-[var(--clay)] sm:text-lg md:text-xl">
                        {it.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                      <span className="font-bold text-[var(--foreground)]">
                        {it.institution}
                      </span>
                      <span className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[var(--clay)]">
                        {it.period}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-[var(--muted-foreground)] sm:text-sm">
                    {it.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {it.highlights.map((hl) => (
                      <span
                        key={hl}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-[11px] font-medium text-[var(--foreground)]"
                      >
                        <CheckCircle2 className="size-3 shrink-0 text-[var(--live)]" />
                        <span>{hl}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </motion.div>
    </section>
  );
}
