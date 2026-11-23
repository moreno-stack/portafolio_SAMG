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
      className="pointer-events-none absolute inset-x-0 bottom-[-2%] z-[22] mx-auto h-[26%] w-[min(520px,74%)] [perspective:700px]"
    >
      {/* Haz de luz vertical */}
      <div className="absolute inset-x-[22%] bottom-[38%] h-[160%] bg-gradient-to-t from-fuchsia-400/25 via-violet-400/10 to-transparent [clip-path:polygon(18%_100%,82%_100%,100%_0,0_0)]" />

      <div className="absolute inset-0 [transform:rotateX(74deg)] [transform-style:preserve-3d]">
        {/* Disco de luz */}
        <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle,rgba(232,121,249,0.55)_0%,rgba(139,92,246,0.25)_45%,transparent_70%)]" />
        {/* Anillos */}
        <div className="animate-holo-spin absolute inset-0 rounded-full border-2 border-dashed border-fuchsia-300/70 shadow-[0_0_30px_rgba(217,70,239,0.7)]" />
        <div className="animate-holo-spin-rev absolute inset-[14%] rounded-full border border-violet-200/60 [border-style:dotted]" />
        <div className="animate-holo-spin absolute inset-[28%] rounded-full border-2 border-cyan-300/50 [border-top-color:transparent] [border-bottom-color:transparent]" />
        <div className="absolute inset-[42%] rounded-full bg-fuchsia-300/60 blur-sm" />
      </div>
    </div>
  );
}
