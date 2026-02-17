// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

/** https://astro.build/config */
export default defineConfig({
  site: "https://mariuszz.com/",
  output: "static",
  integrations: [mdx(), sitemap()],
  vite: {
    define: {
      __BUILD_DATE__: JSON.stringify(Temporal.Now.instant().toString()),
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@/components": fileURLToPath(
          new URL("./src/components", import.meta.url),
        ),
        "@/layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "@/assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@/styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      },
    },
  },
});
