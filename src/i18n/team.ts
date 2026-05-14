import type { Locale } from "./utils";

type LangString = Record<Locale, string>;

export const teamSection: Record<string, LangString> = {
  heading: {
    en: "Meet the Team",
    tr: "Ekibimizle Tanışın",
  },
  subheading: {
    en: "The people behind FixRav.",
    tr: "FixRav'ın arkasındaki insanlar.",
  },
};
