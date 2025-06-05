export class Input {
  #callbacks = [];
  constructor(canvas) {
    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.#callbacks.forEach(cb => cb({ x, y }));
    });
  }
  onClick(cb) {
    this.#callbacks.push(cb);
  }
}
