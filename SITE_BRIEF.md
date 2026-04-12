# TERRIBLEDevice — Site Brief

**URL:** terribledevice.com
**Copyright:** 2014–2026
**Tagline:** cyberpunk in culture 1980–1999

---

## Overview

TERRIBLEDevice is a single-author review archive covering cyberpunk culture from the 1980s and 1990s — the period when the genre was still a provocation rather than an aesthetic. The site covers novels, film, anime, television, comics, and adjacent media. Reviews are short-form and opinionated; scores exist but are secondary to the writing. The name is drawn from a William Gibson short story.

---

## Pages

### `terribledevice_index.html` — Homepage

The landing page. Uses a two-column grid layout with a featured review as the hero. The current featured review is *Neuromancer* by William Gibson (score: 9.4).

**Sections:**
- Nav bar (logo + Archive / About links)
- Hero grid (4 panels):
  - **Hero panel** — featured review title, subtitle, tags, score
  - **Stat panel** — author, year, medium, score, and rating bars (Atmosphere, Worldbuilding, Prose)
  - **Excerpt panel** — short critical excerpt
  - **Hero image panel** — cover image placeholder
- **Reviews row** — 3-up grid of recent review cards (Akira 9.1, Blade Runner 9.6, Ghost in the Shell 9.3)
- Footer

---

### `terribledevice_archive.html` — Archive

The full review archive with client-side filtering. Cards are `<a>` elements with `data-medium` and `data-era` attributes. JavaScript re-applies the asymmetric corner pattern when the filtered set changes.

**Filter dimensions:**
- **Medium:** All / Novel / Film / Anime / TV / Comic
- **Era:** All / 80s / 90s

**Current archive (12 entries):**

| Title | Creator | Medium | Era | Score |
|---|---|---|---|---|
| Neuromancer | William Gibson | Novel | 80s | 9.4 |
| Blade Runner | Ridley Scott | Film | 80s | 9.6 |
| Akira | Katsuhiro Otomo | Anime | 80s | 9.1 |
| Ghost in the Shell | Mamoru Oshii | Film | 90s | 9.3 |
| Snow Crash | Neal Stephenson | Novel | 90s | 8.8 |
| Max Headroom | ABC / Chrysalis | TV | 80s | 7.9 |
| Serial Experiments Lain | Yoshitoshi ABe | Anime | 90s | 9.0 |
| Count Zero | William Gibson | Novel | 80s | 8.5 |
| Strange Days | Kathryn Bigelow | Film | 90s | 8.2 |
| Akira (Manga) | Katsuhiro Otomo | Comic | 80s | 9.5 |
| Bubblegum Crisis | Hiroaki Gohda | Anime | 90s | 7.6 |
| Synners | Pat Cadigan | Novel | 90s | 8.6 |

---

### `terribledevice_post.html` — Review Post

The individual review template. Currently populated with the Neuromancer review (~2,100 words).

**Sections:**
- Breadcrumb (Reviews → Novel → Neuromancer)
- Post header (eyebrow, title, byline: author / publish date / word count)
- **Score block** — large score numeral, verdict label, summary blurb, and 4-bar breakdown (Atmosphere 96%, Worldbuilding 91%, Prose 88%, Pacing 82%)
- **Post body** — long-form review prose with pull quote
- **Tags** — filterable tag chips (novel, 1984, cyberpunk, AI, hacking, matrix, sprawl, william gibson, essential)
- **Related reviews** — 3-up card grid (Akira, Blade Runner, Ghost in the Shell)
- Footer

---

### `terribledevice_about.html` — About

Site context and editorial methodology.

**Sections:**
- Page header ("About this site" eyebrow, large TERRIBLE*Device* title)
- **Intro grid** (2-col):
  - *Signal origin* — what the site is, its origin, editorial voice
  - *Editorial scope* — media categories covered (Novels, Film, Anime, TV, Other)
- **Stats row** (4 cards): 80+ reviews / 15 years covered / 6 media categories / 1 author
- **Lower grid** (2-col):
  - *Scoring system* — criteria breakdown with weight bars:
    - Atmosphere 30%
    - Worldbuilding 25%
    - Execution 25%
    - Relevance 20%
  - *Contact* — email, Mastodon, RSS feed links
- Footer

---

## Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--black` | `#0d0c0f` | Page background |
| `--surface` | `#161418` | Primary panel background |
| `--surface2` | `#1e1b22` | Card / secondary surface |
| `--border` | `#2a2630` | Borders, dividers, bar tracks |
| `--tan` | `#c8bfa8` | Body text |
| `--tan-dim` | `#7a7268` | Secondary / muted text |
| `--pink` | `#ff5c8d` | Primary accent, scores, active states |
| `--pink-dim` | `#73254e` | Muted accent, glow ring, sig text |
| `--steel` | `#3a5a6e` | Badge borders |
| `--steel-lt` | `#6a9ab0` | Badge text |

### Typography

| Token | Typeface | Usage |
|---|---|---|
| `--head` | Barlow Condensed (700) | Titles, scores, labels |
| `--body` | Barlow (400/500) | Body copy |
| `--mono` | Share Tech Mono | UI labels, metadata, nav, footer |

### Background

Each page uses a layered radial gradient over `--black`:
- Top-left: pink-dim glow (18% opacity)
- Right-center: pink glow (8% opacity)
- Bottom: steel teal glow (60% opacity)
- Overlay: `tech-swirl.png` fixed at 3% opacity

### Layout

- Max width: **1100px**, centered, `padding: 20px`
- Mobile (`≤640px`): `padding: 12px`, single-column, `--r: 14px`
- Footer has `margin-top: 60px` on all pages for breathing room above the content below it

### Corner Radius System

Cards and panels use a single sharp corner to suggest a circuit-board / panel aesthetic. The `--r` variable (`28px` desktop, `14px` mobile) drives all curves.

| Class | Corners |
|---|---|
| `.p-sharp-tl` / `.rc-tl` | Top-left sharp |
| `.p-sharp-tr` / `.rc-tr` | Top-right sharp |
| `.p-sharp-br` / `.rc-br` | Bottom-right sharp |
| `.p-sharp-bl` / `.rc-bl` | Bottom-left sharp |
| `.p-all` / `.rc-all` | All rounded |

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

| Page | Elements with glitch hover |
|---|---|
| Index | `.review-card`, `.hero-panel` |
| Archive | `.review-card` |
| Post | `.review-card`, `.score-block` |
| About | `.contact-link` only (panels and stat cards have no hover effect) |

### Social Link Hover

Social icons in the footer use a lighter `social-glitch` variant (smaller translate values, 1.5× brightness).

---

## Navigation

```
TERRIBLEDEVICE     Archive   About
```

- Logo links to `terribledevice_index.html`
- Active nav link is styled in `--pink`
- Post page sets Archive as active; About page sets About as active

---

## Footer

Three-part layout (collapses to column on mobile):

```
© 2014-2026 terribledevice.com — cyberpunk in culture 1980–1999
                [Instagram] [Bluesky]
                                        ■ signal found
```

Social links: Instagram (`@terribledevice_`), Bluesky (`@terribledevice.com`)

---

## External Dependencies

| Resource | CDN |
|---|---|
| Font Awesome 6.6.0 | cdnjs.cloudflare.com |
| Barlow Condensed, Barlow, Share Tech Mono | Bunny Fonts (fonts.bunny.net) |

---

## Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| `≤900px` (tablet) | Archive/post: 2-col card grid; About: 2-col stat cards; page titles reduced |
| `≤640px` (mobile) | Single column throughout; `--r: 14px`; footer stacks vertically; index panels reordered |
