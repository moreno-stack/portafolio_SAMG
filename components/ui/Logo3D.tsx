"use client";

import React from "react";

type Logo3DProps = {
  Logo: React.ComponentType<{ className?: string }>;
  /** Color de acento para el brillo y la sombra. */
  accent: string;
  className?: string;
};

const DEPTH = 10; // capas que forman el grosor del logo

/**
 * Logo con relieve 3D hecho solo con CSS: se apilan copias del SVG en el eje Z
 * (las de atrás más oscuras) para darle grosor, y el conjunto gira y flota.
 */
export default function Logo3D({ Logo, accent, className = "size-28" }: Logo3DProps) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="animate-logo-float absolute inset-0 [perspective:700px]">
        <div className="animate-logo-spin-3d relative h-full w-full [transform-style:preserve-3d]">
          {Array.from({ length: DEPTH }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                transform: `translateZ(${-i * 1.1}px)`,
                filter: `brightness(${0.55 - i * 0.03})`,
              }}
            >
              <Logo className="h-full w-full" />
            </div>
          ))}
          {/* Cara frontal con brillo */}
          <div
            className="absolute inset-0"
            style={{
              transform: "translateZ(1px)",
              filter: `drop-shadow(0 0 14px ${accent})`,
            }}
          >
            <Logo className="h-full w-full" />
          </div>
        </div>
      </div>
      {/* Sombra en el piso */}
      <div
        className="animate-shadow-breathe absolute -bottom-6 left-1/2 h-3 w-3/4 -translate-x-1/2 rounded-[50%] blur-md"
        style={{ backgroundColor: accent }}
      />
    </div>
  );
}
