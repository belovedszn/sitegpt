# DESIGN.md — Plinth Marketing Site Exact-Reproduction Specification

## 0. Purpose

This document is a reconstruction-grade design specification for reproducing the supplied Plinth marketing site from the provided repository.

It is intentionally written as an **implementation contract for an AI coding agent**, not as a visual moodboard.

The objective is:

> Given this DESIGN.md + PRD.md + the supplied reference repository/assets, an implementation agent should be able to reconstruct the same frontend experience using Next.js, TypeScript, Tailwind CSS, React Three Fiber/Three.js, GSAP, Rive and Lottie, while preserving the original information architecture, visual hierarchy, motion choreography, 3D interactions, responsive behavior, accessibility behavior and fallback strategy.

The source project is a marketing site inside a larger pnpm monorepo. The relevant frontend is `apps/site`.

---

# 1. Design North Star

## Product

Plinth is recurring-payments infrastructure for Nigeria, positioned as:

- subscriptions infrastructure
- recurring billing
- automatic reconciliation
- payment-rail abstraction
- dunning/recovery
- entitlements
- tenant-facing billing infrastructure

The site is not designed like a generic SaaS dashboard landing page.

It should feel like:

- Nigerian infrastructure
- editorial technology
- premium fintech
- physically grounded
- confident rather than noisy
- warm rather than sterile
- technical without becoming developer-documentation-heavy

## Core visual metaphor

The design repeatedly translates an abstract payments platform into physical infrastructure.

The primary metaphor is:

> Plinth is the physical base/support structure that billing stands on.

This appears in:

1. The hero bridge.
2. The title composition.
3. The Nigerian road/Danfo visual.
4. The billing-engine bronze artifact scene.
5. The infrastructure language throughout the copy.
6. The restrained fintech palette.

The page should feel like a **motion-directed brand film that happens to be interactive**, not a collection of unrelated cards.

---

# 2. Design Principles

## 2.1 One visual language

Use a restrained palette:

- ink / near-black
- bone / warm white
- jade / single brand accent
- danfo yellow only for the 3D bus

Do not introduce:

- purple AI gradients
- neon rainbow gradients
- excessive glassmorphism
- unrelated accent colours
- arbitrary shadows
- excessive rounded cards
- decorative blobs

## 2.2 Editorial hierarchy

The page relies on typography more than decoration.

Large headings should be:

- confident
- compact
- tightly tracked
- visually dominant
- supported by generous whitespace

Use typography to establish hierarchy before adding UI decoration.

## 2.3 Motion must explain the product

Animation is not decoration.

Examples:

- the bridge establishes physical infrastructure;
- the Danfo establishes Nigerian context;
- the bronze artifacts establish the billing-engine transition;
- reconciliation animation explains automatic matching;
- Rive/Lottie scenes communicate failed/recovered payment states;
- scroll choreography connects problem → infrastructure → solution.

Every significant animation must answer:

> Why does this movement belong to this story?

## 2.4 Preserve intentional imperfection

Do not over-polish everything into a standard component-library look.

The source design has:

- asymmetrical headline lines
- oversized typography
- editorial spacing
- physical metaphors
- hand-positioned 3D objects
- unusual scroll transitions

Do not normalize these into generic centered SaaS sections.

---

# 3. Visual Tokens

## 3.1 Color

Primary tokens:

```text
ink        #0A0A0A
ink-900    #070707
ink-800    #171717
ink-700    #262626

bone       #FAFAFA
bone-200   #F5F5F5

jade       #0FA37F
jade-600   #0B8366
jade-700   #0A7458
jade-400   #3BC0A1
jade-100   #DCF1EA

mid        #737373
```

Hero-specific sky/scene tones may exist inside the 3D renderer.

The Danfo uses its own yellow identity and must not become a general page accent.

## 3.2 Typography

The supplied frontend self-hosts:

- Clash Display
- Satoshi
- JetBrains Mono

Primary system:

```text
Body/UI:
Satoshi

Headings:
Clash Display

Poster:
Clash Display

Mono:
JetBrains Mono
```

