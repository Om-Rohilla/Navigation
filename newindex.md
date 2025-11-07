# Fixed index.css for Tailwind CSS v4

Copy and paste this code into your `src/index.css` file:

```css
/* Tailwind CSS v4 - Base Configuration */
@import "tailwindcss";

/* Global Reset and Base Styles */
@layer base {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ffffff;
    color: #1a1a1a;
  }

  /* Remove default button styles */
  button {
    font-family: inherit;
    cursor: pointer;
  }
}

/* Custom Utilities */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## Alternative: Minimal Version (If you want even simpler)

```css
@import "tailwindcss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #ffffff;
  color: #1a1a1a;
}

button {
  font-family: inherit;
  cursor: pointer;
}
```

---

## What I Fixed:

1. **Removed complex theme variables** - Your component doesn't need them
2. **Removed `tw-animate-css`** - Not needed for your pill component
3. **Removed `@custom-variant`** - Not necessary for this component
4. **Removed `@theme inline`** - Simplified to basic Tailwind v4
5. **Kept essential base styles** - Reset, font smoothing, and basic typography
6. **Clean and simple** - Just what you need for 21st.dev

---

## Instructions:

1. Copy either version above (I recommend the first one)
2. Replace everything in `src/index.css` with the new code
3. Save the file
4. Restart your dev server (`npm run dev`)

This will fix any Tailwind v4 compatibility issues and remove the black border artifacts!

