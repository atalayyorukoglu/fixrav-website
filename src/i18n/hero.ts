import type { Locale } from "./utils";

type LangString = Record<Locale, string>;

type HeroContent = {
  badge?:        LangString;
  title:         LangString;
  subtitle:      LangString;
  ctaPrimary?:   LangString;
  ctaSecondary?: LangString;
};

export const hero: Record<string, HeroContent> = {
  home: {
    badge: {
      en: "Fast · Modern · Reliable",
      tr: "Hızlı · Modern · Güvenilir",
    },
    title: {
      en: "Modern Web Solutions\nfor Growing Businesses",
      tr: "Büyüyen İşletmeler İçin\nModern Web Çözümleri",
    },
    subtitle: {
      en: "We build fast, beautiful websites with Astro + Tailwind CSS. Get your business online in weeks, not months.",
      tr: "Astro + Tailwind CSS ile hızlı, güzel web siteleri inşa ediyoruz. İşletmenizi haftalarda, aylarda değil, internete taşıyoruz.",
    },
    ctaPrimary:   { en: "Get a Free Quote",   tr: "Ücretsiz Teklif Al"          },
    ctaSecondary: { en: "See Our Services",   tr: "Hizmetlerimizi İncele"        },
  },
  about: {
    title:    { en: "About FixRav",        tr: "FixRav Hakkında"                 },
    subtitle: { en: "A web studio focused on fast, conversion-ready websites for service businesses.", tr: "Servis işletmeleri için hızlı ve dönüşüm odaklı web siteleri inşa eden bir web stüdyosu." },
  },
  services: {
    title:    { en: "Our Services",        tr: "Hizmetlerimiz"                   },
    subtitle: { en: "Everything you need to establish a professional online presence.", tr: "Profesyonel bir çevrimiçi varlık oluşturmak için ihtiyacınız olan her şey." },
  },
  contact: {
    title:    { en: "Get in Touch",        tr: "İletişime Geçin"                 },
    subtitle: { en: "Ready to start your project? Send us a message and we'll get back to you within 24 hours.", tr: "Projenize başlamaya hazır mısınız? Bize mesaj gönderin, 24 saat içinde dönelim." },
  },
  blog: {
    title:    { en: "Blog",                tr: "Blog"                            },
    subtitle: { en: "Insights on web development, design, and growing your business online.", tr: "Web geliştirme, tasarım ve işletmenizi çevrimiçi büyütme üzerine görüşler." },
  },
  faq: {
    title:    { en: "Frequently Asked Questions", tr: "Sık Sorulan Sorular"     },
    subtitle: { en: "Everything you need to know about working with us.", tr: "Bizimle çalışmak hakkında bilmeniz gereken her şey." },
  },
  pricing: {
    title:    { en: "Simple, Transparent Pricing", tr: "Sade ve Şeffaf Fiyatlar" },
    subtitle: { en: "No hidden fees. Choose the plan that fits your business.", tr: "Gizli ücret yok. İşletmenize uygun paketi seçin." },
  },
  team: {
    title:    { en: "Meet the Team",       tr: "Ekibimizle Tanışın"              },
    subtitle: { en: "The people behind FixRav.", tr: "FixRav'ın arkasındaki insanlar." },
  },
  "how-it-works": {
    title:    { en: "How It Works",        tr: "Süreç Nasıl İşler"               },
    subtitle: { en: "From brief to launch — here's what working with us looks like.", tr: "Briften lansmanına — bizimle çalışmak böyle görünüyor." },
  },
  testimonials: {
    title:    { en: "Client Testimonials",               tr: "Müşteri Yorumları"                          },
    subtitle: { en: "Real results from real businesses.", tr: "Gerçek işletmelerden gerçek sonuçlar."      },
  },
};

export type HeroPage = keyof typeof hero;
