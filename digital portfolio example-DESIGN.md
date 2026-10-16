---
version: alpha
name: Franciskylelorenzana
description: |
  This design system embodies a warm, sophisticated aesthetic rooted in
  minimalist typography and a limited, purposeful color palette. The visual
  language combines a soft beige canvas with rich amber accents, creating an
  inviting yet professional atmosphere that feels both contemporary and
  timeless. The system prioritizes breathing space and deliberate contrast,
  using a restrained set of neutral surfaces punctuated by a vibrant
  golden-amber brand color. The overall mood is approachable and confident—ideal
  for a full-stack developer's portfolio—with carefully considered hierarchy,
  generous whitespace, and subtle depth through selective use of shadows and
  color-blocking rather than heavy layering.
source:
  url: "https://franciskylelorenzana.vercel.app/"
  pagesAnalyzed: 1
  extractedAt: 2026-10-16
  tokensMeasured: true
colors:
  primary: "#F3B44A"
  canvas: "#F7F2E4"
  surface: "#F1EAD6"
  on-primary: "#17150E"
  ink: "#17150E"
  body: "#4B473B"
  muted: "#8A8371"
  hairline: "#DDD4B8"
  accent-1: "#EEBB62"
  accent-2: "#FF9900"
  neutral-1: "#FFFFFF"
typography:
  display-xl:
    fontFamily: "General Sans"
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1.8px
  display-lg:
    fontFamily: "General Sans"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -1.5px
  heading-md:
    fontFamily: "General Sans"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.9px
  heading-sm:
    fontFamily: "General Sans"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: 0px
  body-xl:
    fontFamily: "General Sans"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0px
  body-lg:
    fontFamily: "General Sans"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.56
    letterSpacing: 0px
  body-md:
    fontFamily: "General Sans"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  body-md-loose:
    fontFamily: "General Sans"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.63
    letterSpacing: 0px
  body-sm:
    fontFamily: "General Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0px
  body-sm-loose:
    fontFamily: "General Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.63
    letterSpacing: 0px
  nav:
    fontFamily: "General Sans"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: 0px
  button:
    fontFamily: "General Sans"
    fontSize: 12.8px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0px
  caption-lg:
    fontFamily: "General Sans"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0px
  caption-lg-strong:
    fontFamily: "General Sans"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.38
    letterSpacing: 0px
  caption-lg-uppercase:
    fontFamily: "General Sans"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 1.2px
    textTransform: uppercase
  caption-md:
    fontFamily: "General Sans"
    fontSize: 10.88px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 1.31px
    textTransform: uppercase
  caption-sm:
    fontFamily: "General Sans"
    fontSize: 10px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0px
  caption-xs:
    fontFamily: "General Sans"
    fontSize: 9px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 1.44px
    textTransform: uppercase
  code:
    fontFamily: ui-monospace
    fontSize: 9px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 1.44px
    textTransform: uppercase
rounded:
  none: 0px
  xs: 6px
  sm: 8px
  md: 9.6px
  lg: 11.2px
  xl: 20px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 40px
  section: 48px
  band: 64px
borderWidths:
  thin: 1px
shadows:
  sm: "rgba(0, 0, 0, 0.55) 0px 24px 60px -24px"
elevationStrategy: single-tier
themes:
  derived: dark   # the other theme is the site's measured palette
  light:
    bg: "#F7F2E4"
    surface: "#F1EAD6"
    surfaceRaised: "#E8E1CE"
    text: "#17150E"
    textMuted: "#4B473B"
    border: "#DDD4B8"
    accent: "#B7770C"
    accentFg: "#000000"
    focusRing: "#F3B44A"
    elevation: shadow
  dark:
    bg: "#13100C"
    surface: "#211E1B"
    surfaceRaised: "#2D2A27"
    text: "#FFFCF8"
    textMuted: "#A5A29E"
    border: "#393633"
    accent: "#F3B44A"
    accentFg: "#0B0B0C"
    focusRing: "#F3B44A"
    elevation: "border+surface"
gradients:
  - context: section
    kind: linear
    value: "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.45) 52%, rgba(0, 0, 0, 0.92) 94%)"
  - context: section
    kind: linear
    value: "linear-gradient(115deg, rgba(255, 255, 255, 0.12) 0%, rgba(0, 0, 0, 0) 32%, rgba(0, 0, 0, 0) 100%)"
  - context: section
    kind: radial
    value: "radial-gradient(closest-side, color(srgb 0.952941 0.705882 0.290196 / 0.34), rgba(0, 0, 0, 0))"
  - context: section
    kind: conic
    value: "conic-gradient(rgba(0, 0, 0, 0) 0%, rgb(243, 180, 74) 20%, rgb(232, 135, 58) 32%, rgba(0, 0, 0, 0) 55%)"
