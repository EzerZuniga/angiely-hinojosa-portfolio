import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-PE",
        },
      },
    }),
  ],
  site: "https://angiely-hinojosa.com",
  trailingSlash: "ignore",
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
