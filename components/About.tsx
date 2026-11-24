"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Globe2,
  GraduationCap,
  Languages,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/variants";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const quickFacts = [
  {
    emoji: "📍",
    label: "Ubicación",
    value: "Pasto, Nariño, Colombia",
    detail: "Disponibilidad local y remota",
    icon: MapPin,
  },
  {
    emoji: "🎓",
    label: "Formación Actual",
    value: "5.° Semestre Ing. Software",
    detail: "Universidad Cooperativa de Colombia",
    icon: GraduationCap,
  },
  {
    emoji: "💻",
    label: "Enfoque Académico",
    value: "Desarrollo Web & UI/UX",
    detail: "React • Next.js • Python • Java",
    icon: Code2,
  },
];

const impactMetrics = [
  {
    target: 5,
    suffix: ".°",
    label: "Semestre en Curso",
    sub: "Ingeniería de Software — UCC",
  },
  {
    target: 6,
    suffix: "",
    label: "Proyectos Destacados",
    sub: "Académicos y personales en GitHub",
  },
  {
    target: 3,
    suffix: "",
    label: "Experiencias Laborales",
    sub: "Asados al Barril · Beer Point · Ventas",
  },
  {
    target: 100,
    suffix: "%",
    label: "Disposición y Compromiso",
    sub: "Puntualidad y aprendizaje continuo",
  },
];

const skillPills = [
  "HTML5 & CSS3",
  "JavaScript & TypeScript",
  "React & Next.js",
  "Tailwind CSS",
  "Diseño de Interfaces UI/UX",
  "Python & SQL",
  "Java POO & UML",
  "Git & GitHub",
  "Trabajo en Equipo",
  "Atención al Cliente",
];

