# SpendWise Dashboard Shell

A clean, responsive personal finance dashboard built as the foundation for the SpendWise capstone project.

Author: Edward Clebason
Repo: https://github.com/Clebason/spendwise_dashboard-

## What I Built
Modern dashboard interface with:
- Sidebar navigation menu
- Header with search and profile
- Stats overview row (Total Balance, Monthly Spend, Saved)
- 6 category cards with realistic KES amounts: Food, Transport, Rent, Entertainment, Savings, Utilities
- Progress bars and trend badges

## Structure Explanation

### index.html
- Uses semantic HTML: aside for sidebar, header, main, article for cards
- Main container .dashboard holds 3 areas
- Cards use tabindex="0" for keyboard focus accessibility

### style.css

1. CSS Custom Properties (Theme):
Defined on :root - brand-color #4F46E5, accent-color, surface-color, card-bg, text-primary, text-secondary. Used consistently throughout stylesheet.

2. Layout Techniques:
- CSS Grid for overall page: grid-template-columns 260px 1fr and grid-template-areas sidebar header main
- Cards Grid: repeat(3, 1fr)
- Flexbox inside header (space-between), sidebar-nav (column), card-top, search-box, profile, stats-row

3. Responsive Design:
- Media query @media (max-width: 768px) collapses layout to single column
- grid-template-columns becomes 1fr
- Sidebar moves to bottom, cards become 1 column, header stacks
- Verified using DevTools Device Toolbar

4. Micro-interactions:
- Cards have transition: transform 200ms ease, box-shadow 200ms ease
- On hover and focus: transform translateY(-4px) + larger shadow + border-color brand
- Duration is less than 250ms as required

5. Dark Theme (Stretch Goal):
- @media (prefers-color-scheme: dark) overrides only :root variables, no duplication of styles

## How to Run
Open index.html in browser. No JavaScript needed.

## Submission
GitHub Link: https://github.com/Clebason/spendwise_dashboard-
Contains index.html, style.css, README.md
