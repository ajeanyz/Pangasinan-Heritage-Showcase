# Pangasinan Heritage Digital Showcase
## Deliverable 1.2: Atomic Design System Manual
**Student / Author:** Ramos, Yezza  
**Course & Task:** Activity 1.1 — Modular Component Library  
**Technology Stack:** Next.js 14 (App Router), TypeScript, CSS Variables, Lucide React Icons  

---

## 1. Project Overview & Design Philosophy

The **Pangasinan Heritage Digital Showcase** is a mobile-first web application created to highlight the natural, historical, and cultural wonders of Pangasinan—from the iconic islets of Hundred Islands to the historic heights of Cape Bolinao Lighthouse.

To make the codebase maintainable, scalable, and easy for any developer to pick up, this project follows **Brad Frost’s Atomic Design methodology**. Instead of building rigid, one-off web pages, we break our user interface down into a hierarchy of modular building blocks:

```
[Atoms] ────► [Molecules] ────► [Organisms] ────► [Page Template]
Primitives     Combined units    Functional blocks  Full showcase page
```

### Why Atomic Design?
1. **Consistency:** Design decisions like colors, button radiuses, and font sizes are defined once and inherited everywhere.
2. **Reusability:** A card or button can be dropped into a new page or section with zero extra CSS.
3. **Maintainability:** If we need to update our brand color or button padding, we update a single token or atom, and the whole application reflects the change cleanly.
4. **Mobile-First & Accessible:** Designed to perform gracefully on 3G/4G connections and smaller smartphone screens, with high color contrast (WCAG AA), accessible touch targets (at least 48px), and keyboard navigation support.

---

## 2. Component Hierarchy Summary

| Level | Component | File Path | Role |
| :--- | :--- | :--- | :--- |
| **Atom** | Button (`ButtonLink`) | `components/atoms/Button.tsx` | Primary interactive call-to-action link |
| **Atom** | Typography Tokens | `app/globals.css`, `app/theme.css` | Headings, body text, and eyebrow labels |
| **Atom** | Color Tokens | `app/globals.css`, `app/theme.css` | Semantic color palette and design tokens |
| **Atom** | Icon (`LocationIcon` & Lucide) | `components/atoms/LocationIcon.tsx` | Visual symbols that give instant visual context |
| **Atom** | Image (`SiteImage`) | `components/atoms/SiteImage.tsx` | Responsive, lazy-loaded visual media |
| **Molecule** | Heritage Card | `components/molecules/HeritageCard.tsx` | Site preview card with photo, badge, text, and map link |
| **Molecule** | Search Form | `components/molecules/SearchForm.tsx` | Live search input field with icon and clear button |
| **Molecule** | Navigation Item | `components/molecules/NavigationItem.tsx` | Clean, interactive navigation anchor link |
| **Organism** | Header Navigation | `components/organisms/HeaderNavigation.tsx` | Sticky top navigation bar with mobile hamburger drawer |
| **Organism** | Heritage Grid | `components/organisms/HeritageGrid.tsx` | Interactive site directory with live search and empty state |

---

## 3. Atoms (Component Library)

Atoms are the fundamental building blocks of our interface. They cannot be broken down further without losing their functional purpose.

---

### Atom 1: Button (`ButtonLink`)

#### 1. Visual Preview
```
┌──────────────────────────────────────────────┐
│  Explore heritage sites                    → │
└──────────────────────────────────────────────┘
(Rounded pill button with warm berry-pink background, crisp white text, and right arrow)
```

#### 2. Usage Context
The `ButtonLink` atom is the primary Call-To-Action (CTA) in the showcase. It is used in high-priority conversion areas, such as the Hero banner, prompting visitors to jump directly to the interactive heritage catalog or explore destination stories.

