import { defineMiddleware } from "astro/middleware";

/** Keystatic + Cloudflare: core paket `process.env.KEYSTATIC_*` fallback'lerine de bakıyor; Worker'da `process.env` boş olabiliyor. */
const KEYSTATIC_ENV = [
  "KEYSTATIC_GITHUB_CLIENT_ID",
  "KEYSTATIC_GITHUB_CLIENT_SECRET",
  "KEYSTATIC_SECRET",
] as const;

export const onRequest = defineMiddleware(async (context, next) => {
  const env = context.locals.runtime?.env as Record<string, unknown> | undefined;
  if (env) {
    for (const key of KEYSTATIC_ENV) {
      const v = env[key];
      if (typeof v === "string" && v.length > 0) {
        Object.assign(process.env, { [key]: v });
      }
    }
  }
  if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = "production";
  }
  return next();
});
