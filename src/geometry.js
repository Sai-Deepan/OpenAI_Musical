// Points are normalized to 0..1, so drawings survive a canvas resize.
export function normalizePoint(clientX, clientY, rect) {
  return {
    x: Math.max(0, Math.min(1, (clientX - rect.left) / rect.width)),
    y: Math.max(0, Math.min(1, (clientY - rect.top) / rect.height)),
  };
}

// Length in logical canvas pixels. Useful for your duration mapping.
export function strokeLength(points, width, height) {
  return points.slice(1).reduce((length, point, index) => {
    const previous = points[index];
    return length + Math.hypot((point.x - previous.x) * width, (point.y - previous.y) * height);
  }, 0);
}
