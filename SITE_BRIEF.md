# TERRIBLEDevice — Site Brief

**URL:** terribledevice.com
**Copyright:** 2014–2026
**Tagline:** cyberpunk in pop culture

---

## Overview

TERRIBLEDevice is a single-author review archive covering cyberpunk in pop culture — film, fiction, anime, music, television, comics, and anything adjacent. Reviews are short-form and opinionated; scores exist but are secondary to the writing. The name is drawn from a William Gibson short story.

---

## Pages

### `terribledevice_index.html` — Homepage

The landing page. Uses a two-column grid layout with a featured review as the hero. The right column is a flex column containing three independent panels (About, By the Numbers, Currently). The current featured review is _Substanz T:6_ by Manufactura (score: 8.5).

**Sections:**

- Nav bar (logo + Archive / About links)
- Hero grid:
    - **Hero image panel** (top-left) — full-bleed image with quote overlay. Currently: _"The future of the past is still the future."_ — Bruce Sterling. Attribution below a rule in mono text.
        - BUILD NOTE: maintain a quotes array/collection with thematic tags; at build time pull a quote matching the featured review's tags or medium.
    - **Hero panel** (bottom-left) — featured review title, subtitle, tags, score + descriptor label
    - **Right column** (flex column spanning both left rows):
        - _About_ — site identity blurb: "Terribledevice is one person's obsession with cyberpunk across film, fiction, anime, and music."
        - _By the numbers_ — total review count (14); highest rated per medium (scores ≥ 9.0): Blade Runner 9.6 film, Akira Manga 9.5 comic, Neuromancer 9.4 novel, Akira 9.1 anime, Tactical Neural Implant 9.0 music
        - _Currently_ — watching / reading / listening (one entry each, manually updated)
- **Reviews row** — 4-up grid of recent review cards (Akira 9.1, Blade Runner 9.6, Ghost in the Shell 9.3, Substanz T:6 8.5)
- Footer

---

### `terribledevice_archive.html` — Archive

The full review archive with client-side filtering. Cards are `<a>` elements with `data-medium` and `data-era` attributes. JavaScript re-applies the asymmetric corner pattern when the filtered set changes.

**Filter dimensions:**

- **Medium:** All / Novel / Film / Anime / TV / Comic / Music
- **Era:** All / 80s / 90s / 00s

**Current archive (14 entries):**

| Title                   | Creator             | Medium | Era | Score |
| ----------------------- | ------------------- | ------ | --- | ----- |
| Neuromancer             | William Gibson      | Novel  | 80s | 9.4   |
| Blade Runner            | Ridley Scott        | Film   | 80s | 9.6   |
| Akira                   | Katsuhiro Otomo     | Anime  | 80s | 9.1   |
| Ghost in the Shell      | Mamoru Oshii        | Film   | 90s | 9.3   |
| Snow Crash              | Neal Stephenson     | Novel  | 90s | 8.8   |
| Max Headroom            | ABC / Chrysalis     | TV     | 80s | 7.9   |
| Serial Experiments Lain | Yoshitoshi ABe      | Anime  | 90s | 9.0   |
| Count Zero              | William Gibson      | Novel  | 80s | 8.5   |
| Strange Days            | Kathryn Bigelow     | Film   | 90s | 8.2   |
| Akira (Manga)           | Katsuhiro Otomo     | Comic  | 80s | 9.5   |
| Bubblegum Crisis        | Hiroaki Gohda       | Anime  | 90s | 7.6   |
| Synners                 | Pat Cadigan         | Novel  | 90s | 8.6   |
| Substanz T:6            | Manufactura         | Music  | 00s | 8.5   |
| Tactical Neural Implant | Front Line Assembly | Music  | 90s | 9.0   |

---

### `terribledevice_post.html` — Review Post (non-music)

The individual review template for non-music content. Currently populated with the Neuromancer review (~2,100 words).

**Sections:**

- Breadcrumb (Reviews → Medium → Title)
- Post header (eyebrow, title, byline: author / publish date / word count)
- **Score block** — large score numeral, verdict label, summary blurb, and rating bars
- **Post body** — long-form review prose with pull quote
- **Tags** — filterable tag chips
- **Related reviews** — 3-up card grid
- Footer

