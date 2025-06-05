// スプライト処理のプレースホルダー
export class Sprite {
  constructor(image, width, height) {
    this.image = image;
    this.width = width;
    this.height = height;
  }
  draw(ctx, x, y) {
    ctx.drawImage(this.image, x, y, this.width, this.height);
  }
}

// 画像読み込みを行うユーティリティ
export async function loadImage(src) {
  const img = new Image();
  if (!src.startsWith('./')) {
    img.crossOrigin = 'anonymous';
  }
  img.src = src;
  await img.decode();
  return img;
}
