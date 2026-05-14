import type { Locale } from "./utils";

type LangString = Record<Locale, string>;

export const stats: Record<string, LangString> = {
  yearsExperience:    { en: "Years Experience",    tr: "Yıllık Deneyim"         },
  projectsDelivered:  { en: "Projects Delivered",  tr: "Tamamlanan Proje"        },
  clientSatisfaction: { en: "Client Satisfaction", tr: "Müşteri Memnuniyeti"     },
  responseTime:       { en: "Response Time",       tr: "Yanıt Süresi"            },
};
