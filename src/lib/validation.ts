/**
 * Librería para validar formularios
 * Funciones de validación avanzadas
 */

import type { ContactFormData } from "@/types";
import { isValidEmail, isValidPeruvianPhone } from "@/utils/helpers";

/**
 * Errores de validación
 */
export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Resultado de validación
 */
export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

/**
 * Valida los datos del formulario de contacto
 * @param data - Datos del formulario
 * @returns Resultado de la validación
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: ValidationError[] = [];

  // Validar nombre
  if (!data.name || data.name.trim().length < 2) {
    errors.push({
      field: "name",
      message: "El nombre debe tener al menos 2 caracteres",
    });
  }

  if (data.name && data.name.length > 100) {
    errors.push({
      field: "name",
      message: "El nombre no puede exceder 100 caracteres",
    });
  }

  // Validar email
  if (!data.email || !isValidEmail(data.email)) {
    errors.push({
      field: "email",
      message: "Email inválido",
    });
  }

  // Validar teléfono (opcional)
  if (data.phone && !isValidPeruvianPhone(data.phone)) {
    errors.push({
      field: "phone",
      message: "Teléfono inválido. Formato: +51999999999 o 999999999",
    });
  }

  // Validar servicio
  if (!data.service || data.service.trim() === "") {
    errors.push({
      field: "service",
      message: "Debes seleccionar un servicio",
    });
  }

  // Validar mensaje
  if (!data.message || data.message.trim().length < 10) {
    errors.push({
      field: "message",
      message: "El mensaje debe tener al menos 10 caracteres",
    });
  }

  if (data.message && data.message.length > 1000) {
    errors.push({
      field: "message",
      message: "El mensaje no puede exceder 1000 caracteres",
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Sanitiza el input del usuario
 * @param input - Input a sanitizar
 * @returns Input sanitizado
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remover < y >
    .replace(/javascript:/gi, "") // Remover javascript:
    .replace(/on\w+=/gi, ""); // Remover event handlers
}

/**
 * Valida campo requerido
 * @param value - Valor a validar
 * @returns true si es válido
 */
export function isRequired(value: string | undefined | null): boolean {
  return !!value && value.trim().length > 0;
}

/**
 * Valida longitud mínima
 * @param value - Valor a validar
 * @param minLength - Longitud mínima
 * @returns true si es válido
 */
export function minLength(value: string, minLength: number): boolean {
  return value.trim().length >= minLength;
}

/**
 * Valida longitud máxima
 * @param value - Valor a validar
 * @param maxLength - Longitud máxima
 * @returns true si es válido
 */
export function maxLength(value: string, maxLength: number): boolean {
  return value.trim().length <= maxLength;
}
