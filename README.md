# FAMAX CONCRETO PERÚ

Sitio web corporativo de **FAMAX CONCRETO PERÚ**, empresa peruana especializada en concreto
premezclado, adoquines, cachacos y prefabricados en Lima Norte.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [sharp](https://sharp.pixelplumbing.com/) (optimización de imágenes)

## Estructura

```
src/
├── app/                    # Rutas (App Router)
│   ├── layout.tsx          # Layout raíz (metadatos, JSON-LD)
│   ├── page.tsx            # Home
│   ├── contacto/           # Formulario de cotización (vía WhatsApp)
│   ├── nosotros/
│   ├── productos-y-servicios/
│   ├── politicas-de-privacidad/
│   ├── linea-etica/
│   └── libro-de-reclamaciones/   # Formulario de reclamos (en desarrollo)
├── components/
│   ├── home/
│   ├── layout/             # Navbar, Footer
│   └── ui/                 # Botón WhatsApp, calculadora, etc.
└── public/images/          # Imágenes del sitio
```

## Comandos

```bash
npm install        # Instalar dependencias
npm run dev        # Servidor de desarrollo (http://localhost:3000)
npm run build      # Compilación de producción
npm run start      # Servir el build de producción
npm run lint       # Análisis estático (ESLint)
npm audit          # Verificación de vulnerabilidades
```

## Variables de entorno

Copia `.env.example` a `.env.local` si necesitas variables (opcional; el sitio es estático).
Consulta `.env.example` para más detalles.

## Notas de seguridad

- Headers de seguridad y CSP configurados en `next.config.ts` (`poweredByHeader: false`).
- Formularios anti-spam con campo honeypot.
- No se almacenan secretos en el repositorio (`.env*` ignorado por git).

## Despliegue

El sitio es totalmente estático/SSG-friendly y puede desplegarse en cualquier hosting de
Next.js (p. ej. Vercel, Netlify) o en un servidor propio con `next start`.
