"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const pointsRef = useRef<Point[]>([]);
  const animRef = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  const initPoints = useCallback((w: number, h: number) => {
    const count = Math.floor((w * h) / 9000);
    const pts: Point[] = [];
    for (let i = 0; i < count; i++) {
      pts.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 0.5,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.025,
      });
    }
    pointsRef.current = pts;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const resize = () => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w;
      canvas.height = h;
      setDimensions({ w, h });
      initPoints(w, h);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [initPoints]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.w === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { w, h } = dimensions;
    const connectionDist = 130;
    const mouseDist = 250;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const pts = pointsRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dxm = mx - p.x;
        const dym = my - p.y;
        const distMouse = Math.sqrt(dxm * dxm + dym * dym);
        if (distMouse < mouseDist) {
          const force = (mouseDist - distMouse) / mouseDist;
          p.x -= (dxm / distMouse) * force * 3;
          p.y -= (dym / distMouse) * force * 3;
        }
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const opacity = 1 - dist / connectionDist;
            const dxm1 = mx - pts[i].x;
            const dym1 = my - pts[i].y;
            const nearMouse = Math.sqrt(dxm1 * dxm1 + dym1 * dym1) < mouseDist;
            ctx.strokeStyle = nearMouse
              ? `rgba(212, 160, 23, ${opacity * 0.5})`
              : `rgba(212, 160, 23, ${opacity * 0.08})`;
            ctx.lineWidth = nearMouse ? 1 : 0.5;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of pts) {
        const dxm = mx - p.x;
        const dym = my - p.y;
        const distMouse = Math.sqrt(dxm * dxm + dym * dym);
        const nearMouse = distMouse < mouseDist;
        const pulseScale = 0.7 + Math.sin(p.pulse) * 0.3;
        const r = p.radius * pulseScale * (nearMouse ? 2 : 1);

        if (nearMouse) {
          const closeness = 1 - distMouse / mouseDist;
          ctx.shadowColor = "rgba(212, 160, 23, 0.9)";
          ctx.shadowBlur = 20 + closeness * 25;
          ctx.fillStyle = `rgba(255, 215, 0, ${0.6 + closeness * 0.4})`;
        } else {
          ctx.shadowColor = "rgba(212, 160, 23, 0.3)";
          ctx.shadowBlur = 4;
          ctx.fillStyle = `rgba(212, 160, 23, ${0.15 + Math.sin(p.pulse) * 0.1})`;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={(e) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      }}
      onMouseLeave={() => { mouseRef.current = { x: -1000, y: -1000 }; }}
      className="absolute inset-0 w-full h-full"
    />
  );
}
