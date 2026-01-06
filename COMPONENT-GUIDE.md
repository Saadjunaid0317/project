# 🎨 Component Usage Guide

Quick reference for using the newly implemented components.

---

## NavigationPill

```jsx
import NavigationPill from './components/NavigationPill';

<NavigationPill
  label="Models"
  isActive={true}
  onClick={() => handleNavClick('models')}
  href="#models"
/>
```

**States:**
- Default: Transparent background, white text
- Hover: White/15 background, scale 1.05
- Active: Dark background, semibold text
- Focus: White outline for keyboard nav

---

## CTAButton

```jsx
import CTAButton from './components/CTAButton';

// Primary variant (black button)
<CTAButton
  text="Explore Projects"
  variant="primary"
  icon={true}
  onClick={() => console.log('clicked')}
/>

// Secondary variant (transparent with border)
<CTAButton
  text="Learn More"
  variant="secondary"
  icon={false}
  onClick={() => console.log('clicked')}
/>
```

**Variants:**
- `primary` - Black background, white text
- `secondary` - Transparent, dark border

**Animation:** Arrow icon slides right 4px on hover

---

## Header

```jsx
import Header from './components/Header';

<Header />
```

**Features:**
- Automatically tracks scroll position
- Shows blur effect after 50px scroll
- Manages active navigation state
- Includes logo, navigation, contact button, settings icon

**No props needed** - fully self-contained

---

## GlassCard

```jsx
import GlassCard from './components/GlassCard';

<GlassCard
  title="Modern Architecture"
  description="Experience the perfect blend of form and function."
  buttonText="Explore Projects"
  gridArea="card1"
  onButtonClick={() => navigate('/projects')}
/>
```

**Perfect for:**
- Feature cards
- Service descriptions
- Call-to-action sections
- Content overlays

**Includes:** Glass morphism effect, backdrop blur, integrated CTA button

---

## ImageCard

```jsx
import ImageCard from './components/ImageCard';

// Simple image card
<ImageCard
  image="/images/hero-stairs.jpg"
  gridArea="img1"
  alt="Modern staircase design"
/>

// With glass overlay
<ImageCard
  image="/images/hero-pool.jpg"
  gridArea="img2"
  hasGlassOverlay={true}
  overlayContent={{
    title: "Pool House",
    description: "Serene outdoor living space"
  }}
  alt="Contemporary pool design"
/>
```

**Features:**
- Lazy loading
- Hover zoom effect (scale 1.1)
- Dark overlay on hover
- Optional glass overlay with content
- Loading skeleton

---

## Grid Layout Example

```jsx
<div className="grid grid-cols-3 gap-6">
  <GlassCard
    title="Design"
    description="..."
    buttonText="View"
    gridArea="card1"
  />
  
  <ImageCard
    image="/images/project1.jpg"
    gridArea="img1"
  />
  
  <GlassCard
    title="Build"
    description="..."
    buttonText="Learn More"
    gridArea="card2"
  />
</div>
```

---

## Animation Tips

All components use Framer Motion for smooth animations:

- **Header:** Slides in from top on mount
- **NavigationPill:** Scale on hover/tap
- **CTAButton:** Scale + arrow animation
- **GlassCard:** Fade in with variants
- **ImageCard:** Hover zoom + overlay fade

**Performance:** All animations optimized for 60fps

---

## Accessibility

All components include:
- ✓ Proper ARIA labels
- ✓ Keyboard navigation support
- ✓ Focus-visible indicators
- ✓ Semantic HTML
- ✓ Screen reader friendly

---

## Responsive Design

Components automatically adapt:
- Desktop (1440px+): Full layout
- Tablet (768px): Adjusted spacing
- Mobile (375px): Stacked layout

Use Tailwind responsive classes for custom layouts:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

## Color Variants

Components use the design system colors:

**From Tailwind Config:**
- `bg-dark-900` - #1A1A1A
- `bg-dark-800` - #2D2D2D
- `text-white` - #FFFFFF
- `bg-white/10` - Glass effect
- `border-white/20` - Glass border

**Gradient:**
- `gradient-primary` - Orange to Coral

---

## Best Practices

1. **Always provide alt text** for ImageCard
2. **Use meaningful button text** for CTAButton
3. **Track active state** in Header navigation
4. **Provide onClick handlers** for interactive elements
5. **Use grid areas** for complex layouts
6. **Test keyboard navigation** for accessibility

---

## Common Patterns

### Feature Section
```jsx
<section className="grid grid-cols-3 gap-6">
  {features.map(feature => (
    <GlassCard
      key={feature.id}
      title={feature.title}
      description={feature.description}
      buttonText="Learn More"
      onButtonClick={() => handleClick(feature.id)}
    />
  ))}
</section>
```

### Image Gallery
```jsx
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  {images.map(img => (
    <ImageCard
      key={img.id}
      image={img.src}
      alt={img.alt}
    />
  ))}
</div>
```

### Mixed Content Grid
```jsx
<div className="grid grid-cols-3 gap-6">
  <ImageCard image="/img1.jpg" />
  <GlassCard title="Feature" description="..." buttonText="View" />
  <ImageCard image="/img2.jpg" />
</div>
```

---

**All components are production-ready and fully tested!** 🚀
