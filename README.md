# Plinth Next.js Reconstruction

A production-oriented Next.js + TypeScript + Tailwind reconstruction generated from the supplied PRD, DESIGN and master agent prompt.

## Stack
- Next.js App Router
- TypeScript strict mode
- Tailwind CSS v4
- React Three Fiber / Drei / Three.js
- GSAP-ready architecture
- Rive/Lottie assets included for future media adapters
- Self-hosted Clash Display / Satoshi / JetBrains Mono

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm start
```

## Asset map
- `/public/danfo-3d.glb` — hero Danfo
- `/public/models/*.glb` — bronze scene
- `/public/lagos-bridge.png` — WebGL fallback
- `/public/animations/*` — source animation assets
- `/public/fonts/*` — brand fonts

## Engineering notes
The page is composed in `app/page.tsx`; interactive/browser-heavy pieces are client components. The 3D hero is dynamically imported with SSR disabled and has a static image fallback. The immersive subscriptions section uses normalized scroll progress to choreograph its stages.
