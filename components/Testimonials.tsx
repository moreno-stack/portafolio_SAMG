"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Verified } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/variants";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  relationshipContext: string;
  content: string;
  competenciesValidated: string[];
}

export const testimonials: TestimonialItem[] = [
  {
    id: "ucc-docente-software",
    name: "Docente del Programa de Ingeniería de Software",
    role: "Profesor de Diseño de Interfaces y Desarrollo Web",
    organization: "Universidad Cooperativa de Colombia (Sede Pasto)",
    relationshipContext:
      "Seguimiento académico y entregas de semestre en Ingeniería de Software",
    content:
      "Samuel se destaca en clase por su responsabilidad con las entregas, el cuidado en los detalles visuales de sus interfaces y su buena disposición para trabajar en equipo con sus compañeros. Siempre muestra interés genuino por aprender nuevas herramientas web.",
    competenciesValidated: [
      "Diseño de Interfaces",
      "Cumplimiento Académico",
      "Trabajo en Equipo",
    ],
  },
  {
    id: "asados-al-barril-admin",
    name: "Administración y Coordinación de Salón",
    role: "Gestión de Servicio al Cliente",
    organization: "Restaurante Familiar Asados al Barril — Pasto",
    relationshipContext: "Atención en salón, toma de pedidos y apoyo logístico",
    content:
      "Durante el tiempo que nos ha apoyado en el restaurante, Samuel ha demostrado ser un joven muy puntual, respetuoso y organizado con los pedidos. En los momentos de mayor movimiento mantiene la calma y atiende a las familias con mucha amabilidad.",
    competenciesValidated: [
      "Orden en Pedidos",
      "Trato Amable",
      "Puntualidad",
    ],
  },
  {
    id: "beer-point-coordinacion",
    name: "Coordinación de Turno y Servicio",
    role: "Supervisión Operativa",
    organization: "Beer Point — Pasto, Nariño",
    relationshipContext:
      "Atención al público y apoyo logístico en jornadas de alta demanda",
    content:
      "Es una persona colaboradora y comprometida con las metas de cada jornada. Se adapta rápido al ritmo de trabajo, se comunica con claridad con todo el equipo y siempre está dispuesto a apoyar donde se le necesite.",
    competenciesValidated: [
      "Adaptabilidad",
      "Comunicación Asertiva",
      "Compromiso",
    ],
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <motion.div
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        {/* Barra superior de sinergia editorial con numeración continua: 03 */}
        <motion.div variants={fadeIn("up", 0.03)} className="editorial-index-bar">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--clay)]">
            03 / Testimonios
          </span>
          <span className="font-mono text-xs text-[var(--muted-foreground)]">
            [REFERENCIAS ACADÉMICAS Y LABORALES · 03]
          </span>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.05)}
          className="mb-10 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-end"
        >
          <h2 className="font-display text-5xl uppercase leading-none sm:text-6xl md:text-7xl lg:text-8xl">
            Voces &amp; <span className="text-outline">Testimonios</span>
          </h2>
          <p className="max-w-md text-xs font-medium leading-relaxed text-[var(--muted-foreground)] sm:text-sm">
            Referencias sobre mi desempeño como estudiante de Ingeniería de
            Software en la UCC y mi experiencia laboral en Pasto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {testimonials.map((item, idx) => (
            <motion.blockquote
              key={item.id}
              variants={fadeIn("up", 0.1 + idx * 0.08)}
              className="editorial-card group relative flex flex-col justify-between overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:!border-[var(--clay)] hover:!bg-[#FCFBF9] hover:shadow-[0_24px_48px_-20px_rgba(142,91,71,0.18)] sm:p-8"
            >
              {/* Barra superior de acento terracota al pasar el mouse */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-[var(--clay)] transition-transform duration-300 group-hover:scale-x-100"
              />

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 group-hover:border-[var(--clay)] group-hover:bg-[var(--clay)] group-hover:text-white">
                      <Quote className="size-4" />
                    </span>
                    <span className="font-mono text-xs font-bold text-[var(--clay)]">
                      REF · 0{idx + 1}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-[11px] font-semibold text-[var(--foreground)]">
                    <Verified className="size-3.5 text-[var(--live)]" />
                    <span>Verificado</span>
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-[var(--foreground)]/85 transition-colors group-hover:text-[var(--foreground)] sm:text-base">
                  &ldquo;{item.content}&rdquo;
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {item.competenciesValidated.map((comp) => (
                    <span
                      key={comp}
                      className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-[11px] font-semibold text-[var(--foreground)] transition-colors group-hover:border-[var(--clay)]/40 group-hover:bg-[#F5EFEA]"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              <footer className="mt-8 border-t border-[var(--border)] pt-5 transition-colors group-hover:border-[var(--clay)]/30">
                <cite className="not-italic text-base font-bold text-[var(--foreground)]">
                  {item.name}
                </cite>
                <p className="mt-0.5 text-xs font-semibold text-[var(--clay)]">
                  {item.role}
                </p>
                <p className="mt-0.5 text-xs text-[var(--muted-foreground)]">
                  {item.organization}
                </p>
                <p className="mt-2 font-mono text-[11px] text-[var(--muted-foreground)]">
                  {item.relationshipContext}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
