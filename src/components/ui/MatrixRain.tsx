"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコサシスセソ{}[]<>/\\|=+-*&^%$#@!~";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    // Randomize initial positions
    for (let i = 0; i < drops.length; i++) {
      drops[i] = Math.random() * -100;
    }

    function draw() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgba(10, 10, 15, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Gradient from bright to dim
        const brightness = Math.random();
        if (brightness > 0.95) {
          ctx.fillStyle = "rgba(129, 140, 248, 0.9)"; // bright indigo
          ctx.font = `bold ${fontSize}px monospace`;
        } else if (brightness > 0.8) {
          ctx.fillStyle = "rgba(99, 102, 241, 0.5)"; // medium indigo
          ctx.font = `${fontSize}px monospace`;
        } else {
          ctx.fillStyle = "rgba(67, 56, 202, 0.15)"; // dim indigo
          ctx.font = `${fontSize}px monospace`;
        }

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
}
