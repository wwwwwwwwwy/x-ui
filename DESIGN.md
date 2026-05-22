---
name: Systematic Clarity
colors:
  surface: '#f8f9ff'
  surface-dim: '#d5dae5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e9eef9'
  surface-container-high: '#e3e8f4'
  surface-container-highest: '#dde3ee'
  on-surface: '#161c24'
  on-surface-variant: '#434655'
  inverse-surface: '#2b3139'
  inverse-on-surface: '#ebf1fc'
  outline: '#747687'
  outline-variant: '#c4c5d8'
  surface-tint: '#1a4de6'
  primary: '#003fd4'
  on-primary: '#ffffff'
  primary-container: '#2d5af2'
  on-primary-container: '#e8e9ff'
  inverse-primary: '#b8c4ff'
  secondary: '#595f68'
  on-secondary: '#ffffff'
  secondary-container: '#dde3ee'
  on-secondary-container: '#5f656e'
  tertiary: '#4f5253'
  on-tertiary: '#ffffff'
  tertiary-container: '#686a6b'
  on-tertiary-container: '#eaebec'
  error: '#F03030'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c4ff'
  on-primary-fixed: '#001454'
  on-primary-fixed-variant: '#0037ba'
  secondary-fixed: '#dde3ee'
  secondary-fixed-dim: '#c1c7d2'
  on-secondary-fixed: '#161c24'
  on-secondary-fixed-variant: '#414750'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f8f9ff'
  on-background: '#161c24'
  surface-variant: '#dde3ee'
  surface-subtle: '#F5F6F7'
  border-light: '#E2E4E9'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

This design system is built upon the principles of **Modern Systematic** design. It prioritizes functional efficiency, developer-centric precision, and high-fidelity clarity. The brand personality is professional, reliable, and unobtrusive—designed to stay out of the user's way while providing a robust framework for complex data and interactions.

The aesthetic utilizes a restrained color palette, crisp geometric shapes, and a clear hierarchy to evoke a sense of organized intelligence. It is tailored for SaaS platforms, developer tools, and enterprise environments where clarity and speed of task completion are paramount.

## Colors

The palette is anchored by a high-energy "Electric Blue" (`#2D5AF2`) which serves as the primary action color. This is balanced against a deep, authoritative neutral (`#1B2129`) used for typography and high-contrast elements.

- **Primary:** Used for main actions, active states, and focus indicators.
- **Secondary/Neutral:** Used for body text, headings, and primary icons to ensure maximum legibility.
- **Surface/Tertiary:** Used for background containment, input fields, and structural grouping.
- **Error:** A bright, high-visibility red reserved strictly for destructive actions or critical system alerts.

The default mode is light, emphasizing whitespace and a clean, "paper-like" interface depth.

## Typography

This design system exclusively employs **Inter** for its systematic, utilitarian qualities and exceptional legibility at small sizes. 

The type scale follows a strict hierarchy. Headlines use a slightly tighter letter spacing and heavier weights to maintain visual impact against a dense UI. Body text is optimized for long-form reading and data density with a generous 1.5x line height. Labels and metadata use medium weights to distinguish themselves from body copy without requiring larger font sizes.

## Layout & Spacing

The layout is built on a **12-column fixed grid** for desktop environments (max-width 1280px) and a fluid 4-column grid for mobile. 

We utilize an **8px base spacing unit** (with a 4px half-step for micro-adjustments) to ensure consistent rhythm. Gutters are fixed at 24px to provide clear separation between logical modules. Padding within components (like cards and modals) should scale proportionally: 16px for small containers and 24px for large dashboard sections. 

On mobile devices, side margins compress to 16px to maximize the available screen real estate for content.

## Elevation & Depth

Visual hierarchy is established through a combination of **tonal layers** and **low-contrast outlines**. 

Rather than heavy shadows, this design system uses subtle 1px borders (`#E2E4E9`) to define boundaries. Elevation is signaled by background color shifts—the main application background is typically `#FFFFFF`, while secondary containers or sidebars utilize the subtle `#F5F6F7` surface tone.

When depth is required for floating elements (like dropdowns or modals), use a highly diffused, low-opacity shadow:
- **Floating:** `0px 4px 12px rgba(27, 33, 41, 0.08)`
- **Modal:** `0px 12px 32px rgba(27, 33, 41, 0.12)`

## Shapes

The shape language is **Soft**, utilizing a standard **4px (0.25rem)** corner radius for most interactive components like components like buttons and input fields. This provides a modern, approachable feel while maintaining the structural rigour of a technical interface.

Larger components like cards use a **8px (0.5rem)** radius (`rounded-lg`), while main containers or modals may use **12px (0.75rem)** (`rounded-xl`) to soften their impact on the overall layout.

## Components

### Buttons
- **Primary:** Solid `#2D5AF2` with white text. 4px radius. 
- **Secondary:** Solid `#F5F6F7` background with `#1B2129` text.
- **Ghost:** No background, `#1B2129` text, appearing only on hover with a light gray tint.

### Input Fields
- **Default:** White background, 1px `#E2E4E9` border, 4px radius.
- **Focus:** 1px `#2D5AF2` border with a subtle blue outer glow (2px).

### Chips/Tags
- Small, 12px labels with a light tertiary background (`#F5F6F7`) and `#1B2129` text. Used for status indicators and filtering.

### Cards
- White background with a 1px `#E2E4E9` border. No shadow unless the card is interactive/hoverable.

### Lists
- Clean rows with 12px vertical padding. Use thin horizontal separators (`#E2E4E9`) between items to maintain vertical rhythm without adding bulk.
