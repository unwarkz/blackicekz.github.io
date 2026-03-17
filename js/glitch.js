(function() {
  'use strict';

  // Pixelated glitch canvas effect
  // Creates colored block glitches, horizontal scan lines and pixel artifacts on black background

  function initGlitch() {
    const canvas = document.getElementById('glitch-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let animFrame;
    let lastGlitch = 0;
    let glitchTimeout = 0;

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    const PIXEL = 4;

    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function drawGlitch(timestamp) {
      ctx.fillStyle = 'rgba(1, 14, 15, 0.15)';
      ctx.fillRect(0, 0, width, height);

      const doGlitch = timestamp - lastGlitch > glitchTimeout;

      if (doGlitch) {
        lastGlitch = timestamp;
        glitchTimeout = rand(100, 2000);

        const numStrips = rand(1, 8);

        for (let i = 0; i < numStrips; i++) {
          const y = rand(0, height - PIXEL);
          const stripH = rand(PIXEL, PIXEL * rand(2, 40));
          const shift = rand(-80, 80);

          if (width > 0 && stripH > 0) {
            try {
              const imageData = ctx.getImageData(0, y, width, Math.min(stripH, height - y));
              ctx.putImageData(imageData, shift, y);
            } catch(e) {
              // getImageData can fail on cross-origin canvases or when canvas is 0-size; safe to skip
            }
          }

          const colors = ['rgba(191,21,35,0.15)', 'rgba(0,255,200,0.08)', 'rgba(255,255,255,0.06)', 'rgba(0,100,255,0.06)'];
          ctx.fillStyle = colors[rand(0, colors.length - 1)];
          ctx.fillRect(0, y, width, Math.min(stripH, height - y));
        }

        const numBlocks = rand(0, 30);
        for (let i = 0; i < numBlocks; i++) {
          const bx = rand(0, width / PIXEL - 1) * PIXEL;
          const by = rand(0, height / PIXEL - 1) * PIXEL;
          const bw = rand(1, 20) * PIXEL;
          const bh = rand(1, 5) * PIXEL;
          const alpha = (rand(5, 30)) / 100;
          ctx.fillStyle = `rgba(191,21,35,${alpha})`;
          ctx.fillRect(bx, by, bw, bh);
        }

        if (rand(0, 3) === 0) {
          const scanY = rand(0, height);
          ctx.fillStyle = 'rgba(255,255,255,0.03)';
          ctx.fillRect(0, scanY, width, 1);
        }
      }

      for (let i = 0; i < 20; i++) {
        const px = rand(0, width / PIXEL - 1) * PIXEL;
        const py = rand(0, height / PIXEL - 1) * PIXEL;
        const alpha = rand(1, 8) / 100;
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fillRect(px, py, PIXEL, PIXEL);
      }

      animFrame = requestAnimationFrame(drawGlitch);
    }

    ctx.fillStyle = '#010e0f';
    ctx.fillRect(0, 0, width, height);

    animFrame = requestAnimationFrame(drawGlitch);

    window.addEventListener('beforeunload', function() {
      cancelAnimationFrame(animFrame);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlitch);
  } else {
    initGlitch();
  }
})();
