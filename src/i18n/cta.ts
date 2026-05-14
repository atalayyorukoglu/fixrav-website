import type { Locale } from "./utils";

type LangString = Record<Locale, string>;

export const cta: Record<string, LangString> = {
  heading: {
    en: "Ready to Start Your Project?",
    tr: "Projenize Başlamaya Hazır mısınız?",
  },
  subheading: {
    en: "Send us a message and we'll get back to you within 24 hours.",
    tr: "Bize mesaj gönderin, 24 saat içinde dönelim.",
  },
  labelName: {
    en: "Your Name",
    tr: "Adınız",
  },
  labelEmail: {
    en: "Email Address",
    tr: "E-posta Adresiniz",
  },
  labelMessage: {
    en: "Your Message",
    tr: "Mesajınız",
  },
  placeholderMessage: {
    en: "Tell us about your project…",
    tr: "Projeniz hakkında bilgi verin…",
  },
  submit: {
    en: "Send Message",
    tr: "Gönder",
  },
  submitting: {
    en: "Sending…",
    tr: "Gönderiliyor…",
  },
  success: {
    en: "Message sent! We'll be in touch shortly.",
    tr: "Mesajınız iletildi! En kısa sürede size döneceğiz.",
  },
  error: {
    en: "Something went wrong. Please try again.",
    tr: "Bir hata oluştu. Lütfen tekrar deneyin.",
  },
};
