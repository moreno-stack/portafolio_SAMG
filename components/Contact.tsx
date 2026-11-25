"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowUpRight,
  Building2,
  Check,
  CheckCircle2,
  Copy,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/variants";

type FormValues = {
  name: string;
  email: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type SubmitResult = {
  mode: "email_sent" | "direct_channel_ready";
  message: string;
  whatsappUrl: string;
  mailtoUrl: string;
};

const contactReasonOptions = [
  "Colaboración en proyecto académico o desarrollo web",
  "Apoyo en maquetación frontend / diseño de interfaces (UI/UX)",
  "Oportunidad laboral o turno parcial en Pasto",
  "Prácticas universitarias o semillero de software",
  "Consulta general",
];

const WHATSAPP_DIRECT_URL =
  "https://wa.me/573172707258?text=" +
  encodeURIComponent(
    "Hola Samuel, vi tu portafolio web y me gustaría ponerme en contacto contigo."
  );

export default function Contact() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    service: contactReasonOptions[0],
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitResult, setSubmitResult] = useState<SubmitResult | null>(null);
  const [copied, setCopied] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const validate = (data: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (data.name.trim().length < 3) {
      nextErrors.name =
        "Por favor ingresa tu nombre completo (mínimo 3 caracteres).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      nextErrors.email =
        "Ingresa un correo electrónico válido (ejemplo@dominio.com).";
    }
    if (!data.service.trim()) {
      nextErrors.service = "Selecciona un motivo de contacto.";
    }
    if (data.message.trim().length < 15) {
      nextErrors.message =
        "Escribe un mensaje un poco más detallado (mínimo 15 caracteres).";
    }
    return nextErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const updated = { ...values, [name]: value };
    setValues(updated);
    setServerError(null);
    if (Object.keys(errors).length > 0) {
      setErrors(validate(updated));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        setServerError(
          data.error ?? "Ocurrió un inconveniente al validar tu mensaje."
        );
      } else {
        setSubmitResult({
          mode: data.mode,
          message: data.message,
          whatsappUrl: data.whatsappUrl,
          mailtoUrl: data.mailtoUrl,
        });
      }
    } catch {
      const fallbackText = `Hola Samuel, soy ${values.name} (${values.email}). Motivo: ${values.service}. ${values.message}`;
      setSubmitResult({
        mode: "direct_channel_ready",
        message:
          "Tus datos están listos. Envía tu mensaje directamente por WhatsApp o correo electrónico.",
        whatsappUrl: `https://wa.me/573172707258?text=${encodeURIComponent(
          fallbackText
        )}`,
        mailtoUrl: `mailto:moreno200718@gmail.com?subject=${encodeURIComponent(
          `[Portafolio SAMG] ${values.service}`
        )}&body=${encodeURIComponent(fallbackText)}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("moreno200718@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contacto"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24"
    >
      <motion.div
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Barra superior de sinergia editorial con numeración continua: 05 */}
        <motion.div variants={fadeIn("up", 0.03)} className="editorial-index-bar">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--clay)]">
            05 / Contactos
          </span>
          <span className="font-mono text-xs text-[var(--muted-foreground)]">
            [PASTO, NARIÑO, COLOMBIA · CANALES DIRECTOS]
          </span>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.05)}
          className="mb-10 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-end"
        >
          <h2 className="font-display text-5xl uppercase leading-none sm:text-6xl md:text-7xl lg:text-8xl">
            Canales de <span className="text-outline">Contacto</span>
          </h2>
          <p className="max-w-md text-xs font-medium leading-relaxed text-[var(--muted-foreground)] sm:text-sm">
            Puedes escribirme a través del formulario, por correo electrónico o
            directamente a mi WhatsApp para proyectos académicos, desarrollo web
            u oportunidades laborales.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Columna izquierda: Datos de contacto verificados */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            className="editorial-card flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10"
          >
            <div>
              <h3 className="text-xl font-extrabold sm:text-2xl">
                Samuel Alejandro Moreno Gómez
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted-foreground)] sm:text-sm">
                Estudiante de 5.° semestre de Ingeniería de Software en la UCC
                (Sede Pasto). Disponible para colaborar en proyectos web,
                prácticas o trabajo en Pasto y remoto.
              </p>

              <div className="mt-7 space-y-3">
                {/* Correo electrónico con copiado rápido */}
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3.5 sm:p-4">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--muted)]">
                      <Mail className="size-4 text-[var(--clay)]" />
                    </span>
                    <div className="truncate">
                      <p className="text-xs font-medium text-[var(--muted-foreground)]">
                        Correo Electrónico
                      </p>
                      <a
                        href="mailto:moreno200718@gmail.com"
                        className="block truncate text-xs font-bold hover:text-[var(--clay)] sm:text-sm"
                      >
                        moreno200718@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copiar correo electrónico"
                    className="shrink-0 rounded-full border border-[var(--border)] p-2 transition hover:bg-[var(--muted)]"
                  >
                    {copied ? (
                      <Check className="size-4 text-[var(--live)]" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                  </button>
                </div>

                {/* Teléfono / WhatsApp */}
                <a
                  href={WHATSAPP_DIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3.5 transition hover:border-[var(--clay)] sm:p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--muted)]">
                      <MessageCircle className="size-4 text-[var(--live)]" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-[var(--muted-foreground)]">
                        Teléfono / WhatsApp
                      </p>
                      <p className="text-xs font-bold sm:text-sm">
                        +57 (317) 270-7258
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-[var(--primary)] px-3 py-1 text-[11px] font-semibold text-[var(--primary-foreground)]">
                    Escribir
                  </span>
                </a>

                {/* Ubicación */}
                <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3.5 sm:p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--muted)]">
                    <MapPin className="size-4 text-[var(--clay)]" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-[var(--muted-foreground)]">
                      Ubicación
                    </p>
                    <p className="text-xs font-bold sm:text-sm">
                      Pasto, Nariño, Colombia
                    </p>
                  </div>
                </div>

                {/* Institución Universitaria UCC */}
                <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-3.5 sm:p-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--muted)]">
                    <Building2 className="size-4 text-[var(--clay)]" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-[var(--muted-foreground)]">
                      Institución Universitaria
                    </p>
                    <p className="text-xs font-bold sm:text-sm">
                      Universidad Cooperativa de Colombia
                    </p>
                    <p className="inline-flex items-center gap-1 font-mono text-[11px] text-[var(--muted-foreground)] sm:text-xs">
                      <Phone className="size-3" />
                      Línea Nacional: 018000 420101
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha: Formulario de contacto */}
          <motion.div
            variants={fadeIn("left", 0.16)}
            className="editorial-card p-6 sm:p-8 lg:col-span-7 lg:p-10"
          >
            {submitResult ? (
              <div className="flex h-full flex-col items-center justify-center py-6 text-center sm:py-8">
                <div className="flex size-16 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)]">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="mt-5 text-xl font-bold sm:text-2xl">
                  ¡Mensaje preparado, {values.name}!
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {submitResult.message}
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a
                    href={submitResult.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] shadow-md transition hover:-translate-y-0.5"
                  >
                    <MessageCircle className="size-4" />
                    <span>Enviar por WhatsApp</span>
                    <ArrowUpRight className="size-4 transition group-hover:rotate-45" />
                  </a>

                  <a
                    href={submitResult.mailtoUrl}
                    className="editorial-pill inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                  >
                    <Mail className="size-4" />
                    <span>Abrir en Correo</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitResult(null);
                      setValues((prev) => ({
                        ...prev,
                        name: "",
                        email: "",
                        message: "",
                      }));
                    }}
                    className="rounded-full border border-[var(--border)] bg-[var(--background)] px-5 py-3 text-sm font-semibold transition hover:bg-[var(--muted)]"
                  >
                    Nuevo mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider"
                    >
                      Nombre Completo
                    </label>
                    <input
                      ref={nameInputRef}
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className={`w-full rounded-2xl border bg-[var(--background)] px-4 py-3.5 text-sm outline-none transition ${
                        errors.name
                          ? "border-rose-500"
                          : "border-[var(--border)] focus:border-[var(--foreground)]"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-rose-300">
                        <AlertCircle className="size-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="tucorreo@ejemplo.com"
                      className={`w-full rounded-2xl border bg-[var(--background)] px-4 py-3.5 text-sm outline-none transition ${
                        errors.email
                          ? "border-rose-500"
                          : "border-[var(--border)] focus:border-[var(--foreground)]"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-rose-300">
                        <AlertCircle className="size-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider"
                  >
                    Motivo de Contacto
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm outline-none transition focus:border-[var(--foreground)]"
                  >
                    {contactReasonOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Escribe aquí tu mensaje o propuesta..."
                    className={`w-full resize-none rounded-2xl border bg-[var(--background)] px-4 py-3.5 text-sm outline-none transition ${
                      errors.message
                        ? "border-rose-500"
                        : "border-[var(--border)] focus:border-[var(--foreground)]"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-rose-300">
                      <AlertCircle className="size-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {serverError && (
                  <p className="flex items-center gap-1.5 rounded-2xl border border-rose-500/40 bg-rose-500/10 px-4 py-2.5 text-xs font-medium text-rose-200">
                    <AlertCircle className="size-4 shrink-0" />
                    <span>{serverError}</span>
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-[var(--primary-foreground)] shadow-lg transition hover:-translate-y-0.5 disabled:opacity-60 sm:flex-initial"
                  >
                    {isSubmitting ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <ArrowUpRight className="size-4 transition group-hover:rotate-45" />
                    )}
                    <span>
                      {isSubmitting ? "Procesando..." : "Enviar Mensaje"}
                    </span>
                  </button>

                  <a
                    href={WHATSAPP_DIRECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-pill inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap px-5 py-3.5 text-sm font-semibold sm:flex-initial"
                  >
                    <MessageCircle className="size-4 text-[var(--live)]" />
                    <span>WhatsApp Directo</span>
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
