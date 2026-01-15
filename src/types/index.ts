/**
 * Tipos TypeScript centralizados del proyecto
 * @author Angiely Hinojosa Portfolio
 */

// ============================================================================
// SITE TYPES
// ============================================================================

export interface SiteConfig {
  name: string;
  role: string;
  institution: string;
  location: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  keywords: string[];
  links: SocialLinks;
}

export interface SocialLinks {
  email: string;
  facebook: string;
  linkedin: string;
  instagram: string;
  whatsapp: string;
  cv: string;
}

// ============================================================================
// COMPONENT PROPS TYPES
// ============================================================================

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  class?: string;
  type?: "button" | "submit" | "reset";
  external?: boolean;
  fullWidth?: boolean;
}

export interface CardProps {
  class?: string;
  hover?: boolean;
  as?: "div" | "article" | "section";
  padding?: "none" | "sm" | "md" | "lg";
}

export interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  class?: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

// ============================================================================
// CONTENT TYPES
// ============================================================================

export interface Highlight {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export interface MicroProgram {
  name: string;
  focus: string;
  duration: string;
}

export interface Value {
  title: string;
  body: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface AvailabilitySlot {
  day: string;
  time: string;
  focus: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: "Básico" | "Intermedio" | "Avanzado" | "Experto";
  description?: string;
}

export interface Methodology {
  name: string;
  description: string;
  icon: string;
}

// ============================================================================
// MARKDOWN CONTENT TYPES
// ============================================================================

export interface MarkdownFrontmatter {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  image?: string;
}

export interface Certificate extends MarkdownFrontmatter {
  institution: string;
  year: string;
}

export interface Experience extends MarkdownFrontmatter {
  role: string;
  organization: string;
  period: string;
  location: string;
}

// ============================================================================
// FORM TYPES
// ============================================================================

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required: boolean;
  placeholder?: string;
  options?: string[];
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type AsyncResult<T> = Promise<T>;