---

### `terribledevice_review_music.html` — Review Post (music)

The individual review template for music content. Currently populated with the Substanz T:6 review.

**Sections:**

- Breadcrumb (Reviews → Music → Album title)
- Post header (eyebrow: Music — year, title + artist as em, byline: label / publish date / genre tags)
- **Score block** — large score numeral, verdict label, summary blurb, listen link (platform pill), and 5-bar music breakdown
- **Post body** — long-form review prose with pull quote
- **Tags** — filterable tag chips
- **Related reviews** — 3-up card grid (music-only related entries)
- Footer

---

### `terribledevice_about.html` — About

Site context and editorial methodology.

**Sections:**

- Page header ("About this site" eyebrow, large TERRIBLE*Device* title)
- **Intro grid** (2-col):
    - _Signal origin_ — what the site is, its origin, editorial voice. No era restriction.
    - _Editorial scope_ — Novels, Film, Anime, Music (first-class), Other (TV, comics, games)
- **Stats row** (4 cards): 10+ years reviewing / 80+ reviews published / 6 media categories / 1 author
- **Lower grid** (2-col):
    - _Scoring system_ — the five criteria used across all mediums (labels may shift per medium but the approach is consistent):
        - Signal — Production & craft
        - Architecture — Composition & structure
        - Current — Energy & drive
        - Atmosphere — World & mood
        - Signal-to-Noise — Originality & distinction
    - _Contact_ — email, Bluesky, RSS feed links
- Footer

---

## Music Review System

Music reviews use a scoring rubric of five categories, each scored 0–10 in half-point increments. A separate overall score is set editorially and is not an average of the categories.

| Category        | Subcategory               | What it measures                                        |
| --------------- | ------------------------- | ------------------------------------------------------- |
| Signal          | Production & sound design | Is the sonic palette intentional and realized?          |
| Architecture    | Composition & structure   | How are tracks built? Does the album move with purpose? |
| Current         | Energy & drive            | Does it move you — physically or psychically?           |
| Atmosphere      | World & mood              | Does it build a place? Does it have internal logic?     |
| Signal-to-Noise | Originality & distinction | Does it have a voice? A reason to exist?                |

Artwork is excluded from scoring — noted in prose only if worth mentioning. Each review includes a listen link (Bandcamp, Ampwall, SoundCloud, or YouTube — whichever platform has the best available version).

---

## Design System

### Color Palette

| Token        | Hex       | Usage                                 |
| ------------ | --------- | ------------------------------------- |
| `--black`    | `#0d0c0f` | Page background                       |
| `--surface`  | `#161418` | Primary panel background              |
| `--surface2` | `#1e1b22` | Card / secondary surface              |
| `--border`   | `#2a2630` | Borders, dividers, bar tracks         |
| `--tan`      | `#c8bfa8` | Body text                             |
| `--tan-dim`  | `#7a7268` | Secondary / muted text                |
| `--pink`     | `#ff5c8d` | Primary accent, scores, active states |
| `--pink-dim` | `#73254e` | Muted accent, glow ring, sig text     |
| `--steel`    | `#3a5a6e` | Badge borders                         |
| `--steel-lt` | `#6a9ab0` | Badge text                            |

### Typography

| Token    | Typeface               | Usage                            |
| -------- | ---------------------- | -------------------------------- |
| `--head` | Barlow Condensed (700) | Titles, scores, labels           |
| `--body` | Barlow (400/500)       | Body copy                        |
| `--mono` | Share Tech Mono        | UI labels, metadata, nav, footer |

### Background

Each page uses a layered radial gradient over `--black`:

- Top-left: pink-dim glow (18% opacity)
- Right-center: pink glow (8% opacity)
- Bottom: steel teal glow (60% opacity)
- Overlay: `tech-swirl.png` fixed at 3% opacity

### Layout

- Max width: **1100px**, centered, `padding: 20px`
- Mobile (`≤640px`): `padding: 12px`, single-column, `--r: 14px`
- Footer has `margin-top: 60px` on most pages

