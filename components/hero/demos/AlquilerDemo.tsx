"use client";

import React, { useEffect, useState } from "react";

type Estado = "Disponible" | "Alquilado" | "Reservado";

const initial: { equipo: string; estado: Estado }[] = [
  { equipo: "Laptop Dell", estado: "Disponible" },
  { equipo: "Proyector Epson", estado: "Alquilado" },
  { equipo: "Cámara Sony", estado: "Reservado" },
  { equipo: "Parlante JBL", estado: "Disponible" },
];

const ciclo: Estado[] = ["Disponible", "Reservado", "Alquilado"];

const pill: Record<Estado, string> = {
  Disponible: "bg-emerald-400/20 text-emerald-200",
  Alquilado: "bg-fuchsia-400/20 text-fuchsia-200",
  Reservado: "bg-amber-400/20 text-amber-200",
};

const sugerencia = "IA ▸ El proyector se pide más los viernes: resérvalo con tiempo.";

/** Mini inventario: los estados cambian solos y la IA escribe una sugerencia. */
export default function AlquilerDemo() {
  const [rows, setRows] = useState(initial);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRows((prev) => {
        const i = Math.floor(Math.random() * prev.length);
        return prev.map((r, idx) =>
          idx === i
            ? { ...r, estado: ciclo[(ciclo.indexOf(r.estado) + 1) % ciclo.length] }
            : r
        );
      });
    }, 1100);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setChars((c) => (c >= sugerencia.length ? c : c + 1));
    }, 35);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col bg-[radial-gradient(circle_at_50%_0%,#1e1b4b_0%,#0b0618_70%)] px-2 pt-5 pb-1.5 text-left sm:px-3 sm:pt-6">
      <p className="font-mono text-[6px] uppercase tracking-wider text-indigo-200/70 sm:text-[8px]">
        Inventario · hoy
      </p>
      <ul className="mt-1 flex-1 space-y-[3px] sm:space-y-1">
        {rows.map((r) => (
          <li
            key={r.equipo}
            className="flex items-center justify-between rounded bg-white/5 px-1.5 py-[2px] text-[6.5px] text-white sm:py-0.5 sm:text-[9px]"
          >
            <span>{r.equipo}</span>
            <span className={`rounded-full px-1.5 font-semibold transition-colors duration-300 ${pill[r.estado]}`}>
              {r.estado}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-1 truncate font-mono text-[6px] text-violet-200 sm:text-[8px]">
        {sugerencia.slice(0, chars)}
        <span className="animate-caret">▍</span>
      </p>
    </div>
  );
}
