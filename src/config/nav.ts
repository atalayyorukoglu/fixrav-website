export const nav = {
  header: [
    { label: "Services",  href: "/services",  labelTr: "Hizmetler", hrefTr: "/tr/hizmetler"  },
    { label: "About",     href: "/about",     labelTr: "Hakkında",  hrefTr: "/tr/hakkimizda" },
    { label: "Blog",      href: "/blog",      labelTr: "Blog",      hrefTr: "/tr/blog"        },
    { label: "Contact",   href: "/contact",   labelTr: "İletişim",  hrefTr: "/tr/iletisim"   },
  ],
  footer: [
    { label: "Privacy Policy", href: "/privacy-policy", labelTr: "Gizlilik", hrefTr: "/tr/gizlilik" },
    { label: "FAQ",            href: "/faq",            labelTr: "SSS",      hrefTr: "/tr/sss"       },
    { label: "How It Works",   href: "/how-it-works",   labelTr: "Süreç",    hrefTr: "/tr/surec"     },
  ],
} as const;