### Corner Radius System

Cards and panels use a single sharp corner to suggest a circuit-board / panel aesthetic. The `--r` variable (`28px` desktop, `14px` mobile) drives all curves.

| Class                    | Corners            |
| ------------------------ | ------------------ |
| `.p-sharp-tl` / `.rc-tl` | Top-left sharp     |
| `.p-sharp-tr` / `.rc-tr` | Top-right sharp    |
| `.p-sharp-br` / `.rc-br` | Bottom-right sharp |
| `.p-sharp-bl` / `.rc-bl` | Bottom-left sharp  |
| `.p-all` / `.rc-all`     | All rounded        |

On mobile, all cards collapse to fully rounded (`border-radius: var(--r) !important`).

---

## Interactions

### Glitch hover effect

The glitch treatment consists of:

- Border color: `--pink` (bright)
- Box shadow: outer ring (`--pink-dim`) + inset pink glow
- Animation: `glitch` — 0.35s sequence of `translate` + `skewX` + `hue-rotate` / `brightness` shifts
- Scanline overlay: `::before` pseudo-element fades in dark horizontal scanlines (`rgba(0,0,0,0.18)` at 4px pitch)

Applied per-page as follows:

| Page    | Elements with glitch hover     |
| ------- | ------------------------------ |
| Index   | `.review-card`, `.hero-panel`  |
| Archive | `.review-card`                 |
| Post    | `.review-card`, `.score-block` |
| About   | `.contact-link` only           |

### Social Link Hover

Social icons in the footer use a lighter `social-glitch` variant (smaller translate values, 1.5× brightness).

---

## Navigation

```
TERRIBLEDEVICE     Archive   About
```

- Logo links to `terribledevice_index.html`
- Active nav link is styled in `--pink`
- Post pages set Archive as active; About page sets About as active

---

## Footer

Three-part layout (collapses to column on mobile):

```
© 2014-2026 terribledevice.com — cyberpunk in pop culture
                [Instagram] [Bluesky]
                                        ■ end transmission
```

Social links: Instagram (`@terribledevice_`), Bluesky (`@terribledevice.com`)

---

## External Dependencies

| Resource                                  | CDN                           |
| ----------------------------------------- | ----------------------------- |
| Font Awesome 6.6.0                        | cdnjs.cloudflare.com          |
| Barlow Condensed, Barlow, Share Tech Mono | Bunny Fonts (fonts.bunny.net) |

---

## Responsive Breakpoints

| Breakpoint        | Changes                                                                                                                                                                      |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `≤900px` (tablet) | Archive/post: 2-col card grid; About: 2-col stat cards; index reviews row: 2-col; page titles reduced                                                                        |
| `≤640px` (mobile) | Single column throughout; `--r: 14px`; footer stacks vertically; index panels stack as: hero image → right column (about/numbers/currently) → featured review → review cards |

---

## Tina CMS Content Model

Four collections and two globals cover everything on the site that needs to be editable without touching code.

---

### Collection: `reviews`

One document per review. Two templates within the collection handle the different score-bar and byline fields for music vs everything else.

**Template: `review` (all non-music media)**

One template covers novel, film, anime, TV, and comic. The data shape is identical across these media — only the `medium` field value and the score bar labels differ. No separate per-medium templates are needed.

| Field | Type | Notes |
| --- | --- | --- |
| `title` | string | |
| `creator` | string | Author, director, etc. |
| `medium` | enum | `novel \| film \| anime \| tv \| comic` |
| `year` | number | Publication / release year |
| `era` | enum | `80s \| 90s \| 00s \| 10s` — used for archive filtering |
| `score` | number | 0–10, half-point increments |
| `verdict` | string | e.g. "Essential Reading" |
| `summary` | string | One- or two-sentence score block blurb |
| `blurb` | string | Card-level description (1–2 sentences, shown in archive and related grids) |
| `body` | rich-text | Long-form review prose |
| `pull_quote` | string | Blockquote pulled into the body |
| `score_bars` | list of objects | `{ label: string, value: number (0–100) }` — typically 4 bars; labels are flexible and should suit the medium. Conventions: Novel → Prose / Worldbuilding / Pacing / Atmosphere; Film & Anime → Cinematography / Score / Pacing / Atmosphere; TV → Writing / Performance / Pacing / Atmosphere; Comic → Art / Writing / Pacing / Atmosphere. Set via Tina field description so the convention lives in the CMS UI. |
| `tags` | list of strings | Tag chips on the post page |
| `published_date` | datetime | |
| `featured` | boolean | If true, this review populates the homepage hero panel |
| `related` | list of references | Up to 3 related reviews |
| `cover_image` | image | Used in the hero image panel when this review is featured |

