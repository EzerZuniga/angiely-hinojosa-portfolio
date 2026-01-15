# 🌱 Angiely Hinojosa Portfolio

[![Astro](https://img.shields.io/badge/Astro-4.0-FF5D01?logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

Sitio personal de **Angiely Rosalía Hinojosa Corredor**, enfocado en presentar su trayectoria como estudiante de Educación Física de la UNSAAC. Construido con Astro y un stack moderno para priorizar rendimiento, accesibilidad y mantenimiento.

## Índice

- [Características clave](#características-clave)
- [Stack principal](#stack-principal)
- [Arquitectura de contenido](#arquitectura-de-contenido)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Inicio rápido](#inicio-rápido)
- [Scripts disponibles](#scripts-disponibles)
- [Variables de entorno](#variables-de-entorno)
- [Calidad y buenas prácticas](#calidad-y-buenas-prácticas)
- [Despliegue](#despliegue)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Características clave

- Astro 4.x para páginas estáticas con islands reactivas donde es necesario
- Tailwind CSS con diseño mobile-first y tokens consistentes
- Sistema de colecciones tipadas en [src/content/config.ts](src/content/config.ts) para certificados y experiencia
- Componentes reutilizables y composables en [src/components](src/components) y [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro)
- SEO integral mediante metadatos centralizados en [src/components/seo/SEO.astro](src/components/seo/SEO.astro) y configuración global en [src/config/site.ts](src/config/site.ts)
- Optimización de imágenes con [src/components/ui/OptimizedImage.astro](src/components/ui/OptimizedImage.astro) usando Sharp
- Accesibilidad trabajada con semántica clara, contraste adecuado y navegación por teclado

## Stack principal

| Capa      | Herramienta    | Uso principal                                          |
| --------- | -------------- | ------------------------------------------------------ |
| Framework | Astro 4        | Generación híbrida de contenido estático/SSR           |
| Lenguaje  | TypeScript     | Tipado estricto en componentes, contenido y utilidades |
| Estilos   | Tailwind CSS 3 | Utilidades consistentes y theme configurable           |
| Imágenes  | Sharp          | Transformaciones y optimización en tiempo de build     |

## Arquitectura de contenido

- Las colecciones definidas en [src/content/config.ts](src/content/config.ts) garantizan esquemas validados con Zod antes de compilar.
- Certificados y experiencia se gestionan como archivos Markdown en [src/content/certificates](src/content/certificates) y [src/content/experience](src/content/experience) para mantener separación entre contenido y presentación.
- Tipos globales derivados se exponen en [src/types/index.ts](src/types/index.ts), lo que facilita autocompletado y evita errores en nuevas secciones del sitio.

## Estructura del proyecto

```
angiely-hinojosa-portfolio/
├── public/                 # Activos estáticos servidos sin transformación
│   ├── images/              # Recursos gráficos y fotografías
│   └── robots.txt           # Reglas para bots y SEO técnico
├── src/
│   ├── components/          # Componentes UI, layout y SEO
│   ├── config/              # Configuraciones globales del sitio
│   ├── constants/           # Constantes compartidas
│   ├── content/             # Colecciones tipadas y contenido Markdown
│   ├── layouts/             # Plantillas de página
│   ├── lib/                 # Lógica auxiliar (por ejemplo validaciones)
│   ├── pages/               # Rutas Astro principales
│   ├── styles/              # Hojas de estilo globales y Tailwind
│   ├── types/               # Definiciones de tipos reutilizables
│   └── utils/               # Utilidades puras compartidas
├── astro.config.mjs         # Configuración de Astro, integraciones y aliases
├── tailwind.config.ts       # Temado Tailwind y plugins
├── tsconfig.json            # Configuración TypeScript
├── package.json             # Dependencias y scripts
└── .env.example             # Variables de entorno documentadas
```

## Inicio rápido

### Prerrequisitos

- Node.js 18 o superior
- npm (recomendado) o cualquier gestor compatible con paquetes Node

### Pasos

1. Clona el repositorio.

   ```bash
   git clone https://github.com/EzerZuniga/angiely-hinojosa-portfolio.git
   cd angiely-hinojosa-portfolio
   ```

2. Instala las dependencias.

   ```bash
   npm install
   ```

3. Configura el archivo `.env` a partir del ejemplo.

   ```bash
   cp .env.example .env
   ```

4. Arranca el servidor de desarrollo.

   ```bash
   npm run dev
   ```

5. Abre http://localhost:4321 y activa el modo inspector de Astro cuando necesites depurar componentes.

## Scripts disponibles

| Comando         | Descripción                                             |
| --------------- | ------------------------------------------------------- |
| npm run dev     | Inicia el servidor de desarrollo con recarga automática |
| npm run start   | Alias de `npm run dev` para entornos que esperan start  |
| npm run build   | Ejecuta `astro check` y genera la build optimizada      |
| npm run preview | Sirve la build generada para validar antes de desplegar |
| npm run astro   | Expone la CLI de Astro para tareas avanzadas            |

## Variables de entorno

- `.env.example` sirve como guía para los valores esperados; duplica el archivo, renómbralo a `.env` y ajusta los campos según el entorno.
- Evita almacenar secretos sensibles en el repositorio; usa variables por entorno en la plataforma de despliegue.
- Para valores opcionales, Astro permitirá fallback definidos en [src/config/site.ts](src/config/site.ts).

## Licencia

Distribuido bajo la licencia MIT. Consulta [LICENSE](LICENSE) para más detalles.
