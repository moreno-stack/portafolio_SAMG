"use client";

import React, { useState } from "react";
import type { HeroProject } from "@/components/hero/heroProjects";

type LaptopProps = {
  project: HeroProject;
  Logo: React.ComponentType<{ className?: string }>;
  Demo: React.ComponentType;
  tilt: "left" | "right";
  size: "lg" | "sm";
  className?: string;
  onOpen: () => void;
};

/**
 * Laptop del Hero. En reposo muestra el logo del proyecto; al pasar el mouse
 * (o enfocarla con teclado) gira de frente y arranca la mini demo. Al hacer clic
 * abre la ventana con el detalle del proyecto.
 *
 * La pantalla no recibe eventos del puntero: así el clic siempre llega al botón,
 * aunque el contenido cambie de logo a demo justo al presionar (pasa mucho en táctil).
 */
export default function ProjectLaptop({
  project,
  Logo,
  Demo,
  tilt,
  size,
  className = "",
  onOpen,
}: LaptopProps) {
  const [active, setActive] = useState(false);
  const isLg = size === "lg";

  const rest =
    tilt === "left"
      ? "[transform:rotateY(24deg)_rotateX(4deg)]"
      : "[transform:rotateY(-24deg)_rotateX(4deg)]";

  return (
    <button
      type="button"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      onClick={onOpen}
      aria-label={`Ver proyecto ${project.name}`}
      className={`absolute block cursor-pointer text-left outline-none [perspective:1100px] ${
        active ? "z-40" : "z-10"
      } ${className}`}
    >
      <div
        className={`transition-transform duration-500 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] ${
          active ? "[transform:rotateY(0deg)_rotateX(0deg)_translateY(-6px)_scale(1.1)]" : rest
        }`}
      >
        {/* Pantalla */}
        <div
          className="relative rounded-t-xl rounded-b-sm border border-white/15 bg-[#140a2b] p-1.5 transition-shadow duration-500 sm:p-2"
          style={{
            boxShadow: active
              ? `0 0 70px -6px ${project.accent}, 0 0 0 1px ${project.accent}66`
              : "0 0 45px -8px rgba(168,85,247,0.75)",
          }}
        >
          <div
            className={`pointer-events-none relative overflow-hidden rounded-md bg-[radial-gradient(circle_at_50%_40%,#3b1675_0%,#140a2b_62%,#0b0618_100%)] ${
              isLg ? "aspect-[16/10]" : "aspect-[16/10.5]"
            }`}
          >
            {active ? (
              <Demo />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_0,transparent_3px,rgba(255,255,255,0.025)_3px,rgba(255,255,255,0.025)_4px)] bg-[length:100%_4px]" />
                <Logo
                  className={`relative drop-shadow-[0_0_14px_rgba(192,132,252,0.75)] ${
                    isLg ? "size-12 sm:size-16 lg:size-20" : "size-9 sm:size-11 lg:size-12"
                  }`}
                />
                <p
                  className={`relative mt-2 text-center font-display uppercase leading-tight tracking-wide text-balance text-white ${
                    isLg ? "text-[9px] sm:text-xs lg:text-sm" : "text-[7px] sm:text-[9px] lg:text-[10px]"
                  }`}
                >
                  {project.name}
                </p>
                <p className="relative mt-1 hidden text-center font-mono text-[8px] text-violet-200/70 sm:block lg:text-[9px]">
                  {project.tag}
                </p>
              </div>
            )}

            {/* Barra superior tipo editor (siempre visible) */}
            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center gap-1 px-2 py-1.5">
              <span className="size-1.5 rounded-full bg-fuchsia-400/70" />
              <span className="size-1.5 rounded-full bg-violet-400/50" />
              <span className="size-1.5 rounded-full bg-indigo-400/40" />
            </div>

            {/* Pista de interacción */}
            <span
              className={`pointer-events-none absolute right-1.5 bottom-1 rounded-full bg-black/55 px-1.5 py-[1px] font-mono text-[6px] text-white/80 transition-opacity duration-300 sm:text-[8px] ${
                active ? "opacity-100" : "opacity-0"
              }`}
            >
              clic para abrir ↗
            </span>
          </div>
        </div>
        {/* Base / teclado */}
        <div className="relative mx-auto -mt-px h-2.5 w-[112%] -translate-x-[5.4%] rounded-b-xl border border-white/10 bg-gradient-to-b from-[#6d4bb3] to-[#2a1755] shadow-[0_18px_30px_-10px_rgba(124,58,237,0.8)] sm:h-3.5">
          <div className="absolute left-1/2 top-0 h-1 w-1/5 -translate-x-1/2 rounded-b-md bg-black/30" />
        </div>
      </div>
    </button>
  );
}
