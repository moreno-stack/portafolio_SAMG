import React from "react";

/** Aura que pulsa detrás del retrato (va debajo de la foto, z-[15]). */
export function HoloAura() {
  return (
    <div
      aria-hidden="true"
      className="animate-aura-pulse pointer-events-none absolute left-1/2 top-[8%] z-[15] aspect-square w-[min(420px,62%)] rounded-full bg-[radial-gradient(circle,rgba(217,70,239,0.55)_0%,rgba(139,92,246,0.35)_38%,transparent_70%)] blur-2xl"
    />
  );
}

/**
 * Plataforma holográfica a los pies del retrato: anillos que giran en
 * perspectiva y un haz de luz que sube, como si la foto fuera un holograma.
 */
export function HoloPlatform() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-[-8%] z-[22] mx-auto aspect-square w-[min(400px,62%)] [perspective:900px]"
    >
      {/* Plano cuadrado inclinado: los anillos siguen siendo círculos al girar */}
      <div className="absolute inset-0 [transform:rotateX(76deg)]">
        <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(232,121,249,0.6)_0%,rgba(139,92,246,0.25)_45%,transparent_70%)]" />
        <div className="animate-holo-spin absolute inset-0 rounded-full border-[3px] border-dashed border-fuchsia-300/70 shadow-[0_0_40px_rgba(217,70,239,0.7)]" />
        <div className="animate-holo-spin-rev absolute inset-[13%] rounded-full border-2 border-dotted border-violet-200/60" />
        <div className="animate-holo-spin absolute inset-[26%] rounded-full border-[3px] border-cyan-300/60 border-y-transparent" />
        <div className="absolute inset-[40%] rounded-full bg-fuchsia-300/70 blur-md" />
      </div>
    </div>
  );
}