components:
  button-filled:
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline}"
    height: 48px
    padding: "0px 24px 0px 24px"
    fontSize: 14.4px
    fontFamily: "General Sans"
    fontWeight: 600
    lineHeight: 1.5
    rounded: "{rounded.lg}"
    backgroundColor: "{colors.surface}"
  button-primary:
    textColor: "{colors.ink}"
    height: 48px
    padding: "0px 24px 0px 24px"
    fontSize: 14.4px
    fontFamily: "General Sans"
    fontWeight: 600
    lineHeight: 1.5
    rounded: "{rounded.lg}"
    backgroundColor: "{colors.primary}"
  button-primary-sm:
    textColor: "{colors.ink}"
    height: 40px
    padding: "0px 18.4px 0px 18.4px"
    fontSize: 12.8px
    fontFamily: "General Sans"
    fontWeight: 600
    lineHeight: 1.5
    rounded: "{rounded.lg}"
    backgroundColor: "{colors.primary}"
  button-outline:
    typography: "{typography.button}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline}"
    height: 36px
    rounded: "{rounded.sm}"
  button-icon:
    typography: "{typography.body-md}"
    textColor: "{colors.ink}"
    height: 33.5938px
    rounded: "50%"
  card-featured:
    typography: "{typography.body-md}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline}"
    boxShadow: "rgba(0, 0, 0, 0.55) 0px 24px 60px -24px"
    rounded: "{rounded.xl}"
    backgroundColor: "rgb(17, 17, 17)"
  card:
    typography: "{typography.body-md}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.md}"
    backgroundColor: "{colors.surface}"
  card-sm:
    typography: "{typography.body-md}"
    textColor: "{colors.ink}"
  badge-primary:
    typography: "{typography.caption-md}"
    textColor: "{colors.ink}"
    height: 25.9062px
    padding: "4.8px 10.4px 4.8px 10.4px"
    rounded: 5.6px
    backgroundColor: "{colors.primary}"
  navigation:
    typography: "{typography.body-md}"
    textColor: "{colors.ink}"
    height: 65px
    backgroundColor: "color(srgb 0.968627 0.94902 0.894118 / 0.88)"
  footer:
    typography: "{typography.body-md}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline}"
    padding: "48px 32px 48px 32px"
  link:
    typography: "{typography.nav}"
    textColor: "{colors.muted}"
    padding: "0px 0px 6px 0px"
  link-lg:
    textColor: "{colors.ink}"
    fontSize: 21.6px
    fontFamily: "General Sans"
    fontWeight: 800
    lineHeight: 1.5
states:
  button-hover:
    target: button
    state: hover
    boxShadow: "rgba(243, 180, 74, 0.4) 0px 8px 20px"
    transform: "translateY(-2px)"
  button-active:
    target: button
    state: active
    transform: "scale(0.97)"
  other-hover:
    target: other
    state: hover
    opacity: 0.85
  card-hover:
    target: card
    state: hover
    transform: "translateY(-3px)"
  nav-active:
    target: nav
    state: active
    textColor: "{colors.ink}"
breakpoints:
  - width: 375
    containerWidth: 327
    gridColumns: 3
    navLinksVisible: 2
    menuToggleVisible: false
    headingPx: 36
    bodyPx: 16
    sectionPaddingX: 24
  - width: 768
    containerWidth: 704
    gridColumns: 4
    navLinksVisible: 7
    menuToggleVisible: false
    headingPx: 60
    bodyPx: 16
    sectionPaddingX: 32
  - width: 1024
    containerWidth: 960
    gridColumns: 4
    navLinksVisible: 7
    menuToggleVisible: false
    headingPx: 60
    bodyPx: 16
    sectionPaddingX: 32
  - width: 1280
    containerWidth: 1216
    gridColumns: 4
    navLinksVisible: 7
    menuToggleVisible: false
    headingPx: 60
    bodyPx: 16
    sectionPaddingX: 32
  - width: 1440
    containerWidth: 1376
    gridColumns: 4
    navLinksVisible: 7
    menuToggleVisible: false
    headingPx: 60
    bodyPx: 16
    sectionPaddingX: 32
coverage:
  statesFound: 17
  gradientsFound: 4
  rolesUnassigned: 3
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: true
  semanticRampDeclared: false
---

# Design System Inspired by Francis Kyle Lorenzana

## 1. Visual Theme & Atmosphere

This design system embodies a warm, sophisticated aesthetic rooted in minimalist typography and a limited, purposeful color palette. The visual language combines a soft beige canvas with rich amber accents, creating an inviting yet professional atmosphere that feels both contemporary and timeless. The system prioritizes breathing space and deliberate contrast, using a restrained set of neutral surfaces punctuated by a vibrant golden-amber brand color. The overall mood is approachable and confident—ideal for a full-stack developer's portfolio—with carefully considered hierarchy, generous whitespace, and subtle depth through selective use of shadows and color-blocking rather than heavy layering.

**Key Characteristics**

