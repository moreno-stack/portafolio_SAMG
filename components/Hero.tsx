"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useCallback, useState } from "react";
import {
  ArrowUpRight,
  Download,
  FileText,
  GraduationCap,
  Mail,
  MessageCircle,
} from "lucide-react";
import {
  AlquilerEquiposLogo,
  DescubrePastoLogo,
  MonitorRecuperacionLogo,
  Nexus7Logo,
} from "@/components/ProjectLogos";
import ProjectLaptop from "@/components/hero/ProjectLaptop";
import ProjectModal from "@/components/hero/ProjectModal";
import TechOrbit from "@/components/hero/TechOrbit";
import { HoloAura, HoloPlatform } from "@/components/hero/HoloPlatform";
import { heroProjects, type HeroProjectId } from "@/components/hero/heroProjects";
import NexusDemo from "@/components/hero/demos/NexusDemo";
import MonitorDemo from "@/components/hero/demos/MonitorDemo";
import PastoDemo from "@/components/hero/demos/PastoDemo";
import AlquilerDemo from "@/components/hero/demos/AlquilerDemo";

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

const visuals: Record<
  HeroProjectId,
  { Logo: React.ComponentType<{ className?: string }>; Demo: React.ComponentType }
> = {
  "descubre-pasto": { Logo: DescubrePastoLogo, Demo: PastoDemo },
  "alquiler-equipos": { Logo: AlquilerEquiposLogo, Demo: AlquilerDemo },
  "nexus-7": { Logo: Nexus7Logo, Demo: NexusDemo },
  "monitor-recuperacion": { Logo: MonitorRecuperacionLogo, Demo: MonitorDemo },
};

