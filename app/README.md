# Portfolio

> Fork of my [react-boilerplate](https://github.com/Chain52/react-boilerplate) repository.

This archived project was an attempt to build a personal portfolio site. The initial aim was to showcase frontend skills through cool visuals and animations, but due to its lack of maintenance and obsolescence, a new [portfolio project](https://github.com/Chain52/portfolio-client) has been started in its place.

The codebase demonstrates basic familiarity with React, client-side routing, and frontend animations, but lacks meaningful state management and a clean modular structure. Redux was configured but unused, and numerous libraries were added without a thorough evaluation of their necessity or long-term maintainability.

---

## Project Overview
```yaml
public/:                # Static assets and HTML entry point
src/:                   # Application source code
  components/:
    elements/:          # Small, reusable presentational components
    sections/:          # Larger, single-use components tied to specific layout sections
  pages/:               # Top-level pages routed through React Router
  redux/:               # Redux store configuration (not utilized)
  router.js:            # Root component with routing logic
  index.js:             # Main entry point that renders the app
```

### Techniques

- [Component-Based Architecture](https://reactjs.org/docs/components-and-props.html): Modular structure using presentational and section-based components.
- [Scroll-Triggered Animation](https://www.npmjs.com/package/react-animate-on-scroll): Entry animations triggered by viewport events.
- [Typed Effects](https://www.npmjs.com/package/react-typed): Simulated typewriter effect for attention-grabbing text.
- [Scroll Anchoring](https://www.npmjs.com/package/react-scroll): Smooth in-page navigation via hash scrolling.
- [Cursor Tracking](https://www.npmjs.com/package/react-cursor-position): Captures and utilizes cursor movement across the screen.
- [Number Animation](https://www.npmjs.com/package/react-countup): Animated counters for visualizing numeric stats.

## Retrospective Notes

This project was built during an early phase in learning modern React development. Some important takeaways I've gained through review include:

- Using primarily **Bootstrap** over `styled-components` was a step backward in terms of maintainable, themeable UI development.
- **Redux** was included but never utilized, highlighting a tendency to over-engineer without a thorough understanding.
- **Recognition**: The site appears to use some template without maintaining attribution to the original author, which is not acceptable.
- **Component design** lacked modularity; Components are long, unstructured, and hard to read.
- **Dependency bloat**: Although the overall count of dependencies was not excessive, a clear pattern of utilizing obscure dependencies without considering their actual need was evident. Many animations and visual effects could have been developed to demonstrate understanding and skill in design, or a single popular library like [Motion](https://motion.dev/) should have been utilized for these effects to reduce dependency bloat without reinventing the wheel.

In hindsight, this portfolio is more of a learning artifact than a showcase. Its flashy style may have done more to distract than inform, and modern portfolio sites benefit from intentional design, meaningful interactivity, and lean dependency use.

---

## Installation

> ⚠️ This repository is archived and no longer maintained. These instructions are provided for historical reference.

### Prerequisites

- [git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (v10 or later)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) or [npm](https://www.npmjs.com/)

### Setup

```bash
git clone https://github.com/Chain52/portfolio.git
cd portfolio
# npm
npm install

# yarn
yarn install
```

To start the development server:

```bash
# npm
npm run dev

# yarn
yarn run dev
```

---

## Acknowledgements

As stated in the **Retrospective Notes**, it appears that a template, whose original author was lost to a lack of attribution at the time, was used for the general layout of the site. Should I find the author, I will posthumously attribute them here.
