import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";
import cloudflare from "@astrojs/cloudflare";

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
        // Cloudflare Workers: "worker" export react-dom/server.browser'a gider (MessageChannel yok).
        // Edge/workerd sürümü Workers ile uyumludur.
        "react-dom/server": "react-dom/server.edge",
        // Cloudflare Workers ortamında Node.js crypto modülü
        "node:crypto": "crypto",
      },
    },
  },
});
