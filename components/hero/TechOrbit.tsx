"use client";

import React, { useEffect, useRef } from "react";

const techs = [
  { name: "Next.js", color: "#ffffff" },
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Python", color: "#FACC15" },
  { name: "Unity", color: "#E5E7EB" },
  { name: "C#", color: "#A855F7" },
  { name: "PostgreSQL", color: "#60A5FA" },
  { name: "AWS", color: "#FB923C" },
  { name: "Tailwind", color: "#38BDF8" },
];

/**
 * Anillo de tecnologías que gira alrededor del retrato. Cada chip pasa por
 * delante (z-25, sobre la foto) o por detrás (z-15) según su ángulo, lo que
 * da la sensación de una órbita real en 3D.
 */
export default function TechOrbit() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let angle = 0;
    let last = performance.now();

    const place = () => {
      const { width, height } = wrap.getBoundingClientRect();
      const rx = width / 2;
      const ry = height / 2;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const a = angle + (i / techs.length) * Math.PI * 2;
        const x = rx + Math.cos(a) * rx;
        const y = ry + Math.sin(a) * ry;
        const depth = (Math.sin(a) + 1) / 2; // 0 = atrás, 1 = adelante
        el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${0.72 + depth * 0.38})`;
        el.style.opacity = String(0.35 + depth * 0.65);
        el.style.zIndex = depth > 0.5 ? "25" : "15";
        el.style.filter = depth > 0.5 ? "none" : "blur(0.6px)";
      });
    };

    const loop = (now: number) => {
      angle += ((now - last) / 1000) * 0.32;
      last = now;
      place();
      raf = requestAnimationFrame(loop);
    };

    place();
    if (!reduced) raf = requestAnimationFrame(loop);
    const ro = new ResizeObserver(place);
    ro.observe(wrap);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-[44%] h-[18%] w-[min(560px,78%)] -translate-x-1/2"
    >
      {/* Trazo de la órbita */}
      <div className="absolute inset-0 rounded-[50%] border border-violet-300/25 shadow-[0_0_24px_rgba(168,85,247,0.35)]" />
      {techs.map((t, i) => (
        <div
          key={t.name}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className="absolute left-0 top-0 flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/20 bg-[#1a0b38]/85 px-2.5 py-1 text-[10px] font-semibold text-white shadow-[0_0_18px_-4px_rgba(168,85,247,0.8)] backdrop-blur sm:text-xs"
        >
          <span className="size-2 rounded-full" style={{ backgroundColor: t.color, boxShadow: `0 0 8px ${t.color}` }} />
          {t.name}
        </div>
      ))}
    </div>
  );
}