The repository contains older brand documentation mentioning Anton/Fraunces/Space Grotesk/Inter, but the actual current implementation uses the self-hosted Clash Display/Satoshi/JetBrains Mono system. For reproduction, **implementation is the source of truth**.

Typography rules:

- headings: Clash Display, semibold/bold
- body: Satoshi regular/medium
- labels: uppercase with wide tracking
- code/numbers: JetBrains Mono
- avoid using every font as a decoration

## 3.3 Radius

Use rounded surfaces selectively:

- primary CTA: pill
- code panels: ~16–24px
- cards: medium/large radius
- controls: compact rounded shapes
- no universal `rounded-full` treatment

## 3.4 Shadows

Shadows remain subtle.

Target:

- low opacity
- broad diffusion
- no heavy neumorphism
- no black floating-card effect

---

# 4. Global Layout System

## Max width

Primary content container:

```text
max-width: 72rem / 1152px
padding: 20px mobile
```

The source uses a shared `Container` primitive:

```tsx
<div className="mx-auto w-full max-w-6xl px-5">
```

## Section rhythm

Normal sections:

```text
py-20
md:py-28
```

Full viewport sections:

```text
md:min-h-[100svh]
```

Sections use:

```text
scroll-mt-24
```

for anchor navigation.

## Content density

Prefer:

- one dominant idea per viewport
- 2-column layouts when explaining product mechanisms
- wide breathing room
- short paragraphs
- strong section headings

Avoid:

- dashboard-density layouts
- excessive text columns
- tiny metadata everywhere

---

# 5. Application Architecture

## Route architecture

The public site is essentially one long marketing route:

```text
/
```

The page composes sections in this order:

```text
Hero
Subscriptions / Problem → Billing Engine
Accounts
How It Works
Nigeria Pays
Use Cases
Developers
Trust
Pricing
Testimonials
FAQ
Final CTA
Footer
```

`app/page.tsx` should remain a composition layer.

It should not contain the implementation of every section.

---

# 6. Component Architecture

## Root

```text
app/
  layout.tsx
  page.tsx
  globals.css
  manifest.ts
  robots.ts
  sitemap.ts
  icon.tsx
  apple-icon.tsx
  opengraph-image.tsx
```

## Core interactive components

```text
components/
  Hero.tsx
  BridgeScene.tsx
  BridgeSceneBoundary.tsx
  Danfo.tsx
  RoadLogos.tsx
  RiveCursor.tsx
  ScrollSnap.tsx
  VideoModal.tsx
```

## Marketing sections

```text
components/sections/
  Accounts.tsx
  BronzeCanvas.tsx
  CardMedia.tsx
  CodePanel.tsx
  CountUp.tsx
  Developers.tsx
  FAQ.tsx
  FaqRow.tsx
  FinalCTA.tsx
  Footer.tsx
  HowItWorks.tsx
  NigeriaPays.tsx
  Pricing.tsx
  Problem.tsx
  ReconcileVisual.tsx
  Reveal.tsx
  Subscriptions.tsx
  Testimonials.tsx
  Trust.tsx
  UseCases.tsx
  icons.tsx
  ui.tsx
```

## Shared primitives

`ui.tsx` contains:

- `Container`
- `Section`
- `Eyebrow`
- `Emph`
- `SectionHeading`
- `PrimaryButton`
- `SecondaryButton`
- `Placeholder`

These should remain intentionally small.

Do not turn them into an entire design system.

---

# 7. Hero Design

## Hero objective

Immediately communicate:

> Plinth is the infrastructure beneath recurring billing in Nigeria.

## Composition

The hero is approximately one viewport tall.

Layers:

```text
Layer 0 — sky/background
Layer 1 — 3D bridge scene
Layer 2 — large brand/backdrop treatment
Layer 3 — navigation
Layer 4 — centered headline
Layer 5 — supporting copy
Layer 6 — CTAs
```

## Navigation

Left:

- Plinth logo
- Plinth wordmark

Center/right desktop navigation:

- Subscriptions
- Accounts
- Docs
- Pricing

Right:

- Start building

Mobile:

