

# Use Cases Section Redesign

## The Problem
The current section has 6 cards, each with:
- Title + icon
- A "moment" paragraph
- A nested "How SafeCheck helps" box with more text

This creates visual fatigue - too many words competing for attention.

---

## The Solution: Visual-First "Journey Map" Layout

A modern, scannable design that uses **illustration placeholders** as the hero element, with minimal supporting text.

### New Layout Concept

**Option A: Horizontal Scroll Timeline (Recommended)**
A single horizontal scrollable row with 6 scenario "scenes" - each featuring a large illustration placeholder with just a title overlay. Think Apple product pages or Spotify's genre cards.

```text
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   "Backup for the moments you don't overthink"                     │
│                                                                     │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  →        │
│   │          │  │          │  │          │  │          │           │
│   │ [ILLUS]  │  │ [ILLUS]  │  │ [ILLUS]  │ [ILLUS]  │           │
│   │          │  │          │  │          │  │          │           │
│   │ Late     │  │ Gym      │  │ Date     │  │ Rideshare│           │
│   │ commute  │  │ session  │  │ night    │  │          │           │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Card Design (Simplified)
Each card becomes a tall "scene card":
- **Large illustration placeholder** (70% of card height) - rounded, soft gradient background
- **Title only** - bold, 2-3 words max
- **No description text** - the illustration tells the story
- Subtle hover effect with slight scale

### Illustration Placeholders to Create

You'll need **6 minimal, line-art style illustrations** in the calm, Apple-inspired aesthetic:

| # | Scene | Illustration Brief |
|---|-------|---------------------|
| 1 | **Late-night commute** | Person walking under streetlights or moon, headphones on, relaxed posture |
| 2 | **Gym session** | Person mid-workout (yoga mat, weights, or treadmill), phone in locker implied |
| 3 | **Date night** | Two people at a cafe/restaurant table, warm ambient lighting, subtle |
| 4 | **Rideshare** | Person in back seat of car, city buildings passing by window |
| 5 | **Walking home** | Person on a quiet residential street, house silhouettes, peaceful night |
| 6 | **Quick errand** | Person at a coffee shop counter or grocery store, casual/quick vibe |

**Style notes for illustrations:**
- Thin line art or flat minimal style (think Notion, Linear, or Apple's illustration style)
- Soft sage/teal (#5EADA4) as accent color with neutral grays
- Gender-neutral, diverse figures
- Calm body language (no running, no panic)
- Consistent dimensions: ~400x500px, transparent or soft gradient background

---

## Technical Changes

### Files Modified
- `src/components/landing/UseCases.tsx` - Complete redesign

### New Features
1. **Horizontal scroll container** with snap points
2. **Scene cards** with illustration placeholders (labeled for your designer)
3. **Scroll indicators** (dots or fade hints on edges)
4. **Reduced to 5 items** (combine "Walking home" + "Quick errand" into one simpler concept, or keep all 6 if preferred)

### Responsive Behavior
- **Desktop**: Horizontal scroll, 4 cards visible
- **Tablet**: 2.5 cards visible, encourages scroll
- **Mobile**: 1.5 cards visible, full swipe experience

---

## Code Structure Preview

```tsx
// Simplified card - visual-first
const SceneCard = ({ title, illustrationLabel }) => (
  <div className="min-w-[280px] h-[360px] rounded-3xl overflow-hidden relative group">
    {/* Illustration placeholder */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/15 flex items-center justify-center">
      <div className="text-center p-6">
        <div className="w-32 h-32 mx-auto mb-4 rounded-2xl border-2 border-dashed border-primary/30 flex items-center justify-center">
          <span className="text-xs text-muted-foreground">{illustrationLabel}</span>
        </div>
      </div>
    </div>
    
    {/* Title overlay at bottom */}
    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background/90">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  </div>
);
```

---

## Summary

| Before | After |
|--------|-------|
| 6 text-heavy cards | 6 visual scene cards |
| Title + 2 paragraphs each | Title only (illustrations speak) |
| Static grid layout | Horizontal scroll with snap |
| No illustrations | Placeholder frames for custom art |

This creates an Apple-style "moments" gallery that's scannable, modern, and invites the eye to explore rather than read.

