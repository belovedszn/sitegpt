# PRD.md — Plinth Marketing Website Reconstruction

## 1. Product Requirements Document

### Product name

Plinth

### Product category

Recurring payments / billing infrastructure

### Primary market

Nigeria

### Primary technical audience

- SaaS founders
- engineering teams
- product teams
- businesses with recurring revenue
- developers integrating billing infrastructure

### Primary website goal

Convert qualified visitors into:

1. demo requests;
2. product exploration;
3. developer adoption;
4. dashboard/app visits;
5. trust in the infrastructure.

The site must communicate that Plinth is infrastructure rather than a superficial payment UI.

---

# 2. Product Narrative

## Core statement

Plinth is the base that recurring billing stands on.

## Supporting proposition

Plinth handles:

- subscriptions
- recurring billing
- invoices
- dunning
- payment recovery
- transfer reconciliation
- virtual accounts
- entitlements
- notifications
- outbound webhooks
- billing policies

## Local differentiation

The product is designed around how Nigeria actually pays.

The website should therefore visually communicate:

- local payment behavior
- transfer-first workflows
- Nigerian infrastructure
- reliability
- reconciliation
- operational depth

---

# 3. Target User Journey

## Journey A — Business decision maker

```text
Landing
  ↓
Hero understands positioning
  ↓
Problem recognizes payment failure/reconciliation pain
  ↓
Billing engine demonstrates sophistication
  ↓
Accounts explains operational solution
  ↓
Nigeria Pays establishes local fit
  ↓
Trust reduces risk
  ↓
Pricing clarifies commercial path
  ↓
CTA
```

## Journey B — Developer

```text
Landing
  ↓
Infrastructure metaphor
  ↓
Billing engine
  ↓
How it works
  ↓
Developers/API
  ↓
Entitlements/code panel
  ↓
Docs
  ↓
Start building
```

## Journey C — Curious visitor

```text
Hero
↓
3D scene
↓
scroll exploration
↓
interactive bronze artifacts
↓
micro-interactions
↓
FAQ
↓
CTA
```

---

# 4. Page Requirements

## PR-001 — Hero

The system shall display:

- Plinth brand
- navigation
- Start building CTA
- primary headline
- supporting statement
- Schedule a demo CTA
- Watch a video CTA
- 3D bridge
- Danfo
- road branding

The hero shall occupy approximately one viewport.

### Acceptance criteria

- headline is immediately readable over the 3D scene;
- navigation remains usable;
- CTAs remain clickable;
- 3D does not intercept pointer events outside intended interactions;
- mobile remains legible;
- unsupported WebGL gets a static fallback.

---

# 5. PR-002 — Hero 3D

The system shall render a procedural bridge using React Three Fiber.

It shall contain:

- pylon
- road
- lane markings
- rails
- barriers
- lamps
- sky/atmosphere
- road branding

The scene shall include the Danfo GLB.

### Acceptance criteria

- scene loads client-side;
- camera composition matches reference;
- bus sits physically on the road;
- scene is visually stable during scroll;
- reduced-motion state does not create unnecessary motion;
- WebGL errors do not break the page.

---

# 6. PR-003 — Video Modal

The Watch a video action shall open a modal.

Requirements:

- modal backdrop
- video iframe
- privacy-enhanced YouTube host
- close control
- keyboard close
- accessible focus behavior
- responsive video sizing

---

# 7. PR-004 — Problem Story

The problem story shall communicate three problems:

```text
Charges fail
Reconciled by hand
Slips away
```

Each problem receives:

- number
- title
- short description
- animated media

Animation assets:

```text
card-fail.lottie
reconciled-coding.riv
losing.riv
```

---

# 8. PR-005 — Immersive Billing Engine

This is a mandatory flagship interaction.

Desktop section:

```text
height ≈ 500vh
```

One scroll progress value controls the complete act.

## Timeline

```text
0.00–0.16
problem stage

0.16–0.30
bronze artifacts fade in

0.30–0.42
problem content fades out

0.42–0.68
bronze artifacts move/rotate apart

0.44–0.64
background transitions dark → bone

0.64–0.96
subscriptions content rises
```

The user should perceive this as one continuous cinematic sequence.

---

# 9. PR-006 — Bronze Models

The scene shall load eight models:

```text
Benin Bronze Mask
Benin Bronze Head
Igbo-Ukwu Casting
Nok Terracotta
Ife Bronze Head
Benin Leopard Mask
Benin Bronze Leopard
Nok Terracotta Head
```

Each model must support configuration-driven:

- source
- name
- description
- base position
- scale
- initial rotation
- parallax movement
- rotation delta
- exit/parting offset

Do not hardcode eight independent JSX transform implementations.

---

# 10. PR-007 — Bronze Interaction

On hover:

- identify object
- show tooltip
- increase scale subtly
- rotate slowly

On pointer drag:

- rotate object around Y
- preserve accumulated rotation

On mobile:

- simplify or disable drag depending on performance/accessibility.

---

# 11. PR-008 — Bronze Editor

Desktop-only development feature:

```text
Shift + E
```

Requirements:

- freeze the cinematic act;
- lock body scroll;
- allow object selection;
- allow translation;
- allow rotation;
- allow scaling;
- show transform values;
- provide a Log all action.

This feature is for developer/art-direction workflow and does not need production exposure.

---

# 12. PR-009 — Accounts

Explain:

- customer-specific virtual accounts;
- automatic reconciliation;
- statements;
- running ledger;
- standalone capabilities.

Include the reconciliation visual.

---

# 13. PR-010 — How It Works

Use three steps:

```text
Create a plan
Subscribe a customer
Plinth does the rest
```

The presentation should feel like an operational sequence.

---

# 14. PR-011 — Nigeria Pays

The section shall explain local payment behavior.

