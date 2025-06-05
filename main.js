import { initCanvas } from './engine/canvas.js';
import { Input } from './engine/input.js';
import { Scene } from './engine/scene.js';
import { World } from './game/world.js';
import { Player } from './game/player.js';
import { loadImage } from './engine/sprite.js';

const { canvas, ctx } = initCanvas('gameCanvas');
const input = new Input(canvas);
const scene = new Scene();

// リポジトリには画像を含めないため、外部URLからタイル画像を取得する
const tileUrl = 'https://dummyimage.com/32x32/00aa00/ffffff.png&text=%2B';
const tileImage = await loadImage(tileUrl);
const world = new World(10, 10, tileImage);
const player = new Player(5, 5);

scene.addObject(world);
scene.addObject(player);

input.onClick(({ x, y }) => {
  const tile = world.screenToTile(x, y, canvas);
  player.moveToTile(tile.x, tile.y);
});

scene.start(ctx);

