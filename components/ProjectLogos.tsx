"use client";

import React, { useId } from "react";

type LogoProps = { className?: string };

/** Descubre Pasto — pin de ubicación con el volcán Galeras (estilo neón nocturno). */
export function DescubrePastoLogo({ className = "size-16" }: LogoProps) {
  // ID único por instancia: el logo aparece varias veces en la página
  const gid = useId();
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <path
        d="M32 4c-11 0-20 8.6-20 19.6C12 38 32 60 32 60s20-22 20-36.4C52 12.6 43 4 32 4Z"
        fill="none"
        stroke={`url(#${gid})`}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M19 31l8.5-11 3.5 4.5 3-3.5L45 31Z"
        fill={`url(#${gid})`}
        opacity="0.95"
      />
      <path d="M29.5 17.5c1-2 3-2.6 4.5-1.6" stroke="#E9D5FF" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <circle cx="40" cy="15" r="2.2" fill="#F0ABFC" />
    </svg>
  );
}

/** Alquiler de Equipos — cubo isométrico (inventario) con chispa de IA. */
export function AlquilerEquiposLogo({ className = "size-16" }: LogoProps) {
  // ID único por instancia: el logo aparece varias veces en la página
  const gid = useId();
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
      </defs>
      <path d="M30 8 52 19v26L30 56 8 45V19Z" fill="none" stroke={`url(#${gid})`} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M8 19l22 11 22-11M30 30v26" fill="none" stroke={`url(#${gid})`} strokeWidth="3" strokeLinejoin="round" />
      <path d="M14 35l10 5" stroke="#E0E7FF" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M52 4l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z"
        fill="#F0ABFC"
      />
    </svg>
  );
}

/** Escape Espacial: Nexus-7 — hexágono táctico con el "7" del núcleo. */
export function Nexus7Logo({ className = "size-16" }: LogoProps) {
  // ID único por instancia: el logo aparece varias veces en la página
  const gid = useId();
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <path d="M32 4 56 18v28L32 60 8 46V18Z" fill="none" stroke={`url(#${gid})`} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M32 12 49 22v20L32 52 15 42V22Z" fill={`url(#${gid})`} opacity="0.18" />
      <path d="M22 22h20l-11 22" fill="none" stroke="#FCE7F3" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 33h10" stroke="#FCE7F3" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Monitor de Recuperación — esfera de smartwatch con anillo de progreso y pulso. */
export function MonitorRecuperacionLogo({ className = "size-16" }: LogoProps) {
  // ID único por instancia: el logo aparece varias veces en la página
  const gid = useId();
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <rect x="24" y="2" width="16" height="9" rx="3" fill={`url(#${gid})`} opacity="0.6" />
      <rect x="24" y="53" width="16" height="9" rx="3" fill={`url(#${gid})`} opacity="0.6" />
      <circle cx="32" cy="32" r="22" fill="#0B0618" stroke={`url(#${gid})`} strokeWidth="3" />
      <circle
        cx="32"
        cy="32"
        r="16.5"
        fill="none"
        stroke={`url(#${gid})`}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="78 104"
        transform="rotate(-90 32 32)"
      />
      <path d="M20 33h6l3-7 5 13 3-6h7" fill="none" stroke="#D1FAE5" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Portafolio personal — monograma "S" dentro de un cubo isométrico (Three.js). */
export function PortafolioLogo({ className = "size-16" }: LogoProps) {
  // ID único por instancia: el logo aparece varias veces en la página
  const gid = useId();
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <path d="M32 4 56 17v30L32 60 8 47V17Z" fill="none" stroke={`url(#${gid})`} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M32 4v14M8 17l12 7M56 17l-12 7" stroke={`url(#${gid})`} strokeWidth="2" opacity="0.55" />
      <path
        d="M40 25c-2-3-5-4-8-4-4.5 0-8 2.4-8 6s3 5 8 6 8 2.4 8 6-3.5 6-8 6c-3.3 0-6.3-1.3-8.2-4"
        fill="none"
        stroke="#F5F3FF"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Control de Emergencias — escudo con cruz y pulso de alerta. */
export function ControlEmergenciaLogo({ className = "size-16" }: LogoProps) {
  // ID único por instancia: el logo aparece varias veces en la página
  const gid = useId();
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FB7185" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <path
        d="M32 4 54 12v18c0 14-9.5 24-22 30C19.5 54 10 44 10 30V12Z"
        fill="none"
        stroke={`url(#${gid})`}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path d="M32 18v20M22 28h20" stroke="#FFF1F2" strokeWidth="5" strokeLinecap="round" />
      <path d="M14 46h9l3-5 4 9 3-4h17" fill="none" stroke={`url(#${gid})`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Smart Library & Gov.co — libro abierto con corchetes de código. */
export function SmartLibraryLogo({ className = "size-16" }: LogoProps) {
  // ID único por instancia: el logo aparece varias veces en la página
  const gid = useId();
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <path
        d="M32 16C26 11 17 10 8 12v36c9-2 18-1 24 4 6-5 15-6 24-4V12c-9-2-18-1-24 4Z"
        fill="none"
        stroke={`url(#${gid})`}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path d="M32 16v36" stroke={`url(#${gid})`} strokeWidth="2.5" />
      <path d="M21 26l-5 5 5 5M43 26l5 5-5 5" fill="none" stroke="#FEF3C7" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
