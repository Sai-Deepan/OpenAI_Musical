import './styles.css';
import { createDrawing } from './drawing.js';
import { unlockAudio, playTestTone, stopAllSound } from './audio.js';
import { playDrawing, stopPlayback } from './instrument.js';

const canvas = document.querySelector('#drawing-canvas');
const status = document.querySelector('#status');
const placeholder = document.querySelector('#canvas-placeholder');
const count = document.querySelector('#stroke-count');
const say = (message) => { status.textContent = message; };
const drawing = createDrawing(canvas, (length) => {
  count.textContent = `${length} ${length === 1 ? 'stroke' : 'strokes'}`;
  placeholder.hidden = length > 0;
});

// Prevent an async audio resume from starting sound after Stop or Clear.
let action = 0;
function stop() {
  action += 1;
  stopPlayback();
  stopAllSound();
}

document.querySelector('#test-sound').addEventListener('click', async () => {
  stop();
  const currentAction = action;
  try {
    const audioContext = await unlockAudio();
    if (currentAction !== action) return;
    playTestTone(audioContext);
    say('Test tone played: A4 (440 Hz). If you heard it, your audio is ready.');
  } catch (error) { if (currentAction === action) say(error.message); }
});

document.querySelector('#play').addEventListener('click', async () => {
  stop();
  const currentAction = action;
  const strokes = drawing.getStrokes();
  if (!strokes.length) return say('Draw a line first, then press Play drawing.');
  try {
    const audioContext = await unlockAudio();
    if (currentAction !== action) return;
    say('Playing your drawing…');
    const started = playDrawing({
      strokes,
      size: drawing.getSize(),
      audioContext,
      onEnded: () => { if (currentAction === action) say('Playback finished. Draw, change, and play again.'); },
    });
    if (!started) say('Your next task: connect drawing to sound in src/instrument.js. Test sound works already.');
  } catch (error) { if (currentAction === action) say(error.message); }
});
document.querySelector('#stop').addEventListener('click', () => { stop(); say('Stopped. Your drawing is still here.'); });
document.querySelector('#clear').addEventListener('click', () => { stop(); drawing.clear(); say('Canvas cleared and sound stopped. Start a new drawing.'); });
window.addEventListener('pagehide', stop);
