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

    const chars = "01{}[]<>=/\\|ハムザアイウエオカキクケコ";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(0);

    for (let i = 0; i < drops.length; i++) {
      drops[i] = Math.random() * -50;
    }

    function draw() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgba(15, 15, 15, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Head of the stream = brightest
        const distFromHead = 0;
        const brightness = Math.random();

        if (brightness > 0.9) {
          // Bright flash - amber
          ctx.fillStyle = "rgba(252, 211, 77, 0.95)";
        } else if (brightness > 0.6) {
          ctx.fillStyle = "rgba(245, 158, 11, 0.6)";
        } else {
          ctx.fillStyle = "rgba(180, 83, 9, 0.25)";
        }

        ctx.fillText(char, x, y);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.6;
      }
    }

    const interval = setInterval(draw, 45);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ opacity: 0.35, zIndex: 1 }}
    />
  );
}