- simplify navigation
- preserve brand and primary CTA

No capsule navigation bar.

## Hero headline

Reference composition:

```text
The base
YOUR       BILLING
          STANDS ON.
```

Actual source implementation uses:

- uppercase
- very large responsive `clamp()` sizes
- tight leading
- selective scale-y treatment
- desktop side-by-side `YOUR` + `BILLING`
- mobile stacked treatment
- left alignment for first line
- right alignment for final line

Do not center every line mechanically.

## Supporting copy

Concept:

> Recurring billing & reconciliation, built for how Nigeria actually pays.

The word `actually` receives subtle emphasis.

## CTAs

Primary:

```text
Schedule a demo →
```

Secondary:

```text
Watch a video
```

Primary uses jade.

Secondary remains restrained.

Arrow animation:

- small forward nudge
- roughly 2.4s
- subtle
- never bouncy

---

# 8. Hero 3D Architecture

The bridge scene is implemented with React Three Fiber.

## Canvas

Reference camera:

```text
Perspective camera
position: [0, 2.0, 135]
fov: 40
near: 0.1
far: 800
```

Lighting includes:

```text
ambientLight intensity ~0.75
directionalLight position [-30, 80, 50]
```

## Bridge

The bridge is procedural Three.js geometry.

Do not replace it with a flat background image if 3D is available.

The fallback image exists only for unsupported WebGL / renderer failure.

Bridge components include:

- pylon
- deck
- road
- lane markings
- barriers
- rails
- lamps
- skyline/atmosphere
- clouds
- ground
- road branding

The pylon geometry is generated from a parametric curve so both legs share the same underlying design logic.

## Road branding

`RoadLogos` creates canvas textures dynamically.

Reason:

- logo/text needs to live in the 3D scene
- canvas texture keeps the branding attached to the road/median
- font rendering must match the site's self-hosted fonts

The implementation uses:

```text
HTML Image → offscreen Canvas → CanvasTexture → Three.js mesh
```

This is an important architectural technique to preserve.

## Danfo

The Danfo is a real `.glb` asset.

File:

```text
public/danfo-3d.glb
```

The component:

- loads with `useGLTF`
- clones materials
- creates two scene instances
- animates motion with `useFrame`
- supports reduced motion
- includes a soft ground shadow
- uses separate incoming/outgoing directions

The bus must feel physically embedded in the bridge scene.

## WebGL fallback

Use a layered fallback:

```text
WebGL capability test
        ↓
dynamic client-only R3F import
        ↓
Error Boundary
        ↓
static bridge image
```

Never allow a failed GPU/WebGL initialization to leave a blank black hero.

---

# 9. Hero Motion

## Intro animation

GSAP animates `.intro` elements:

```text
y: 24px → 0
opacity: 0 → 1
duration: ~0.9s
ease: power3.out
stagger: ~0.08s
delay: ~0.15s
```

## Reduced motion

When:

```text
prefers-reduced-motion: reduce
```

skip entrance animation.

When:

```text
?still=1
```

freeze the hero intro/scene state for screenshots.

This query parameter is an excellent example of designing for visual QA.

---

# 10. Custom Cursor

Desktop/fine-pointer only.

Implementation:

```text
Rive asset
+
global pointer tracking
+
state-machine inputs
```

State machine inputs:

```text
Click
IsHovering
isDark
isIdle
```

Behavior:

- starts centered
- follows pointer using `translate3d`
- uses requestAnimationFrame
- detects interactive elements
- detects dark/light surface beneath cursor
- triggers click state
- enters idle state after ~3500ms
- disabled for touch
- disabled for reduced motion

Important:

The cursor is `pointer-events: none`.

Never let the decorative cursor block interaction.

---

# 11. Global Scroll Snap

Desktop/fine-pointer only.

GSAP `ScrollToPlugin` is used to implement proximity-based snapping.

Algorithm:

1. collect top positions of `main` children;
2. wait until scrolling settles;
3. find nearest section boundary;
4. only snap if within ~38% viewport height;
5. never trap tall sections;
6. abort snap when real user input occurs;
7. disable on touch;
8. disable on reduced motion.

