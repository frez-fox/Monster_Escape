// Central place for values shared across scenes. Gameplay balance values
// (health, damage, cooldowns...) belong in src/data/, not here.

export const GAME_WIDTH = 1280;
export const GAME_HEIGHT = 720;

export const SCENES = {
  BOOT: 'BootScene',
  PRELOAD: 'PreloadScene',
  MAIN_MENU: 'MainMenuScene',
  LEVEL_SELECT: 'LevelSelectScene',
  GAME: 'GameScene',
  UI: 'UIScene',
  INVENTORY: 'InventoryScene',
  PET: 'PetScene',
  PAUSE: 'PauseScene'
};

// High-level game states (see blueprint section 37).
export const GAME_STATES = {
  MAIN_MENU: 'MAIN_MENU',
  LEVEL_SELECT: 'LEVEL_SELECT',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  INVENTORY: 'INVENTORY',
  PET_MENU: 'PET_MENU',
  GAME_OVER: 'GAME_OVER',
  CHECKPOINT_RESPAWN: 'CHECKPOINT_RESPAWN',
  LEVEL_COMPLETE: 'LEVEL_COMPLETE'
};

// Earthy, forest-derived UI palette (no purple gradients).
export const COLORS = {
  bg: 0x0f1a14,
  skyTop: 0x1c2f27,
  skyBottom: 0x3a5a43,
  hillFar: 0x2a4636,
  hillMid: 0x21382b,
  hillNear: 0x172a20,
  moss: 0x8fae6b,
  mossDark: 0x4f6b3a,
  bark: 0x5b4332,
  parchment: 0xd9e4cf,
  amber: 0xd9a441
};

export const FONT_FAMILY = 'Georgia, "Times New Roman", serif';

export const VERSION = '0.1.0';
