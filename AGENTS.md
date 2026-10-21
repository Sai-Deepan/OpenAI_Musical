# Working in this workshop starter

This repository intentionally provides a drawing canvas and test tone, not a completed instrument. Participants use a refined brief to implement drawing playback. Read README.md and their brief/build record before changing code.

- Use the current checkout. Cloud tasks are already isolated; do not create a Git worktree unless requested.
- Keep the stack small: plain JavaScript, Vite, browser Canvas, and Web Audio. No API key or backend is required.
- Focus the core implementation in `src/instrument.js`; inspect its data and lifecycle contract first.
- Preserve responsive drawing, normalized coordinates, browser audio unlock, quiet test tone, and distinct Play/Stop/Clear controls.
- Make Stop and Clear cancel all scheduled voices and callbacks. Repeated Play should replace old playback.
- Ask only about decisions the brief does not resolve that materially affect behavior. State reasonable assumptions.
- Run `npm test` and `npm run build` after implementation. Add relevant tests as functionality is built.
- Report tests actually executed and browser checks still unrun. Do not claim pitch, duration, or physical audibility from a successful build.
- Keep the build record honest: do not fill in observations or Pass results without evidence.
- Implement one creative variation only after core behavior works. Repair playtest mismatches with the smallest change.
