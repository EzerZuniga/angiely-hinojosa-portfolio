type DateFormat = "short" | "long" | "full";

type ClassValue = string | false | null | undefined;

type DatedItem = { date: string | Date };

export function formatDate(
  date: Date | string,
  format: DateFormat = "long",
): string {
  const dateObject = typeof date === "string" ? new Date(date) : date;

  const options: Record<DateFormat, Intl.DateTimeFormatOptions> = {
    short: { year: "numeric", month: "2-digit", day: "2-digit" },
    long: { year: "numeric", month: "long", day: "numeric" },
    full: { weekday: "long", year: "numeric", month: "long", day: "numeric" },
  };

  return new Intl.DateTimeFormat("es-PE", options[format]).format(dateObject);
}

export function truncate(
  text: string,
  maxLength: number,
  suffix = "...",
): string {
  if (text.length <= maxLength) return text;
  const safeLength = Math.max(maxLength - suffix.length, 0);
  const excerpt = text.slice(0, safeLength).trimEnd();
  return `${excerpt}${suffix}`;
}

export function capitalize(value: string): string {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPeruvianPhone(phone: string): boolean {
  return /^(\+51|51)?9\d{8}$/.test(phone.replace(/[\s-]/g, ""));
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("es-PE").format(value);
}

export function getAbsoluteUrl(path: string, baseUrl: string): string {
  return new URL(path, baseUrl).toString();
}

export function isProduction(): boolean {
  return import.meta.env.PROD;
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

export function sortByDate<T extends DatedItem>(items: T[]): T[] {
  return [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
