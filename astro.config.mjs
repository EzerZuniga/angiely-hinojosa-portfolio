import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    tailwind(),
  ],
  site: "https://angiely-hinojosa.com",
  trailingSlash: "ignore",
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
