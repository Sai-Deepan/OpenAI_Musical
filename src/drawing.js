import { normalizePoint } from './geometry.js';

export function createDrawing(canvas, onChange) {
  const context = canvas.getContext('2d');
  const strokes = [];
  let activePointer = null;
  let activeStroke = null;
  const colors = ['#587e52', '#b28244', '#5b888a', '#98799a'];

  function render() {
    const { width, height } = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
    }
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    context.clearRect(0, 0, width, height);
    context.lineWidth = 3;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    strokes.forEach((stroke, index) => {
      context.strokeStyle = colors[index % colors.length];
      context.fillStyle = context.strokeStyle;
      context.beginPath();
      stroke.forEach((point, i) => {
        if (i === 0) context.moveTo(point.x * width, point.y * height);
        else context.lineTo(point.x * width, point.y * height);
      });
      context.stroke();
      if (stroke.length === 1) {
        context.beginPath();
        context.arc(stroke[0].x * width, stroke[0].y * height, 1.5, 0, Math.PI * 2);
        context.fill();
      }
    });
  }

  function finish(event) {
    if (event.pointerId !== activePointer) return;
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    activePointer = null;
    activeStroke = null;
    onChange(strokes.length);
  }

  canvas.addEventListener('pointerdown', (event) => {
    if (activePointer !== null || !event.isPrimary || event.button !== 0) return;
    event.preventDefault();
    activePointer = event.pointerId;
    canvas.setPointerCapture(event.pointerId);
    activeStroke = [normalizePoint(event.clientX, event.clientY, canvas.getBoundingClientRect())];
    strokes.push(activeStroke);
    render();
    onChange(strokes.length);
  });
  canvas.addEventListener('pointermove', (event) => {
    if (event.pointerId !== activePointer || !activeStroke) return;
    activeStroke.push(normalizePoint(event.clientX, event.clientY, canvas.getBoundingClientRect()));
    render();
  });
  canvas.addEventListener('pointerup', finish);
  canvas.addEventListener('pointercancel', finish);
  canvas.addEventListener('lostpointercapture', finish);
  new ResizeObserver(render).observe(canvas);

  return {
    getStrokes: () => structuredClone(strokes),
    getSize: () => ({ width: canvas.clientWidth, height: canvas.clientHeight }),
    clear() {
      if (activePointer !== null && canvas.hasPointerCapture(activePointer)) canvas.releasePointerCapture(activePointer);
      activePointer = null;
      activeStroke = null;
      strokes.length = 0;
      render();
      onChange(0);
    },
  };
}
