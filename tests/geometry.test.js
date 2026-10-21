import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizePoint, strokeLength } from '../src/geometry.js';

test('pointer coordinates account for the canvas position and clamp captured pointers outside it', () => {
  const rect = { left: 100, top: 50, width: 800, height: 400 };
  assert.deepEqual(normalizePoint(500, 150, rect), { x: 0.5, y: 0.25 });
  assert.deepEqual(normalizePoint(50, 600, rect), { x: 0, y: 1 });
});

test('duration input measures the traveled path, not just the endpoints', () => {
  const straight = [{ x: 0, y: 0 }, { x: 1, y: 0 }];
  const detour = [{ x: 0, y: 0 }, { x: 0.5, y: 1 }, { x: 1, y: 0 }];
  assert.equal(strokeLength(straight, 400, 300), 400);
  assert.ok(strokeLength(detour, 400, 300) > 700);
  assert.equal(strokeLength([{ x: 0, y: 0 }, { x: 1, y: 1 }], 400, 300), 500);
});

test('empty drawings and single taps have zero path length', () => {
  assert.equal(strokeLength([], 400, 300), 0);
  assert.equal(strokeLength([{ x: 0.5, y: 0.5 }], 400, 300), 0);
});
