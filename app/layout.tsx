import type { Metadata, Viewport } from "next";
import { Archivo_Black, Manrope } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo-black",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF9F6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://portafolio-samg.vercel.app"
  ),
  title:
    "Samuel Alejandro Moreno Gómez — Portafolio de Ingeniería de Software",
  description:
    "Portafolio personal y académico de Samuel Alejandro Moreno Gómez (SAMG.dev | moreno-stack). Estudiante de 5.° semestre de Ingeniería de Software en la Universidad Cooperativa de Colombia (Sede Pasto).",
  keywords: [
    "Samuel Alejandro Moreno Gómez",
    "SAMG.dev",
    "moreno-stack",
    "Ingeniería de Software UCC",
    "Diseño de Interfaces",
    "Desarrollo Web Pasto",
    "Next.js",
    "TypeScript",
    "Pasto Colombia",
  ],
  authors: [
    {
      name: "Samuel Alejandro Moreno Gómez",
      url: "https://github.com/moreno-stack",
    },
  ],
  openGraph: {
    title: "Samuel Alejandro Moreno Gómez — Ingeniería de Software (UCC Pasto)",
    description:
      "Portafolio académico y de desarrollo web de Samuel Alejandro Moreno Gómez, estudiante de 5.° semestre de Ingeniería de Software.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${archivoBlack.variable} ${manrope.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] selection:bg-[var(--primary)] selection:text-[var(--primary-foreground)]">
        {children}
      </body>
    </html>
  );
}
