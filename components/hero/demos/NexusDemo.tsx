"use client";

import React, { useEffect, useRef } from "react";

type Rock = { x: number; y: number; r: number; v: number };

/**
 * Mini juego de Nexus-7: mueve el mouse para esquivar los asteroides.
 * Solo se monta mientras la laptop está activa, así que el bucle no corre de fondo.
 */
export default function NexusDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let shipX = w / 2;
    let targetX = w / 2;
    let rocks: Rock[] = [];
    let score = 0;
    let best = 0;
    let flash = 0;
    let last = performance.now();
    let spawn = 0;
    let raf = 0;
    const stars = Array.from({ length: 28 }, () => ({
      x: Math.random(),
      y: Math.random(),
      s: Math.random() * 1.2 + 0.3,
    }));

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = Math.max(8, Math.min(rect.width - 8, e.clientX - rect.left));
    };
    canvas.addEventListener("pointermove", onMove);

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const shipY = h - 14;

      // Piloto automático suave si el usuario no mueve el mouse
      shipX += (targetX - shipX) * Math.min(1, dt * 10);

      spawn -= dt;
      if (spawn <= 0) {
        spawn = 0.35 + Math.random() * 0.35;
        rocks.push({
          x: Math.random() * w,
          y: -8,
          r: 3 + Math.random() * 4,
          v: 40 + Math.random() * 50 + Math.min(score, 60),
        });
      }

      rocks.forEach((r) => (r.y += r.v * dt));
      rocks = rocks.filter((r) => r.y < h + 10);

      const hit = rocks.some(
        (r) => Math.hypot(r.x - shipX, r.y - shipY) < r.r + 5
      );
      if (hit) {
        best = Math.max(best, Math.floor(score));
        score = 0;
        rocks = [];
        flash = 1;
      } else {
        score += dt * 10;
      }

      // Dibujo
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      stars.forEach((s) => {
        s.y = (s.y + dt * 0.08 * s.s) % 1;
        ctx.fillRect(s.x * w, s.y * h, s.s, s.s);
      });

      rocks.forEach((r) => {
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.fillStyle = "#a78bfa";
        ctx.shadowColor = "#c084fc";
        ctx.shadowBlur = 6;
        ctx.fill();
      });

      ctx.shadowColor = "#f472b6";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(shipX, shipY - 8);
      ctx.lineTo(shipX - 6, shipY + 5);
      ctx.lineTo(shipX + 6, shipY + 5);
      ctx.closePath();
      ctx.fillStyle = "#fce7f3";
      ctx.fill();
      ctx.shadowBlur = 0;

      if (flash > 0) {
        ctx.fillStyle = `rgba(244,114,182,${flash * 0.35})`;
        ctx.fillRect(0, 0, w, h);
        flash = Math.max(0, flash - dt * 2.5);
      }

      ctx.font = "600 9px ui-monospace, monospace";
      ctx.fillStyle = "#fbcfe8";
      ctx.fillText(`PUNTOS ${Math.floor(score)}`, 6, 18);
      ctx.textAlign = "right";
      ctx.fillText(`MEJOR ${best}`, w - 6, 18);
      ctx.textAlign = "left";

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#3b0a45_0%,#0b0618_70%)]">
      <canvas
        ref={canvasRef}
        className="h-full w-full cursor-crosshair"
        aria-label="Mini juego: esquiva los asteroides moviendo el mouse"
      />
    </div>
  );
}
