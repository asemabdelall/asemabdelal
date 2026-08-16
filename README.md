# Asem Abdelal — Principal Digital Product Engineer & Full-Stack Architect

A high-performance, editorial digital portfolio built with **Astro 5**, **TypeScript**, **Vanilla CSS Design Tokens**, and **GSAP Motion & ScrollTrigger**. Engineered with sub-second page loads, zero client-side layout shifts, and high conversion aesthetics.

---

## ✦ Key Highlights & Architecture

- **Ultra-Fast Static Engine:** Powered by [Astro 5](https://astro.build/) delivering 100/100 Lighthouse performance scores and sub-second static generation.
- **GSAP Motion Choreography:** Bespoke GSAP and ScrollTrigger animations for staggered reveals, text parallax, and micro-interactions with fallback resilience.
- **Fixed Hero Parallax Background:** CSS-driven cinematic backdrop pinned behind glassmorphic content layers.
- **Modular Content Collections:** Structured markdown schemas for systems architecture and engineering insights with typed metadata.
- **Optimized Asset Pipeline:** Automatic Sharp WebP conversion compressing media by up to 90% without visual fidelity loss or mobile cropping.
- **Bespoke Native Design System:** 100% Vanilla CSS tokens for fluid typography (`clamp()`), dark ambient lighting, and borderless card structures.

---

## 🛠️ Technology Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Engine** | Astro 5 (SSG), Vite |
| **Language & Typing** | TypeScript, Strict ESM |
| **Styling & Design System** | Vanilla CSS, Design Tokens, Modern CSS (`:has()`, `clamp()`, `oklch`) |
| **Motion & Animation** | GSAP 3, ScrollTrigger |
| **Content Layer** | Astro Content Collections, Markdown, Zod Schema Validation |
| **SEO & OpenGraph** | Dynamic XML Sitemaps, Canonical Metadata, Semantic HTML5 |

---

## 📁 Project Structure

```bash
├── public/
│   ├── icons/             # Brand SVGs (TypeScript, React, Next.js, Node.js, etc.)
│   ├── images/            # Static media fallbacks
│   ├── robots.txt         # Search crawler directives
│   └── favicon.svg        # Custom monogram favicon
├── src/
│   ├── assets/images/     # High-resolution optimized project screenshots
│   ├── components/
│   │   ├── layout/        # Header, Footer, and Navigation
│   │   ├── sections/      # Hero, About, SelectedWork, TechStack, Experience, Notes, Contact
│   │   └── ui/            # Reusable ArrowLinks, Buttons, Badges
│   ├── content/
│   │   ├── config.ts      # Zod content collection schemas
│   │   ├── notes/         # Engineering insights & articles
│   │   └── projects/      # Flagship digital systems (MixChat, Rahafit, GoldPro ERP, GoldPro Web)
│   ├── layouts/
│   │   └── BaseLayout.astro    # Master HTML shell & GSAP loader
│   ├── pages/
│   │   ├── index.astro         # Main single-page portfolio experience
│   │   ├── 404.astro           # Custom 404 error experience
│   │   └── notes/              # Notes archive index
│   ├── scripts/
│   │   └── animations.ts  # Master GSAP ScrollTrigger timeline controller
│   └── styles/
│       ├── tokens.css     # Design tokens (colors, spacing, typography, radii, elevations)
│       └── global.css     # Base reset and typography styling
├── astro.config.mjs       # Astro configuration & sitemap integration
├── tsconfig.json          # TypeScript strict configuration
└── package.json           # Scripts and dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/asemabdelall/asemabdelal.git
   cd asemabdelal
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

---

## 📦 Build & Production

To generate a static production build:

```bash
npm run build
```

To preview the built static output locally:

```bash
npm run preview
```

---

## 💼 Featured Projects

1. **MixChat:** Modern social communication platform with voice, video, media feed, and creator profiles.
2. **Rahafit:** AI-powered personalized fitness, nutrition, and daily workout companion platform.
3. **GoldPro ERP:** Enterprise management, multi-tenant operations, and logistics platform.
4. **GoldPro Platform & Imran AI:** Corporate construction platform featuring conversational AI engineering consultant.

---

## 📬 Contact & Connect

- **Author:** Asem Abdelal
- **Email:** [asem@asemabdelal.dev](mailto:asem@asemabdelal.dev)
- **GitHub:** [@asemabdelal](https://github.com/asemabdelal)
- **Website:** [https://asemabdelal.dev](https://asemabdelal.dev)

---

© 2026 Asem Abdelal. Crafted with precision.
