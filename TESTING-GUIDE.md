# 🧪 TESTING GUIDE - WESTIE LANDING PAGE

## 📋 Pre-Launch Testing Checklist

Use this guide to verify everything works perfectly before deployment.

---

## 1️⃣ **VISUAL TESTING**

### Desktop (1440px)
```
□ Open browser at 1440px width
□ Verify bento-box grid displays correctly
□ Check headline overlays stairs image
□ Confirm red accent square visible
□ Verify pool image spans full height on right
□ Check glass card positioned correctly
□ Ensure all spacing matches (24px gaps)
□ Verify gradient background smooth
```

### Tablet (768px)
```
□ Resize browser to 768px
□ Check 2-column grid layout
□ Verify headline scales to 64px
□ Confirm images stack properly
□ Check glass card renders correctly
□ Ensure padding adjusts to 40px
□ Verify gaps reduce to 20px
```

### Mobile (375px)
```
□ Resize to 375px (iPhone SE)
□ Verify single column vertical stack
□ Check headline scales to 48px
□ Confirm all elements visible
□ Ensure padding adjusts to 24px
□ Verify gaps reduce to 16px
□ Check touch targets minimum 44px
```

---

## 2️⃣ **FUNCTIONALITY TESTING**

### Header Navigation
```
□ Click each navigation pill
□ Verify active state changes
□ Check hover effects smooth
□ Confirm scale animations work
□ Test "Contact Us" button
□ Hover settings icon (should rotate)
□ Scroll down - blur effect activates at 50px
```

### Hero Section
```
□ Hover over image cards
□ Verify zoom effect (scale 1.1)
□ Check dark overlay appears
□ Click "Explore our homes" button
□ Verify console logs click
□ Check glass overlay on pool image
□ Ensure all text readable
```

### Animations
```
□ Refresh page
□ Watch headline reveal animation
□ Check stagger effect on grid items
□ Verify smooth 60fps animations
□ Test button hover effects
□ Check arrow animation in CTA
□ Ensure no animation jank
```

---

## 3️⃣ **ACCESSIBILITY TESTING**

### Keyboard Navigation
```
1. Press Tab key
   □ Skip link appears and is focused
2. Press Enter on skip link
   □ Focus jumps to main content
3. Continue tabbing
   □ All navigation pills focusable
   □ Focus order logical (left to right)
   □ Contact button focusable
   □ Settings button focusable
   □ CTA buttons in hero focusable
4. Check focus indicators
   □ Visible 2px outline
   □ Proper contrast
   □ Offset 2px from element
```

### Screen Reader Testing

**Using NVDA (Windows) or VoiceOver (Mac):**

```
□ Turn on screen reader
□ Navigate to page
□ Verify skip link announced
□ Check "Main navigation" landmark
□ Confirm all nav items readable
□ Verify "Main" landmark
□ Check heading hierarchy (H1 only)
□ Confirm all images have alt text
□ Verify buttons have labels
□ Check glass card content readable
```

### Color Contrast
```
□ Check headline on gradient: #1A1A1A on #FF4500
□ Verify white text on dark: #FFFFFF on #1A1A1A
□ Check glass card text: #1A1A1A / #2D2D2D on rgba(255,255,255,0.1)
□ Use browser DevTools > Accessibility > Contrast
□ Aim for WCAG AA minimum (4.5:1 for text)
```

---

## 4️⃣ **RESPONSIVE TESTING**

### Common Breakpoints
```
□ 375px - iPhone SE
□ 390px - iPhone 12/13 Pro
□ 414px - iPhone Pro Max
□ 768px - iPad Portrait
□ 1024px - iPad Landscape / Small Desktop
□ 1280px - Desktop
□ 1440px - Large Desktop (design base)
□ 1920px - Full HD
```

### Orientation Testing
```
□ Portrait mode (mobile/tablet)
□ Landscape mode (mobile/tablet)
□ Verify no horizontal scroll
□ Check all content visible
□ Ensure touch targets adequate
```

### useMediaQuery Hook
```
□ Open React DevTools
□ Check state changes at breakpoints
□ Verify correct layout renders
□ Ensure no flash of wrong layout
```

---

## 5️⃣ **BROWSER TESTING**

### Desktop Browsers
```
Chrome (Latest)
  □ Layout correct
  □ Animations smooth
  □ No console errors
  □ Gradients render

Firefox (Latest)
  □ Layout correct
  □ Animations smooth
  □ No console errors
  □ Backdrop blur works

Safari (Latest)
  □ Layout correct
  □ Animations smooth
  □ No console errors
  □ Webkit prefixes working

Edge (Latest)
  □ Layout correct
  □ Animations smooth
  □ No console errors
  □ All features functional
```

