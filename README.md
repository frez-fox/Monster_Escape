# Monster Escape

A 2D side-scrolling browser adventure built with Phaser 3 and Vite.
See `Monster_Escape_Claude_Blueprint.md` for the full design.

## Run locally / on Replit

```bash
npm install
npm run dev
```

## Production build (Render static site)

- Build command: `npm install && npm run build`
- Publish directory: `dist`

All paths are relative (`base: './'`), so no localhost dependencies.

## Structure

- `src/scenes` - Phaser scenes (Boot, Preload, MainMenu so far)
- `src/entities`, `src/systems`, `src/data`, `src/levels`, `src/ui` - filled in by later phases
- `src/utils` - constants and helpers
- `assets/` - art and audio folders (one folder per category, ready for replacement)

## Status

Phase 1 (foundation) complete: Phaser setup, scene pipeline, loading screen, responsive canvas, placeholder main menu.