- Warm, earthy color palette anchored in cream (`{colors.canvas}` — `#F7F2E4`) and amber (`{colors.primary}` — `#F3B44A`)
- High reliance on typography weight and size for hierarchy over color manipulation
- Minimal shadows; depth achieved through surface color shifts and elevation transforms
- Sharp corners on cards and containers (`{rounded.none}` — `0px`), rounded buttons (`{rounded.lg}` — `11.2px`), and full-circle icon toggles
- Generous padding and section-level spacing (`{spacing.band}` — `64px`) supporting the breathing-room aesthetic
- Interaction states favour subtle 2D transforms (translateY, scale, rotate) over color bleeds
- No semantic color ramp; the brand relies on a single accent unified across CTAs, badges, and focus states

## 2. Color Palette & Roles

### Primary

- **Brand Accent** (`{colors.primary}` — `#F3B44A`): Primary call-to-action buttons, active focus states, badge fills, and key accent elements throughout the interface. This golden-amber is the emotional centre of the system.

### Accent Colors (Decorative)

- **Accent Warm** (`{colors.accent-1}` — `#EEBB62`): Decorative or secondary accent; no primary UI role assigned in the extraction.
- **Accent Vivid** (`{colors.accent-2}` — `#FF9900`): Decorative or secondary accent; no primary UI role assigned in the extraction.

### Neutral Scale

- **Canvas** (`{colors.canvas}` — `#F7F2E4`): Default page background; the system's neutral foundation.
- **Surface** (`{colors.surface}` — `#F1EAD6`): Card and panel backgrounds; a slightly warmer step from canvas for visual separation.
- **Ink / On Primary** (`{colors.on-primary}` — `#17150E`): Primary text colour for headings and labels, especially on brand (amber) surfaces. A near-black for maximum contrast.
- **Body** (`{colors.body}` — `#4B473B`): Body copy and general text; a warm dark grey that softens the pure black for readability.
- **Muted** (`{colors.muted}` — `#8A8371`): Secondary or de-emphasized text, captions, and helper text. A warm mid-tone that recedes visually.
- **Hairline** (`{colors.hairline}` — `#DDD4B8`): 1px borders, dividers, and fine lines. A pale warm grey sitting near canvas.
- **White** (`{colors.neutral-1}` — `#FFFFFF`): Used sparingly for contrast or overlay; not the page background.

## 3. Typography Rules

### Font Family

- **Primary**: General Sans (all body, display, heading, button, and navigation text)
  - Fallback stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- **Secondary**: `ui-monospace` (code elements only)
  - Fallback stack: `"Courier New", monospace`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| **Display XL** | General Sans | 72px | 700 | 1.05 | −1.8px | Hero headline; maximum boldness and negative tracking. |
| **Display LG** | General Sans | 60px | 700 | 1.25 | −1.5px | Major section headings; strong visual anchor. |
| **Heading MD** | General Sans | 36px | 700 | 1.25 | −0.9px | Section headers; medium boldness with tight tracking. |
| **Heading SM** | General Sans | 14px | 700 | 1.43 | 0px | Small labels and inline headings. |
| **Body XL** | General Sans | 24px | 700 | 1.25 | 0px | Prominent body text or stat numbers. |
| **Body LG** | General Sans | 18px | 700 | 1.56 | 0px | Emphasized body or subheadings. |
| **Body MD** | General Sans | 16px | 400 | 1.5 | 0px | Standard reading text; the system default. |
| **Body MD Loose** | General Sans | 16px | 400 | 1.63 | 0px | Body with increased line height for extended copy. |
| **Body SM** | General Sans | 14px | 400 | 1.43 | 0px | Secondary or compact body text. |
| **Body SM Loose** | General Sans | 14px | 400 | 1.63 | 0px | Compact text with breathing room. |
| **Button** | General Sans | 12.8px | 700 | 1.5 | 0px | Interactive button labels. |
| **Navigation** | General Sans | 14px | 500 | 1.43 | 0px | Navigation links in header/menu. |
| **Caption LG Strong** | General Sans | 12px | 600 | 1.38 | 0px | Emphasized metadata or labels. |
| **Caption LG** | General Sans | 12px | 400 | 1.33 | 0px | Standard captions and helper text. |
| **Caption LG Uppercase** | General Sans | 12px | 700 | 1.33 | 1.2px | Transformed uppercase labels; small caps aesthetic. |
| **Caption MD** | General Sans | 10.88px | 700 | 1.5 | 1.31px | Uppercase badge and micro-label text. |
| **Caption SM** | General Sans | 10px | 600 | 1.25 | 0px | Smallest structured captions. |
| **Caption XS** | General Sans | 9px | 600 | 1.5 | 1.44px | Micro text and secondary metadata; uppercase. |
| **Code** | ui-monospace | 9px | 700 | 1.5 | 1.44px | Code blocks and inline code; uppercase styling. |

