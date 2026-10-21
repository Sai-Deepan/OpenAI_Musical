# Facilitator guide

## Before the event

- Replace the starter-repository placeholder on the deck's setup slide with `https://github.com/Sai-Deepan/OpenAI_Musical`.
- Test the participant path from a fresh fork: Node 24, `npm ci`, `npm run dev`, draw, Test sound.
- Confirm participants can fork on GitHub and access ChatGPT/Codex. The running instrument itself needs no API key or model call.
- Arrange pairs, headphones where possible, power, and network access to GitHub and npm. Install dependencies before the event if connectivity will be limited.
- Pick one consistent way to run the starter: local editor + Node, or a hosted workspace with a forwarded Vite port. This repo does not provision a paid hosting service.
- Use current Chrome, Edge, Firefox, or Safari; confirm sound on the actual classroom devices.
- Keep the check-in, check-out, studio-hours, and community links in the deck/event materials. They are not baked into this reusable starter.
- Don't distribute a completed instrument as the starting branch: participants build `src/instrument.js` during the core activity.

## Pacing (150 minutes)

15 welcome/setup · 15 tool roles · 25 clarification · 45 core build · 25 playtest/repair · 15 showcase · 10 reflection.

At setup, verify a visible stroke and an audible test tone. During clarification, ask for a concrete check for each rule. Have pairs switch roles after first playback. Ask them to pass core checks before adding one variation. For peer testing, the visiting pair should use the instrument without an explanation. Collect evidence, not claims of completion.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| `npm` not found / Vite engine error | Install Node 24 LTS; `.nvmrc` is included for nvm users. |
| `npm ci` cannot download | Check network access to `registry.npmjs.org`; retain TLS verification. |
| Browser cannot reach Vite | Open the printed local address, or forward port 5173 in the hosted workspace. If busy, Vite prints a different port. |
| Trackpad scrolls instead of drawing | Click and hold with one finger while moving. Two-finger scrolling is not drawing input. |
| No test sound | Click Test sound; check OS/tab mute, output device, headphones, browser audio permissions. Try another supported browser. The app cannot verify physical audibility. |
| Play is silent and shows a workshop task | Expected in the base repo. Implement `src/instrument.js`. |
| A finished instrument continues after Clear | Inspect instrument-owned scheduled voices and callbacks; clearing the canvas alone does not cancel audio. |
| Automated checks pass but music is wrong | Run the browser checklist; starter geometry tests do not test completed musical behavior. |

## Submission and showcase

Collect each pair's fork URL and completed `docs/BUILD_RECORD.md` through your event check-out flow. A showcase should include playback, the variation, one observed failure, and evidence after repair. Request student permission before sharing their project story publicly.
