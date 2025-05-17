# UI/UX Design Brief - Seasonal Meal Planner App (MVP)

## 🎯 Core Experience

A simple, browser-based meal planner that helps two vegetarian adults in Berlin plan and prepare seasonal meals. No login required, no data persistence needed.

## 👤 User Personas

**Primary Users:** Two vegetarian adults in Berlin
- Time-conscious professionals
- Health and sustainability-focused
- Mix of quick meals and creative cooking
- Specific dietary considerations

## 🗺️ Core Navigation

### 1. Simple Week View
```
┌─────────────────────────┐
│ Week 1                  │
├─────────────────────────┤
│ Monday                  │
│ ├─ 🌅 Overnight Oats   │
│ ├─ 🌞 Lentil Soup      │
│ └─ 🌙 Veggie Curry     │
├─────────────────────────┤
│ Tuesday                 │
│ ├─ 🌅 Fruit Bowl       │
│ ├─ 🌞 Yesterday's Curry│
│ └─ 🌙 Fresh Recipe     │
└─────────────────────────┘
```

### 2. Recipe View
```
┌─────────────────────────┐
│ Recipe Image            │
├─────────────────────────┤
│ Title & Quick Info      │
├─────────────────────────┤
│ [Ingredients|Method]    │
└─────────────────────────┘
```

## 📱 MVP Features

### 1. Week Overview
- Simple week selector (Week 1-4)
- Three meal slots per day (🌅 🌞 🌙)
- Click/tap to view recipe
- No drag-and-drop needed for v1

### 2. Recipe View
- Two tabs: Ingredients and Method
- Ingredients with checkboxes (browser-state only)
- Clear, step-by-step instructions
- Basic prep time and difficulty info
- Seasonal ingredients highlighted

### 3. Shopping Experience
- Checkbox state remains during session
- No persistent storage needed
- Simple ingredient grouping by recipe
- Clear, readable typography

### 4. Recipe Steps
- One clear instruction per step
- Essential measurements in bold
- Key tips highlighted inline
- No timers or advanced features needed

## 🎨 Simple Visual Hierarchy

### 1. Navigation
```
[Week View] [Recipe Browser]
```

### 2. Information Display
- Clear, readable typography
- Simple seasonal color accents
- Basic iconography (🌅 🌞 🌙)
- Minimal, focused layouts

## 💡 MVP Principles

1. **Browser-State Only**
   - No login required
   - Session-only storage
   - Fresh start each visit
   - No complex data management

2. **Essential Features Only**
   - Week-based planning
   - Basic recipe viewing
   - Simple shopping checklist
   - Clear cooking instructions

3. **Mobile-First**
   - Touch-friendly targets
   - Readable on small screens
   - Simple tab navigation
   - Minimal scrolling needed

## 🎯 Core User Flows

### Recipe Flow
```
Week View ──► Recipe View
                │
                ├─► Ingredients (with checkboxes)
                └─► Method Steps
```

### Shopping Flow
```
Recipe ──► Check Ingredients ──► Use During Shopping
  │
  └─► States reset on page refresh
```

## 🎨 Design System

### Typography (Geist)
```css
/* Font imports */
@import '@geist-ui/fonts';

/* Font settings */
font-family: 'Geist Sans', -apple-system, sans-serif;     /* UI elements */
font-family: 'Geist Mono', monospace;                     /* Measurements, times */

/* Type scale (rem) */
text-xs: 0.75rem    /* 12px - Small hints */
text-sm: 0.875rem   /* 14px - Secondary info */
text-base: 1rem     /* 16px - Body text */
text-lg: 1.125rem   /* 18px - Headings */
text-xl: 1.25rem    /* 20px - Section titles */
text-2xl: 1.5rem    /* 24px - Page titles */
```

### Icons (Phosphor)
```typescript
// Core icon set
import {
  Clock,           // Time indicators
  Carrot,          // Ingredients
  CookingPot,      // Method steps
  ShoppingCart,    // Shopping list
  Sun,             // Light mode
  Moon,            // Dark mode
  Calendar,        // Week view
} from '@phosphor-icons/react'

// Icon sizes (px)
const iconSizes = {
  sm: 16,    // Inline with text
  md: 20,    // Navigation items
  lg: 24,    // Feature icons
  xl: 32,    // Hero elements
}
```

### Color System (Tailwind)
```typescript
// Base colors using CSS variables for dark mode
const colors = {
  // Neutral tones
  background: {
    light: 'bg-white',
    dark: 'dark:bg-zinc-950',
  },
  surface: {
    light: 'bg-zinc-50',
    dark: 'dark:bg-zinc-900',
  },
  text: {
    primary: {
      light: 'text-zinc-900',
      dark: 'dark:text-zinc-50',
    },
    secondary: {
      light: 'text-zinc-600',
      dark: 'dark:text-zinc-400',
    },
  },

  // Accent colors (A11Y AA compliant)
  accent: {
    primary: {
      light: 'bg-emerald-600',  // Contrast ratio: 4.5:1
      dark: 'dark:bg-emerald-500', // Contrast ratio: 4.5:1
    },
    secondary: {
      light: 'bg-amber-600',
      dark: 'dark:bg-amber-500',
    },
  },

  // Semantic colors
  success: {
    light: 'text-emerald-600',
    dark: 'dark:text-emerald-400',
  },
  warning: {
    light: 'text-amber-600',
    dark: 'dark:text-amber-400',
  },
  error: {
    light: 'text-red-600',
    dark: 'dark:text-red-400',
  },
}
```

### Accessibility Standards
```typescript
// Interactive elements
const a11y = {
  // Focus states
  focus: 'focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2',

  // Touch targets
  minTouch: 'min-h-[44px] min-w-[44px]', // iOS standard

  // Text contrast (AA)
  textContrast: {
    large: 'min contrast 3:1',    // 18pt+ or 14pt+ bold
    normal: 'min contrast 4.5:1', // Body text
  },

  // Motion
  reducedMotion: 'motion-safe:transition-all motion-reduce:transition-none',
}

// Screen reader only text
const srOnly = 'sr-only'
```

### Dark Mode Implementation
```typescript
// Using Tailwind dark mode class strategy
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' for system preference
  theme: {
    extend: {
      colors: {
        // Using CSS variables for theme switching
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
      }
    }
  }
}
```