### Principles

- **Display tracking**: Negative letter-spacing (`−1.8px`, `−1.5px`, `−0.9px`) on display and large headings tightens the visual weight and creates a premium, high-contrast appearance.
- **Hierarchy via weight**: The system relies heavily on weight (400, 500, 600, 700, 800) to differentiate roles rather than color shifts.
- **Readable defaults**: Body text uses `{typography.body-md}` — `16px / 400 / 1.5 line-height` — as the anchor; secondary text steps down to `{typography.body-sm}` — `14px / 400 / 1.43 line-height`.
- **Captions embrace transformation**: Small text often includes `text-transform: uppercase` and tracked letter-spacing to assert presence despite size.
- **Monospace restraint**: Code roles are minimal; the system does not enforce a complex programming-language syntax hierarchy.

## 4. Component Stylings

### Buttons

#### Primary Button

- **Background**: `{colors.primary}` (`#F3B44A`)
- **Text Color**: `{colors.on-primary}` (`#17150E`)
- **Padding**: `0px 24px`
- **Height**: `48px`
- **Font Size**: `14.4px` (derived from `{typography.button}` — `12.8px`; rendered at 14.4px)
- **Font Weight**: `600`
- **Border Radius**: `{rounded.lg}` (`11.2px`)
- **Border**: `none` (transparent)
- **Line Height**: `21.6px`
- **Hover State**: Box shadow `rgba(243, 180, 74, 0.4) 0px 8px 20px`; transform `translateY(−2px)`
- **Active State**: Transform `scale(0.97)`

#### Primary Button (Small)

- **Background**: `{colors.primary}` (`#F3B44A`)
- **Text Color**: `{colors.on-primary}` (`#17150E`)
- **Padding**: `0px 18.4px`
- **Height**: `40px`
- **Font Size**: `12.8px`
- **Font Weight**: `600`
- **Border Radius**: `{rounded.lg}` (`11.2px`)
- **Border**: `none`
- **Line Height**: `19.2px`
- **Hover State**: Box shadow `rgba(243, 180, 74, 0.4) 0px 8px 20px`; transform `translateY(−2px)`
- **Active State**: Transform `scale(0.97)`

#### Secondary / Filled Button

- **Background**: `{colors.surface}` (`#F1EAD6`)
- **Text Color**: `{colors.on-primary}` (`#17150E`)
- **Padding**: `0px 24px`
- **Height**: `48px`
- **Font Size**: `14.4px`
- **Font Weight**: `600`
- **Border Radius**: `{rounded.lg}` (`11.2px`)
- **Border**: `1px solid {colors.hairline}` (`#DDD4B8`)
- **Line Height**: `21.6px`
- **Hover State**: Border color shifts to `{colors.on-primary}`; transform `translateY(−2px)`
- **Active State**: Transform `scale(0.97)`

#### Outline Button

- **Background**: Transparent (`rgba(0, 0, 0, 0)`)
- **Text Color**: `{colors.on-primary}` (`#17150E`)
- **Padding**: `0px`
- **Width / Height**: `36px` (square)
- **Font Size**: `12.8px`
- **Font Weight**: `700`
- **Border Radius**: `{rounded.sm}` (`8px`)
- **Border**: `1px solid {colors.hairline}` (`#DDD4B8`)
- **Line Height**: `19.2px`
- **Hover State**: Border color shifts to `{colors.on-primary}`

#### Icon Button

- **Background**: Transparent (`rgba(0, 0, 0, 0)`)
- **Text Color**: `{colors.on-primary}` (`#17150E`)
- **Padding**: `0px`
- **Width / Height**: `33.6px` (circle)
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Border Radius**: `50%`
- **Border**: `none`
- **Line Height**: `24px`

### Cards & Containers

#### Default Card

- **Background**: `{colors.surface}` (`#F1EAD6`)
- **Text Color**: `{colors.on-primary}` (`#17150E`)
- **Border**: `1px solid {colors.hairline}` (`#DDD4B8`)
- **Border Radius**: `{rounded.md}` (`9.6px`)
- **Padding**: `0px` (image-fill layout)
- **Height**: `289px` (measured)
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Line Height**: `24px`
- **Box Shadow**: `none`
- **Hover State**: Transform `translateY(−3px)`; border color shifts to `{colors.on-primary}`

#### Featured / Large Card

- **Background**: `#17150E` (dark interior for contrast)
- **Text Color**: `{colors.on-primary}` (`#17150E`)
- **Border**: `1px solid {colors.hairline}` (`#DDD4B8`)
- **Border Radius**: `{rounded.xl}` (`20px`)
- **Padding**: `0px`
- **Height**: `512px`
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Line Height**: `24px`
- **Box Shadow**: `rgba(0, 0, 0, 0.55) 0px 24px 60px −24px` (elevation-sm)
- **Hover State**: Border color shifts to `{colors.primary}`; scale `1.06`

