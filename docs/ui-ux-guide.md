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

## 📱 Key Views

### 1. Recipe Overview
```
┌─────────────────────────┐
│ Recipe Collection       │
├─────────────────────────┤
│ ┌─────┐  Recipe Name   │
│ │ IMG │  Prep: 20min   │
│ └─────┘  Cook: 30min   │
├─────────────────────────┤
│ ┌─────┐  Recipe Name   │
│ │ IMG │  Prep: 15min   │
│ └─────┘  Cook: 45min   │
└─────────────────────────┘
```

**Key Elements:**
- Large, tappable recipe cards (min 44px height)
- Quick-glance info (time, difficulty)
- Seasonal indicator if applicable
- Simple grid layout on larger screens
- Vertical scroll on mobile

### 2. Recipe Details

#### a) Ingredients Tab
```
┌─────────────────────────┐
│ Large Recipe Image      │
├─────────────────────────┤
│ Recipe Title           │
│ Prep: 20min Cook: 30min│
├─────────────────────────┤
│ [✓] Ingredients Method │
├─────────────────────────┤
│ For 2 Portions:        │
│                        │
│ □ 200g Ingredient One  │
│ □ 150g Ingredient Two  │
│ □ 3 tbsp Ingredient   │
│                        │
│ For the sauce:        │
│ □ 100ml Ingredient    │
│ □ 2 tsp Ingredient    │
└─────────────────────────┘
```

**Key Features:**
- Sticky header with image
- Clear ingredient grouping
- Checkbox for shopping use
- Measurement in Geist Mono
- Ingredients in Geist Sans
- Portion size indicator

#### b) Preparation Tab
```
┌─────────────────────────┐
│ Large Recipe Image      │
├─────────────────────────┤
│ Recipe Title           │
│ Prep: 20min Cook: 30min│
├─────────────────────────┤
│ Ingredients [✓] Method │
├─────────────────────────┤
│ 1. First step with     │
│    clear instructions  │
│                        │
│ 2. Second step with    │
│    important note      │
│    > Tip: helpful hint │
│                        │
│ 3. Third step with     │
│    timing note         │
└─────────────────────────┘
```

**Key Features:**
- Numbered steps
- Clear step separation
- Indented tips/notes
- Important info in bold
- No scrolling header

### Tab Navigation
- Sticky tabs at top
- Clear active state
- Large touch targets
- Smooth tab switching
- No complex animations

### Interaction Patterns

**Recipe Overview:**
- Tap card → Open recipe
- Scroll vertically
- No horizontal scroll
- No multi-select needed

**Ingredients:**
- Tap checkbox → Toggle state
- State persists in session
- No drag-and-drop
- No reordering needed

**Preparation:**
- Simple vertical scroll
- No step confirmation
- No timer integration
- No progress tracking

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
