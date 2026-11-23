import React from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

function GithubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "01. Acerca de mí", href: "#sobre-mi" },
  { label: "02. Proyectos", href: "#proyectos" },
  { label: "03. Testimonios", href: "#testimonios" },
  { label: "04. Experiencia", href: "#experiencia" },
  { label: "05. Contactos", href: "#contacto" },
  { label: "06. Habilidades", href: "#habilidades" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div>
            <p className="font-display text-xl uppercase tracking-wider sm:text-2xl">
              Samuel Alejandro Moreno Gómez
            </p>
            <p className="mt-1 text-xs font-medium text-[var(--muted-foreground)]">
              Estudiante de 5.° Semestre de Ingeniería de Software · UCC Sede
              Pasto · Nariño, Colombia
            </p>
          </div>

          <nav aria-label="Navegación de pie de página">
            <ul className="flex flex-wrap justify-center gap-4 text-xs font-semibold sm:gap-5 sm:text-sm">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="whitespace-nowrap transition hover:text-[var(--clay)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href="https://github.com/moreno-stack"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub moreno-stack"
              className="editorial-pill inline-flex items-center gap-1.5 whitespace-nowrap px-4 py-2 text-xs font-semibold"
            >
              <GithubIcon className="size-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="size-3.5" />
            </a>
            <a
              href="https://wa.me/573172707258"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="editorial-pill inline-flex items-center gap-1.5 whitespace-nowrap px-4 py-2 text-xs font-semibold"
            >
              <MessageCircle className="size-3.5 text-[var(--live)]" />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:moreno200718@gmail.com"
              aria-label="Correo electrónico"
              className="editorial-pill inline-flex items-center gap-1.5 whitespace-nowrap px-4 py-2 text-xs font-semibold"
            >
              <Mail className="size-3.5 text-[var(--clay)]" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--muted-foreground)] sm:flex-row sm:text-left">
          <p>
            © 2026 Samuel Alejandro Moreno Gómez. Portafolio de Diseño de
            Interfaces — UCC Pasto.
          </p>
          <p>Construido con Next.js, TypeScript, Tailwind CSS &amp; Three.js</p>
        </div>
      </div>
    </footer>
  );
}