This is deliberately **not** native CSS scroll snapping.

---

# 12. Problem → Billing Engine Transition

This is the most important interaction after the hero.

The `Subscriptions` section is an immersive desktop act.

Section height:

```text
500vh
```

The viewport acts like a stage while scroll position controls a single normalized progress value:

```text
p ∈ [0,1]
```

## Choreography

### 0.00 → 0.16

Show the problem state.

Three problems:

```text
01 Charges fail
02 Reconciled by hand
03 Slips away
```

Cards enter from the left.

### 0.16 → 0.30

Bronze 3D pieces fade in.

### 0.30 → 0.42

Problem copy fades away.

The bronze artifacts become the focus.

### 0.42 → 0.68

Artifacts part/tumble outward.

The center is cleared.

The stage transitions:

```text
ink → bone
```

### 0.64 → 0.96

Subscription/billing-engine content rises into the cleared center.

This must feel like one continuous cinematic transition.

Do not implement these as independent page sections that simply appear one after another.

---

# 13. Bronze 3D Scene

Assets:

```text
ife-bronze-head-3d.glb
benin-bronze-2-3d.glb
benin-bronze-3-3d.glb
benin-bronze-4-3d.glb
benin-leopard-3d.glb
igbo-ukwu-castings-3d.glb
nok-terracottas-3d.glb
nok-terracottas-1-3d.glb
```

The eight models are controlled by configuration.

Each configuration has:

```ts
{
  src,
  name,
  desc,
  base,
  scale,
  rot0,
  move,
  rotDelta,
  aside
}
```

This is a key architecture pattern:

> Store art-direction data as configuration rather than scattering transforms through JSX.

## Model interaction

Each bronze piece supports:

- hover
- tooltip
- subtle scale-up
- continuous gentle spin while hovered
- pointer drag to rotate
- click selection in edit mode

## Lighting

Use an environment with multiple `Lightformer`s.

Reference setup:

```text
warm frontal light
cool side light
warm lower/right light
```

The purpose is to make bronze readable and dimensional without excessive bloom.

## Camera

Reference:

```text
position [0, 0, 9]
fov 32
near 0.1
far 100
```

## Contact shadows

Use soft contact shadows to anchor models.

---

# 14. 3D Art-Direction Tooling

The source includes a useful internal art-direction workflow.

Desktop:

```text
Shift + E
```

enters edit mode.

Edit mode:

- freezes choreography
- locks body scrolling
- allows selection
- allows transform editing
- displays placement information
- can output copy-paste-ready model transforms

This should be preserved in a reproduction because it demonstrates a valuable engineering principle:

> Build temporary internal tooling around expensive visual work instead of manually guessing transforms.

The editor does not need to be exposed to production users.

---

# 15. Problem Media

The problem cards use:

- Lottie
- Rive

Examples:

```text
card-fail.lottie
reconciled-coding.riv
losing.riv
```

Wrap these through a shared `CardMedia` abstraction.

Why:

- isolates third-party animation APIs
- makes cards declarative
- simplifies replacement
- prevents animation implementation from leaking into content components

---

# 16. Reconciliation Visual

The reconciliation visual is a custom DOM animation.

It communicates:

```text
incoming payment
→ matching
→ reconciliation
→ resolved invoice/customer
```

It should not be replaced with a generic animated icon.

Use:

- staged rows
- status changes
- subtle motion
- jade success treatment
- warm grayscale
- reduced-motion settled state

The source uses `IntersectionObserver` to start the visual when it enters view.

---

# 17. Generic Reveal System

Lower content sections use a lightweight `Reveal` component.

Do not introduce Framer Motion solely for basic reveals.

Reference:

```text
duration: 620ms
ease: cubic-bezier(0.22, 0.72, 0.2, 1)
y: 18px
step: 80ms
threshold: 0.12
```

Behavior:

```text
initial:
opacity 0
translateY(18px)

visible:
opacity 1
translateY(0)
```

Runs once.

Reduced motion:

```text
visible immediately
```

This is a good example of using the smallest appropriate tool.

---

