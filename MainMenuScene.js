import Phaser from 'phaser';
import { SCENES, GAME_WIDTH, GAME_HEIGHT, COLORS, FONT_FAMILY, VERSION } from '../utils/constants.js';
import { drawLandscapeBackdrop } from '../utils/helpers.js';

/**
 * Phase 1 placeholder menu. It proves the scene pipeline, scaling and
 * input work. Play / Level Select are wired up in later phases.
 */
export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super(SCENES.MAIN_MENU);
  }

  create() {
    this.cameras.main.fadeIn(400, 15, 26, 20);
    drawLandscapeBackdrop(this);

    const cx = GAME_WIDTH / 2;

    this.add
      .text(cx, 190, 'MONSTER ESCAPE', {
        fontFamily: FONT_FAMILY,
        fontSize: '84px',
        fontStyle: 'bold',
        color: '#d9e4cf',
        stroke: '#0f1a14',
        strokeThickness: 10
      })
      .setOrigin(0.5)
      .setDepth(10);

    this.makeButton(cx, 350, 'Play', false);
    this.makeButton(cx, 430, 'Level Select', false);

    this.add
      .text(cx, 506, 'Gameplay arrives in the next phases', {
        fontFamily: FONT_FAMILY,
        fontSize: '18px',
        fontStyle: 'italic',
        color: '#b9c9ad'
      })
      .setOrigin(0.5)
      .setDepth(10);

    this.add
      .text(16, GAME_HEIGHT - 14, `v${VERSION}`, {
        fontFamily: FONT_FAMILY,
        fontSize: '14px',
        color: '#7f9a6c'
      })
      .setOrigin(0, 1)
      .setDepth(10);
  }

  /** Large touch-friendly button. Enabled buttons get hover feedback. */
  makeButton(x, y, text, enabled) {
    const w = 340;
    const h = 62;
    const bg = this.add.graphics().setDepth(10);
    const draw = (fillColor, alpha, strokeColor) => {
      bg.clear();
      bg.fillStyle(fillColor, alpha);
      bg.fillRoundedRect(x - w / 2, y - h / 2, w, h, 12);
      bg.lineStyle(3, strokeColor, 1);
      bg.strokeRoundedRect(x - w / 2, y - h / 2, w, h, 12);
    };

    draw(COLORS.bark, enabled ? 0.95 : 0.55, enabled ? COLORS.moss : COLORS.mossDark);

    this.add
      .text(x, y, text, {
        fontFamily: FONT_FAMILY,
        fontSize: '30px',
        color: enabled ? '#d9e4cf' : '#8a9a7e'
      })
      .setOrigin(0.5)
      .setDepth(11);

    const zone = this.add.zone(x, y, w, h).setDepth(12).setInteractive({ useHandCursor: enabled });
    if (enabled) {
      zone.on('pointerover', () => draw(0x6e5340, 1, COLORS.amber));
      zone.on('pointerout', () => draw(COLORS.bark, 0.95, COLORS.moss));
    }
    return zone;
  }
}
