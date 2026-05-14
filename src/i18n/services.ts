import type { Locale } from "./utils";

type LangString = Record<Locale, string>;

export const servicesSection: Record<string, LangString> = {
  heading: {
    en: "Our Services",
    tr: "Hizmetlerimiz",
  },
  subheading: {
    en: "Everything you need to establish a professional online presence.",
    tr: "Profesyonel bir çevrimiçi varlık oluşturmak için ihtiyacınız olan her şey.",
  },
  viewAll: {
    en: "View All Services",
    tr: "Tüm Hizmetleri Gör",
  },
  learnMore: {
    en: "Learn more",
    tr: "Daha fazla",
  },
};
