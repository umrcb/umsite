# Umrah Taxi Services - Enterprise Design System & Brand Manual

This document serves as the **single source of truth** for the entire Umrah Taxi Services project. Every developer, designer, AI assistant, and future contributor must follow this document to maintain a consistent visual identity, UX, accessibility, responsive behavior, and component library across the website.

---

## 1. Brand Identity

**Company Name:** Umrah Taxi Services

**Brand Personality:**
- Premium
- Luxury
- Trustworthy
- Islamic-friendly
- Elegant
- Modern
- Professional
- Clean
- Reliable
- Minimal

**Never create a design that feels:**
- Cheap
- Colorful
- Cartoonish
- Overcrowded
- Dark
- Generic taxi website

---

## 2. Design Philosophy

The website should feel like a combination of:
- Apple
- Emirates Airlines
- Mercedes-Benz
- Blacklane
- Four Seasons
- Airbnb Luxe
- Booking.com Premium

**Design priorities:**
1. White Space
2. Readability
3. Simplicity
4. Luxury
5. Conversion
6. Performance

---

## 3. Logo Guidelines

**Variations:**
- Primary Logo
- Full Color
- Dark Logo
- White Logo
- Icon Only

**Clear Space & Sizing:**
- Minimum clear space: 2× logo height
- Minimum sizes:
  - Desktop: 220px
  - Tablet: 180px
  - Mobile: 150px

**Rules:**
- Never stretch
- Never rotate
- Never change colors

---

## 4. Color System

### Primary
- **Color:** Emerald Green `#2E8B57`
- **Usage:** Primary Buttons, Links, Icons, Active Navigation, Highlights

### Hover
- **Color:** `#1B5E20`

### Gold
- **Color:** `#C9A227`
- **Usage:** Premium Badge, VIP, Stars, Accent
- **Maximum usage:** 5%

### Base Colors
- **White:** `#FFFFFF` (Use on 85% of interface)
- **Background:** `#F8FAFC`
- **Border:** `#E2E8F0`

### Typography Colors
- **Heading:** `#0F172A`
- **Paragraph:** `#475569`

### Status Colors
- **Success:** `#16A34A`
- **Warning:** `#F59E0B`
- **Error:** `#DC2626`

---

## 5. Typography

### Fonts
- **Heading Font:** Poppins (Weights: 600, 700, 800)
- **Body Font:** Inter (Weights: 400, 500, 600)

### Responsive Typography

| Element | Mobile | Tablet | Laptop | Desktop | Large Desktop |
| --- | --- | --- | --- | --- | --- |
| Hero H1 | 38px | 48px | 56px | 64px | 72px |
| H1 | 32px | 40px | 44px | 48px | 56px |
| H2 | 28px | 34px | 38px | 42px | 48px |
| H3 | 22px | 26px | 30px | 34px | 36px |
| H4 | 20px | 22px | 24px | 26px | 28px |
| Body Large | 18px | 18px | 19px | 20px | 20px |
| Body | 16px | 17px | 18px | 18px | 18px |
| Small | 14px | 14px | 15px | 15px | 16px |
| Caption | 12px | 12px | 13px | 13px | 14px |
| Button | 15px | 16px | 16px | 16px | 17px |

**Properties:**
- **Line Height:** Heading 1.2, Paragraph 1.7
- **Letter Spacing:** -0.02em

---

## 6. Responsive Breakpoints

- **Mobile:** 0–639px
- **Small Tablet:** 640–767px
- **Tablet:** 768–1023px
- **Laptop:** 1024–1279px
- **Desktop:** 1280–1535px
- **Large Desktop:** 1536px+

---

## 7. Container Width / Grid System

- **Mobile:** 100%
- **Tablet:** 720px
- **Laptop:** 960px
- **Desktop:** 1280px
- **Large:** 1440px
- **Maximum Content Width:** 1320px

---

## 8. Spacing System

Use an 8px spacing scale:
`4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 120, 160`

**Section Padding:**
- **Desktop:** 120px
- **Tablet:** 96px
- **Mobile:** 72px

---

## 9. Border Radius

- **Buttons:** 14px
- **Cards:** 20px
- **Inputs:** 16px
- **Images:** 24px
- **Modals:** 28px
- **Pills:** 999px

---

## 10. Shadows

