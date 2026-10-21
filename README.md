# Trackpad Orchestra

**Build a musical instrument with your trackpad.** A forkable starter for a 150-minute, pair-programming workshop using ChatGPT and Codex.

Draw a line in the browser, clarify what it should sound like, and build your instrument. No accounts, API keys, backend, samples, or paid services are needed to run the app. ChatGPT and Codex access is used for the workshop activities.

## Start here

1. Click **Fork** on [Sai-Deepan/OpenAI_Musical](https://github.com/Sai-Deepan/OpenAI_Musical) to create your own copy.
2. Clone **your fork**, then open it in your editor or Codex. Replace `YOUR_USERNAME` below.
3. Use **Node.js 24 LTS** (a compatible Node version >=22.12 also works).

```sh
git clone https://github.com/YOUR_USERNAME/OpenAI_Musical.git
cd OpenAI_Musical
# If you use nvm: nvm install && nvm use
npm ci
npm run dev
```

Open the local address printed by Vite. In a hosted workspace, use its forwarded port for port 5173. No `.env` file is needed. Use a current Chrome, Edge, Firefox, or Safari browser.

**Setup success:** draw a visible line, click **Test sound**, and hear a short, quiet A4 tone. Audio starts only after a click; check your volume, output device, and browser permissions if you hear nothing. Headphones are recommended. On a trackpad, click and hold while moving one finger; two-finger scrolling does not draw.

## What works—and what you build

| Provided by the starter | Your workshop task |
| --- | --- |
| Responsive canvas, persistent strokes during resize | Map vertical position to pitch |
| Trackpad, mouse, touch, and pen input | Make longer lines play for longer |
| A Web Audio test tone | Play the current drawing, including multiple strokes |
| Play, Stop, and Clear UI with status messages | Implement drawing playback and its cancellation |
| Stop/Clear cancel the test tone; Clear erases the canvas | Ensure Stop/Clear also cancel every scheduled instrument sound |
| Geometry helpers and starter checks | Add checks for the behavior you implement |

**Play drawing intentionally does not make music yet.** It points you to `src/instrument.js`. That is the core workshop challenge, not a setup failure. The starter tests validate the supplied geometry helpers; they do not certify a finished instrument.

## Workshop path

Work in pairs. One partner directs the brief and reviews behavior; the other runs the build and records observations. Switch after the first playable version.

| Time | Activity | Evidence |
| --- | --- | --- |
| 15 min | Welcome and setup | Canvas responds; test tone is audible |
| 15 min | Instrument and tool roles | Shared understanding of the task |
| 25 min | Clarify the idea with ChatGPT | First request and refined brief |
| 45 min | Build with Codex | Core instrument and checks |
| 25 min | Playtest and repair | Before/after observations; one creative variation |
| 15 min | Showcase | One-minute demonstration |
| 10 min | Reflection and next steps | Completed build record and fork link |

1. Copy your first one-sentence idea into [the build record](docs/BUILD_RECORD.md).
2. Use [the prompt guide](docs/PROMPTS.md) to clarify input, pitch, duration, controls, feedback, and testing.
3. Give Codex your refined brief. Have it inspect the starter, explain a small plan, implement it, and run checks.
4. Pass the core browser checklist before adding **one** variation: a scale, waveform, drawing style, reverse playback, or visual trail.
5. Swap with another pair. Record what they observed, repair one mismatch, and rerun the same checks.
6. Use your shared workspace to organize required behavior, variation, evidence, and unresolved repairs. Mark only what your observations support.
7. Share your fork link and build record. In a one-minute demo: play it, name the variation, show one repair, and name another project where this workflow could help.

## Find your way around

```text
src/instrument.js       Your main task: drawing → sound, plus Stop
src/main.js             Buttons, status messages, and playback lifecycle
src/audio.js            Audio unlock, test tone, and test-tone cleanup
src/drawing.js          Pointer input, stored strokes, canvas rendering
src/geometry.js         Normalized coordinates and path-length helper
src/styles.css          Visual design and responsive layout
index.html              Page structure and controls
tests/geometry.test.js  Starter tests (Node's built-in test runner)
docs/BUILD_RECORD.md    Your brief, playtest results, repairs, reflection
docs/PROMPTS.md         Prompts you can adapt for the workshop
docs/FACILITATOR.md     Event preparation and troubleshooting
```

### Drawing data and audio contract

`playDrawing({ strokes, size, audioContext, onEnded })` receives a **snapshot** of the drawing:

```js
// Each stroke contains points in drawing order.
// Coordinates are normalized: top-left is (0, 0), bottom-right is (1, 1).
const strokes = [
  [{ x: 0.1, y: 0.2 }, { x: 0.4, y: 0.3 }],
  [{ x: 0.6, y: 0.8 }, { x: 0.9, y: 0.6 }],
];
```

`size` contains logical canvas width/height. `strokeLength(stroke, size.width, size.height)` measures path length in pixels. Decide and document a pitch range, duration scale, behavior for taps, and maximum playback time. AudioContext is unlocked for you after a user click. Use low volume and a short gain envelope to avoid clicks.

Return `true` when playback starts and call `onEnded()` when it finishes. Implement `stopPlayback()` to stop and disconnect every voice and cancel pending callbacks, including future scheduled notes. The UI calls it before **Play**, **Test sound**, **Stop**, and **Clear**. Repeated Play must replace existing playback. `stopAllSound()` in `audio.js` only tracks the starter's test tone: instrument voices need their own cleanup.

## Check your work

```sh
npm test             # Starter geometry tests, plus tests you add
npm run build       # Production bundle in dist/
npm run preview     # Serve that bundle locally
```

The GitHub Actions workflow runs install, tests, and build on pushes and pull requests. Browser/audio checks still need to be performed and recorded; a green build alone is not evidence that the instrument works.

- Draw two lines at different heights. Does the higher line sound higher?
- Compare a short line and a long line. Does the longer line play longer?
- Does Play use the current drawing? What about several strokes?
- Does Stop immediately silence audio while preserving the drawing?
- Does Clear erase the canvas **and** cancel all sound, including future notes?
- Try repeated Play, Play → Stop → Play, and Play → Clear. Any leftover sound?
- Check a tap, an empty canvas, a resize, and your creative variation.

Record expected and observed results in [docs/BUILD_RECORD.md](docs/BUILD_RECORD.md). Keep failed and unrun items visible.

## License

MIT. Fork, remix, and share your instrument. The workshop slide deck is not bundled with this repository.
