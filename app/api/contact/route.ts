import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WHATSAPP_NUMBER = "573172707258";
const DEFAULT_TO_EMAIL = "moreno200718@gmail.com";

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const service = (body.service ?? "Consulta General").trim();
    const message = (body.message ?? "").trim();

    if (name.length < 3) {
      return NextResponse.json(
        { ok: false, error: "El nombre debe contener al menos 3 caracteres." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Ingresa un correo electrónico válido." },
        { status: 400 }
      );
    }

    if (message.length < 15) {
      return NextResponse.json(
        {
          ok: false,
          error: "El mensaje debe incluir al menos 15 caracteres de detalle.",
        },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
    const whatsappText = `Hola Samuel, soy ${name} (${email}). Me interesa: ${service}.\n\nMensaje: ${message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappText
    )}`;
    const mailtoUrl = `mailto:${toEmail}?subject=${encodeURIComponent(
      `[SAMG.dev] ${service} — ${name}`
    )}&body=${encodeURIComponent(
      `Hola Samuel,\n\nNombre: ${name}\nCorreo: ${email}\nServicio / Motivo: ${service}\n\nMensaje:\n${message}`
    )}`;

    const resendApiKey = process.env.RESEND_API_KEY?.trim();

    if (resendApiKey && !resendApiKey.startsWith("re_tu_api_key")) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portafolio SAMG <onboarding@resend.dev>",
          to: [toEmail],
          reply_to: email,
          subject: `[SAMG.dev] ${service} — ${name}`,
          html: `
            <div style="font-family:system-ui,sans-serif;background:#030712;color:#f8fafc;padding:24px;border-radius:12px;">
              <h2 style="color:#22d3ee;margin-top:0;">Nuevo contacto desde SAMG.dev</h2>
              <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
              <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
              <p><strong>Servicio / Motivo:</strong> ${escapeHtml(service)}</p>
              <hr style="border-color:#1e293b;margin:16px 0;" />
              <p style="white-space:pre-line;">${escapeHtml(message)}</p>
            </div>
          `,
        }),
      });

      if (resendResponse.ok) {
        return NextResponse.json({
          ok: true,
          mode: "email_sent",
          message:
            "Tu mensaje fue enviado directamente al correo de Samuel Alejandro Moreno Gómez.",
          whatsappUrl,
          mailtoUrl,
        });
      }
    }

    // Fallback garantizado sin bloqueos si RESEND_API_KEY aún no está configurada en Vercel
    return NextResponse.json({
      ok: true,
      mode: "direct_channel_ready",
      message:
        "Solicitud validada y estructurada correctamente. Puedes enviarla al instante por WhatsApp directo o correo electrónico.",
      whatsappUrl,
      mailtoUrl,
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "No fue posible procesar la solicitud. Intenta nuevamente.",
      },
      { status: 500 }
    );
  }
}

