'use client';
import { useEffect, useRef } from 'react';

const N = 8;

function walk(): [number, number][] {
  let r = Math.floor(Math.random() * N), c = 0;
  const p: [number, number][] = [[0, r]];
  while (c < N - 1) {
    if (Math.random() < 0.55) c++;
    else { const nr = r + (Math.random() < 0.5 ? -1 : 1); if (nr >= 0 && nr < N) r = nr; else c++; }
    p.push([c, r]);
  }
  return p;
}

export default function HeroGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const cells = () => Array.from(ref.current?.children ?? []) as HTMLElement[];

  useEffect(() => {
    const cs = cells();
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      walk().forEach(([c, r]) => cs[r * N + c].classList.add('on'));
      return;
    }
    let alive = true, next: number | undefined;
    const later = (fn: () => void, ms: number) => setTimeout(() => alive && fn(), ms);
    const cycle = () => {
      const cur = walk().map(([c, r]) => cs[r * N + c]);
      cur.forEach((el, k) => later(() => el.classList.add('on'), k * 85));
      const hold = cur.length * 85 + 1400;
      later(() => cur.forEach((el, k) => later(() => el.classList.remove('on'), k * 45)), hold);
      next = window.setTimeout(() => alive && cycle(), hold + cur.length * 45 + 300);
    };
    next = window.setTimeout(cycle, 400);
    return () => { alive = false; clearTimeout(next); };
  }, []);

  const onMove = (e: React.PointerEvent) => {
    cells().forEach((el) => {
      const b = el.getBoundingClientRect();
      const d = Math.hypot(e.clientX - (b.left + b.width / 2), e.clientY - (b.top + b.height / 2));
      el.style.setProperty('--s', String(1 + 0.45 * Math.max(0, 1 - d / 120)));
    });
  };
  const onLeave = () => cells().forEach((el) => el.style.removeProperty('--s'));

  return (
    <div id="grid" ref={ref} role="img" aria-label="A grid of squares with a red path of connected cells"
         onPointerMove={onMove} onPointerLeave={onLeave}>
      {Array.from({ length: N * N }, (_, i) => <span key={i} />)}
    </div>
  );
}
