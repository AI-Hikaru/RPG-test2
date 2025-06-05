export function initCanvas(id) {
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext('2d');
  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resize);
  resize();
  return { canvas, ctx };
}
