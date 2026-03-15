# YANO Heavy Equipment Rental — Website

## Project Overview
Marketing website for **YANO Heavy Equipment Rental**, a heavy equipment rental company serving all of CALABARZON, Philippines.

## Business Info
- **Business:** YANO Heavy Equipment Rental
- **Location:** CALABARZON region (Cavite, Laguna, Batangas, Rizal, Quezon)
- **Phone:** 0917-133-8462 / 0917-136-1046
- **Email:** yanoequipment@gmail.com
- **Tagline:** "Heavy Equipment You Can Count On — Rain or Shine"

## Tech Stack
- Pure HTML/CSS/JS — no framework, no build step
- Google Fonts: Bebas Neue (display) + DM Sans (body)
- Single-page site: `index.html`

## Project Structure
```
yano/
├── index.html          # Main website (all-in-one)
├── image.png           # Equipment photo (hero bg)
├── image copy.png      # Equipment photo (gallery)
├── company logo.png    # Company logo
├── CLAUDE.md           # This file
└── sample business text # Original business copy
```

## Design System
| Token        | Value     | Usage                  |
|--------------|-----------|------------------------|
| `--black`    | `#080808` | Page background        |
| `--steel`    | `#141418` | Card/section bg        |
| `--steel-mid`| `#1E2028` | Card hover bg          |
| `--yellow`   | `#F5B800` | Primary accent, CTAs   |
| `--white`    | `#F2EDE4` | Body text              |

## Sections
1. **Nav** — Fixed, transparent → solid on scroll, yellow bottom border
2. **Hero** — Full viewport, equipment background image, bold headline
3. **Stats** — Yellow bar with animated counters
4. **Services** — 3×2 grid of equipment types with hover yellow underline
5. **Why YANO** — 2×2 grid of value props with numbered style
6. **Gallery** — Asymmetric grid using `image.png` and `image copy.png`
7. **Contact** — Inquiry form + direct contact info + WhatsApp button
8. **Footer** — Brand, nav links, contact links

## TODO / Next Steps
- [ ] Add real equipment photos to gallery (replace "Photo Coming Soon" placeholders)
- [ ] Connect inquiry form to a backend (Formspree, EmailJS, or custom)
- [ ] Add company logo image to nav
- [ ] Add Facebook page link to footer
- [ ] Consider adding a Google Maps embed for service area
- [ ] Update stats (years, units, provinces, projects) with real numbers
