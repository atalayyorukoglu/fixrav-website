import type { Locale } from "./utils";

type LangString = Record<Locale, string>;

export const pricingSection: Record<string, LangString> = {
  heading: {
    en: "Simple, Transparent Pricing",
    tr: "Sade ve Şeffaf Fiyatlar",
  },
  subheading: {
    en: "No hidden fees. Choose the plan that fits your business.",
    tr: "Gizli ücret yok. İşletmenize uygun paketi seçin.",
  },
  mostPopular: {
    en: "Most Popular",
    tr: "En Çok Tercih Edilen",
  },
  getStarted: {
    en: "Get Started",
    tr: "Başlayalım",
  },
  startingFrom: {
    en: "Starting from",
    tr: "Başlangıç fiyatı",
  },
};
