import type { Locale } from "./utils";

type LangString = Record<Locale, string>;

export const testimonialsSection: Record<string, LangString> = {
  heading: {
    en: "What Our Clients Say",
    tr: "Müşterilerimiz Ne Diyor",
  },
  subheading: {
    en: "Real results from real businesses.",
    tr: "Gerçek işletmelerden gerçek sonuçlar.",
  },
  stars: {
    en: "5 out of 5 stars",
    tr: "5 üzerinden 5 yıldız",
  },
};
