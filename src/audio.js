// Audio is created/resumed only after a user clicks a control.
let context;
const voices = new Set();

export async function unlockAudio() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) throw new Error('Web Audio is unavailable. Try a current Chrome, Edge, Firefox, or Safari browser.');
  context ??= new AudioContext();
  if (context.state === 'suspended') await context.resume();
  if (context.state !== 'running') throw new Error('Audio could not start. Check browser audio permissions and try again.');
  return context;
}

export function stopAllSound() {
  for (const oscillator of voices) {
    try { oscillator.stop(); } catch { /* A voice may already have ended. */ }
    oscillator.disconnect();
  }
  voices.clear();
}

export function playTestTone(audioContext) {
  stopAllSound();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const now = audioContext.currentTime;
  oscillator.type = 'sine';
  oscillator.frequency.value = 440;
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
  gain.gain.linearRampToValueAtTime(0, now + 0.35);
  oscillator.connect(gain).connect(audioContext.destination);
  voices.add(oscillator);
  oscillator.onended = () => {
    voices.delete(oscillator);
    oscillator.disconnect();
    gain.disconnect();
  };
  oscillator.start(now);
  oscillator.stop(now + 0.36);
}
