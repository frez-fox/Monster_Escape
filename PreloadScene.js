import Phaser from 'phaser';
import { SCENES, GAME_WIDTH, COLORS, FONT_FAMILY } from '../utils/constants.js';
import { drawLandscapeBackdrop } from '../utils/helpers.js';

const MIN_DISPLAY_MS = 900; // keep the loading screen readable even when loading is instant

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super(SCENES.PRELOAD);
  }

  preload() {
    drawLandscapeBackdrop(this);

    const cx = GAME_WIDTH / 2;

    this.add
      .text(cx, 250, 'MONSTER ESCAPE', {
        fontFamily: FONT_FAMILY,
        fontSize: '72px',
        fontStyle: 'bold',
        color: '#d9e4cf',
        stroke: '#0f1a14',
        strokeThickness: 8
      })
      .setOrigin(0.5)
      .setDepth(10);

    const barW = 420;
    const barH = 14;
    const barX = cx - barW / 2;
    const barY = 360;

    const track = this.add.graphics().setDepth(10);
    track.fillStyle(0x0f1a14, 0.75);
    track.fillRoundedRect(barX - 4, barY - 4, barW + 8, barH + 8, 10);

    const fill = this.add.graphics().setDepth(11);
    const label = this.add
      .text(cx, barY + 40, 'Loading', { fontFamily: FONT_FAMILY, fontSize: '20px', color: '#b9c9ad' })
      .setOrigin(0.5)
      .setDepth(11);

    const drawFill = (v) => {
      fill.clear();
      fill.fillStyle(COLORS.moss, 1);
      if (v > 0) fill.fillRoundedRect(barX, barY, Math.max(barH, barW * v), barH, 7);
    };
    drawFill(0);

    this.load.on('progress', drawFill);
    this.load.on('complete', () => {
      drawFill(1);
      label.setText('Ready');
    });

    // Real art/audio loading is added here as later phases introduce assets:
    // this.load.image('key', 'assets/...');
  }

  create() {
    this.time.delayedCall(MIN_DISPLAY_MS, () => {
      this.cameras.main.fadeOut(350, 15, 26, 20);
      this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
        this.scene.start(SCENES.MAIN_MENU);
      });
    });
  }
}
