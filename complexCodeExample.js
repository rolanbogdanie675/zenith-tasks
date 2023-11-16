// filename: complexCodeExample.js

// This code generates a fractal pattern known as the Mandelbrot Set
// The fractal is rendered using HTML5 Canvas
// The code implements complex number arithmetic and color mapping

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const MAX_ITER = 1000;
const ZOOM = 200;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const getColor = (n) => {
  const brightness = (n / MAX_ITER) * 255;
  const r = Math.floor(brightness);
  const g = Math.floor(brightness / 2);
  const b = Math.floor(brightness / 3);
  return `rgb(${r}, ${g}, ${b})`;
};

const mandelbrot = (x, y) => {
  const zx = x / ZOOM - WIDTH / 2 / ZOOM;
  const zy = y / ZOOM - HEIGHT / 2 / ZOOM;

  let cx = zx;
  let cy = zy;

  let i = 0;
  for (; i < MAX_ITER; i++) {
    const xt = zx * zx - zy * zy + cx;
    const yt = 2 * zx * zy + cy;
    zx = xt;
    zy = yt;

    if (zx * zx + zy * zy > 4) {
      break;
    }
  }

  return i;
};

const renderMandelbrot = () => {
  for (let x = 0; x < WIDTH; x++) {
    for (let y = 0; y < HEIGHT; y++) {
      const iterations = mandelbrot(x, y);
      const color = getColor(iterations);
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 1, 1);
    }
  }
};

renderMandelbrot();