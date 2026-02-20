// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

/** https://astro.build/config */
export default defineConfig({
  site: "https://mariuszz.com/",
  output: "static",
  compressHTML: true,
  integrations: [mdx(), sitemap()],
  vite: {
    define: {
      __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    },
  },
  build: {
    inlineStylesheets: "always",
  },
});