#### 3. Responsive Logic
- **Touch Target:** Set to `min-height: 52px` and `padding: 0 22px` to guarantee easy tapping on mobile touchscreens (surpassing WCAG's 44px/48px recommendation).
- **Adaptability:** Uses inline-flex layout. On desktop, it aligns horizontally with companion links. On mobile screens (<=620px), parent containers switch to `flex-direction: column`, allowing the button to take comfortable full-width or natural inline sizing without overflowing.
- **Hover & Focus:** Features smooth micro-interactions (`transform: translateY(-2px)` or slight press state) with clear `:focus-visible` outlines for keyboard users.

#### 4. Code Reference
```tsx
// components/atoms/Button.tsx
import type { ReactNode } from "react";

export function ButtonLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="button" href={href}>
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
```
**Example Usage:**
```tsx
<ButtonLink href="#heritage">Discover Destinations</ButtonLink>
```

---

### Atom 2: Typography Tokens

#### 1. Visual Preview
```
H1: Say hello to Pangasinan! (Baloo 2 / Georgia, clamp 3.2rem - 6.9rem)
H2: Discover Pangasinan        (Section heading, clamp 2.6rem - 4.5rem)
H3: Cape Bolinao Lighthouse   (Card titles, 1.65rem)
Eyebrow: ♡ A SWEET PANGASINAN ADVENTURE ♡ (Caps, tracking 0.13em, pill border)
Body: "Pack your cutest bag and discover dreamy islands..." (Quicksand, 1.08rem)
```

#### 2. Usage Context
Typography tokens establish a friendly, distinct visual hierarchy throughout the website. The headings (`Baloo 2` / `Georgia`) convey warmth, charm, and heritage, while the body text (`Quicksand` / sans-serif) ensures effortless legibility for tourists browsing on phones.

#### 3. Responsive Logic
- **Fluid Typography:** Uses CSS `clamp()` functions (e.g., `font-size: clamp(3.2rem, 8vw, 6.9rem)`). On small mobile viewports, the text shrinks gracefully to prevent awkward word wrapping, while scaling boldly on wide desktop monitors.
- **Line Heights:** Body text maintains `line-height: 1.6` to `1.85` for comfortable reading across all screen widths.

#### 4. Code Reference
```css
/* app/theme.css & app/globals.css */
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Quicksand:wght@500;600;700&display=swap");

body {
  font-family: "Quicksand", Arial, sans-serif;
  line-height: 1.6;
}

h1, h2, h3 {
  font-family: "Baloo 2", Arial, sans-serif;
  line-height: 1.03;
}

h1 {
  font-size: clamp(3.2rem, 8vw, 6.9rem);
  font-weight: 600;
}

.eyebrow {
  display: inline-flex;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}
```

---

### Atom 3: Color Tokens

#### 1. Visual Preview
```
[ #ed3766 ] Primary Pink / Forest Accent (Buttons, Badges, Highlights)
[ #5b2537 ] Deep Plum / Ink               (Primary Headings & Text)
[ #fff8fa ] Soft Cream / Canvas           (Clean Background)
[ #ffe1ea ] Blush Sand                    (Section backgrounds & cards)
[ #ff789d ] Warm Coral Accent             (Hover states & icons)
[ #815565 ] Muted Plum                    (Descriptions & secondary text)
[ #f5b8c9 ] Soft Border                   (Subtle card & input borders)
```

#### 2. Usage Context
Stored as CSS custom properties on the `:root` level, these tokens drive the theme across the whole showcase. They provide a joyful, welcoming identity inspired by coastal charm and local hospitality while keeping contrast compliant with WCAG 2.1 AA standards.

#### 3. Responsive Logic
- Colors are resolution-independent.
- High text-to-background contrast ratio (exceeding 4.5:1) ensures readability even in bright outdoor sunlight on mobile screens.

#### 4. Code Reference
```css
/* app/theme.css */
:root {
  --ink: #5b2537;      /* Primary high-contrast text */
  --forest: #ed3766;   /* Energetic brand pink */
  --sand: #ffe1ea;     /* Warm accent backdrop */
  --cream: #fff8fa;    /* Page background */
  --gold: #ff789d;     /* Secondary highlight */
  --muted: #815565;    /* Secondary supportive text */
  --border: #f5b8c9;   /* Clean outlines */
  --radius: 26px;      /* Consistent border radius */
}
```

---

### Atom 4: Icon (`LocationIcon` & UI Icons)

#### 1. Visual Preview
```
📍 [MapPin Icon] (15px stroke)
🔍 [Search Icon] (19px stroke)
✕  [Clear Icon]  (17px stroke)
↗  [Link Arrow]  (17px stroke)
```

#### 2. Usage Context
Icons provide rapid visual cues. `LocationIcon` is used next to town and city names (e.g., "Alaminos City", "Bolinao") so users instantly recognize geographic details without reading extra words.

#### 3. Responsive Logic
- Embedded inline as vector SVGs (`aria-hidden="true"`), ensuring sharp rendering at any screen density (Retina / 4K).
- Fixed pixel size (15px) aligned via `inline-flex` prevents text jumping or misaligned baselines across responsive font scales.

#### 4. Code Reference
```tsx
// components/atoms/LocationIcon.tsx
import { MapPin } from "lucide-react";

export function LocationIcon() {
  return <MapPin size={15} strokeWidth={2} aria-hidden="true" />;
}
```

---

### Atom 5: Image (`SiteImage`)

#### 1. Visual Preview
```
┌──────────────────────────────────────────────┐
│                                              │
│         [ Beautiful Site Photo ]             │
│            Aspect Ratio: 3/2                 │
│                                              │
└──────────────────────────────────────────────┘
```

#### 2. Usage Context
Used inside destination cards and preview banners to showcase actual photography of Pangasinan destinations (e.g., Hundred Islands, Mount Balungao, Lingayen Gulf).

#### 3. Responsive Logic
- **Layout Shift Prevention:** Configured with fixed default width (`720`) and height (`480`) alongside `aspect-ratio: 3/2` and `object-fit: cover` to stop Cumulative Layout Shift (CLS) as images download.
- **Fast 3G/4G Performance:** Employs native lazy loading (`loading="lazy"`) and asynchronous decoding (`decoding="async"`) for below-the-fold images, reserving `eager` loading strictly for the top two cards.

#### 4. Code Reference
```tsx
// components/atoms/SiteImage.tsx
type SiteImageProps = {
  src: string;
  alt: string;
  eager?: boolean;
};

export function SiteImage({ src, alt, eager = false }: SiteImageProps) {
  return (
    <img
      className="site-image"
      src={src}
      alt={alt}
      width="720"
      height="480"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
```

---

## 4. Molecules (Combined Units)

Molecules are groups of atoms bonded together to form relatively simple, reusable functional components.

---

### Molecule 1: Heritage Card (`HeritageCard`)

#### 1. Visual Preview
```
┌──────────────────────────────────────────────┐
│ [Site Image: Hundred Islands]  [NATURAL] 🎀  │
├──────────────────────────────────────────────┤
│ 📍 ALAMINOS CITY                             │
│ Hundred Islands                              │
│ A celebrated national park of forested       │
│ limestone islands rising from calm waters.   │
│                                              │
│ View location ↗                              │
└──────────────────────────────────────────────┘
```

#### 2. Usage Context
The `HeritageCard` is used exclusively for displaying tourist site previews in a responsive heritage-site grid. It brings together the site's photograph, category badge, municipality, description, and interactive map link.

#### 3. Responsive Logic
- **Container Adaptability:** Built without hardcoded pixel widths (`width: 100%`), allowing it to seamlessly fill whatever grid slot its parent organism gives it.
- **Typography & Spacing:** Card body padding adjusts from 22px on desktop to 16px on small mobile displays. The fixed `aspect-ratio: 3/2` on the photo wrapper guarantees consistent card heights across a row.
- **Playful Tilt:** On desktop screens, alternate cards have subtle organic rotations (`1.2deg` / `-1deg`) that flatten smoothly on mobile (`transform: none`) to keep reading neat on small screens.

#### 4. Code Reference
```tsx
// components/molecules/HeritageCard.tsx
import { ArrowUpRight } from "lucide-react";
import { SiteImage } from "@/components/atoms/SiteImage";
import { LocationIcon } from "@/components/atoms/LocationIcon";
import type { HeritageSite } from "@/data/heritage-sites";

export function HeritageCard({ site, priority = false }: { site: HeritageSite; priority?: boolean }) {
  return (
    <article className="heritage-card">
      <div className="card-image-wrap">
        <SiteImage src={site.image} alt={site.imageAlt} eager={priority} />
        <span className="card-category">{site.category}</span>
        <span className="card-bow" aria-hidden="true">🎀</span>
      </div>
      <div className="card-body">
        <p className="location"><LocationIcon />{site.location}</p>
        <h3>{site.name}</h3>
        <p>{site.description}</p>
        <a href={site.mapUrl} target="_blank" rel="noreferrer" aria-label={`View ${site.name} on a map`}>
          View location <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
```

---

### Molecule 2: Search Form (`SearchForm`)

#### 1. Visual Preview
```
┌─────────────────────────────────────────────────────────────┐
│ 🔍  Search by place or town…                           [✕]  │
└─────────────────────────────────────────────────────────────┘
```

#### 2. Usage Context
Used at the head of the heritage showcase to allow visitors to instantly filter sites by name, municipality, or category in real time.

#### 3. Responsive Logic
- **Desktop:** Restricted to a comfortable `width: min(100%, 430px)`.
- **Mobile (<620px):** Expands to `100%` width with comfortable touch target heights (50px) and large internal clear button so users can easily tap with one thumb.
- **Accessibility:** Includes an offscreen `<label className="sr-only">` for screen readers and `aria-label="Clear search"` on the dismissal button.

#### 4. Code Reference
```tsx
// components/molecules/SearchForm.tsx
import { Search, X } from "lucide-react";

type SearchFormProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchForm({ value, onChange }: SearchFormProps) {
  return (
    <form className="search-form" role="search" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="heritage-search" className="sr-only">Search heritage sites</label>
      <Search size={19} aria-hidden="true" />
      <input
        id="heritage-search"
        type="search"
        placeholder="Search by place or town…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button type="button" onClick={() => onChange("")} aria-label="Clear search">
          <X size={17} />
        </button>
      )}
    </form>
  );
}
```

---

### Molecule 3: Navigation Item (`NavigationItem`)

#### 1. Visual Preview
```
Explore       Our Story       Visit Responsibly
─────── (Animated underline / soft pill background on hover)
```

#### 2. Usage Context
Used inside header and footer organisms to navigate between the primary sections of the landing page via smooth scrolling.

#### 3. Responsive Logic
- **Desktop:** Rendered as inline items with an animated indicator bar on hover (`transition: right 0.2s`).
- **Mobile Drawer:** Expands into a block element with `padding: 12px` and comfortable tap spacing inside the slide-down mobile menu.

#### 4. Code Reference
```tsx
// components/molecules/NavigationItem.tsx
export function NavigationItem({ href, label }: { href: string; label: string }) {
  return (
    <a className="nav-item" href={href}>
      {label}
    </a>
  );
}
```

---

## 5. Organisms (Functional Sections)

Organisms are complex UI components composed of groups of molecules and atoms, forming distinct, functional sections of the page.

---

### Organism 1: Header Navigation (`HeaderNavigation`)

#### 1. Visual Preview
**Desktop View:**
```
┌────────────────────────────────────────────────────────────────────────────────┐
│ ✿ Hello Pangasinan!                 Explore    Our Story    Visit Responsibly  │
└────────────────────────────────────────────────────────────────────────────────┘
```
**Mobile View:**
```
┌──────────────────────────────────────┐
│ ✿ Hello Pangasinan!              [☰] │
├──────────────────────────────────────┤
│ Explore                              │
│ Our Story                            │
│ Visit Responsibly                    │
└──────────────────────────────────────┘
```

#### 2. Usage Context
Positioned at the very top of the page (`position: sticky`), the header provides immediate brand recognition and quick navigation to all main landmarks of the digital showcase.

#### 3. Responsive Logic
- **Breakpoint: 620px**
  - **Desktop (>620px):** Floating pill-shaped header with `backdrop-filter: blur(15px)`, transparent background, and inline navigation links. The hamburger button is hidden (`display: none`).
  - **Mobile (<=620px):** The navigation links tuck away into a responsive toggle menu. Clicking the hamburger icon toggles `aria-expanded` and reveals the dropdown drawer. Clicking any navigation link automatically closes the drawer for a smooth transition.

#### 4. Code Reference
```tsx
// components/organisms/HeaderNavigation.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavigationItem } from "@/components/molecules/NavigationItem";

export function HeaderNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Hello Pangasinan home">
          <span className="brand-mark" aria-hidden="true">✿</span>
          <span>Hello<br /><b>Pangasinan!</b></span>
        </a>
        <button
          className="menu-button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="primary-navigation"
          className={open ? "nav-open" : ""}
          aria-label="Primary navigation"
          onClick={() => setOpen(false)}
        >
          <NavigationItem href="#heritage" label="Explore" />
          <NavigationItem href="#about" label="Our Story" />
          <NavigationItem href="#visit" label="Visit Responsibly" />
        </nav>
      </div>
    </header>
  );
}
```

---

### Organism 2: Heritage Grid (`HeritageGrid`)

#### 1. Visual Preview
```
┌────────────────────────────────────────────────────────────────────────────────┐
│ [ 🔍 Search by place or town… ]                                       6 places │
├────────────────────────────────────────────────────────────────────────────────┤
│ ┌───────────────┐      ┌───────────────┐      ┌───────────────┐                │
│ │ Hundred       │      │ Cape Bolinao  │      │ Balungao      │                │
│ │ Islands       │      │ Lighthouse    │      │ Hilltop       │                │
│ └───────────────┘      └───────────────┘      └───────────────┘                │
│ ┌───────────────┐      ┌───────────────┐      ┌───────────────┐                │
│ │ Manaoag       │      │ Lingayen Gulf │      │ Saint John    │                │
│ │ Basilica      │      │ Beach         │      │ Cathedral     │                │
│ └───────────────┘      └───────────────┘      └───────────────┘                │
└────────────────────────────────────────────────────────────────────────────────┘
```

#### 2. Usage Context
The centerpiece of the application. It orchestrates user search input, calculates live filtering, announces result counts to assistive technology via `aria-live="polite"`, and arranges destination cards into an adaptive responsive layout.

#### 3. Responsive Logic
- **Dynamic CSS Grid:**
  - **Desktop (>850px):** 3 columns (`grid-template-columns: repeat(3, 1fr)`) with a 24px–30px gap.
  - **Tablet (620px to 850px):** 2 columns (`grid-template-columns: repeat(2, 1fr)`).
  - **Mobile (<620px):** 1 column (`grid-template-columns: 1fr`) where each card occupies full container width.
- **Empty State Fallback:** If search yields zero matches, an accessible dashed container displays helpful suggestions with a quick "Clear search" action.

#### 4. Code Reference
```tsx
// components/organisms/HeritageGrid.tsx
"use client";

import { useMemo, useState } from "react";
import { HeritageCard } from "@/components/molecules/HeritageCard";
import { SearchForm } from "@/components/molecules/SearchForm";
import type { HeritageSite } from "@/data/heritage-sites";

export function HeritageGrid({ sites }: { sites: HeritageSite[] }) {
  const [query, setQuery] = useState("");

  const filteredSites = useMemo(() => {
    const term = query.trim().toLowerCase();
    return term
      ? sites.filter((site) =>
          `${site.name} ${site.location} ${site.category}`.toLowerCase().includes(term)
        )
      : sites;
  }, [query, sites]);

  return (
    <>
      <div className="grid-tools">
        <SearchForm value={query} onChange={setQuery} />
        <p aria-live="polite">
          {filteredSites.length} {filteredSites.length === 1 ? "place" : "places"}
        </p>
      </div>

      {filteredSites.length > 0 ? (
        <div className="heritage-grid">
          {filteredSites.map((site, index) => (
            <HeritageCard key={site.name} site={site} priority={index < 2} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No places found</h3>
          <p>Try another town, site name, or category.</p>
          <button onClick={() => setQuery("")}>Clear search</button>
        </div>
      )}
    </>
  );
}
```

---

## 6. How Another Developer Can Re-Use This System

Because all data and presentation layers are decoupled, adding new destinations or creating new pages takes just a few lines of code:

### Step 1: Add or Update Data
In `data/heritage-sites.ts`:
```ts
export const heritageSites: HeritageSite[] = [
  // existing sites...
  {
    name: "Enchanted Cave",
    location: "Bolinao",
    category: "Natural Heritage",
    description: "An underground natural spring pool set inside an ancient coral cave.",
    image: "images/heritage/enchanted-cave.jpg",
    imageAlt: "Clear emerald waters inside Enchanted Cave in Bolinao",
    mapUrl: "https://www.openstreetmap.org/search?query=Enchanted%20Cave%20Bolinao"
  }
];
```

### Step 2: Use in any Page or Layout
```tsx
import { HeaderNavigation } from "@/components/organisms/HeaderNavigation";
import { HeritageGrid } from "@/components/organisms/HeritageGrid";
import { heritageSites } from "@/data/heritage-sites";

export default function RegionalPage() {
  return (
    <main>
      <HeaderNavigation />
      <section className="container">
        <h1>Western Pangasinan Sites</h1>
        <HeritageGrid sites={heritageSites} />
      </section>
    </main>
  );
}
```

---

## 7. How to Run & Verify

1. **Prerequisites:** Install Node.js version 18.17 or newer (Node 20+ LTS recommended).
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.
4. **Test Production Build:**
   ```bash
   npm run build
   ```
   *Verified: Build passes with zero errors and generates static pages cleanly.*

