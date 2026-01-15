/**
 * Constantes globales del proyecto
 * @author Angiely Hinojosa Portfolio
 */

// ============================================================================
// NAVIGATION
// ============================================================================

export const NAV_ITEMS = [
  { name: "Inicio", href: "/" },
  { name: "Sobre mí", href: "/about" },
  { name: "Experiencia", href: "/experience" },
  { name: "Habilidades", href: "/skills" },
  { name: "Contacto", href: "/contact" },
] as const;

// ============================================================================
// SEO
// ============================================================================

export const DEFAULT_OG_IMAGE = "/images/og-angiely.svg";
export const DEFAULT_LOCALE = "es_ES";
export const DEFAULT_LANGUAGE = "es";

// ============================================================================
// SOCIAL MEDIA
// ============================================================================

export const SOCIAL_PLATFORMS = {
  EMAIL: "email",
  LINKEDIN: "linkedin",
  INSTAGRAM: "instagram",
  WHATSAPP: "whatsapp",
  CV: "cv",
} as const;

// ============================================================================
// FORM
// ============================================================================

export const CONTACT_SERVICES = [
  "Asesoría personalizada",
  "Talleres grupales",
  "Sesiones de entrenamiento",
  "Programa educativo",
  "Consulta general",
] as const;

export const FORM_VALIDATION_MESSAGES = {
  REQUIRED: "Este campo es obligatorio",
  INVALID_EMAIL: "Email inválido",
  INVALID_PHONE: "Teléfono inválido",
  MIN_LENGTH: (min: number) => `Mínimo ${min} caracteres`,
  MAX_LENGTH: (max: number) => `Máximo ${max} caracteres`,
} as const;

// ============================================================================
// SKILLS LEVELS
// ============================================================================

export const SKILL_LEVELS = {
  BASICO: "Básico",
  INTERMEDIO: "Intermedio",
  AVANZADO: "Avanzado",
  EXPERTO: "Experto",
} as const;

// ============================================================================
// RESPONSIVE BREAKPOINTS (Tailwind defaults)
// ============================================================================

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
} as const;

// ============================================================================
// TIMING
// ============================================================================

export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;

// ============================================================================
// LIMITS
// ============================================================================

export const CONTENT_LIMITS = {
  MAX_TITLE_LENGTH: 60,
  MAX_DESCRIPTION_LENGTH: 160,
  MAX_EXCERPT_LENGTH: 200,
  POSTS_PER_PAGE: 12,
} as const;

// ============================================================================
// EXTERNAL LINKS
// ============================================================================

export const EXTERNAL_LINKS = {
  UNSAAC: "https://www.unsaac.edu.pe",
  MINEDU: "https://www.minedu.gob.pe",
  GITHUB: "https://github.com/EzerZuniga/angiely-hinojosa-portfolio",
} as const;

// ============================================================================
// COLORS (Primary palette)
// ============================================================================

export const COLORS = {
  PRIMARY: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },
} as const;
