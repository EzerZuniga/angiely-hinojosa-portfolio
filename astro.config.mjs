import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: "https://angiely-hinojosa.vercel.app",
  trailingSlash: "ignore",
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
