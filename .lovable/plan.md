## Problem

`src/components/Footer.tsx` has invalid JSX that will fail to compile:

1. The `<motion.a href="#home">` opening tag is never closed and has no children (no logo image inside).
2. There is a stray `</p>` near the end with no matching opening `<p>` tag.

This breaks the build with a JSX parse error.

## Fix

Rewrite the Footer's inner markup to be valid JSX:

- Restore the logo link: wrap the imported `logo` in an `<img>` inside the `<motion.a href="#home">`, and close the `<motion.a>` properly.
- Remove the stray `</p>`.
- Keep the existing social links block exactly as-is.
- Optionally add a small copyright line (`© {year} Muhammed Rasal`) where the broken `</p>` used to be, so the footer still has the centered text it was clearly meant to have.

## Result

- Build error resolved.
- Footer renders: logo on the left, social icons on the right (stacked on mobile), with a small copyright line.
- No other files touched.
