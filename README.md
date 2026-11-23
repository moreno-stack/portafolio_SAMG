# SAMG.dev — Portafolio de Servicios Digitales & Ingeniería de Software 3D

Portafolio corporativo e interactivo en 3D de **Samuel Alejandro Moreno Gómez** (`SAMG.dev` / **Quantum Code Studio**), estudiante de 3.° semestre de **Ingeniería de Software** en la **Universidad Cooperativa de Colombia (Sede Pasto)** y desarrollador web enfocado en aplicaciones modernas, interfaces UI/UX y experiencias interactivas con WebGL.

- **Repositorio GitHub Oficial:** https://github.com/moreno-stack
- **Contacto Comercial:** `moreno200718@gmail.com` | WhatsApp `+57 (317) 270-7258`
- **Ubicación:** Pasto, Nariño, Colombia (Disponible local y remoto)

---

## Arquitectura Técnica

| Capa | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router + Turbopack) | SSR, rutas serverless (`POST /api/contact`) y prerenderizado estático |
| **UI & Estado** | React 19 + TypeScript 5 | Tipado estricto de esquemas (`Project`, `ServicePackage`, `ExperienceItem`, `TestimonialItem`) |
| **Diseño Visual** | Tailwind CSS 4 | Identidad *Quantum Code Studio* (`#030712`, `#06B6D4`, `#6366F1`, `#10B981`) y glassmorphism |
| **Gráficos 3D** | Three.js + `@react-three/fiber` + `@react-three/drei` | Poliedro cuántico dual y campo de 1.500 partículas reactivas a 60 FPS |
| **Animaciones** | Framer Motion | Sistema centralizado `lib/variants.ts` (`fadeIn`, `staggerContainer`) y contadores dinámicos |

---

## Estructura del Proyecto

```text
├── app/
│   ├── api/contact/route.ts   # Endpoint serverless (Resend + fallback automático WhatsApp/Mailto)
│   ├── globals.css            # Variables Quantum Code Studio y utilidades glassmorphism
│   ├── layout.tsx             # Tipografías Inter + Space Grotesk y metadatos SEO / OpenGraph
│   └── page.tsx               # Orden estricto de las 9 secciones del portafolio
├── components/
│   ├── canvas/QuantumScene.tsx # Escena 3D WebGL diferida (ssr: false)
│   ├── ui/AnimatedCounter.tsx  # Contadores numéricos animados en viewport
│   ├── Navbar.tsx             # Barra fija con indicador de sección activa y CTA
│   ├── Hero.tsx               # Presentación principal, CV descargable y retrato holográfico
│   ├── About.tsx              # Perfil profesional (< 20s), terminal interactiva y métricas
│   ├── Projects.tsx           # Casos de estudio sincronizados con github.com/moreno-stack
│   ├── Testimonials.tsx       # Testimonios contextualizados (UCC Pasto, Asados al Barril, Beer Point)
│   ├── Experience.tsx         # Línea de tiempo filtrable (Académica y Laboral)
│   ├── Contact.tsx            # Canales directos y formulario conectado a /api/contact
│   ├── Skills.tsx             # Catálogo de 4 paquetes de servicio + Matriz de Habilidades 3D
│   └── Footer.tsx             # Marca SAMG.dev, enlaces rápidos y derechos © 2026
├── data/
│   ├── projects.ts            # Proyectos reales y métricas de impacto
│   └── services.ts            # Líneas de servicio orientadas a clientes
├── lib/
│   └── variants.ts            # Variantes estandarizadas de Framer Motion
└── public/
    ├── cv.pdf                 # Hoja de vida descargable
    ├── yo.png                 # Retrato oficial optimizado
    └── images/                # Vistas previas vectoriales (.svg)
```

---

## Instalación y Desarrollo Local

```bash
# 1. Instalar dependencias
npm install

# 2. (Opcional) Configurar variables de entorno locales
cp .env.example .env.local

# 3. Iniciar servidor de desarrollo en http://localhost:3000
npm run dev

# 4. Validar calidad de código y compilación de producción
npm run lint
npm run build
```

---

## Guía Paso a Paso: Subir a GitHub (`moreno-stack`) y Desplegar en Vercel

### 1. Publicar en GitHub
```bash
git init
git add .
git commit -m "feat: portafolio corporativo 3D SAMG.dev listo para produccion"
git branch -M main
git remote add origin https://github.com/moreno-stack/portafolio-samg.git
git push -u origin main
```

### 2. Desplegar en Vercel
1. Ingresa a https://vercel.com e inicia sesión con tu cuenta de GitHub (`moreno-stack`).
2. Haz clic en **Add New... -> Project** e importa el repositorio `portafolio-samg`.
3. Vercel detectará automáticamente **Next.js** (`npm run build`).
4. *(Opcional)* En **Environment Variables**, añade `RESEND_API_KEY` y `CONTACT_TO_EMAIL="moreno200718@gmail.com"` si deseas envío transaccional por correo; si lo dejas vacío, el formulario funciona de inmediato con confirmación y enlace directo a WhatsApp.
5. Pulsa **Deploy** para obtener tu dominio público en producción.
