/**
 * YOUR WORKSHOP STARTS HERE.
 *
 * strokes: Array of strokes; each stroke is an array of { x, y } points.
 * x and y are normalized to 0..1. y=0 is the top (higher pitch).
 * size: { width, height } in logical canvas pixels.
 * audioContext: an already-unlocked Web Audio AudioContext.
 * onEnded: call when the entire drawing has finished playing.
 *
 * Build your refined brief, rather than adding every possible feature:
 * 1. Map vertical position to pitch.
 * 2. Map line length to duration (see strokeLength in geometry.js).
 * 3. Schedule the current drawing; decide how to handle multiple strokes.
 * 4. Keep handles to scheduled audio so stopPlayback can stop it immediately.
 * 5. Return true when playback is implemented; call onEnded when done.
 *
 * Use a quiet gain envelope and keep a safe maximum playback duration.
 * Do not request API keys: this can all run locally using Web Audio.
 */
export function playDrawing({ strokes, size, audioContext, onEnded }) {
  // TODO: implement with your pair and Codex after writing your brief.
  return false;
}

export function stopPlayback() {
  // TODO: stop/disconnect every scheduled voice and cancel playback callbacks.
  // This is called before a new Play, Test sound, Stop, and Clear.
}
