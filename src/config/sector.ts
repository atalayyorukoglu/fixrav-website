export const sector = {
  type: "agency",

  features: {
    pricing:      true,
    blog:         true,
    gallery:      false,
    beforeAfter:  false,
    team:         true,
    faq:          true,
    howItWorks:   true,
    testimonials: true,
    seoLanding:   false,
  },
} as const;

export type SectorType = typeof sector.type;
export type Features   = typeof sector.features;
