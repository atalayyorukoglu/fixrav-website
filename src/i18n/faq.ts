import type { Locale } from "./utils";

type LangString = Record<Locale, string>;

export const faqSection: Record<string, LangString> = {
  heading: {
    en: "Frequently Asked Questions",
    tr: "Sık Sorulan Sorular",
  },
  subheading: {
    en: "Everything you need to know before we start.",
    tr: "Başlamadan önce bilmeniz gereken her şey.",
  },
};

export const faqItems: Array<{ question: LangString; answer: LangString }> = [
  {
    question: {
      en: "How long does it take to build a website?",
      tr: "Bir web sitesi yapmak ne kadar sürer?",
    },
    answer: {
      en: "Most projects are completed in 2–4 weeks depending on the scope. A standard 5-page site typically takes 2 weeks from brief to launch.",
      tr: "Çoğu proje kapsama göre 2–4 haftada tamamlanır. Standart 5 sayfalık bir site genellikle briften lansmanına 2 hafta sürer.",
    },
  },
  {
    question: {
      en: "Can I update the content myself after launch?",
      tr: "Lansmandan sonra içeriği kendim güncelleyebilir miyim?",
    },
    answer: {
      en: "Yes. Every site comes with Keystatic CMS — a simple browser-based editor. No coding knowledge needed to add pages, update text, or upload images.",
      tr: "Evet. Her site Keystatic CMS ile gelir — basit, tarayıcı tabanlı bir editör. Sayfa eklemek, metin güncellemek veya görsel yüklemek için kod bilgisi gerekmez.",
    },
  },
  {
    question: {
      en: "What is included in the price?",
      tr: "Fiyata neler dahil?",
    },
    answer: {
      en: "Design, development, CMS integration, basic SEO setup, and one round of revisions. Hosting on Cloudflare Pages is free. Domain registration is separate.",
      tr: "Tasarım, geliştirme, CMS entegrasyonu, temel SEO kurulumu ve bir tur revizyon. Cloudflare Pages'te barındırma ücretsizdir. Domain kaydı ayrıdır.",
    },
  },
  {
    question: {
      en: "Do you provide hosting?",
      tr: "Hosting hizmeti veriyor musunuz?",
    },
    answer: {
      en: "We deploy to Cloudflare Pages, which is free for most sites. You own the project entirely — we hand over the GitHub repo and deployment at the end.",
      tr: "Cloudflare Pages'e deploy ediyoruz, bu çoğu site için ücretsizdir. Projeye tamamen siz sahip olursunuz — sonunda GitHub repo ve deployment'ı size teslim ediyoruz.",
    },
  },
  {
    question: {
      en: "Do you work with businesses outside Turkey?",
      tr: "Türkiye dışındaki işletmelerle de çalışıyor musunuz?",
    },
    answer: {
      en: "Yes, we work with clients globally. All communication can be in English or Turkish.",
      tr: "Evet, dünya genelinde müşterilerle çalışıyoruz. Tüm iletişim İngilizce veya Türkçe olabilir.",
    },
  },
];
