import type { Locale } from "./utils";

export const common: Record<string, Record<Locale, string>> = {
  // ─── Navigasyon ───────────────────────────────
  backToHome: {
    en: "Back to home",
    tr: "Ana sayfaya dön",
  },
  readMore: {
    en: "Read more",
    tr: "Devamını oku",
  },

  // ─── Header CTA ───────────────────────────────
  whatsappButton: {
    en: "Chat on WhatsApp",
    tr: "WhatsApp'tan Yaz",
  },
  ctaButton: {
    en: "Get a Free Quote",
    tr: "Ücretsiz Teklif Al",
  },

  // ─── Form ─────────────────────────────────────
  formName: {
    en: "Your Name",
    tr: "Adınız",
  },
  formEmail: {
    en: "Email Address",
    tr: "E-posta Adresiniz",
  },
  formPhone: {
    en: "Phone Number",
    tr: "Telefon Numaranız",
  },
  formMessage: {
    en: "Your Message",
    tr: "Mesajınız",
  },
  formSubmit: {
    en: "Send Message",
    tr: "Gönder",
  },
  formSuccess: {
    en: "Message sent! We will get back to you shortly.",
    tr: "Mesajınız iletildi! En kısa sürede size döneceğiz.",
  },
  formError: {
    en: "Something went wrong. Please try again.",
    tr: "Bir hata oluştu. Lütfen tekrar deneyin.",
  },

  // ─── Footer ───────────────────────────────────
  footerCopyright: {
    en: "All rights reserved.",
    tr: "Tüm hakları saklıdır.",
  },
  footerTagline: {
    en: "Modern web solutions for growing businesses.",
    tr: "Büyüyen işletmeler için modern web çözümleri.",
  },

  // ─── Dil Değiştirici ──────────────────────────
  langEn: {
    en: "English",
    tr: "İngilizce",
  },
  langTr: {
    en: "Turkish",
    tr: "Türkçe",
  },
} as const;
