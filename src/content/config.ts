/**
 * Configuración de Content Collections de Astro
 * Define los esquemas y validaciones para el contenido markdown
 */

import { defineCollection, z } from "astro:content";

// ============================================================================
// CERTIFICATES COLLECTION
// ============================================================================

const certificatesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()),
    institution: z.string().optional(),
    year: z.string().or(z.number()).optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    order: z.number().optional(),
  }),
});

// ============================================================================
// EXPERIENCE COLLECTION
// ============================================================================

const experienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    role: z.string(),
    organization: z.string(),
    period: z.string(),
    location: z.string(),
    date: z.string().or(z.date()),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    order: z.number().optional(),
  }),
});

// ============================================================================
// PROJECTS COLLECTION (Futuro)
// ============================================================================

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().or(z.date()),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    url: z.string().url().optional(),
    github: z.string().url().optional(),
    featured: z.boolean().optional(),
  }),
});

// ============================================================================
// EXPORT COLLECTIONS
// ============================================================================

export const collections = {
  certificates: certificatesCollection,
  experience: experienceCollection,
  projects: projectsCollection,
};
