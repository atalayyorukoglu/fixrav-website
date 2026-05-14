import type { Locale } from "./utils";

type LangString = Record<Locale, string>;

export const blogSection: Record<string, LangString> = {
  heading: {
    en: "Blog",
    tr: "Blog",
  },
  subheading: {
    en: "Insights on web development, design, and growing your business online.",
    tr: "Web geliştirme, tasarım ve işletmenizi çevrimiçi büyütme üzerine görüşler.",
  },
  readMore: {
    en: "Read article",
    tr: "Makaleyi oku",
  },
  backToBlog: {
    en: "← Back to blog",
    tr: "← Blog'a dön",
  },
  publishedOn: {
    en: "Published",
    tr: "Yayınlandı",
  },
  noPosts: {
    en: "No posts yet — check back soon.",
    tr: "Henüz yazı yok — yakında burada olacak.",
  },
};
