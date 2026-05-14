import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";
import cloudflare from "@astrojs/cloudflare";

// `defineConfig((opts) => ...)` kullanma — Astro export'u nesne bekler; fonksiyon verilirse adapter/ssr kaybolur.
// `react-dom/server.edge` CJS `require` içerir; sadece production bundle'da (Cloudflare Worker) alias uygula.
const useReactDomServerEdge =
  process.argv.includes("build") || process.argv.includes("preview");

export default defineConfig({
  site: "https://fixrav.com",
  output: "server",
  adapter: cloudflare({
    platformProxy: { enabled: true },
  }),
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en-GB", tr: "tr-TR" },
      },
    }),
    keystatic(),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        ...(useReactDomServerEdge
          ? {
              "react-dom/server": "react-dom/server.edge",
            }
          : {}),
        "node:crypto": "crypto",
      },
    },
  },
});