#### Card (No Border, Section)

- **Background**: `rgba(0, 0, 0, 0)` (transparent)
- **Text Color**: `{colors.on-primary}` (`#17150E`)
- **Border**: `none` or `0px`
- **Border Radius**: `{rounded.none}` (`0px`)
- **Padding**: `0px`
- **Height**: `195px` (measured)
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Line Height**: `24px`
- **Box Shadow**: `none`

### Badges

#### Primary Badge

- **Background**: `{colors.primary}` (`#F3B44A`)
- **Text Color**: `{colors.on-primary}` (`#17150E`)
- **Padding**: `4.8px 10.4px`
- **Font Size**: `10.88px` (`{typography.caption-md}`)
- **Font Weight**: `700`
- **Border Radius**: `5.6px`
- **Line Height**: `16.32px`
- **Text Transform**: `uppercase`
- **Letter Spacing**: `1.31px`
- **Border**: `none`

### Inputs & Forms

No form input components were measured in the extraction. Refer to "Known Gaps" for details.

### Navigation

#### Header Navigation (Default)

- **Background**: `rgba(247, 242, 228, 0.88)` (canvas with 88% opacity — slightly translucent)
- **Text Color**: `{colors.on-primary}` (`#17150E`) for active/focused states; `{colors.body}` (`#4B473B`) default
- **Border**: `none`
- **Border Radius**: `{rounded.none}` (`0px`)
- **Height**: `65px`
- **Padding**: `0px`
- **Font Size**: `16px`
- **Font Weight**: `400`
- **Line Height**: `24px`
- **Navigation Link**: `{typography.nav}` — `14px / 500 / 1.43 line-height`
- **Active State**: Color becomes `{colors.on-primary}`
- **Hover State**: Border color or opacity shifts per link state

## 5. Layout Principles

### Spacing System

The system employs a **base unit of 4px** with a logarithmic scale:

- `{spacing.xxs}` = `4px` — Tight micro-spacing (e.g. between inline elements)
- `{spacing.xs}` = `8px` — Compact spacing within components
- `{spacing.sm}` = `12px` — Small breathing room
- `{spacing.md}` = `16px` — Default/medium spacing for most layouts
- `{spacing.lg}` = `20px` — Generous component spacing
- `{spacing.xl}` = `24px` — Large gaps between blocks
- `{spacing.xxl}` = `32px` — Extra-large section breaks
- `{spacing.xxxl}` = `40px` — Prominent spacing for visual hierarchy
- `{spacing.section}` = `48px` — Section-level padding (top/bottom)
- `{spacing.band}` = `64px` — Full-bleed section separation; hero bands and major layout zones

**Usage Contexts:**

- **Component padding**: `{spacing.md}` to `{spacing.lg}` for buttons, cards, input fields
- **Section padding**: `{spacing.section}` to `{spacing.band}` for page sections and hero areas
- **Gaps between elements**: `{spacing.md}` for default, `{spacing.lg}` to `{spacing.xl}` for breathing room in layouts

### Grid & Container

- **Max Content Width**: Approximately `1376px` (content column at 1440px breakpoint)
- **Typical container max-width**: `1216px` (at 1280px viewport)
- **Column Grid**: 4-column layout on desktop (measured at 768px and above)
- **Mobile Grid**: 3 columns at 375px
- **Section Padding (Horizontal)**: `24px` at small viewports (`375px`); `32px` at medium (`768px`) and above

**Section Patterns:**

- Hero sections and full-width bands use `{spacing.band}` (`64px`) vertical padding
- Content sections use `{spacing.section}` (`48px`) top/bottom padding
- Horizontal gutters follow the padding-x pattern per breakpoint (24px mobile, 32px desktop)

### Whitespace Philosophy

The system embraces generous, asymmetric whitespace to support visual hierarchy and breathing room. Rather than aggressive negative space, the design relies on:

- Ample section padding (`{spacing.section}` and `{spacing.band}`) separating major zones
- Color-blocking via surface shifts (`{colors.canvas}` → `{colors.surface}`) to define regions without borders
- Wide gaps between grid items (`{spacing.lg}` to `{spacing.xl}`) to avoid visual clutter
- Minimal internal padding on cards to let content breathe against generous external spacing

This approach creates a calm, approachable layout that never feels crowded.

### Border Radius Scale

- `{rounded.none}` = `0px` — Cards, featured containers, section zones (sharp, architectural aesthetic)
- `{rounded.xs}` = `6px` — Outline/secondary buttons, fine detail containers
- `{rounded.sm}` = `8px` — Small icon buttons, outline borders
- `{rounded.md}` = `9.6px` — Default card interiors, slightly rounded details
- `{rounded.lg}` = `11.2px` — Primary buttons, call-to-action elements (distinct soft corner)
- `{rounded.xl}` = `20px` — Featured/large cards, elevated showcase containers
- `{rounded.full}` = `9999px` — Circular icon buttons, pill badges

