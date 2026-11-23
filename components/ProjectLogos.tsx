import React from "react";

type LogoProps = { className?: string };

/** Descubre Pasto — pin de ubicación con el volcán Galeras (estilo neón nocturno). */
export function DescubrePastoLogo({ className = "size-16" }: LogoProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lg-dp" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <path
        d="M32 4c-11 0-20 8.6-20 19.6C12 38 32 60 32 60s20-22 20-36.4C52 12.6 43 4 32 4Z"
        fill="none"
        stroke="url(#lg-dp)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M19 31l8.5-11 3.5 4.5 3-3.5L45 31Z"
        fill="url(#lg-dp)"
        opacity="0.95"
      />
      <path d="M29.5 17.5c1-2 3-2.6 4.5-1.6" stroke="#E9D5FF" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <circle cx="40" cy="15" r="2.2" fill="#F0ABFC" />
    </svg>
  );
}