# 18. Section-by-Section Visual Intent

## Accounts

Purpose:

Explain transfer-native customer accounts.

Key concepts:

- dedicated virtual account per customer
- automatic reconciliation
- statements / running ledger
- standalone-capable architecture

Visual direction:

- clean explanatory layout
- reconciliation visual
- strong infrastructure language

## How It Works

Three-step story:

```text
Create a plan
Subscribe a customer
Plinth does the rest
```

Use a linear narrative rather than a feature grid.

## Nigeria Pays

Purpose:

Show that the architecture is built around local payment behavior.

Use:

- numbers
- payment rail context
- recovery / transfer concepts
- strong typography

## Use Cases

Use a varied grid.

Example domains include:

- SaaS
- cooperatives
- schools
- streaming
- home/service businesses

Each should have an icon and concise explanation.

## Developers

Purpose:

Make the product tangible to engineers.

Use:

- API-style language
- code panel
- copy interaction
- entitlement response
- technical but approachable visual treatment

The `CodePanel` should feel like a tiny IDE window.

## Trust

Purpose:

Reduce perceived risk.

Use:

- ledger language
- idempotency
- reconciliation
- infrastructure reliability
- restrained visual proof

## Pricing

Use clear plan comparison.

Avoid:

- loud gradient pricing cards
- fake urgency
- excessive badges

## Testimonials

If real data is unavailable, use placeholders.

Never invent customers, metrics or logos.

## FAQ

Use accordion behavior.

Reference implementation uses CSS grid row animation:

```text
grid-template-rows: 0fr → 1fr
```

rather than JS height measurement.

## Final CTA

Dark/contrasting CTA stage.

Uses a slow jade atmospheric/aurora animation behind the content.

Motion is ambient and slow.

## Footer

Include:

- brand
- product links
- developer links
- company
- legal
- regulatory/payment context
- final brand statement

---

# 19. Interaction Rules

## Buttons

Primary:

- jade background
- white text
- rounded pill
- subtle hover darkening
- arrow movement

Secondary:

- border
- transparent/warm background
- restrained hover fill

## Cards

Hover:

```text
translateY(-4px)
border jade tint
soft shadow
```

No exaggerated scaling.

## Links

Use a rule-draw effect where appropriate.

Avoid animated underline everywhere.

## FAQ

Accordion should:

- preserve keyboard access
- expose expanded state
- animate open/close
- remain usable without animation

---

# 20. Responsive Strategy

## Desktop

Desktop receives the full cinematic experience:

- WebGL bridge
- Danfo
- Rive cursor
- bronze scene
- immersive scroll act
- proximity scroll snapping

## Tablet

Reduce:

- model count if performance requires
- 3D complexity
- typography size
- horizontal spacing

Maintain:

- core visual metaphor
- major interactions

## Mobile

Do not force desktop choreography into a phone.

Use:

- stacked sections
- natural document flow
- simplified 3D
- static fallback where necessary
- no custom cursor
- no scroll snap
- reduced model complexity

The source explicitly treats mobile/reduced-motion as a different experience.

---

# 21. Accessibility

Must support:

- keyboard navigation
- visible focus
- semantic headings
- buttons for actions
- accessible accordion states
- meaningful alt text
- decorative 3D marked `aria-hidden`
- no interaction blocked by decorative layers
- reduced motion
- WebGL failure
- clipboard failure

Global focus treatment:

```text
2px jade outline
2px offset
```

Do not sacrifice accessibility to reproduce visual effects.

---

# 22. Performance Architecture

## Client boundaries

Only make components client-side when they require:

- browser APIs
- WebGL
- animation state
- event handlers
- Rive/Lottie
- clipboard
- scroll position

Keep static composition server-rendered where possible.

## Dynamic imports

Use client-only dynamic imports for:

```text
BridgeScene
BronzeCanvas
```

with:

```text
ssr: false
```

This prevents WebGL from running during server rendering.

## Preload

Preload critical fonts.

Preload important GLB models where it improves perceived loading.

## Asset strategy

Assets are bundled in `public/`.

Potential future improvement:

