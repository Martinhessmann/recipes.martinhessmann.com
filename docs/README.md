# Seasonal Meal Planner App

A modern, mobile-first web app for two adults in Berlin, Germany, delivering healthy, vegetarian, and seasonal recipes throughout the year. The app is designed for easy self-hosting, touch-optimized navigation, and a delightful, practical user experience.

---

## ✨ Features

- **Seasonal Meal Calendar:**
  Browse and plan meals by week or month, with recipes tailored to local, seasonal German produce and WHO dietary guidelines.

- **Recipe Delivery:**
  Each recipe includes:
  - Ingredients list (with icons and quantities)
  - Step-by-step preparation instructions
  - Cooking/prep time, difficulty, and batch-cooking tips
  - Icons for dietary notes (e.g., nut-free, histamine-safe, make-ahead)

- **Shopping List Generator:**
  - Add recipes to your plan and auto-generate a consolidated shopping list.
  - Check off items as you shop.
  - Mobile-optimized for in-store use.

- **Preparation Tab:**
  - Focused, step-by-step cooking mode for each recipe.
  - Highlight make-ahead and batch-cooking steps.
  - Visual cues for timing, texture, and flavor-building.

- **Modern Calendar Overview:**
  - Visual meal planner with drag-and-drop or tap-to-assign recipes.
  - Color-coded by meal type (breakfast, lunch, dinner).
  - Icons for leftovers, prep-ahead, and special dietary notes.

- **Touch-Optimized UI:**
  - Large tap targets, swipe navigation, and mobile-friendly layouts.
  - Clean, modern design with clear typography and vibrant seasonal colors.
  - Support for dark mode and accessibility best practices.

- **Extensible Data Model:**
  - Recipes are stored in clear, editable JSON files.
  - Calendar and recipe data are decoupled for flexibility.
  - Users can give feedback or suggest recipe tweaks (future feature).

---

## 🛠️ Tech Stack

- **Frontend:** ReactJS, NextJS (App Router), TypeScript, TailwindCSS
- **State Management:** React Context or Zustand (for simplicity)
- **Data:** Local JSON files (for recipes, user profiles, produce calendar)
- **Hosting:** Self-hosted (e.g., Vercel)
- **No backend required** for v1 (all data is static or client-side)
- **Feedback**: Future versions may support GitHub issues, Sentry, or a simple feedback database for recipe suggestions.

---

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies:**
   `npm install`
3. **Run locally:**
   `npm run dev`
4. **Open on your mobile device:**
   Access via your local network or deploy to your preferred host.

---

## 📁 Project Structure

```
src/
├── app/             # Next.js App Router pages (Home, Calendar, Recipe, ShoppingList, etc.)
├── components/      # UI and feature components (RecipeCard, Calendar, ShoppingList, etc.)
│   ├── ui/          # Reusable UI primitives
│   └── features/    # Feature-specific components
├── data/            # JSON files for recipes, user profiles, produce calendar
├── lib/             # Helper functions (seasonality, shopping list aggregation, etc.)
├── types/           # TypeScript types/interfaces
├── styles/          # TailwindCSS config and global styles
└── hooks/           # Custom React hooks
```

---

## 🎨 Design System

### Typography
We use [Geist](https://vercel.com/font) by Vercel for its excellent readability and modern feel:
```css
/* Main UI elements */
font-family: 'Geist Sans', -apple-system, sans-serif;

/* Measurements & timing */
font-family: 'Geist Mono', monospace;
```

### Icons
[Phosphor Icons](https://phosphoricons.com) for consistent, minimal iconography:
```typescript
import {
  Clock,           // Timing
  Carrot,          // Ingredients
  CookingPot,      // Cooking
  ShoppingCart,    // Shopping
  Calendar,        // Planning
} from '@phosphor-icons/react'
```

### Colors
TailwindCSS with dark mode support:
```typescript
// Core palette
colors: {
  primary: 'emerald',    // Health, freshness
  secondary: 'amber',    // Warmth, cooking
  neutral: 'zinc',       // Clean, modern UI
}

// Dark mode strategy
darkMode: 'class'
```

### Accessibility
- WCAG AA compliant (minimum contrast 4.5:1)
- Minimum touch targets: 44x44px
- Reduced motion support
- Screen reader optimized

---

## 🧑‍🍳 Recipe & Meal Planning Philosophy

- **Vegetarian, egg-free, and dairy-milk-free by default**
- **Seasonal and local produce prioritized**
- **WHO healthy diet guidelines considered over the week**
- **Batch-cooking and meal-prep friendly**
- **Ottolenghi-inspired, globally-influenced, and flavor-forward**
- **Manual recipe curation for quality and safety**

---

## 🛒 How to Add Recipes

- Add new recipes as JSON files in `/src/data/recipes`
- Each recipe should include:
  - Title, description, ingredients (with quantities and icons), steps, prep/cook time, tags (e.g., nut-free, make-ahead), and seasonality info

---

## 📅 Future Roadmap

- AI-powered recipe suggestions and meal planning
- User accounts and personalized dietary profiles
- Automated shopping list syncing (e.g., with grocery apps)
- Push notifications for meal prep reminders
- Community recipe sharing

---

## 🤝 Contributing

Pull requests and suggestions are welcome! Please ensure recipes and features align with the project's dietary and UX philosophy.