- **Small:** `0 4px 12px rgba(0,0,0,.05)`
- **Medium:** `0 10px 30px rgba(0,0,0,.08)`
- **Large:** `0 20px 60px rgba(0,0,0,.12)`

---

## 11. Buttons

- **Primary:** Background `#2E8B57`, Text White, Radius 14px, Height 52px, Padding 16px 28px
- **Hover:** `#1B5E20` (Transition: 300ms ease)
- **Secondary:** White Background, Green Border
- **Ghost:** Transparent
- **Gold Button:** Use only for VIP or featured actions.

---

## 12. Cards

- **Background:** White
- **Radius:** 20px
- **Border:** `1px #E2E8F0`
- **Shadow:** Medium
- **Padding:** 32px
- **Hover State:** `TranslateY(-6px)` with Shadow Increase

---

## 13. Inputs

- **Height:** 56px
- **Radius:** 16px
- **Labels:** Floating Labels
- **Focus Border:** Primary Green
- **Error Border:** Red

---

## 14. Icons

Use **Lucide Icons** exclusively.
- **Stroke:** 2px
- **Sizes:** 16, 20, 24, 32, 48
- **Rule:** No filled icons unless required.

---

## 15. Hero Sections

- **Height:** 80–100vh
- **Headline Max Width:** 700px
- **Booking Widget:** Floating, Glassmorphism
- **Image:** Right aligned on desktop, Stacked on mobile

---

## 16. Images

Never use low-quality stock images.
**Only use:**
- Premium photography
- Custom AI-generated images
- 4K+ resolution
- WebP/AVIF
- Consistent lighting
- Saudi Arabia context
- Luxury vehicles
- Professional chauffeurs
- Realistic environments

---

## 17. Animations & Micro Interactions

- **Duration:** 200–400ms
- **Use:** Fade Up, Fade In, Scale, Hover Lift, Image Zoom, Number Counter, Accordion, Smooth Scroll
- **Rule:** Avoid excessive motion.

---

## 18. Accessibility

- **Minimum contrast:** WCAG AA
- **Keyboard navigation:** Required
- **Focus rings:** Visible
- **Labels:** ARIA labels, Alt text
- **Touch targets:** Minimum 44×44px

---

## 19. SEO UI Rules

Every page must include:
- One H1
- Logical H2–H4 structure
- Breadcrumbs
- Canonical URL
- Meta title
- Meta description
- Open Graph
- Twitter Card
- Schema.org
- Optimized image alt text

---

## 20. Component Library

Define reusable components (Each component should specify Purpose, Props, Variants, Responsive behavior, and Accessibility requirements):
- Navbar, Footer
- Hero, Section Header, CTA
- Booking Form
- Fleet Card, Service Card, Route Card, Pricing Card, Review Card
- FAQ Accordion
- Timeline, Stats Counter, Gallery
- Badges, Alerts, Modals, Tabs

---

## 21. Tailwind Standards

- Use utility classes consistently.
- Avoid inline styles.
- Extract repeated utilities into reusable components.
- Follow mobile-first responsive design.
- Use semantic spacing and color tokens.

---

## 22. File Structure

```text
/components
  /layout
  /navigation
  /hero
  /booking
  /fleet
  /cards
  /forms
  /sections
  /testimonials
  /pricing
  /faq
  /shared

/styles
  colors.ts
  typography.ts
  spacing.ts
  shadows.ts
  radius.ts
  animations.ts

/public
  /images
  /icons
  /logos
```

---

## 23. Design QA Checklist

Every page must pass:
- [x] Consistent typography
- [x] Correct brand colors
- [x] Proper spacing
- [x] Mobile responsive
- [x] Accessible
- [x] SEO optimized
- [x] Fast loading
- [x] No layout shifts
- [x] Consistent button styles
- [x] Consistent card styles
- [x] Premium imagery
- [x] Hover states
- [x] Loading states
- [x] Empty states
- [x] Error states

---

## 24. Future Guidelines

- Never introduce new colors without updating `DESIGN.md`.
- Never create a new button style outside the design system.
- Never create a new card layout if a reusable one exists.
- Keep all pages visually consistent.
- Use components before creating custom layouts.
- Prioritize readability and whitespace over decoration.
- **Every new page must follow this document without exception.**
