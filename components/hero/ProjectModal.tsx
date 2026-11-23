"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Check, X } from "lucide-react";
import type { HeroProject } from "@/components/hero/heroProjects";

type ModalProps = {
  project: HeroProject;
  Logo: React.ComponentType<{ className?: string }>;
  Demo: React.ComponentType;
  onClose: () => void;
};

/** Ventana estilo app de escritorio con la demo en grande y el detalle del proyecto. */
export default function ProjectModal({ project, Logo, Demo, onClose }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05010d]/75 p-3 backdrop-blur-md sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="hero-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="animate-window-in relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/15 bg-[#120827] text-white shadow-2xl"
        style={{ boxShadow: `0 0 90px -20px ${project.accent}` }}
      >
        {/* Barra de título */}
        <div className="sticky top-0 z-10 flex items-center gap-2 border-b border-white/10 bg-[#120827]/95 px-4 py-3 backdrop-blur">
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="size-3 rounded-full bg-rose-400 transition hover:brightness-125"
          />
          <span className="size-3 rounded-full bg-amber-300/80" />
          <span className="size-3 rounded-full bg-emerald-400/80" />
          <p className="ml-3 truncate font-mono text-xs text-violet-200/70">
            ~/proyectos/{project.id}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana"
            className="ml-auto rounded-full p-1.5 text-violet-200 transition hover:bg-white/10"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="grid gap-6 p-5 sm:p-7 md:grid-cols-2">
          {/* Demo en grande */}
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#0b0618] [&_p]:!text-[11px] [&_span]:!text-[10px] [&_li]:!text-xs">
              <Demo />
            </div>
            <p className="mt-2 text-center font-mono text-[11px] text-violet-200/60">
              {project.id === "nexus-7"
                ? "Mueve el mouse sobre la pantalla para esquivar los asteroides"
                : "Vista previa interactiva"}
            </p>
          </div>

          {/* Detalle */}
          <div>
            <div className="flex items-center gap-3">
              <Logo className="size-12 shrink-0 drop-shadow-[0_0_12px_rgba(192,132,252,0.7)]" />
              <div>
                <h3 id="hero-modal-title" className="font-display text-2xl uppercase leading-tight">
                  {project.name}
                </h3>
                <p className="font-mono text-xs text-violet-200/70">{project.tag}</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-violet-100/80">
              {project.summary}
            </p>

            <ul className="mt-4 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-violet-50">
                  <Check className="mt-0.5 size-4 shrink-0" style={{ color: project.accent }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
              >
                Ver en GitHub
                <ArrowUpRight className="size-4" />
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
                >
                  Ver demo en vivo
                  <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
