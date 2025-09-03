export class Perlin2D {
  private randomGradient(ix: number, iy: number) {
    const s = Math.sin(ix * 127.1 + iy * 311.7) * 43758.5453123;
    const t = s - Math.floor(s);
    const ang = t * Math.PI * 2;
    return { x: Math.cos(ang), y: Math.sin(ang) };
  }
  private dot(ix: number, iy: number, x: number, y: number) {
    const g = this.randomGradient(ix, iy);
    const dx = x - ix;
    const dy = y - iy;
    return dx * g.x + dy * g.y;
  }
  private s(t: number) {
    return t * t * (3 - 2 * t);
  }
  private lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
  }
  noise(x: number, y: number) {
    const x0 = Math.floor(x), x1 = x0 + 1;
    const y0 = Math.floor(y), y1 = y0 + 1;
    const sx = this.s(x - x0);
    const sy = this.s(y - y0);
    const n0 = this.dot(x0, y0, x, y);
    const n1 = this.dot(x1, y0, x, y);
    const ix0 = this.lerp(n0, n1, sx);
    const n2 = this.dot(x0, y1, x, y);
    const n3 = this.dot(x1, y1, x, y);
    const ix1 = this.lerp(n2, n3, sx);
    return this.lerp(ix0, ix1, sy);
  }
}

