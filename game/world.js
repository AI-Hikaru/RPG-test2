export class World {
  #width;
  #height;
  #tile;
  constructor(w, h, tile) {
    this.#width = w;
    this.#height = h;
    this.#tile = tile;
  }
  screenToTile(x, y, canvas) {
    const tileSize = 32;
    x -= canvas.width / 2;
    y -= 50;
    const tx = (y / (tileSize / 2) + x / tileSize) / 2;
    const ty = (y / (tileSize / 2) - x / tileSize) / 2;
    return { x: tx, y: ty };
  }
  update() {}
  draw(ctx) {
    const tileSize = 32;
    const centerX = ctx.canvas.width / 2;
    for (let y = 0; y < this.#height; y++) {
      for (let x = 0; x < this.#width; x++) {
        const isoX = (x - y) * tileSize + centerX;
        const isoY = (x + y) * tileSize / 2 + 50;
        if (this.#tile) {
          ctx.drawImage(this.#tile, isoX - 16, isoY - 16, 32, 32);
        } else {
          ctx.strokeStyle = '#888';
          ctx.beginPath();
          ctx.moveTo(isoX, isoY);
          ctx.lineTo(isoX + tileSize, isoY + tileSize / 2);
          ctx.lineTo(isoX, isoY + tileSize);
          ctx.lineTo(isoX - tileSize, isoY + tileSize / 2);
          ctx.closePath();
          ctx.stroke();
        }
      }
    }
  }
}