**Component Context:**

- Buttons (primary/secondary): `{rounded.lg}` (`11.2px`)
- Cards (default): `{rounded.md}` (`9.6px`)
- Cards (featured): `{rounded.xl}` (`20px`)
- Icon buttons: `{rounded.sm}` to `{rounded.full}` (varies by usage)
- Badges: `5.6px` (intermediate radius between `{rounded.sm}` and `{rounded.md}`)

### Border Widths

- **Thin**: `1px` — Used on all borders throughout the system (buttons, cards, input fields, navigation)

All interactive and container elements employ a consistent `1px` stroke width for borders and dividers, creating visual definition without heaviness.

## 6. Depth & Elevation

The system employs a **single-tier, color-blocking approach** to depth. Shadows are minimal and reserved for featured elements; most depth comes from surface color shifts.

| Level | Treatment | Use |
|---|---|---|
| **Flat** | No shadow; color only | Default cards, standard buttons, surfaces at rest |
| **Elevated** | `rgba(0, 0, 0, 0.55) 0px 24px 60px −24px` | Featured/large cards, modal overlays, prominent showcase containers |

**Shadow Philosophy:**

The system uses a single shadow definition (`{colors.shadow}` — `rgba(0, 0, 0, 0.55) 0px 24px 60px −24px`). This shadow is dark and diffuse, conveying significant lift (60px blur, −24px offset suggests deep overhead lighting). It applies only to featured cards and high-priority elements, never to routine UI. Most depth hierarchy is achieved through:

- **Surface color shifts**: Canvas → Surface → On-Primary backgrounds
- **2D transforms on hover**: `translateY(−2px)` or `translateY(−3px)` for subtle lift feedback
- **Border color changes**: Hairline → On-Primary or Primary borders on interaction
- **Scale and rotation**: `scale(1.06)`, `rotate(45deg)` on hover for playful emphasis

### Opacity Levels

The system employs opacity for overlay, hover, and disabled states:

- **28% opacity** (`0.28`) — Subtle overlays or very disabled states
- **40% opacity** (`0.40`) — Hover or focus state lightening
- **50% opacity** (`0.50`) — Medium opacity for secondary/hidden layers
- **55% opacity** (`0.55`) — Shadow blacks; primary opacity for dark overlays
- **75% opacity** (`0.75`) — Mild translucency; medium-dark overlays
- **85% opacity** (`0.85`) — Near-opaque; hover/focus lightening on text or borders
- **88% opacity** (`0.88`) — Navigation background translucency

These opacity levels support smooth state transitions without introducing new colors.

### Z-index / Layering

- **Base / Content**: `z-index: auto` or `0` (page background, cards, sections)
- **Dropdown**: `z-index: 50` (menus, popovers, secondary overlays)
- **Sticky**: `z-index: 200` (sticky header, fixed navigation, persistent UI)
- **Modal / Toast**: Not explicitly defined in extraction; assume `z-index: 1000+` for full-screen overlays

The stacking order prioritizes sticky navigation above dropdowns, ensuring persistent UI remains accessible.

## 7. Do's and Don'ts

### Do

- **Use the primary amber (`{colors.primary}` — `#F3B44A`) for all CTAs** — Whether primary button, badge, or interactive focus state, let this colour anchor user attention.
- **Leverage the neutral scale for text hierarchy** — Body (`#4B473B`) for standard text, Muted (`#8A8371`) for secondary, Ink (`#17150E`) for headings. Never add new colours for text roles.
- **Apply negative tracking (−1.8px to −0.9px) to display sizes (60px+)** — This tightens the visual weight and is a signature of the system; omit it and headings feel loose.
- **Use the single shadow sparingly** — Apply `rgba(0, 0, 0, 0.55) 0px 24px 60px −24px` only to featured cards and hero elements. Most depth comes from colour and 2D transforms.
- **Embrace whitespace via `{spacing.band}` section padding** — Let sections breathe; 64px vertical padding between major zones is not excessive, it is intentional.
- **Stack opacity for states** — Use 0.28, 0.40, 0.50, 0.55, 0.75, 0.85 for hover, focus, disabled, and overlay rather than inventing new greys.
- **Apply rounded corners consistently per component type** — Primary buttons are always `11.2px`, featured cards always `20px`, default cards always `9.6px`.
- **Use 2D transforms (translateY, scale, rotate) for interaction feedback** — Hover states should lift via `translateY(−2px)`, scale, or subtle rotation; avoid colour shifts alone.
- **Keep borders at 1px** — All strokes use the thin `1px` standard; do not introduce thicker borders unless extracting new data.

### Don't

