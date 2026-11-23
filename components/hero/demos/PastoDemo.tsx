"use client";

import React from "react";

const pins = [
  { x: 22, y: 34, label: "Volcán Galeras", color: "#F472B6" },
  { x: 52, y: 56, label: "Centro de Pasto", color: "#22D3EE" },
  { x: 74, y: 30, label: "Carnaval", color: "#FACC15" },
  { x: 80, y: 74, label: "Laguna de la Cocha", color: "#34D399" },
];

/** Mapa nocturno: los pines aparecen uno a uno y la ruta sugerida por la IA fluye entre ellos. */
export default function PastoDemo() {
  const route = pins.map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`).join(" ");

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#06101c]">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="dp-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M10 0H0V10" fill="none" stroke="#22d3ee" strokeOpacity="0.08" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#dp-grid)" />
        {/* Río y montañas estilizadas */}
        <path d="M0 64 C20 58 30 72 48 66 S78 52 100 60" fill="none" stroke="#0e7490" strokeOpacity="0.5" strokeWidth="2.4" />
        <path d="M8 46 18 26 28 46Z" fill="#a855f7" fillOpacity="0.22" />
        <path d="M60 92 72 74 86 92Z" fill="#22d3ee" fillOpacity="0.12" />
        <path
          d={route}
          fill="none"
          stroke="#e879f9"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          strokeLinecap="round"
          className="animate-dash-flow"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {pins.map((p, i) => (
        <div
          key={p.label}
          className="animate-pin-pop absolute flex -translate-x-1/2 -translate-y-full flex-col items-center"
          style={{ left: `${p.x}%`, top: `${p.y}%`, animationDelay: `${0.15 + i * 0.35}s` }}
        >
          <span className="mb-0.5 whitespace-nowrap rounded bg-black/60 px-1 text-[6px] font-semibold leading-tight text-white sm:text-[7px]">
            {p.label}
          </span>
          <svg viewBox="0 0 12 16" className="h-3 w-2.5 sm:h-4 sm:w-3" aria-hidden="true">
            <path d="M6 0C2.7 0 0 2.6 0 5.9 0 10.3 6 16 6 16s6-5.7 6-10.1C12 2.6 9.3 0 6 0Z" fill={p.color} />
            <circle cx="6" cy="6" r="2.2" fill="#06101c" />
          </svg>
        </div>
      ))}

      <div
        className="animate-pin-pop absolute bottom-1.5 left-1.5 rounded-md border border-cyan-300/30 bg-cyan-950/70 px-1.5 py-0.5 font-mono text-[6px] text-cyan-100 sm:text-[8px]"
        style={{ animationDelay: "1.7s" }}
      >
        IA ▸ Ruta cultural · 3 h
      </div>
    </div>
  );
}