export default function Hero() {
  const [openId, setOpenId] = useState<HeroProjectId | null>(null);
  const closeModal = useCallback(() => setOpenId(null), []);

  const laptop = (
    id: HeroProjectId,
    tilt: "left" | "right",
    size: "lg" | "sm",
    className: string
  ) => (
    <ProjectLaptop
      project={heroProjects[id]}
      Logo={visuals[id].Logo}
      Demo={visuals[id].Demo}
      tilt={tilt}
      size={size}
      className={className}
      onOpen={() => setOpenId(id)}
    />
  );

  return (
    <section
      id="inicio"
      className="relative flex flex-col overflow-hidden bg-[#0d0420] text-white"
    >
      {/* Fondo morado con resplandor y retícula sutil */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,#5b21b6_0%,#2e1065_38%,#0d0420_75%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pt-4 pb-10 sm:px-6 sm:pt-6 sm:pb-14">
        {/* Identidad + título */}
        <div className="relative z-30 text-center">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200/70 sm:text-xs sm:tracking-[0.26em]">
            Samuel Alejandro Moreno Gómez · Universidad Cooperativa de Colombia
            (Sede Pasto)
          </p>
          <h1 className="mt-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-display text-[13.5vw] leading-[0.92] tracking-tight uppercase sm:mt-3 sm:flex-nowrap sm:gap-x-5 sm:whitespace-nowrap sm:text-[clamp(2.55rem,7.2vw,6.8rem)]">
            <span className="overflow-hidden py-0.5">
              <span className="animate-rise block text-outline-light">SAMUEL</span>
            </span>
            <span className="overflow-hidden py-0.5">
              <span className="animate-rise block bg-gradient-to-r from-violet-200 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent [animation-delay:.12s]">
                MORENO
              </span>
            </span>
          </h1>
        </div>

        {/* Escenario: monograma + laptops con proyectos + foto */}
        <div className="animate-fade-up relative z-10 mx-auto mt-2 h-[430px] w-full max-w-6xl sm:h-[540px] lg:h-[620px] [animation-delay:.2s]">
          {/* Aura detrás del retrato */}
          <HoloAura />

          {/* Laptops exteriores (pequeñas) */}
          {laptop("nexus-7", "left", "sm", "left-[0%] top-[30%] hidden w-[19%] md:block")}
          {laptop("monitor-recuperacion", "right", "sm", "right-[0%] top-[30%] hidden w-[19%] md:block")}

          {/* Laptops interiores (grandes) */}
          {laptop(
            "descubre-pasto",
            "left",
            "lg",
            "left-[-4%] top-[22%] w-[46%] sm:left-[2%] md:left-[13%] md:top-[20%] md:w-[29%]"
          )}
          {laptop(
            "alquiler-equipos",
            "right",
            "lg",
            "right-[-4%] top-[22%] w-[46%] sm:right-[2%] md:right-[13%] md:top-[20%] md:w-[29%]"
          )}

          {/* Retrato principal */}
          <img
            src="/samuel-hero.png"
            width={471}
            height={810}
            alt="Foto de Samuel Alejandro Moreno Gómez"
            className="absolute bottom-0 left-1/2 z-20 h-full w-auto max-w-none -translate-x-1/2 drop-shadow-[0_0_40px_rgba(168,85,247,0.45)]"
          />

          {/* Órbita de tecnologías y plataforma holográfica */}
          <TechOrbit />
          <HoloPlatform />

        </div>

        {/* Texto y enlaces debajo del escenario */}
        <div className="relative z-30 mt-6 grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <div className="animate-fade-up md:col-span-7 [animation-delay:.3s]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-violet-200 backdrop-blur">
              <GraduationCap className="size-3.5 shrink-0" />
              <span>5.° Semestre Ing. Software · UCC Pasto</span>
            </div>

            <h2 className="mt-3.5 text-2xl font-extrabold tracking-tight text-balance sm:text-3xl xl:text-[1.95rem] xl:leading-[1.15]">
              Estudiante de Ingeniería de Software &amp; Desarrollador Web
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-violet-100/70 sm:text-base">
              Estudiante de quinto semestre enfocado en el diseño de interfaces
              claras, desarrollo web moderno y construcción de software
              práctico, combinando mi formación académica con experiencia real
              de atención al cliente y trabajo en equipo.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/cv.pdf"
                download
                className="group inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(192,38,211,0.7)] transition hover:-translate-y-0.5 sm:flex-initial"
              >
                <Download className="size-4 shrink-0" />
                <span>Descargar CV</span>
                <ArrowUpRight className="size-4 shrink-0 transition group-hover:rotate-45" />
              </a>

              <a
                href="#proyectos"
                className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-semibold backdrop-blur transition hover:border-white/50 hover:bg-white/10 sm:flex-initial"
              >
                <span>Ver proyectos</span>
              </a>
            </div>
          </div>

          <div className="animate-fade-up flex flex-wrap items-center gap-2.5 md:col-span-5 md:flex-col md:items-end [animation-delay:.42s]">
            <p className="mb-1 hidden font-mono text-[11px] font-bold uppercase tracking-wider text-violet-200/60 md:block">
              Enlaces Directos
            </p>
            {[
              {
                href: "https://github.com/moreno-stack",
                label: "GitHub · moreno-stack",
                icon: <GithubMark className="size-4 shrink-0" />,
                external: true,
              },
              {
                href: "https://wa.me/573172707258",
                label: "WhatsApp · (317) 270-7258",
                icon: <MessageCircle className="size-4 shrink-0 text-emerald-400" />,
                external: true,
              },
              {
                href: "mailto:moreno200718@gmail.com",
                label: "moreno200718@gmail.com",
                icon: <Mail className="size-4 shrink-0 text-fuchsia-300" />,
              },
              {
                href: "/cv.pdf",
                label: "Hoja de Vida Oficial [PDF]",
                icon: <FileText className="size-4 shrink-0" />,
                download: true,
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                {...(link.download ? { download: true } : {})}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold backdrop-blur transition hover:border-violet-300/60 hover:bg-white/10 sm:text-sm"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Cinta marquee */}
      <div className="relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-violet-700 via-fuchsia-600 to-violet-700 py-4 text-white sm:py-5">
        <div className="animate-marquee flex w-max gap-10 font-display text-xl uppercase sm:gap-12 sm:text-2xl md:text-3xl">
          {Array.from({ length: 2 }).flatMap((_, loopIdx) =>
            marqueeItems.map((item, idx) => (
              <span
                key={`${loopIdx}-${idx}`}
                className={item === "✦" ? "text-violet-200" : ""}
              >
                {item}
              </span>
            ))
          )}
        </div>
      </div>
      {openId && (
        <ProjectModal
          project={heroProjects[openId]}
          Logo={visuals[openId].Logo}
          Demo={visuals[openId].Demo}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