- CDN
- object storage
- compressed models
- texture optimization
- route-aware asset loading

Do not move to a CDN merely for the reproduction unless requested.

---

# 23. Security / Headers

The source config includes:

- HSTS
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy
- Permissions-Policy
- CSP report-only

The CSP must account for:

- self-hosted assets
- Rive WASM
- Lottie WASM
- blob
- YouTube privacy iframe

Keep security headers separate from visual components.

---

# 24. Metadata

Implement:

- title
- description
- Open Graph
- Twitter card
- robots
- sitemap
- favicon
- Apple icon
- generated OG image
- manifest

The site should be deployable as a professional production marketing site, not just a visual prototype.

---

# 25. Engineering Rules for an AI Agent

The agent MUST:

1. Inspect the entire supplied repository before implementation.
2. Inspect all asset names and dimensions/types.
3. Read existing design/brand documentation.
4. Map the component dependency graph.
5. Identify server/client boundaries.
6. Reproduce behavior before polishing.
7. Implement the hero first.
8. Implement the immersive bronze scene second.
9. Implement content sections third.
10. Add accessibility/fallbacks.
11. Run build/lint.
12. Perform visual QA at desktop/tablet/mobile widths.
13. Compare screenshots against the reference.
14. Fix the highest-impact differences first.
15. Never silently replace 3D with a flat approximation.
16. Never invent assets when the supplied asset exists.
17. Never add unrelated libraries.
18. Never introduce a generic SaaS template.

---

# 26. Definition of Visual Fidelity

A reproduction is not complete because:

- it compiles;
- it contains the same text;
- it has a similar color palette.

It is complete when these match closely:

```text
layout geometry
typography scale
spacing
section order
3D composition
camera framing
model placement
lighting
scroll choreography
animation timing
interaction states
responsive behavior
fallback states
CTA behavior
metadata
```

Priority order for visual comparison:

1. overall composition
2. hero
3. typography
4. 3D camera/framing
5. section transitions
6. spacing
7. cards
8. micro-interactions
9. tiny decorative details

---

# 27. Implementation Verification Checklist

## Architecture

- [ ] App Router
- [ ] TypeScript strictness
- [ ] Tailwind tokens
- [ ] clear client boundaries
- [ ] reusable primitives
- [ ] no unnecessary global state

## Hero

- [ ] correct headline composition
- [ ] correct navigation
- [ ] bridge 3D
- [ ] Danfo GLB
- [ ] road branding
- [ ] camera framing
- [ ] fallback image
- [ ] intro GSAP animation
- [ ] video modal

## Immersive section

- [ ] 500vh desktop stage
- [ ] normalized scroll progress
- [ ] three problem beats
- [ ] eight bronze models
- [ ] fade-in
- [ ] copy fade-out
- [ ] model parting
- [ ] background transition
- [ ] subscriptions reveal
- [ ] hover
- [ ] drag rotation
- [ ] edit mode

## Lower sections

- [ ] Accounts
- [ ] How It Works
- [ ] Nigeria Pays
- [ ] Use Cases
- [ ] Developers
- [ ] Trust
- [ ] Pricing
- [ ] Testimonials
- [ ] FAQ
- [ ] CTA
- [ ] Footer

## Resilience

- [ ] reduced motion
- [ ] mobile fallback
- [ ] WebGL fallback
- [ ] renderer error boundary
- [ ] keyboard focus
- [ ] clipboard failure handling

---

# 28. Prompting Lesson

The most important lesson from this project is that a good replication prompt should not say:

> "Build a website like this."

It should describe:

```text
1. WHAT the product is
2. WHAT the visual language is
3. WHAT the page architecture is
4. HOW each major section behaves
5. HOW the animation timeline works
6. WHAT the 3D scene contains
7. HOW assets map to components
8. WHAT the responsive rules are
9. WHAT happens when WebGL fails
10. WHAT reduced-motion does
11. WHAT engineering constraints exist
12. HOW the agent should validate its result
```

The agent should be asked to **inspect before coding** and **validate after coding**.

That is the reusable prompt-engineering pattern demonstrated by this project.
