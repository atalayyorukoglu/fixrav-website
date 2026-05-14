export type Locale = "en" | "tr";

export function t<T extends Record<Locale, string>>(
  key: T,
  locale: Locale
): string {
  return key[locale];
}

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang === "tr") return "tr";
  return "en";
}
