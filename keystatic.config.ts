import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage:
    import.meta.env.PROD
      ? { kind: "github", repo: { owner: "atalayyorukoglu", name: "fixrav-website" } }
      : { kind: "local" },

  ui: {
    brand: { name: "FixRav CMS" },
  },

  collections: {
    // ─── Blog ───────────────────────────────────────────────
    blog: collection({
      label: "Blog Posts",
      slugField: "titleEn",
      path: "src/content/blog/*",
      format: { contentField: "body" },
      schema: {
        titleEn: fields.slug({ name: { label: "Title (EN)" } }),
        titleTr: fields.text({ label: "Title (TR)" }),
        publishedAt: fields.date({ label: "Published Date" }),
        excerpt: fields.text({ label: "Excerpt (EN)", multiline: true }),
        excerptTr: fields.text({ label: "Excerpt (TR)", multiline: true }),
        image: fields.text({ label: "Cover Image Path (e.g. /blog/cover.jpg)" }),
        body: fields.markdoc({ label: "Content (EN)" }),
      },
    }),

    // ─── Testimonials ───────────────────────────────────────
    testimonials: collection({
      label: "Testimonials",
      slugField: "name",
      path: "src/content/testimonials/*",
      format: { data: "yaml" },
      schema: {
        name: fields.slug({ name: { label: "Client Name" } }),
        location: fields.text({ label: "Location (e.g. London, UK)" }),
        rating: fields.number({ label: "Rating (1–5)", validation: { min: 1, max: 5 } }),
        quoteEn: fields.text({ label: "Quote (EN)", multiline: true }),
        quoteTr: fields.text({ label: "Quote (TR)", multiline: true }),
        featured: fields.checkbox({ label: "Show on Homepage", defaultValue: false }),
      },
    }),

    // ─── Team ───────────────────────────────────────────────
    team: collection({
      label: "Team Members",
      slugField: "name",
      path: "src/content/team/*",
      format: { data: "yaml" },
      schema: {
        name: fields.slug({ name: { label: "Full Name" } }),
        titleEn: fields.text({ label: "Title (EN)" }),
        titleTr: fields.text({ label: "Title (TR)" }),
        bioEn: fields.text({ label: "Bio (EN)", multiline: true }),
        bioTr: fields.text({ label: "Bio (TR)", multiline: true }),
        photo: fields.text({ label: "Photo Path (e.g. /team/atalay.jpg)" }),
        order: fields.number({ label: "Display Order" }),
      },
    }),

    // ─── Services ───────────────────────────────────────────
    services: collection({
      label: "Services",
      slugField: "titleEn",
      path: "src/content/services/*",
      format: { data: "yaml" },
      schema: {
        titleEn: fields.slug({ name: { label: "Title (EN)" } }),
        titleTr: fields.text({ label: "Title (TR)" }),
        descriptionEn: fields.text({ label: "Description (EN)", multiline: true }),
        descriptionTr: fields.text({ label: "Description (TR)", multiline: true }),
        icon: fields.text({ label: "Icon ID (e.g. web-design)" }),
        featured: fields.checkbox({ label: "Show on Homepage", defaultValue: false }),
      },
    }),
  },

  singletons: {
    settings: singleton({
      label: "Site Settings",
      path: "src/content/settings",
      format: { data: "yaml" },
      schema: {
        whatsappPhone: fields.text({ label: "WhatsApp Number (with country code, no spaces)" }),
        announcementEn: fields.text({ label: "Announcement Bar (EN) — boş bırakırsan görünmez" }),
        announcementTr: fields.text({ label: "Announcement Bar (TR)" }),
        googleReviewUrl: fields.url({ label: "Google Reviews URL" }),
      },
    }),
  },
});
