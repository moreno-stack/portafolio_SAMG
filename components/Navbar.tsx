"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Download, Menu, MessageCircle, X } from "lucide-react";

const navItems = [
  { id: "sobre-mi", label: "Acerca de mí", badge: "01", href: "#sobre-mi" },
  { id: "proyectos", label: "Proyectos", badge: "02", href: "#proyectos" },
  { id: "testimonios", label: "Testimonios", badge: "03", href: "#testimonios" },
  { id: "experiencia", label: "Experiencia", badge: "04", href: "#experiencia" },
  { id: "contacto", label: "Contactos", badge: "05", href: "#contacto" },
  { id: "habilidades", label: "Habilidades", badge: "06", href: "#habilidades" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 180;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          return;
        }
      }
      if (window.scrollY < 300) setActiveSection("inicio");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--background)]/92 py-3 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.03)]"
          : "border-b border-transparent bg-[var(--background)]/85 py-4 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="animate-fade-up mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6"
      >
        {/* Píldora de estado en una sola línea garantizada */}
        <a
          href="#inicio"
          className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--background)] px-3.5 py-2 text-xs font-semibold shadow-2xs transition hover:border-[var(--foreground)] sm:px-4"
        >
          <span className="size-2 shrink-0 animate-pulse rounded-full bg-[var(--live)]" />
          <span className="font-bold tracking-tight">SAMG.dev</span>
          <span className="hidden text-[var(--muted-foreground)] sm:inline">
            · Ing. Software
          </span>
          <span className="hidden text-[var(--muted-foreground)] xl:inline">
            (5.° Semestre)
          </span>
        </a>

        {/* Navegación editorial de escritorio con numeración continua 01–06 */}
        <div className="hidden items-center gap-5 text-sm font-medium whitespace-nowrap lg:flex xl:gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`inline-flex items-baseline gap-1 whitespace-nowrap transition-colors hover:text-[var(--clay)] ${
                  isActive
                    ? "font-bold text-[var(--clay)]"
                    : "text-[var(--foreground)]"
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="font-mono text-[11px] text-[var(--muted-foreground)]">
                    [{item.badge}]
                  </span>
                )}
              </a>
            );
          })}
        </div>

        {/* Acciones rápidas derecha */}
        <div className="flex shrink-0 items-center gap-2 whitespace-nowrap">
          <a
            href="/cv.pdf"
            download
            className="hidden items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--background)] px-3.5 py-2 text-xs font-semibold transition hover:bg-[var(--muted)] sm:inline-flex"
          >
            <Download className="size-3.5 shrink-0" />
            <span>CV</span>
          </a>

          <a
            href="#contacto"
            className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-semibold text-[var(--primary-foreground)] shadow-sm transition hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span>Contacto</span>
            <ArrowUpRight className="size-4 shrink-0 transition group-hover:rotate-45" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition hover:bg-[var(--muted)] lg:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Menú desplegable para Smartphone y Tablet (< lg) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-[var(--border)] bg-[var(--background)]/98 backdrop-blur-lg lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5 sm:px-6">
              <div className="mb-2 flex items-center justify-between rounded-2xl bg-[var(--muted)] px-4 py-2.5 text-xs font-semibold text-[var(--muted-foreground)]">
                <span>Samuel Alejandro Moreno Gómez · UCC Pasto</span>
                <span className="font-mono text-[var(--clay)]">[5.° Sem]</span>
              </div>

              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-x-6">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between border-b border-[var(--border)]/60 py-3 text-base font-semibold transition hover:text-[var(--clay)] ${
                        isActive ? "text-[var(--clay)]" : "text-[var(--foreground)]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="font-mono text-xs text-[var(--muted-foreground)]">
                          [{item.badge}]
                        </span>
                      )}
                    </a>
                  );
                })}
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                <a
                  href="/cv.pdf"
                  download
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--muted)] py-3 text-xs font-bold"
                >
                  <Download className="size-4" />
                  <span>Descargar CV</span>
                </a>
                <a
                  href="https://wa.me/573172707258"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] py-3 text-xs font-bold"
                >
                  <MessageCircle className="size-4 text-[var(--live)]" />
                  <span>WhatsApp Directo</span>
                </a>
                <a
                  href="#contacto"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] py-3 text-xs font-bold text-[var(--primary-foreground)]"
                >
                  <span>Ir a Contactos</span>
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
