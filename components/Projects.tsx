"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { type Project, projects } from "@/data/projects";
import { fadeIn, staggerContainer } from "@/lib/variants";

function GithubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

type CategoryFilter = "Todos" | Project["category"];

const categories: { id: CategoryFilter; label: string }[] = [
  { id: "Todos", label: "Todos [06]" },
  { id: "Desarrollo Web", label: "Desarrollo Web" },
  { id: "Interfaces & 3D", label: "Interfaces & 3D" },
  { id: "Académico UCC", label: "Académicos UCC" },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("Todos");

  const visibleProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="proyectos"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <motion.div
        variants={staggerContainer(0.08, 0.04)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.08 }}
      >
        {/* Barra superior de sinergia editorial con numeración continua: 02 */}
        <motion.div variants={fadeIn("up", 0.03)} className="editorial-index-bar">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--clay)]">
            02 / Mis proyectos
          </span>
          <span className="font-mono text-xs text-[var(--muted-foreground)]">
            [REPOSITORIOS EN GITHUB · MORENO-STACK]
          </span>
        </motion.div>

        {/* Cabecera estilo "Selected Work" de Lively Workbook */}
        <motion.div
          variants={fadeIn("up", 0.05)}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <h2 className="font-display text-5xl uppercase leading-none sm:text-6xl md:text-7xl lg:text-8xl">
            Mis <span className="text-outline">Proyectos</span>
          </h2>

          {/* Filtros editoriales en píldora */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                    active
                      ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]"
                      : "border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grilla responsive obligatoria (grid-cols-1 md:grid-cols-3) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:mt-14 lg:gap-8">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="editorial-card group flex flex-col justify-between p-4 transition duration-300 hover:-translate-y-1 hover:!border-[var(--clay)] hover:!bg-[#FCFBF9] sm:p-5"
            >
              <div>
                {/* Contenedor visual 4/3 con vista previa SVG editorial */}
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)]">
                  <Image
                    src={project.image}
                    alt={`Vista previa del proyecto ${project.title}`}
                    fill
                    unoptimized
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />

                  {/* Etiqueta flotante de categoría e índice */}
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2">
                    <span className="rounded-full border border-[var(--border)] bg-[var(--background)]/95 px-3 py-1 text-[11px] font-bold text-[var(--foreground)] shadow-xs backdrop-blur-xs">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-[var(--primary)] px-2.5 py-1 font-mono text-[11px] font-semibold text-[var(--primary-foreground)]">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Encabezado y año */}
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-extrabold leading-snug transition-colors group-hover:text-[var(--clay)] sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-[var(--clay)]">
                      {project.impactMetric}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--background)] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[var(--muted-foreground)]">
                    UCC
                  </span>
                </div>

                <p className="mt-2.5 text-xs leading-relaxed text-[var(--muted-foreground)] sm:text-sm">
                  {project.description}
                </p>

                {/* Etiquetas de tecnologías */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-[11px] font-semibold text-[var(--foreground)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enlaces obligatorios a GitHub (moreno-stack) y Demo */}
              <div className="mt-5 flex items-center gap-2.5 border-t border-[var(--border)] pt-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-pill inline-flex flex-1 items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold"
                >
                  <GithubIcon className="size-3.5 shrink-0" />
                  <span>Código</span>
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[var(--primary)] px-3.5 py-2.5 text-xs font-semibold text-[var(--primary-foreground)] transition hover:-translate-y-0.5"
                >
                  <span>Ver Proyecto</span>
                  <ArrowUpRight className="size-3.5 shrink-0 transition group-hover/btn:rotate-45" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Barra inferior hacia perfil completo de GitHub */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-[var(--border)] bg-[var(--muted)] p-6 sm:flex-row sm:px-8"
        >
          <div>
            <p className="text-sm font-bold sm:text-base">
              Explora todos mis repositorios de prácticas y semestres en GitHub
            </p>
            <p className="text-xs text-[var(--muted-foreground)]">
              Código fuente público de talleres de programación, estructuras de
              datos y desarrollo web en @moreno-stack.
            </p>
          </div>
          <a
            href="https://github.com/moreno-stack?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-pill inline-flex shrink-0 items-center gap-2 px-5 py-2.5 text-xs font-semibold sm:text-sm"
          >
            <GithubIcon className="size-4" />
            <span>Ver GitHub (@moreno-stack)</span>
            <ArrowUpRight className="size-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