### Mobile Browsers
```
Safari iOS
  □ Touch interactions work
  □ Animations smooth
  □ No layout issues
  □ Pinch zoom works

Chrome Android
  □ Touch interactions work
  □ Animations smooth
  □ No layout issues
  □ Swipe gestures work
```

---

## 6️⃣ **PERFORMANCE TESTING**

### Lighthouse Audit
```
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Select "Desktop" or "Mobile"
4. Click "Analyze page load"

Target Scores:
□ Performance: 90+
□ Accessibility: 95+
□ Best Practices: 95+
□ SEO: 90+
```

### Load Time
```
□ First Contentful Paint < 1.5s
□ Largest Contentful Paint < 2.5s
□ Time to Interactive < 3.5s
□ Cumulative Layout Shift < 0.1
□ Total Blocking Time < 200ms
```

### Bundle Size
```
□ CSS (gzipped): < 5 kB ✓ (3.73 kB)
□ JS (gzipped): < 150 kB ✓ (103.79 kB)
□ Images optimized (< 200 kB each)
□ Total page weight < 500 kB
```

### Network Testing
```
□ Fast 3G - Page usable
□ Slow 3G - Content visible
□ Offline - Error message
□ Images lazy load
□ No unnecessary requests
```

---

## 7️⃣ **IMAGE TESTING**

### Placeholder Images
```
□ hero-stairs.jpg loads
□ hero-pool.jpg loads
□ hero-small.jpg loads
□ logo.svg loads
□ Alt text present
□ Lazy loading works
□ No broken images
```

### Production Images (When Added)
```
□ Optimize with ImageOptim/TinyPNG
□ Use WebP format with JPG fallback
□ Max file size 200 kB each
□ Proper aspect ratios
□ High quality (no pixelation)
□ Alt text descriptive
```

---

## 8️⃣ **ERROR TESTING**

### Console Errors
```
□ Open DevTools Console
□ Refresh page
□ Check for errors (should be 0)
□ Check for warnings
□ Verify no 404s in Network tab
```

### Build Errors
```
bash
npm run build

□ Build completes successfully
□ No TypeScript errors
□ No React warnings
□ Assets copied correctly
```

### Runtime Errors
```
□ Click all interactive elements
□ Resize window repeatedly
□ Scroll up and down
□ Hover all hover states
□ No errors thrown
```

---

## 9️⃣ **CONTENT VERIFICATION**

### Text Content
```
□ Headline: "DESIGNING SPACES FOR MODERN LIFE"
□ Subheading: "At Westie, we design homes..."
□ Description accurate
□ CTA text: "Explore our homes"
□ Navigation items correct
□ No typos
□ Proper capitalization
```

### Design System
```
□ Colors match specification
  - Primary Orange: #FF4500
  - Primary Coral: #FF6B35
  - Accent Red: #E63946
  - Dark: #1A1A1A, #2D2D2D
□ Font: Inter loaded correctly
□ Font sizes match spec
□ Spacing consistent
```

---

## 🔟 **FINAL CHECKS**

### Pre-Deployment
```
□ All tests passing
□ No console errors
□ No build warnings
□ README.md updated
□ Environment variables set
□ Analytics configured (if applicable)
□ Error tracking setup (if applicable)
□ Favicons generated
□ Meta tags complete
□ Social media cards configured
```

### Post-Deployment
```
□ Production URL loads
□ SSL certificate valid
□ All assets loading
□ No mixed content warnings
□ Analytics tracking
□ Forms submitting (if applicable)
□ Contact info correct
□ Footer links work (when added)
```

---

## 🐛 **COMMON ISSUES & FIXES**

### Issue: Images not loading
```
Fix: Check file paths are correct
- Should be /images/filename.jpg (not ./images/)
- Verify files in public/images/ folder
- Clear browser cache
```

### Issue: Layout breaks at certain width
```
Fix: Check media query breakpoints
- Verify useMediaQuery hook
- Check Tailwind responsive classes
- Test exact breakpoint values
```

### Issue: Animations janky
```
Fix: Use hardware acceleration
- Add will-change property
- Use transform instead of position
- Reduce animation complexity
```

### Issue: Skip link not visible on focus
```
Fix: Check CSS specificity
- Ensure .sr-only has correct styles
- Verify :focus styles override
- Test with keyboard navigation
```

---

## ✅ **TEST COMPLETION SIGN-OFF**

Date: ______________

Tested By: ______________

Browser Versions:
- Chrome: ______________
- Firefox: ______________
- Safari: ______________
- Edge: ______________

Device Testing:
- Desktop: ☐
- Tablet: ☐
- Mobile: ☐

All Tests Passed: ☐ YES  ☐ NO

Notes:
_________________________________
_________________________________
_________________________________

---

**Once all tests pass, you're ready to deploy!** 🚀
