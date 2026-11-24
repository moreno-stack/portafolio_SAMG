"use client";

import React, { useCallback, useEffect, useState } from "react";
import IntroScene from "@/components/intro/IntroScene";

type Phase = "play" | "exit" | "done";

const STORAGE_KEY = "samg-intro-vista";
const TITLE = "PORTAFOLIO";
/** Momento (ms) en que la cámara entra por la pantalla. */
const EXIT_AT = 5000;
/** Duración (ms) de la entrada por la pantalla antes de mostrar el sitio. */
const EXIT_DURATION = 900;

/**
 * Intro de entrada: setup visto de lejos → la cámara se acerca → aparece el
 * título "PORTAFOLIO" → la cámara entra por el monitor y se muestra el sitio.
 * Se ve una vez por sesión, se puede saltar y respeta "reducir movimiento".
 */
export default function IntroAnimation() {
  const [phase, setPhase] = useState<Phase>("play");

  const finish = useCallback(() => {
    setPhase((p) => (p === "done" ? p : "exit"));
  }, []);

  // ¿Ya se vio en esta sesión o el usuario prefiere menos movimiento?
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* sessionStorage no disponible: se muestra la intro igual */
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!seen && !reduced) return;
    // Se oculta en el siguiente cuadro (sin renderizados en cascada dentro del efecto)
    const raf = requestAnimationFrame(() => setPhase("done"));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Línea de tiempo
  useEffect(() => {
    if (phase === "play") {
      const t = window.setTimeout(finish, EXIT_AT);
      return () => window.clearTimeout(t);
    }
    if (phase === "exit") {
      // Se marca como vista al terminar (no al montar: en desarrollo los efectos corren dos veces)
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* sin sessionStorage */
      }
      const t = window.setTimeout(() => setPhase("done"), EXIT_DURATION);
      return () => window.clearTimeout(t);
    }
  }, [phase, finish]);

  // Bloquear el scroll y permitir saltar con Esc
  useEffect(() => {
    if (phase === "done") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") finish();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [phase, finish]);

  if (phase === "done") return null;

  const exiting = phase === "exit";

  return (
    <div
      className={`fixed inset-0 z-[200] overflow-hidden bg-[#07020f] transition-opacity duration-500 ${
        exiting ? "pointer-events-none opacity-0 delay-500" : "opacity-100"
      }`}
      role="dialog"
      aria-label="Intro del portafolio"
    >
      {/* Cámara: se acerca al monitor (el origen está en el centro de la pantalla del monitor) */}
      <div
        className={`absolute inset-0 origin-[50%_44%] ${exiting ? "intro-enter-screen" : "intro-camera"}`}
      >
        {/* Bordes desvanecidos: de lejos la escena se funde con el fondo, sin verse como un cuadro */}
        <div className="intro-fade-in h-full w-full [mask-image:radial-gradient(ellipse_at_50%_48%,black_52%,transparent_78%)]">
          <IntroScene />
        </div>
      </div>

      {/* Viñeta para enfocar el centro */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,2,15,0.85)_100%)]" />

      {/* Título */}
      <div
        className={`pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ${
          exiting ? "scale-125 opacity-0" : ""
        }`}
      >
        <h1 className="flex font-display text-[13vw] leading-none tracking-tight text-white sm:text-[9vw] lg:text-[8rem]">
          {TITLE.split("").map((ch, i) => (
            <span
              key={i}
              className="intro-letter inline-block bg-gradient-to-b from-white via-fuchsia-200 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(192,132,252,0.65)]"
              style={{ animationDelay: `${2.5 + i * 0.07}s` }}
            >
              {ch}
            </span>
          ))}
        </h1>
        <p
          className="intro-fade-in mt-4 font-mono text-xs uppercase tracking-[0.35em] text-violet-200 sm:text-sm"
          style={{ animationDelay: "3.4s" }}
        >
          Samuel Moreno · Ingeniería de Software
        </p>
      </div>

      {/* Barra de progreso + saltar */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white/10">
        <div className="intro-progress h-full bg-gradient-to-r from-violet-500 to-fuchsia-400" />
      </div>
      <button
        type="button"
        onClick={finish}
        className="absolute right-4 bottom-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:right-6 sm:bottom-6 sm:text-sm"
      >
        Saltar intro →
      </button>
    </div>
  );
}
