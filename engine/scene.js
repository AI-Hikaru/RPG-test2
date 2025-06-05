export class Scene {
  #objects = [];
  #ctx;
  #lastTime = 0;
  addObject(obj) {
    this.#objects.push(obj);
  }
  start(ctx) {
    this.#ctx = ctx;
    requestAnimationFrame(this.#loop.bind(this));
  }
  #loop(t) {
    const dt = (t - this.#lastTime) / 1000;
    this.#lastTime = t;
    this.#update(dt);
    this.#render();
    requestAnimationFrame(this.#loop.bind(this));
  }
  #update(dt) {
    this.#objects.forEach(obj => obj.update?.(dt));
  }
  #render() {
    this.#ctx.clearRect(0, 0, this.#ctx.canvas.width, this.#ctx.canvas.height);
    this.#objects.forEach(obj => obj.draw?.(this.#ctx));
  }
}
