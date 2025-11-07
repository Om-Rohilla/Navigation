# 🎯 3D Adaptive Navigation Pill

> A premium 3D navigation component with photorealistic depth, smooth hover expansion, and elegant text transitions powered by Framer Motion.

[![21st.dev](https://img.shields.io/badge/21st.dev-Component-blue)](https://21st.dev/r/omrohilla6/3d-adaptive-navigation-bar)
[![Next.js](https://img.shields.io/badge/Next.js-15+-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19+-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6+-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📖 Description

The **3D Adaptive Navigation Pill** is a stunning, interactive navigation component that transforms traditional navigation into a premium tactile experience. Inspired by Apple VisionOS and modern design systems, this component features ultra-realistic 3D depth, photorealistic lighting, and fluid animations that make every interaction feel satisfying.

Built with meticulous attention to detail, it features **multi-layered shadows** for extreme depth, **engraved text effects** that look carved into the surface, and **spring-based physics** for natural, bouncy animations. The component intelligently expands on hover to reveal all navigation options, then smoothly collapses after selection—all while maintaining buttery-smooth 60fps performance.

Perfect for hero sections, floating navigation bars, landing pages, portfolios, SaaS dashboards, or any modern web application where you want to showcase premium UI craftsmanship. It's fully responsive, keyboard-accessible, and built with React, TypeScript, and Framer Motion.

---

## ✨ Features

- 🎨 **Photorealistic 3D Design** - Multi-layered shadows, gradients, and lighting effects
- ✨ **Smooth Hover Expansion** - Pill elegantly expands to reveal all navigation items
- 🎯 **Click-to-Select** - Automatically collapses after selection with smooth transitions
- 💫 **Elegant Text Morphing** - Text fades and slides with blur effects during transitions
- 🌟 **Premium Lighting** - Subtle glow pulses during text changes for tactile feedback
- 🎭 **Engraved Typography** - Text appears carved into the surface with realistic shadows
- 🚀 **GPU-Accelerated** - Butter-smooth 60fps performance with optimized animations
- 🎪 **Staggered Animations** - Navigation items appear sequentially for cinematic effect
- ♿ **Fully Accessible** - ARIA labels, keyboard navigation, screen reader support
- 📱 **Fully Responsive** - Adapts beautifully to all screen sizes
- ⚡ **Zero Config** - Drop it in and it just works
- 🔧 **TypeScript** - Fully typed with complete intellisense
- 🎭 **Spring Physics** - Natural, bouncy animations powered by Framer Motion

---

## 🎥 Preview

### Collapsed State (Default)
- Shows only the active section (e.g., "Home")
- Clean, compact pill with premium 3D depth
- Perfect for fixed navigation bars

### Hover → Expansion
- Pill smoothly expands horizontally
- All navigation items (Home | Problem | Solution | Contact) appear
- Staggered fade-in animation with 80ms delay between items
- Active item appears bold and lifted

### Click Selection → Collapse
- Smooth text transition with fade, slide, and blur
- Pill automatically collapses back to show only selected item
- Subtle lighting pulse during transition
- Spring physics for natural bounce

> 🔗 **[View Live Demo →](https://21st.dev/r/omrohilla6/3d-adaptive-navigation-bar)**

---

## 📦 Installation

Install the component directly into your project using the official 21st.dev command:

```bash
npx shadcn@latest add https://21st.dev/r/omrohilla6/3d-adaptive-navigation-bar
```

This command will:
- ✅ Automatically install all required dependencies
- ✅ Add the component files to your project
- ✅ Set up proper TypeScript types
- ✅ Configure imports and paths

---

## 🛠️ Prerequisites

Before installing, ensure your project has:

| Requirement | Version | Notes |
|------------|---------|-------|
| **Next.js** | 15+ | App Router or Pages Router |
| **React** | 19+ | Hooks and client components |
| **Tailwind CSS** | 4.0+ | For styling |
| **framer-motion** | 11+ | Animation engine |
| **TypeScript** | 5.6+ | Type safety |

> **Note:** The installation command handles dependency installation automatically via shadcn/ui.

---

## 🚀 Basic Usage

### 1. Import and Use the Component

```tsx
// app/page.tsx
import { PillBase } from '@/components/ui/component'

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <PillBase />
    </div>
  )
}
```

That's it! The component works out of the box with zero configuration.

---

## 🎯 Advanced Usage

### Fixed Navigation Bar

```tsx
// app/components/navbar.tsx
import { PillBase } from '@/components/ui/component'

export function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <PillBase />
    </nav>
  )
}
```

### Hero Section Centerpiece

```tsx
// Center in a hero section
<section className="min-h-screen flex flex-col items-center justify-center gap-12">
  <h1 className="text-6xl font-bold">Welcome</h1>
  <PillBase />
  <p className="text-lg text-gray-600">Choose your destination</p>
</section>
```

### With Custom Container

```tsx
// Add custom wrapper with drop shadow
<div className="p-8 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-screen-xl mx-auto flex justify-center">
    <PillBase />
  </div>
</div>
```

### Floating Action Navigation

```tsx
// Floating bottom-center (mobile-friendly)
<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
  <PillBase />
</div>
```

---

## 📋 API Reference

### Component Props

The `PillBase` component is designed to work out-of-the-box with sensible defaults. It manages its own state and handles all interactions internally.

| Feature | Implementation | Notes |
|---------|---------------|-------|
| **Navigation Items** | Hardcoded: Home, Problem, Solution, Contact | Customizable in source |
| **Initial State** | Collapsed, showing "Home" | Auto-managed |
| **Hover Detection** | Automatic via `onMouseEnter/Leave` | Built-in |
| **Click Handling** | Internal state management | Self-contained |
| **Animations** | Framer Motion springs | Optimized timing |
| **Styling** | Inline styles + Tailwind | Theme-ready |

### Navigation Items Structure

```tsx
const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Problem', id: 'problem' },
  { label: 'Solution', id: 'solution' },
  { label: 'Contact', id: 'contact' },
]
```

To customize, edit the `navItems` array in `component.tsx`.

---

## 🔧 How It Works

### Technical Architecture

```
┌─────────────────────────────────────┐
│   3D Adaptive Navigation Pill       │
├─────────────────────────────────────┤
│                                     │
│  1. Initial: Collapsed (Home)       │
│  2. User Hovers → Expand            │
│  3. Show All Items (Staggered)      │
│  4. User Clicks Item → Collapse     │
│  5. Text Transition (Fade/Slide)    │
│  6. Lighting Pulse Effect           │
│  7. Update Active Section           │
│                                     │
└─────────────────────────────────────┘
```

### Animation Timeline

```
Hover Event:
0ms    → Hover detected
0ms    → Pill width animates 140px → 580px
50ms   → Item 1 fades in
130ms  → Item 2 fades in  
210ms  → Item 3 fades in
290ms  → Item 4 fades in
~400ms → Expansion complete

Click Event:
0ms    → User clicks item
0ms    → Active section updates
0ms    → Lighting pulse begins
100ms  → Old text exits (fade + slide up + blur)
150ms  → New text enters (fade + slide down + sharp)
350ms  → Transition complete
400ms  → Lighting pulse ends
600ms  → Pill collapses (if hover left)
```

### Performance Optimizations

- **GPU Acceleration**: All animations use `transform` and `opacity` (compositor-only properties)
- **Spring Physics**: Optimized springs (stiffness: 220, damping: 25, mass: 1)
- **Conditional Rendering**: `AnimatePresence` with `mode="wait"` for smooth text swaps
- **No Layout Reflow**: All animations avoid triggering layout calculations
- **Reduced Motion**: Respects user motion preferences
- **Efficient Re-renders**: State managed with React hooks, minimal updates

---

## 🎨 Customization

### Changing Navigation Items

Edit the `navItems` array in `src/components/ui/component.tsx`:

```tsx
const navItems: NavItem[] = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Blog', id: 'blog' },
  { label: 'Contact', id: 'contact' },
]
```

### Adjusting Pill Dimensions

Modify the `useSpring` width values:

```tsx
// Collapsed width (default: 140px)
const pillWidth = useSpring(160, { stiffness: 220, damping: 25, mass: 1 })

// In hover handler:
pillWidth.set(620) // Expanded width (default: 580px)
```

### Customizing Colors

The pill uses a sophisticated gradient. Modify in `component.tsx`:

```tsx
background: `
  linear-gradient(135deg, 
    #ffffff 0%,      // Top-left (lightest)
    #f5f5f7 30%,     // Mid-light
    #e8e8ea 60%,     // Mid-dark
    #dcdcde 100%     // Bottom-right (darkest)
  )
`
```

### Adjusting Animation Speed

Tweak spring physics for faster/slower animations:

```tsx
// Faster (more stiff, less bounce)
const pillWidth = useSpring(140, { stiffness: 300, damping: 30, mass: 1 })

// Slower (less stiff, more bounce)
const pillWidth = useSpring(140, { stiffness: 180, damping: 20, mass: 1.2 })
```

### Text Stagger Timing

Adjust the delay between items appearing:

```tsx
transition={{ 
  delay: index * 0.08,  // Change 0.08 to 0.05 (faster) or 0.12 (slower)
  duration: 0.25,
  ease: 'easeOut'
}}
```

### Custom Text Effects

Modify the engraved text shadow in `component.tsx`:

```tsx
textShadow: `
  0 1px 0 rgba(0, 0, 0, 0.35),      // Bottom shadow (depth)
  0 -1px 0 rgba(255, 255, 255, 0.8), // Top highlight (carved)
  1px 1px 0 rgba(0, 0, 0, 0.18),     // Right shadow
  -1px 1px 0 rgba(0, 0, 0, 0.15)     // Left shadow
`
```

---

## ♿ Accessibility

The component is built with accessibility as a priority:

### Keyboard Navigation
- **Tab**: Focus between navigation items (when expanded)
- **Enter/Space**: Activate selected item
- **Escape**: Close expanded state

### Screen Readers
```tsx
<motion.button
  aria-label={`Navigate to ${item.label}`}
  role="button"
  aria-pressed={item.id === activeSection}
>
```

### Focus Indicators
- Visible focus ring on interactive elements
- High contrast focus states
- Clear hover feedback

### Motion Preferences
The component respects `prefers-reduced-motion`:
- Animations complete faster
- Spring physics toned down
- Essential transitions maintained

---

## 🐛 Troubleshooting

### Pill not expanding on hover
**Issue**: Hover doesn't trigger expansion  
**Solution**: Ensure component is rendered in client component (not server component)

```tsx
'use client' // Add this at the top of your component file
```

### Text appears blurry
**Issue**: Text looks fuzzy or has too much blur  
**Solution**: This was fixed in recent updates. Make sure you're using the latest version.

### Animations choppy
**Issue**: Laggy or stuttering animations  
**Solution**: 
1. Check browser hardware acceleration is enabled
2. Reduce number of shadow layers if needed
3. Ensure GPU acceleration is working

### TypeScript errors
**Issue**: Import path not resolving  
**Solution**: Check your `tsconfig.json` has path aliases:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Pill too wide/narrow
**Issue**: Doesn't fit your layout  
**Solution**: Adjust the width values in `useSpring`:

```tsx
const pillWidth = useSpring(120, ...) // Collapsed
pillWidth.set(500) // Expanded
```

### Missing dependencies
**Issue**: Module not found errors  
**Solution**: Manually install dependencies:

```bash
npm install framer-motion react react-dom
```

---

## 🤝 Contributing

Found a bug or have a feature request? Contributions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

MIT License - feel free to use this component in your personal or commercial projects.

---

## 🙏 Acknowledgments

- **[shadcn/ui](https://ui.shadcn.com/)** - Component infrastructure and design system
- **[21st.dev](https://21st.dev/)** - Component registry and hosting
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **Apple VisionOS** - Design inspiration for premium 3D interfaces

---

## 🔗 Links

- **[Live Demo](https://21st.dev/r/omrohilla6/3d-adaptive-navigation-bar)** - Try it yourself
- **[21st.dev Component Page](https://21st.dev/r/omrohilla6/3d-adaptive-navigation-bar)** - Official listing
- **[Installation Command](#installation)** - Quick setup
- **[Report Bug](https://github.com/yourusername/your-repo/issues)** - Issue tracker

---

<div align="center">

**Made with ❤️ for the web**

If you found this component helpful, consider giving it a ⭐ on 21st.dev!

</div>
