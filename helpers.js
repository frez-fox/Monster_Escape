import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT, COLORS } from './constants.js';

/** Vertical sky gradient built from stacked bands (no image needed). */
export function drawSky(scene, depth = 0) {
  const g = scene.add.graphics().setDepth(depth);
  const bands = 48;
  const top = Phaser.Display.Color.IntegerToColor(COLORS.skyTop);
  const bottom = Phaser.Display.Color.IntegerToColor(COLORS.skyBottom);
  for (let i = 0; i < bands; i++) {
    const c = Phaser.Display.Color.Interpolate.ColorWithColor(top, bottom, bands - 1, i);
    g.fillStyle(Phaser.Display.Color.GetColor(c.r, c.g, c.b), 1);
    g.fillRect(0, (GAME_HEIGHT / bands) * i, GAME_WIDTH, GAME_HEIGHT / bands + 1);
  }
  return g;
}

/** One smooth rolling hill silhouette, filled down to the bottom edge. */
export function drawHillLayer(scene, { color, baseY, amplitude, frequency, phase = 0, depth = 1 }) {
  const g = scene.add.graphics().setDepth(depth);
  const pts = [new Phaser.Math.Vector2(0, GAME_HEIGHT)];
  for (let x = 0; x <= GAME_WIDTH; x += 16) {
    const y =
      baseY +
      Math.sin(x * frequency + phase) * amplitude +
      Math.sin(x * frequency * 2.3 + phase * 1.7) * amplitude * 0.35;
    pts.push(new Phaser.Math.Vector2(x, y));
  }
  pts.push(new Phaser.Math.Vector2(GAME_WIDTH, GAME_HEIGHT));
  g.fillStyle(color, 1);
  g.fillPoints(pts, true);
  return g;
}

/** Shared layered backdrop used by loading and menu scenes. */
export function drawLandscapeBackdrop(scene) {
  drawSky(scene, 0);
  drawHillLayer(scene, { color: COLORS.hillFar, baseY: 470, amplitude: 38, frequency: 0.006, phase: 0.8, depth: 1 });
  drawHillLayer(scene, { color: COLORS.hillMid, baseY: 540, amplitude: 34, frequency: 0.0085, phase: 2.1, depth: 2 });
  drawHillLayer(scene, { color: COLORS.hillNear, baseY: 620, amplitude: 26, frequency: 0.011, phase: 4.0, depth: 3 });
}
