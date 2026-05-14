import type { Locale } from "./utils";

type LangString = Record<Locale, string>;

export const howItWorksSection: Record<string, LangString> = {
  heading: {
    en: "How It Works",
    tr: "Süreç Nasıl İşler",
  },
  subheading: {
    en: "From first message to live website — a clear, predictable process.",
    tr: "İlk mesajdan canlı siteye — net ve öngörülebilir bir süreç.",
  },
};

export const howItWorksSteps: Array<{
  titleEn: string;
  titleTr: string;
  descEn: string;
  descTr: string;
}> = [
  {
    titleEn: "Discovery Call",
    titleTr: "Keşif Görüşmesi",
    descEn:
      "We start with a 30-minute call to understand your business, goals, and requirements. No commitment needed.",
    descTr:
      "İşletmenizi, hedeflerinizi ve gereksinimlerinizi anlamak için 30 dakikalık bir görüşmeyle başlıyoruz. Herhangi bir taahhüt gerekmiyor.",
  },
  {
    titleEn: "Design & Planning",
    titleTr: "Tasarım ve Planlama",
    descEn:
      "We define the site structure, content plan, and visual direction. You approve before a single line of code is written.",
    descTr:
      "Site yapısını, içerik planını ve görsel yönü belirliyoruz. Tek bir satır kod yazılmadan önce onayınızı alıyoruz.",
  },
  {
    titleEn: "Development",
    titleTr: "Geliştirme",
    descEn:
      "We build your site with Astro, Tailwind CSS, and Keystatic CMS. Fast, accessible, and SEO-ready from day one.",
    descTr:
      "Sitenizi Astro, Tailwind CSS ve Keystatic CMS ile inşa ediyoruz. İlk günden itibaren hızlı, erişilebilir ve SEO'ya hazır.",
  },
  {
    titleEn: "Launch & Handover",
    titleTr: "Lansman ve Devir",
    descEn:
      "We deploy to Cloudflare Pages, run final checks, and hand over the GitHub repo. Your site, your ownership.",
    descTr:
      "Cloudflare Pages'e deploy ediyoruz, son kontrolleri yapıyoruz ve GitHub reposunu teslim ediyoruz. Siteniz, sizin mülkiyetiniz.",
  },
];
