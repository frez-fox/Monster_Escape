import Phaser from 'phaser';
import './styles/main.css';
import { GAME_WIDTH, GAME_HEIGHT, COLORS } from './utils/constants.js';
import BootScene from './scenes/BootScene.js';
import PreloadScene from './scenes/PreloadScene.js';
import MainMenuScene from './scenes/MainMenuScene.js';

// Fixed logical resolution, scaled to fit any screen (landscape preferred).
const config = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  backgroundColor: COLORS.bg,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 0 }, debug: false } // gravity is set per level in Phase 2+
  },
  input: { activePointers: 3 },
  // New scenes are registered here as each phase adds them.
  scene: [BootScene, PreloadScene, MainMenuScene]
};

const game = new Phaser.Game(config);

// Handy for debugging in the browser console during development.
window.__MONSTER_ESCAPE__ = game;
