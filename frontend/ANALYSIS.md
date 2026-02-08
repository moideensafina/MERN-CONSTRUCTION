# Phase 1: Deep Code Analysis

## 1. Codebase Overview
- **Tech Stack**: React 19, Redux Toolkit, React Router v7, Bootstrap (unused/mixed).
- **Structure**: Monolithic components (`Home.js`, `Service.js`) containing mixed structure, style classes, and massive inline SVGs.
- **Styling**: Single `App.css` (1000+ lines) with global scope. Hard to maintain. Naming conventions are obscure (`--cl--1--`).
- **State Management**: Redux is set up for `user` and `project` state.

## 2. Issues Identified

### A. Component Structure
- **Monoliths**: `Home.js` is 366 lines, largely due to inline SVGs. `Service.js` is similar.
- **Hardcoding**: Content (text, massive SVGs) is hardcoded inside components instead of being data-driven or imported.
- **Duplication**: Repeated patterns for "Service Cards" and "Project Cards" that should be reusable components.

### B. Styling & Design
- **Global CSS Pollution**: `App.css` targets generic classes like `.home`, `.service`, making them prone to conflicts.
- **Outdated Aesthetics**:
  - Heavy, dark shadows (`box-shadow: 0px 0px 37px -2px...`).
  - Rigid grid layouts with fixed gaps.
  - Generic typography scaling.
- **Responsiveness**: Handled via bottom-of-file `@media` queries. Some elements have fixed widths (`width: 550px`), breaking on mid-sized screens.
- **Color Variables**: Non-semantic names (`--cl--3--` instead of `--primary-color`).

### C. UX & Accessibility
- **Navigation**: The mobile menu implementation in `Header.js` is manual and somewhat clunky.
- **Feedback**: Loading states exist (`Loader`) but transitions are abrupt.
- **Interactivity**: Buttons are sometimes links, sometimes buttons. Hover effects are basic color swaps.

## 3. Modernization Strategy (Phase 2 & 3)

### Refactoring Plan
1.  **Extract SVGs**: Move all inline SVGs to `components/icons` or use a library like `lucide-react`.
2.  **Atomic Components**: Create `Button`, `Section`, `Card`, `Typography` components.
3.  **Design System**:
    -   **Colors**: Define semantic palette (Primary, Secondary, Surface, Text).
    -   **Typography**: Use a fluid type scale.
    -   **Spacing**: Use a coherent spacing unit (e.g., 4px base).
4.  **Router Upgrade**: Ensure `react-router-dom` usage is up to date (already v7, which is good).

### Visual Direction
-   **Theme**: "Modern Industrial". Deep Navy, Safety Orange accents, Clean White/Gray backgrounds.
-   **Typography**: `Archivo Black` for headlines (keep), `Inter` or `Manrope` for body.
-   **Motion**: Framer Motion for scroll reveals and smooth interactions.

---
**Ready to proceed to Phase 2: Design System Setup.**
