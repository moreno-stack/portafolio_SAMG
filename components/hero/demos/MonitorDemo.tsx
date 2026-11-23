"use client";

import React, { useEffect, useState } from "react";

const TARGET = 82;
const R = 34;
const CIRC = 2 * Math.PI * R;

/** Esfera de smartwatch: la puntuación de recuperación sube hasta 82 y el pulso se mueve. */
export default function MonitorDemo() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    let value = 0;
    const id = window.setInterval(() => {
      value = Math.min(TARGET, value + 2);
      setScore(value);
      if (value >= TARGET) window.clearInterval(id);
    }, 22);
    return () => window.clearInterval(id);
  }, []);

  const pulse = "M0 20h14l4-9 6 18 5-12 3 3h18l4-9 6 18 5-12 3 3h12";

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_45%,#064e3b_0%,#0b0618_68%)]">
      <svg viewBox="0 0 100 100" className="h-[86%] w-auto" aria-hidden="true">
        <defs>
          <linearGradient id="mon-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <clipPath id="mon-clip">
            <rect x="24" y="56" width="52" height="16" />
          </clipPath>
        </defs>
        <circle cx="50" cy="50" r="46" fill="#05030b" stroke="#ffffff22" strokeWidth="2" />
        <circle cx="50" cy="50" r={R} fill="none" stroke="#ffffff14" strokeWidth="6" />
        <circle
          cx="50"
          cy="50"
          r={R}
          fill="none"
          stroke="url(#mon-ring)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={CIRC * (1 - score / 100)}
          transform="rotate(-90 50 50)"
        />
        <text x="50" y="35" textAnchor="middle" fontSize="6" fill="#a7f3d0" fontFamily="ui-monospace, monospace">
          RECUPERACIÓN
        </text>
        <text x="50" y="52" textAnchor="middle" fontSize="17" fontWeight="800" fill="#ecfdf5">
          {score}
        </text>
        <g clipPath="url(#mon-clip)">
          <g className="animate-beat-scroll">
            <path
              d={pulse}
              transform="translate(24 46) scale(0.52)"
              fill="none"
              stroke="#6ee7b7"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d={pulse}
              transform="translate(76 46) scale(0.52)"
              fill="none"
              stroke="#6ee7b7"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </g>
        </g>
        <text x="50" y="80" textAnchor="middle" fontSize="5.5" fill="#d1fae5">
          {score >= TARGET ? "Lista para entrenar" : "Calculando…"}
        </text>
      </svg>
    </div>
  );
}