- **Do not introduce new accent colours** — The system has one brand colour (`#F3B44A`); resist adding teal, purple, or other accents even if they feel complementary.
- **Do not use pure black or pure white as primary backgrounds** — Stick to `{colors.canvas}` (`#F7F2E4`) and `{colors.surface}` (`#F1EAD6`); the warm foundation is intentional.
- **Do not apply heavy shadows to routine elements** — Reserve the single shadow for featured/hero cards. Standard cards are flat.
- **Do not collapse the spacing scale** — Do not use `12px` where `{spacing.md}` (`16px`) or `{spacing.lg}` (`20px`) belongs; spacing discipline supports calm hierarchy.
- **Do not add semantic status colours** — The site does not expose error/success/warning palettes. If a status state is needed, ask for extraction; do not guess a red or green.
- **Do not override font weights carelessly** — The hierarchy is built on weight differentiation (400 body, 600 labels, 700 headings). Changing weights without purpose flattens hierarchy.
- **Do not rotate text or apply transforms to readability-critical elements** — Hover transforms (rotate, scale) are decorative only; body text must remain stable and horizontal.
- **Do not exceed 1440px content width** — The system measures 1376px max at 1440px viewport; wider layouts break the proportional spacing rhythm.
- **Do not invent border-radius values** — If a component's radius was not extracted, use `{rounded.none}` or the nearest defined value; do not introduce `12px`, `15px`, or undocumented radii.
- **Do not rely on colour alone to signal interaction** — Pair colour changes with border shifts, opacity, or 2D transforms for clear, accessible feedback.

## 8. Responsive Behavior

### Breakpoints

| Viewport Width | Device Tier | Max Content | Section Padding X | Columns | Notable Changes |
|---|---|---|---|---|---|
| **375px** | Mobile | 327px | 24px | 3 | Hero headline drops to 36px; nav links shown as 2/7; single-column stacks |
| **768px** | Tablet | 704px | 32px | 4 | Hero headline scales to 60px; all 7 nav links visible; 2-column or grid layouts emerge |
| **1024px** | Small Desktop | 960px | 32px | 4 | Full desktop spacing; layout stabilizes |
| **1280px** | Desktop | 1216px | 32px | 4 | Approaching max width; horizontal padding holds at 32px |
| **1440px** | Large Desktop | 1376px | 32px | 4 | Maximum content width reached; no further expansion |

**Breakpoint Strategy:**

The system uses a mobile-first approach with breakpoints triggered by measured layout shifts:

- **Mobile (375px)**: Compact section padding (24px), tight grid (3 columns), smaller headings (36px). Navigation shows 2 of 7 links; others collapse.
- **Tablet (768px)**: Padding increases to 32px, grid expands to 4 columns, heading scales to 60px. All 7 nav links become visible; full menu emerges.
- **Desktop (1024px+)**: Padding stabilizes at 32px, max content width grows to 1216px (1280px viewport) and caps at 1376px (1440px+). No further responsive changes; layout remains fixed-width above this point.

### Touch Targets

- **Minimum interactive size**: `36px × 36px` (measured on outline buttons)
- **Comfortable button size**: `40px` to `48px` height (primary and secondary buttons)
- **Icon buttons**: `33.6px` (circular, icon-centered)
- **Navigation links**: `16px` text on `65px` header row; click target likely extends vertically to full header height

Spacing between interactive elements (buttons, links, form inputs) should maintain at least `{spacing.md}` (`16px`) horizontal and vertical gaps to avoid mis-taps on mobile.

### Collapsing Strategy

1. **Hero heading**: `72px (display-xl)` at desktop → `36px (heading-md)` at mobile (`375px`). Intermediate breakpoints may use `60px (display-lg)` at tablet.
2. **Section padding**: `32px` horizontal at desktop → `24px` at mobile. Vertical padding (`{spacing.section}` = `48px`, `{spacing.band}` = `64px`) remains consistent or reduces to `{spacing.xxl}` (`32px`) on small screens.
3. **Grid layout**: 4-column desktop → 3 columns at 375px mobile. Cards stack single-column on narrow viewports.
4. **Navigation**: All 7 links visible at 768px+ → 2 visible at 375px; presumed hamburger menu or overflow drawer (not measured in extraction).
5. **Card width**: Featured cards (829px) reflow to fit container on mobile; default cards (`276px`) scale to column width.
6. **Images & media**: Scale proportionally; maintain aspect ratios; avoid distortion.

## 9. Agent Prompt Guide

### Quick Color Reference

Use these mappings for rapid implementation:

- **Primary CTA / Brand Accent**: Primary (`#F3B44A`) — All primary buttons, badges, hero focus elements
- **Secondary Button / Container**: Surface (`#F1EAD6`) — Alternative button fill, card backgrounds
- **Page Background / Canvas**: Canvas (`#F7F2E4`) — Default page background, neutral zones
- **Heading Text / On Brand**: On-Primary (`#17150E`) — All headings, text on amber backgrounds
- **Body Text**: Body (`#4B473B`) — Standard paragraph and body copy
- **Secondary Text / Captions**: Muted (`#8A8371`) — Captions, helper text, metadata
- **Borders / Dividers**: Hairline (`#DDD4B8`) — 1px borders, subtle dividers, outlines
- **White / Neutral Contrast**: White (`#FFFFFF`) — Used sparingly for maximum contrast overlays

