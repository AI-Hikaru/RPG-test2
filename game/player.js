export class Player {
  #x;
  #y;
  #targetX;
  #targetY;
  constructor(x, y) {
    this.#x = x;
    this.#y = y;
    this.#targetX = x;
    this.#targetY = y;
  }
  moveToTile(tx, ty) {
    this.#targetX = tx;
    this.#targetY = ty;
  }
  update(dt) {
    const speed = 5; // tiles per second
    const dx = this.#targetX - this.#x;
    const dy = this.#targetY - this.#y;
    const dist = Math.hypot(dx, dy);
    if (dist > 0.01) {
      const step = Math.min(speed * dt, dist);
      this.#x += (dx / dist) * step;
      this.#y += (dy / dist) * step;
    }
  }
  draw(ctx) {
    const tileSize = 32;
    const isoX = (this.#x - this.#y) * tileSize + ctx.canvas.width / 2;
    const isoY = (this.#x + this.#y) * tileSize / 2 + 50;
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(isoX, isoY - 16, 10, 0, Math.PI * 2);
    ctx.fill();
  }
}
