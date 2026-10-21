# Workshop prompt guide

Adapt these prompts to your idea. Save outputs and observations in `BUILD_RECORD.md`; never paste credentials or personal data into prompts.

## 1. Clarify with ChatGPT

> I want to draw on my trackpad and turn the drawing into music. We have a browser starter with a canvas, stored strokes, a Web Audio test tone, and unimplemented drawing playback. Ask only questions that affect input, pitch, duration, playback controls, visual feedback, and testing. We are a pair of students building a small prototype. Do not implement it yet. After our answers, write a concise brief with observable requirements and one check for each requirement.

Answer as a pair. Confirm that the brief includes visible drawings, higher position → higher pitch, longer path → longer duration, and distinct Play / Stop / Clear behavior. Decide how taps and multiple strokes behave.

## 2. Build with Codex

> Read AGENTS.md, README.md, and src/instrument.js, then inspect the existing drawing, audio, and UI modules. Here is our refined brief: [paste brief]. Explain the smallest implementation plan, then implement only these requirements. Preserve working drawing and Test sound. Use browser Web Audio, no backend or API keys. Make Stop and Clear cancel every scheduled voice and callback. Keep volume low and cap playback length. Add meaningful tests for pitch/duration mapping and playback cancellation where practical. Run npm test and npm run build. Report assumptions, files changed, commands actually run, and browser checks we still need to perform.

## 3. Add one variation

> Our core checklist now passes. Add only this variation: [describe behavior]. Expected result: [observable result]. Preserve: [core requirements]. Update the relevant check and run available tests/build. Tell us how to verify the change in the browser.

## 4. Repair from evidence

> Reproduce this mismatch. Steps: [exact steps]. Expected: [what should happen]. Observed: [what actually happened]. Browser/device: [details]. Identify the cause and make the smallest fix. Preserve [behaviors]. Run available checks and tell us how to rerun the same browser test. Do not mark the problem resolved without evidence.

## 5. Review in ChatGPT Work / your shared workspace

> Organize our refined brief and playtest notes into four sections: required behavior, creative variation, playtest evidence, and repair status. Mark only items supported by the supplied evidence. Keep failures, unrun checks, and unresolved items visible. Do not invent results. Brief: [paste]. Notes: [paste].
