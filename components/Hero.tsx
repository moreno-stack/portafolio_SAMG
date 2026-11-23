"use client";
/* eslint-disable @next/next/no-img-element */

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import {
  ArrowUpRight,
  Download,
  FileText,
  GraduationCap,
  Mail,
  MessageCircle,
} from "lucide-react";

const QuantumScene = dynamic(() => import("@/components/canvas/QuantumScene"), {
  ssr: false,
  loading: () => null,
});

import {
  AlquilerEquiposLogo,
  DescubrePastoLogo,
  MonitorRecuperacionLogo,
  Nexus7Logo,
} from "@/components/ProjectLogos";

function GithubMark({ className = "size-4" }: { className?: string }) {
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

const marqueeItems = [
  "Ingeniería de Software (5.° Semestre)",
  "✦",
  "Universidad Cooperativa de Colombia",
  "✦",
  "Diseño de Interfaces UI/UX",
  "✦",
  "Desarrollo Web Frontend",
  "✦",
  "Trabajo en Equipo & Servicio",
  "✦",
  "Pasto, Nariño, Colombia",
  "✦",
];

type LaptopProps = {
  name: string;
  tag: string;
  Logo: React.ComponentType<{ className?: string }>;
  className?: string;
  tilt: "left" | "right";
  size: "lg" | "sm";
};

/** Laptop decorativa: en la pantalla va el logo del proyecto (sin estadísticas). */
function ProjectLaptop({ name, tag, Logo, className = "", tilt, size }: LaptopProps) {
  const isLg = size === "lg";
  return (
    <div
      className={`absolute [perspective:1100px] ${className}`}
      aria-label={`Proyecto ${name}`}
    >
      <div
        className={`transition duration-700 ${
          tilt === "left"
            ? "[transform:rotateY(24deg)_rotateX(4deg)]"
            : "[transform:rotateY(-24deg)_rotateX(4deg)]"
        }`}
      >
        {/* Pantalla */}
        <div className="relative rounded-t-xl rounded-b-sm border border-white/15 bg-[#140a2b] p-1.5 shadow-[0_0_45px_-8px_rgba(168,85,247,0.75)] sm:p-2">
          <div
            className={`relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-[radial-gradient(circle_at_50%_40%,#3b1675_0%,#140a2b_62%,#0b0618_100%)] ${
              isLg ? "aspect-[16/10]" : "aspect-[16/10.5]"
            }`}
          >
            {/* Barra superior tipo editor */}
            <div className="absolute inset-x-0 top-0 flex items-center gap-1 px-2 py-1.5">
              <span className="size-1.5 rounded-full bg-fuchsia-400/70" />
              <span className="size-1.5 rounded-full bg-violet-400/50" />
              <span className="size-1.5 rounded-full bg-indigo-400/40" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(transparent_0,transparent_3px,rgba(255,255,255,0.025)_3px,rgba(255,255,255,0.025)_4px)] bg-[length:100%_4px]" />

            <Logo
              className={`relative drop-shadow-[0_0_14px_rgba(192,132,252,0.75)] ${
                isLg ? "size-12 sm:size-16 lg:size-20" : "size-9 sm:size-12 lg:size-14"
              }`}
            />
            <p
              className={`relative mt-2 text-center font-display uppercase leading-tight tracking-wide text-white ${
                isLg ? "text-[9px] sm:text-xs lg:text-sm" : "text-[8px] sm:text-[10px] lg:text-xs"
              }`}
            >
              {name}
            </p>
            <p className="relative mt-1 hidden font-mono text-[9px] text-violet-200/70 sm:block lg:text-[10px]">
              {tag}
            </p>
          </div>
        </div>
        {/* Base / teclado */}
        <div className="relative mx-auto -mt-px h-2.5 w-[112%] -translate-x-[5.4%] rounded-b-xl border border-white/10 bg-gradient-to-b from-[#6d4bb3] to-[#2a1755] shadow-[0_18px_30px_-10px_rgba(124,58,237,0.8)] sm:h-3.5">
          <div className="absolute left-1/2 top-0 h-1 w-1/5 -translate-x-1/2 rounded-b-md bg-black/30" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative flex flex-col overflow-hidden">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-between px-4 pt-4 pb-10 sm:px-6 sm:pt-6 sm:pb-14">
        {/* Subtítulo superior de identidad completa */}
        <div className="relative z-10 text-center">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)] sm:text-xs sm:tracking-[0.26em]">
            Samuel Alejandro Moreno Gómez · Universidad Cooperativa de Colombia
            (Sede Pasto)
          </p>

          {/* Título monumental Archivo Black en una sola fila en Tablet/PC y apilado limpio en Smartphone */}
          <h1 className="mt-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-display text-[13.5vw] leading-[0.92] tracking-tight uppercase sm:mt-3 sm:flex-nowrap sm:gap-x-5 sm:whitespace-nowrap sm:text-[clamp(2.55rem,7.2vw,6.8rem)]">
            <span className="overflow-hidden py-0.5">
              <span className="animate-rise block text-outline">SAMUEL</span>
            </span>
            <span className="overflow-hidden py-0.5">
              <span className="animate-rise block [animation-delay:.12s]">
                MORENO
              </span>
            </span>
          </h1>
        </div>

        {/* Escenario principal adaptable: 1 col (Móvil), 2 bloques simétricos (Tablet) y 12 cols (PC) */}
        <div className="relative z-10 mt-5 grid grid-cols-1 items-end gap-8 md:grid-cols-12 lg:mt-4 lg:gap-6">
          {/* Columna izquierda: Rol realista de estudiante de 5.° semestre + botones obligatorios */}
          <div className="animate-fade-up order-2 md:col-span-7 lg:order-1 lg:col-span-4 lg:pb-4 [animation-delay:.3s]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--muted)] px-3.5 py-1.5 text-xs font-semibold text-[var(--clay)]">
              <GraduationCap className="size-3.5 shrink-0" />
              <span>5.° Semestre Ing. Software · UCC Pasto</span>
            </div>

            <h2 className="mt-3.5 text-2xl font-extrabold tracking-tight text-balance sm:text-3xl xl:text-[1.95rem] xl:leading-[1.15]">
              Estudiante de Ingeniería de Software &amp; Desarrollador Web
            </h2>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
              Estudiante de quinto semestre enfocado en el diseño de interfaces
              claras, desarrollo web moderno y construcción de software
              práctico, combinando mi formación académica con experiencia real
              de atención al cliente y trabajo en equipo.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/cv.pdf"
                download
                className="group inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--primary)] px-5 py-3.5 text-sm font-semibold text-[var(--primary-foreground)] shadow-lg transition hover:-translate-y-0.5 sm:flex-initial"
              >
                <Download className="size-4 shrink-0" />
                <span>Descargar CV</span>
                <ArrowUpRight className="size-4 shrink-0 transition group-hover:rotate-45" />
              </a>

              <a
                href="#proyectos"
                className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--background)] px-5 py-3.5 text-sm font-semibold transition hover:border-[var(--foreground)] hover:bg-[var(--muted)] sm:flex-initial"
              >
                <span>Ver proyectos</span>
              </a>
            </div>
          </div>

          {/* Columna central protagónica: Retrato oficial /yo.png ampliado + Halo 3D WebGL */}
          <div className="animate-fade-up order-1 flex justify-center md:col-span-12 lg:order-2 lg:col-span-5 lg:-mt-4 [animation-delay:.2s]">
            <div className="relative w-full max-w-[390px] sm:max-w-[440px] lg:max-w-[465px] xl:max-w-[500px]">
              {/* Halo WebGL interactivo enmarcando el retrato */}
              <div className="pointer-events-auto absolute -inset-x-8 -top-10 -bottom-6 z-0 opacity-60 sm:-inset-x-12">
                <Suspense fallback={null}>
                  <QuantumScene variant="hero" accentColor="#8E5B47" />
                </Suspense>
              </div>

              {/* Insignia flotante superior izquierda */}
              <div className="absolute -left-2 top-8 z-20 hidden items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)]/95 px-3.5 py-1.5 text-xs font-bold shadow-md backdrop-blur-md sm:inline-flex">
                <span className="size-2 rounded-full bg-[var(--live)]" />
                <span>5.° Semestre · UCC</span>
              </div>

              {/* Insignia flotante inferior derecha */}
              <div className="absolute -right-2 bottom-14 z-20 hidden items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--primary)] px-3.5 py-1.5 font-mono text-xs font-semibold text-[var(--primary-foreground)] shadow-lg sm:inline-flex">
                <span>Pasto, Colombia</span>
              </div>

              {/* Marco arquitectónico en arco ampliado */}
              <div className="relative z-10 overflow-hidden rounded-t-[230px] rounded-b-[2rem] border-2 border-[var(--border)] bg-gradient-to-b from-[#ECE8E0] via-[var(--muted)] to-[#E4DFD5] p-3 shadow-[0_28px_65px_-20px_rgba(24,24,27,0.22)] sm:p-4">
                <div className="overflow-hidden rounded-t-[214px] rounded-b-[1.5rem] border border-[var(--border)]/80 bg-[#DDD8CE]">
                  <img
                    src="/yo.png"
                    width={480}
                    height={590}
                    alt="Foto de Samuel Alejandro Moreno Gómez"
                    className="aspect-[4/4.65] w-full object-cover object-[center_12%] transition duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Pie técnico de fotografía */}
              <div className="relative z-10 mt-3 flex items-center justify-between px-3 text-xs font-semibold text-[var(--muted-foreground)]">
                <span>📍 Pasto, Nariño, Colombia</span>
                <span className="font-mono text-[var(--clay)]">
                  [ING. DE SOFTWARE]
                </span>
              </div>
            </div>
          </div>

          {/* Columna derecha: Píldoras de canales directos estilo Lively Workbook */}
          <div className="animate-fade-up order-3 flex flex-wrap items-center gap-2.5 md:col-span-5 md:justify-end lg:col-span-3 lg:flex-col lg:items-end lg:pb-4 [animation-delay:.42s]">
            <p className="mb-1 hidden font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] lg:block">
              Enlaces Directos
            </p>

            <a
              href="https://github.com/moreno-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-pill inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 text-xs font-semibold shadow-2xs sm:text-sm"
            >
              <GithubMark className="size-4 shrink-0" />
              <span>GitHub · moreno-stack</span>
            </a>

            <a
              href="https://wa.me/573172707258"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-pill inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 text-xs font-semibold shadow-2xs sm:text-sm"
            >
              <MessageCircle className="size-4 shrink-0 text-[var(--live)]" />
              <span>WhatsApp · (317) 270-7258</span>
            </a>

            <a
              href="mailto:moreno200718@gmail.com"
              className="editorial-pill inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 text-xs font-semibold shadow-2xs sm:text-sm"
            >
              <Mail className="size-4 shrink-0 text-[var(--clay)]" />
              <span>moreno200718@gmail.com</span>
            </a>

            <a
              href="/cv.pdf"
              download
              className="editorial-pill inline-flex items-center gap-2 whitespace-nowrap px-4 py-2.5 text-xs font-semibold shadow-2xs sm:text-sm"
            >
              <FileText className="size-4 shrink-0" />
              <span>Hoja de Vida Oficial [PDF]</span>
            </a>
          </div>
        </div>
      </div>

      {/* Cinta Marquee infinita característica de Dymas Alfin / Lively Workbook */}
      <div className="overflow-hidden border-y border-[var(--border)] bg-[var(--primary)] py-4 text-[var(--primary-foreground)] sm:py-5">
        <div className="animate-marquee flex w-max gap-10 font-display text-xl uppercase sm:gap-12 sm:text-2xl md:text-3xl">
          {Array.from({ length: 2 }).flatMap((_, loopIdx) =>
            marqueeItems.map((item, idx) => (
              <span
                key={`${loopIdx}-${idx}`}
                className={item === "✦" ? "text-[var(--clay)]" : ""}
              >
                {item}
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
