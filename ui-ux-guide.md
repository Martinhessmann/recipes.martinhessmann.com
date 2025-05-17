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

---

This MVP brief focuses on essential features that can be implemented with browser-state only, providing a solid foundation for future enhancements based on user feedback.