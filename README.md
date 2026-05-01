# Skinthesis — Next.js + TypeScript + Tailwind CSS

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add your images**  
   Copy all files from your original `images/` folder → `public/images/`
   ```
   public/images/
   ├── logo.png         viel.png         formulation.png
   ├── Process2.png     Process3.png     Process4.png
   ├── before.png       after.png
   ├── Product.png      Product1.png     Product2.png     Product3.png
   ├── Shreeya.png      Apurva.png       Rishi.png        Darius.png
   ```

3. **Run dev server**
   ```bash
   npm run dev        # http://localhost:3000
   ```

4. **Type check**
   ```bash
   npm run type-check
   ```

5. **Build for production**
   ```bash
   npm run build && npm start
   ```

## Project Structure

```
skinthesis/
├── app/
│   ├── layout.tsx         # Root layout + Metadata type
│   ├── page.tsx           # Main page — all sections
│   └── globals.css        # Tailwind directives + keyframes + scroll animations
├── components/
│   ├── Navbar.tsx         # Scroll-aware sticky nav + mobile hamburger
│   ├── FadeInObserver.tsx # IntersectionObserver for .fade-in elements
│   └── ProductSection.tsx # Gallery switcher, qty, shade picker, accordion
├── types/
│   └── index.ts           # Shared TypeScript interfaces
├── public/images/         # ← place all images here
├── tailwind.config.ts     # Custom tokens: fontFamily, colors, keyframes
├── tsconfig.json
└── postcss.config.js
```

## Key Decisions

| Old | New |
|-----|-----|
| Plain CSS classes | Tailwind utility classes |
| `.js` / `.jsx` | `.ts` / `.tsx` |
| No types | Full TypeScript interfaces in `types/index.ts` |
| `class=` | `className=` |
| Inline `onclick` | React `onClick` with typed handlers |
| jQuery smooth scroll | `window.scrollTo({ behavior: 'smooth' })` |
| `<img>` | Next.js `<Image>` (optimized, lazy) |
| Global JS | `'use client'` components with `useState` / `useEffect` |

## Tailwind Custom Tokens (tailwind.config.ts)

| Token | Value |
|-------|-------|
| `font-playfair` | Playfair Display |
| `font-dm` | DM Sans |
| `font-cormorant` | Cormorant Garamond |
| `bg-cream` | `#f7f3ef` |
| `bg-mist` | `#edf3f8` |
| `text-navy` | `#1a2d4a` |
| `text-sky-brand` | `#5ba4cf` |
