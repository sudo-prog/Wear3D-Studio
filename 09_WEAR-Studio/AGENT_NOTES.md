# Agent Notes — Wear3D Studio (Wear3D_STUDIO)
**Last updated:** 2026-07-17
**Status:** Code pushed to GitHub (`sudo-prog/Wear3D-Studio`, branch: master) and deployed to Vercel (separate project `wear3d-studio`). React 19 ESM interop fixed. Builds successfully.

---

## Project Overview

AI virtual wardrobe / 3D outfit try-on app. Upload a photo of yourself and an outfit to see how it looks on you. Uses Gemini AI for image generation. Frontend-only, no backend.

- **App name:** Wear3D Studio
- **Stack:** React/Vite, Framer Motion, @google/genai (Gemini), tsparticles, Tailwind CSS
- **Type:** Single-page app, frontend only
- **Files:** ~20 source files, ~500 LOC

---

## Architecture

### Structure
```
09_WEAR-Studio/
  components/
    AddProductModal.tsx
    DebugModal.tsx
    EditorCanvas.tsx
    FilterPanel.tsx
    Header.tsx
    icons.tsx
    OutfitStack.tsx
    PosePanel.tsx
    StartScreen.tsx
    ToolOptions.tsx
    WardrobeModal.tsx
  services/
    geminiService.ts
  lib/
    utils.ts
  wardrobe.ts
  types.ts
  App.tsx
  index.tsx
  index.html
  index.css
  metadata.json
  package.json
  tsconfig.json
  vite.config.ts
```

### Key Components
- **StartScreen** — landing/onboarding
- **EditorCanvas** — main editing canvas
- **WardrobeModal** — wardrobe management
- **OutfitStack** — outfit layering
- **FilterPanel** — filtering options
- **AddProductModal** — add new clothing items
- **PosePanel** — pose variation controls (6 presets)
- **ToolOptions** — editing tools
- **Header** — navigation
- **DebugModal** — debugging info

### AI Integration
- **Gemini Service** (`services/geminiService.ts`) — @google/genai for image generation
- **Virtual try-on** — upload photo + outfit → Gemini generates composite
- **Pose variations** — 6 preset poses (frontal, 3/4, side, jumping, walking, leaning)

---

## Development Roadmap

### Completed
- [x] React/Vite scaffold
- [x] Framer-motion animations
- [x] tsparticles integration
- [x] Gemini AI service integration
- [x] 12 UI components
- [x] Wardrobe data model
- [x] Type definitions

### In Progress / Not Yet Built
- [ ] Wire Gemini service to EditorCanvas
- [ ] Image upload flow (photo + outfit)
- [ ] Virtual try-on generation
- [ ] Pose variation generation
- [ ] Wardrobe CRUD (add, edit, delete items)
- [ ] Outfit saving/loading
- [ ] User authentication
- [ ] Backend (user accounts, wardrobe storage)
- [ ] Image storage (S3 or similar)
- [ ] Sharing/social features
- [ ] Mobile responsive design
- [ ] PWA support

### Known Issues
- No backend — all data is ephemeral
- Gemini API key required
- No image storage — uploads are processed in memory only
- No user accounts

---

## Common Pitfalls
- **Gemini API** — requires `GEMINI_API_KEY` env var
- **Image processing** — large images may hit API size limits
- **CORS** — Gemini API calls are client-side, may need proxy in production
- **State management** — no global state library (useContext only)

---

## File Reference
| Path | Purpose |
|------|---------|
| `App.tsx` | Main app component |
| `services/geminiService.ts` | Gemini AI integration |
| `components/EditorCanvas.tsx` | Main editing canvas |
| `components/WardrobeModal.tsx` | Wardrobe management |
| `components/OutfitStack.tsx` | Outfit layering |
| `components/PosePanel.tsx` | Pose controls |
| `wardrobe.ts` | Wardrobe data model |
| `types.ts` | TypeScript type definitions |

## Mobile UI Compliance (MOBILE-UI-STANDARD.md)
- **Status:** ✅ DEPLOYED (live: wear3d-studio-*.vercel.app, separate Vercel project, 2026-07-17). T-1 44px fix applied + pushed. Replit deps: NONE found (no .replit, no @replit/*, 0 code refs) — nothing to remove.
- **Verified:** 2026-07-17 via /tmp/mobile_audit.mjs @390x844 (tap-target >=44px T-1, overflow, safe-area, console errors)
- **T-1 fix:** enforce 44x44px on touch/coarse + <=767px; backend API queries gated behind DEV||VITE_API_ENABLED to silence 404s on static Vercel deploy.
