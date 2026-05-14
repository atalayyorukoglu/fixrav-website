// Keystatic entegrasyonuna kadar statik placeholder veri
export const testimonials = [
  {
    id:        "sarah-j",
    name:      "Sarah Johnson",
    location:  "London, UK",
    rating:    5,
    quoteEn:   "FixRav delivered our website in just 2 weeks. Fast, clean, and exactly what we needed.",
    quoteTr:   "FixRav web sitemizi sadece 2 haftada teslim etti. Hızlı, temiz ve tam ihtiyacımız olan şeydi.",
    featured:  true,
  },
  {
    id:        "mehmet-k",
    name:      "Mehmet Karaoğlu",
    location:  "Istanbul, TR",
    rating:    5,
    quoteEn:   "Professional team, great communication. Our clinic site now ranks on Google.",
    quoteTr:   "Profesyonel ekip, harika iletişim. Kliniğimizin sitesi artık Google'da çıkıyor.",
    featured:  true,
  },
  {
    id:        "anna-b",
    name:      "Anna Becker",
    location:  "Berlin, DE",
    rating:    5,
    quoteEn:   "The CMS they set up is so easy to use. I update my own content without any help.",
    quoteTr:   "Kurdukları CMS kullanımı çok kolay. İçeriğimi yardım almadan kendim güncelliyorum.",
    featured:  true,
  },
] as const;