Potential content categories:

- failed card charges;
- transfers;
- recovered revenue;
- dunning;
- local payment rails.

Use large numeric/statistical typography where appropriate.

Do not fabricate live metrics.

---

# 15. PR-012 — Use Cases

Show relevant customer categories.

Examples:

- SaaS
- cooperatives
- schools
- streaming
- home/service businesses

Each item should contain:

- icon
- title
- short description

---

# 16. PR-013 — Developers

The section shall contain:

- developer-oriented copy;
- API/entitlement concept;
- code panel;
- copy interaction;
- resolved `200 OK` state.

Code panel requirements:

- dark IDE surface
- traffic-light controls
- filename
- copy button
- syntax-like visual hierarchy
- response footer
- jade success indicator

---

# 17. PR-014 — Trust

Trust messaging shall cover infrastructure characteristics such as:

- double-entry ledger
- idempotency
- reconciliation
- Nomba rails
- operational reliability

The tone must be technical and restrained.

---

# 18. PR-015 — Pricing

Pricing must:

- be easy to scan;
- clearly distinguish plans;
- preserve the warm editorial style;
- use jade sparingly;
- avoid fake urgency;
- avoid excessive badges.

---

# 19. PR-016 — Testimonials

If no verified testimonials exist:

- use placeholders;
- do not invent names;
- do not invent companies;
- do not invent revenue metrics.

---

# 20. PR-017 — FAQ

FAQ shall support:

- open/close
- keyboard access
- visible expanded state
- animated panel
- reduced-motion fallback

Use CSS grid-row animation rather than JS height measurement.

---

# 21. PR-018 — Final CTA

The final CTA shall be visually distinct.

It may use:

- dark surface
- subtle jade atmospheric animation
- strong heading
- primary CTA

Ambient motion must be slow and low contrast.

---

# 22. PR-019 — Footer

Footer must include:

- Plinth identity
- product navigation
- developer navigation
- company navigation
- legal navigation
- regulatory/payment context

---

# 23. PR-020 — Responsive Behavior

## Desktop

Full experience:

- WebGL
- bronze scene
- custom cursor
- scroll snap
- immersive timeline

## Mobile

Prioritize:

- readability
- natural scrolling
- performance
- stable interaction

Disable:

- custom cursor
- desktop scroll snap
- unnecessary cinematic pinning

Provide simpler layouts.

---

# 24. PR-021 — Accessibility

Must support:

- visible focus
- semantic landmarks
- keyboard navigation
- reduced motion
- screen-reader labels
- accessible buttons
- accessible accordion state
- decorative canvas `aria-hidden`

---

# 25. PR-022 — Performance

Requirements:

- dynamic-import WebGL components;
- preload important fonts;
- avoid unnecessary rerenders;
- use `useFrame` only for continuous 3D animation;
- use IntersectionObserver for simple viewport-triggered effects;
- use GSAP only where timeline/scroll choreography benefits from it;
- avoid adding Framer Motion when CSS/IO is sufficient.

---

# 26. PR-023 — Failure Handling

The page must remain functional if:

### WebGL unavailable

Use:

```text
lagos-bridge.png
```

### WebGL renderer crashes

React error boundary must replace the scene with the fallback.

### Reduced motion

Animations settle immediately or use minimal movement.

### Touch device

Remove desktop-only cursor/snap behavior.

### Clipboard unavailable

Copy button should fail silently and preserve the code.

---

# 27. PR-024 — SEO

Implement:

- metadata
- canonical/site URL configuration
- Open Graph
- Twitter card
- robots
- sitemap
- favicon
- Apple icon
- manifest
- OG image

---

# 28. PR-025 — Security

Configure appropriate response headers:

- HSTS
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy
- Permissions-Policy
- CSP/report-only

CSP must permit the required Rive/Lottie WASM and YouTube privacy iframe behavior.

---

# 29. Technical Stack

Required:

```text
Next.js 15+
React 19+
TypeScript
Tailwind CSS 3+
Three.js
@react-three/fiber
@react-three/drei
GSAP
@rive-app/react-canvas
@lottiefiles/dotlottie-react
```

Avoid introducing a framework-heavy animation layer unless there is a demonstrated need.

---

# 30. Data/State Architecture

There is no backend dependency for the marketing page.

State is local to interactive components.

Examples:

```text
Hero:
reduce
webglOk
videoOpen

RiveCursor:
pointer coordinates
hover state
dark state
idle state

Subscriptions:
active
edit
tip
info
progress

BronzeCanvas:
selected
mode
edited transforms
hover state
drag state
```

Do not introduce Redux/Zustand/etc. for this site.

---

# 31. File/Asset Requirements

The implementation should preserve the asset architecture:

```text
public/
  animations/
  models/
  logos/
  fonts/
  cursor.riv
  danfo-3d.glb
  lagos-bridge.png
  plinth-logo.png
```

3D model names should remain stable so configuration remains readable.

---

# 32. Build Requirements

The final project must:

```bash
npm/pnpm install
dev server
production build
production start
```

without backend services.

The site should be independently deployable.

---

# 33. QA Requirements

Test:

```text
1440×900
1280×800
1024×768
768×1024
390×844
375×812
```

Validate:

- hero crop
- typography
- navigation
- CTA positions
- 3D frame
- scroll transition
- model positioning
- card layout
- footer
- mobile overflow
- keyboard focus
- reduced motion

---

# 34. Completion Criteria

A build is accepted only when:

1. it runs;
2. it builds;
3. all major sections exist;
4. 3D assets are functional;
5. scroll choreography works;
6. responsive layouts work;
7. accessibility fallbacks work;
8. the design is recognizably the same product and visual system;
9. no major visual element has been replaced with a generic approximation;
10. the agent has performed screenshot-based visual comparison.