**Accent Decorative (no assigned role)**: Accent Warm (`#EEBB62`), Accent Vivid (`#FF9900`) — Use sparingly or in gradients; not primary interface roles.

### Iteration Guide

1. **Start with `{colors.canvas}` (`#F7F2E4`) as page background; never use white.** This warm base is the system's foundation. Any section shift uses `{colors.surface}` (`#F1EAD6`), not a new colour.

2. **All headings are `{colors.on-primary}` (`#17150E`).** Body text is `{colors.body}` (`#4B473B`). Secondary text is `{colors.muted}` (`#8A8371`). Do not invent text colours; use this three-tier scale.

3. **Primary buttons are always `{colors.primary}` (`#F3B44A`) on transparent or canvas backgrounds.** Text on primary buttons is always `{colors.on-primary}`. Apply `11.2px` border-radius and `1px` border-none.

4. **Apply negative tracking to display sizes (60px+): −1.5px for 60px headings, −1.8px for 72px display.** This is a signature trait. Omit it and the system feels generic.

5. **Use the spacing scale (`4px` to `64px`) for all gaps.** Do not invent intermediate values; stick to the defined scale. `{spacing.band}` (`64px`) separates major sections; `{spacing.section}` (`48px`) is default section padding.

6. **Reserve the single shadow (`rgba(0, 0, 0, 0.55) 0px 24px 60px −24px`) for featured cards and hero elements.** Standard cards and buttons are flat. Depth comes from colour and 2D transforms, not shadows.

7. **Apply 2D transforms for hover states: `translateY(−2px)` for buttons, `scale(1.06)` for cards, rotate for decorative elements.** Avoid colour shifts alone; pair them with transforms for accessible, clear feedback.

8. **Border-radius is component-specific: buttons `11.2px`, featured cards `20px`, standard cards `9.6px`, outlines `8px`.** Do not apply generic rounding; each component type has a measured radius.

9. **Ensure navigation and layout collapse smoothly: headings scale from 72px (desktop) to 36px (mobile), padding from 32px to 24px, columns from 4 to 3.** Test breakpoints at 375px, 768px, 1024px, 1280px, 1440px.

10. **Use opacity (0.28, 0.40, 0.50, 0.55, 0.75, 0.85) for states rather than inventing new greys.** Disabled states might use 0.28 opacity; hover overlays use 0.40–0.55. This keeps the palette unified.

## 10. Known Gaps

- **Form input components** — No input fields, text areas, checkboxes, radio buttons, or select dropdowns were measured. The extraction covers buttons, cards, badges, and navigation only. A complete form design system would require additional extraction.
- **Semantic status colours** — The site does not expose error, success, warning, or info colour roles. Do not invent a red/green/blue palette; if status states are needed, request explicit extraction.
- **Interaction states not present in measured styles** — Hover states, active states, focus rings, and disabled appearances are documented from explicit CSS declarations. However, some interactions (e.g., focus outlines, keyboard tab states, aria-expanded menus) may exist in the live site but were not captured in the stylesheet. Refer to the site's rendered behaviour for complete interaction coverage.
- **Dark / light theme variants** — The extraction measured a single light theme. No dark-mode styles were found or extracted. Do not assume a dark mode exists; if it does, it requires separate extraction.
- **Animation / transition timings** — No CSS animations or transition durations were recorded. The system does not document motion/timing specifications.
- **Cross-origin or shadow-DOM styles** — Some stylesheets may have been blocked or inaccessible due to CORS policies or shadow DOM encapsulation. CSS-level detail may be incomplete.
- **Surfaces behind authentication** — The site was analysed as a public portfolio. Any member-only, admin, or authenticated surfaces were not visited or measured.
- **Decorative gradient usage details** — Four gradients were extracted (linear, radial, conic), but their exact application contexts and triggering conditions may vary. Use the verbatim CSS; test in context for precise placement.
- **Micro-interactions and state persistence** — Hover tooltips, focus management, keyboard navigation, screen reader announcements, and dynamic content updates are not covered by this extraction. Refer to the live site or accessibility audit for these details.
- **Asset delivery (webfonts, icons, images)** — The system does not specify font-file loading strategies, icon libraries, or image optimization. Assume General Sans is a web font; confirm availability and fallbacks in implementation.

---

This design system captures the essential visual and structural language of Francis Kyle Lorenzana's portfolio. Use the token references (`{colors.*}`, `{typography.*}`, `{spacing.*}`, `{rounded.*}`) to implement UI consistently, and refer to "Known Gaps" when encountering design decisions not covered in this document.