**Template: `review_music`**

Music is structurally distinct: fixed 5-category scoring rubric, separate artist/label fields, genre tags in the byline, and a listen link. All other fields match `review`.

| Field | Type | Notes |
| --- | --- | --- |
| `title` | string | Album title |
| `artist` | string | |
| `label` | string | Record label |
| `year` | number | Release year |
| `era` | enum | `80s \| 90s \| 00s \| 10s` |
| `score` | number | 0–10, half-point increments; set editorially, not an average of the category bars |
| `verdict` | string | e.g. "Recommended Listen" |
| `summary` | string | One- or two-sentence score block blurb |
| `blurb` | string | Card-level description |
| `body` | rich-text | Long-form review prose |
| `pull_quote` | string | |
| `genre_tags` | list of strings | Genre tags shown in the post byline (e.g. power noise, harsh EBM, industrial) |
| `score_bars` | list of objects | Fixed 5-bar rubric: Signal (Production & sound design) / Architecture (Composition & structure) / Current (Energy & drive) / Atmosphere (World & mood) / Signal-to-Noise (Originality & distinction). Each `{ label: string, value: number (0–100) }`. |
| `listen_platform` | enum | `bandcamp \| ampwall \| soundcloud \| youtube` — whichever has the best available version |
| `listen_url` | string | |
| `tags` | list of strings | |
| `published_date` | datetime | |
| `featured` | boolean | |
| `related` | list of references | Up to 3 related reviews; music-only related entries preferred |
| `cover_image` | image | |

---

### Collection: `quotes`

Drives the hero image panel on the homepage. At build time, Astro selects a quote whose tags overlap with the featured review's tags or medium.

| Field | Type | Notes |
| --- | --- | --- |
| `text` | string | The quote itself |
| `attribution` | string | e.g. "Bruce Sterling" |
| `tags` | list of strings | Thematic tags for matching — use the same vocabulary as review tags (e.g. `novel`, `film`, `music`, `cyberpunk`) |

---

### Global: `siteSettings`

Singleton for values that appear across all pages.

| Field | Type | Notes |
| --- | --- | --- |
| `tagline` | string | "cyberpunk in pop culture" |
| `about_blurb` | string | Short identity blurb used in the homepage About panel |
| `copyright_start_year` | number | 2014 |
| `social.instagram` | string | Handle or full URL |
| `social.bluesky` | string | Handle or full URL |
| `social.rss` | string | Feed path |
| `social.email` | string | Contact email |

---

### Global: `currently`

Singleton for the manually-updated "Currently" panel on the homepage.

| Field | Type | Notes |
| --- | --- | --- |
| `watching.title` | string | |
| `watching.creator` | string | Director / studio |
| `watching.year` | number | |
| `reading.title` | string | |
| `reading.creator` | string | Author |
| `reading.year` | number | |
| `listening.title` | string | |
| `listening.creator` | string | Artist |
| `listening.year` | number | |

---

### Build-time derived values (not in Tina)

The following are computed at build time from the `reviews` collection and don't need a CMS field:

- **By the Numbers panel** — total review count and highest-rated per medium are derived by querying all review documents and sorting by score.
- **Archive grid** — all reviews rendered from the collection; `data-medium` and `data-era` attributes come from the document fields.
- **Related reviews grid** — resolved from the `related` reference list on each review document.
- **Word count** — counted from the `body` rich-text at build time.
