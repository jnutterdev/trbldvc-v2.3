import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "reviews",
        label: "Reviews",
        path: "src/content/reviews",
        format: "md",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return values?.title
                ?.toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
            },
          },
        },
        fields: [
          {
            name: "title",
            type: "string",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "creator",
            type: "string",
            label: "Creator (author / director)",
            description: "For music reviews, leave blank and use Artist field.",
          },
          {
            name: "artist",
            type: "string",
            label: "Artist (music only)",
          },
          {
            name: "label",
            type: "string",
            label: "Record Label (music only)",
          },
          {
            name: "medium",
            type: "string",
            label: "Medium",
            required: true,
            options: [
              { value: "novel", label: "Novel" },
              { value: "film", label: "Film" },
              { value: "anime", label: "Anime" },
              { value: "tv", label: "TV" },
              { value: "comic", label: "Comic" },
              { value: "music", label: "Music" },
            ],
          },
          {
            name: "year",
            type: "number",
            label: "Year",
            required: true,
          },
          {
            name: "era",
            type: "string",
            label: "Era",
            required: true,
            options: [
              { value: "80s", label: "80s" },
              { value: "90s", label: "90s" },
              { value: "00s", label: "00s" },
              { value: "10s", label: "10s" },
            ],
          },
          {
            name: "score",
            type: "number",
            label: "Score (0–10)",
            required: true,
          },
          {
            name: "verdict",
            type: "string",
            label: "Verdict",
            description: 'e.g. "Essential Reading", "Recommended Listen"',
          },
          {
            name: "summary",
            type: "string",
            label: "Summary",
            description: "One or two sentences shown in the score block.",
            ui: {
              component: "textarea",
            },
          },
          {
            name: "blurb",
            type: "string",
            label: "Blurb",
            description: "Card-level description shown in archive and related grids.",
            ui: {
              component: "textarea",
            },
          },
          {
            name: "score_bars",
            type: "object",
            label: "Score Bars",
            list: true,
            description:
              "Non-music: 4 bars (Prose/Worldbuilding/Pacing/Atmosphere or equivalent). Music: 5 fixed bars (Signal / Architecture / Current / Atmosphere / Signal-to-Noise). Values 0–100.",
            fields: [
              {
                name: "label",
                type: "string",
                label: "Label",
              },
              {
                name: "value",
                type: "number",
                label: "Value (0–100)",
              },
            ],
          },
          {
            name: "genre_tags",
            type: "string",
            label: "Genre Tags (music only)",
            list: true,
            description: "Shown in the byline for music reviews.",
          },
          {
            name: "listen_platform",
            type: "string",
            label: "Listen Platform (music only)",
            options: [
              { value: "bandcamp", label: "Bandcamp" },
              { value: "ampwall", label: "Ampwall" },
              { value: "soundcloud", label: "SoundCloud" },
              { value: "youtube", label: "YouTube" },
            ],
          },
          {
            name: "listen_url",
            type: "string",
            label: "Listen URL (music only)",
          },
          {
            name: "tags",
            type: "string",
            label: "Tags",
            list: true,
          },
          {
            name: "published_date",
            type: "datetime",
            label: "Published Date",
          },
          {
            name: "featured",
            type: "boolean",
            label: "Featured",
            description: "If checked, populates the homepage hero panel.",
          },
          {
            name: "related",
            type: "string",
            label: "Related Reviews",
            list: true,
            description: "Slugs of related reviews (filename without .md).",
          },
          {
            name: "cover_image",
            type: "image",
            label: "Cover Image",
            description: "Used in the hero image panel when featured.",
          },
          {
            name: "body",
            type: "rich-text",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "quotes",
        label: "Quotes",
        path: "src/content/quotes",
        format: "md",
        fields: [
          {
            name: "text",
            type: "string",
            label: "Quote Text",
            isTitle: true,
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            name: "attribution",
            type: "string",
            label: "Attribution",
            required: true,
          },
          {
            name: "tags",
            type: "string",
            label: "Tags",
            list: true,
            description:
              "Thematic tags for matching with featured reviews. Use the same vocabulary as review tags.",
          },
        ],
      },
      {
        name: "siteSettings",
        label: "Site Settings",
        path: "src/content/siteSettings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          global: true,
        },
        fields: [
          {
            name: "tagline",
            type: "string",
            label: "Tagline",
          },
          {
            name: "about_blurb",
            type: "string",
            label: "About Blurb",
            description: "Short identity blurb for the homepage About panel.",
            ui: {
              component: "textarea",
            },
          },
          {
            name: "copyright_start_year",
            type: "number",
            label: "Copyright Start Year",
          },
          {
            name: "social",
            type: "object",
            label: "Social Links",
            fields: [
              { name: "instagram", type: "string", label: "Instagram URL" },
              { name: "bluesky", type: "string", label: "Bluesky URL" },
              { name: "rss", type: "string", label: "RSS Feed Path" },
              { name: "email", type: "string", label: "Email" },
            ],
          },
        ],
      },
      {
        name: "currently",
        label: "Currently",
        path: "src/content/currently",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          global: true,
        },
        fields: [
          {
            name: "watching",
            type: "object",
            label: "Watching",
            fields: [
              { name: "title", type: "string", label: "Title" },
              { name: "creator", type: "string", label: "Director / Studio" },
              { name: "year", type: "number", label: "Year" },
            ],
          },
          {
            name: "reading",
            type: "object",
            label: "Reading",
            fields: [
              { name: "title", type: "string", label: "Title" },
              { name: "creator", type: "string", label: "Author" },
              { name: "year", type: "number", label: "Year" },
            ],
          },
          {
            name: "listening",
            type: "object",
            label: "Listening",
            fields: [
              { name: "title", type: "string", label: "Title" },
              { name: "creator", type: "string", label: "Artist" },
              { name: "year", type: "number", label: "Year" },
            ],
          },
        ],
      },
    ],
  },
});