export default function About() {
  const [activeTab, setActiveTab] = useState<"perfil" | "educacion">("perfil");

  return (
    <section
      id="sobre-mi"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <motion.div
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        {/* Barra superior de sinergia editorial con numeración continua: 01 */}
        <motion.div variants={fadeIn("up", 0.04)} className="editorial-index-bar">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--clay)]">
            01 / Acerca de mí
          </span>
          <span className="font-mono text-xs text-[var(--muted-foreground)]">
            [ESTUDIANTE 5.° SEMESTRE · UCC PASTO]
          </span>
        </motion.div>

        {/* Cabecera monumental estilo Lively Workbook */}
        <motion.div
          variants={fadeIn("up", 0.06)}
          className="mb-10 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-end"
        >
          <h2 className="font-display text-5xl uppercase leading-none sm:text-6xl md:text-7xl lg:text-8xl">
            Acerca <span className="text-outline">de Mí</span>
          </h2>
          <p className="max-w-md text-xs font-medium leading-relaxed text-[var(--muted-foreground)] sm:text-sm">
            Formación universitaria en Ingeniería de Software complementada con
            experiencia real en atención al público y trabajo en equipo.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Columna izquierda: Presentación en primera persona + Datos rápidos */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            className="editorial-card flex flex-col justify-between p-6 sm:p-8 lg:col-span-7 lg:p-10"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-3.5 py-1.5 text-xs font-semibold">
                <ShieldCheck className="size-3.5 shrink-0 text-[var(--clay)]" />
                <span>Responsabilidad, compromiso y actitud proactiva</span>
              </span>

              <h3 className="mt-5 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl">
                Estudiante de quinto semestre enfocado en aprender, construir y
                aportar soluciones claras
              </h3>

              {/* Lectura rápida en primera persona (< 20 segundos) */}
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base lg:text-lg">
                Soy{" "}
                <strong className="text-[var(--foreground)]">
                  Samuel Alejandro Moreno Gómez
                </strong>
                , estudiante de quinto semestre de Ingeniería de Software en la{" "}
                <strong className="text-[var(--foreground)]">
                  Universidad Cooperativa de Colombia (Sede Pasto)
                </strong>
                . Me apasiona el desarrollo web, el diseño de interfaces y la
                programación estructurada. Además de mi formación académica,
                cuento con experiencia laboral en atención al cliente, gestión
                de pedidos y apoyo logístico, lo que ha fortalecido mi
                comunicación, puntualidad y capacidad para trabajar en equipo.
              </p>

              {/* Tarjetas de datos rápidos obligatorias */}
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4 transition hover:border-[var(--clay)]"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-[var(--muted-foreground)]">
                      <span aria-hidden="true" className="text-base">
                        {fact.emoji}
                      </span>
                      <span>{fact.label}</span>
                    </div>
                    <p className="mt-1.5 text-sm font-bold">{fact.value}</p>
                    <p className="mt-0.5 text-xs text-[var(--muted-foreground)]">
                      {fact.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Píldoras de habilidades */}
            <div className="mt-8 border-t border-[var(--border)] pt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)]">
                Tecnologías y competencias en formación
              </p>
              <div className="flex flex-wrap gap-2">
                {skillPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs font-semibold transition hover:border-[var(--clay)]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Columna derecha: Ficha Workbook interactiva + Idiomas */}
          <motion.div
            variants={fadeIn("left", 0.16)}
            className="editorial-card flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/samuel-avatar.jpg"
                    alt="Retrato de Samuel Alejandro Moreno Gómez"
                    width={64}
                    height={64}
                    className="size-14 rounded-2xl border border-[var(--border)] object-cover object-top shadow-xs"
                  />
                  <div>
                    <h4 className="text-sm font-bold sm:text-base">
                      Samuel A. Moreno Gómez
                    </h4>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      Estudiante UCC · Pasto, Nariño
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 rounded-full border border-[var(--border)] bg-[var(--background)] p-1 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setActiveTab("perfil")}
                    className={`rounded-full px-3 py-1 transition ${
                      activeTab === "perfil"
                        ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                        : "text-[var(--muted-foreground)]"
                    }`}
                  >
                    Ficha
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("educacion")}
                    className={`rounded-full px-3 py-1 transition ${
                      activeTab === "educacion"
                        ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                        : "text-[var(--muted-foreground)]"
                    }`}
                  >
                    Estudios
                  </button>
                </div>
              </div>

              {activeTab === "perfil" ? (
                <div className="mt-6 space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4 font-mono text-xs leading-relaxed sm:p-5">
                  <div className="flex items-center justify-between gap-2 border-b border-[var(--border)] pb-2.5">
                    <span className="text-[var(--muted-foreground)]">
                      SEMESTRE:
                    </span>
                    <span className="text-right font-bold">
                      5.° Semestre Ing. Software
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 border-b border-[var(--border)] pb-2.5">
                    <span className="text-[var(--muted-foreground)]">
                      UNIVERSIDAD:
                    </span>
                    <span className="text-right font-bold">UCC Sede Pasto</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 border-b border-[var(--border)] pb-2.5">
                    <span className="text-[var(--muted-foreground)]">
                      GITHUB:
                    </span>
                    <span className="text-right font-bold text-[var(--clay)]">
                      github.com/moreno-stack
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[var(--muted-foreground)]">
                      INTERESES:
                    </span>
                    <span className="text-right font-bold">
                      Frontend · UI/UX · Web
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mt-6 space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4 text-xs sm:p-5">
                  <div className="border-b border-[var(--border)] pb-2.5">
                    <p className="font-mono font-bold text-[var(--clay)]">
                      En curso (5.° Semestre)
                    </p>
                    <p className="font-bold">Ingeniería de Software</p>
                    <p className="text-[var(--muted-foreground)]">
                      Universidad Cooperativa de Colombia — Sede Pasto
                    </p>
                  </div>
                  <div className="border-b border-[var(--border)] pb-2.5">
                    <p className="font-mono font-bold text-[var(--clay)]">
                      Educación Media
                    </p>
                    <p className="font-bold">Bachiller Académico</p>
                    <p className="text-[var(--muted-foreground)]">
                      I.E.M. Nuestra Señora de las Lajas (Pasto)
                    </p>
                  </div>
                  <div>
                    <p className="font-mono font-bold text-[var(--clay)]">
                      Formación Complementaria
                    </p>
                    <p className="font-bold">Inglés Básico</p>
                    <p className="text-[var(--muted-foreground)]">
                      Cambridge Academy (Pasto)
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Idiomas + Conector sinérgico a Proyectos */}
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--muted-foreground)]">
                    <Globe2 className="size-3.5 text-[var(--clay)]" />
                    <span>Español</span>
                  </div>
                  <p className="mt-1 text-sm font-bold sm:text-base">Nativo</p>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--muted-foreground)]">
                    <Languages className="size-3.5 text-[var(--clay)]" />
                    <span>Inglés</span>
                  </div>
                  <p className="mt-1 text-sm font-bold sm:text-base">
                    Básico (Cambridge)
                  </p>
                </div>
              </div>

              <a
                href="#proyectos"
                className="group flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-xs font-bold transition hover:border-[var(--clay)] hover:bg-[#FCFBF9]"
              >
                <span>Ver mis proyectos universitarios y de código</span>
                <ArrowUpRight className="size-4 text-[var(--clay)] transition group-hover:rotate-45" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Contadores numéricos con efecto hover editorial legible */}
        <motion.div
          variants={fadeIn("up", 0.22)}
          className="mt-6 grid grid-cols-2 gap-3.5 sm:mt-8 sm:gap-4 lg:grid-cols-4"
        >
          {impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="editorial-card group p-5 text-left transition duration-300 hover:-translate-y-1 hover:!border-[var(--clay)] hover:!bg-[#FCFBF9] sm:p-6"
            >
              <p className="font-display text-3xl text-[var(--foreground)] transition-colors group-hover:text-[var(--clay)] sm:text-4xl md:text-5xl">
                <AnimatedCounter
                  target={metric.target}
                  suffix={metric.suffix}
                />
              </p>
              <p className="mt-2 text-xs font-bold text-[var(--foreground)] sm:text-sm">
                {metric.label}
              </p>
              <p className="mt-0.5 text-[11px] text-[var(--muted-foreground)] sm:text-xs">
                {metric.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
