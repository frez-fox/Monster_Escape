import Phaser from 'phaser';
import { SCENES, GAME_STATES } from '../utils/constants.js';

/**
 * First scene. Loads nothing heavy: it prepares global game state and
 * hands off to PreloadScene, which owns the loading screen.
 */
export default class BootScene extends Phaser.Scene {
  constructor() {
    super(SCENES.BOOT);
  }

  create() {
    // Single registry entry for coarse game state instead of loose globals.
    this.registry.set('gameState', GAME_STATES.MAIN_MENU);

    // Allow several simultaneous touches (joystick + buttons later on).
    this.input.addPointer(2);

    this.scene.start(SCENES.PRELOAD);
  }
}
