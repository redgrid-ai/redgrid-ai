'use client';
import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react';

type Props = { as?: ElementType; delay?: number; className?: string; children: ReactNode };

/** Renders the real element (h2, li, article…) and eases it in when it scrolls into view. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children }: Props) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.classList.add('in'); return; }
    let t: number | undefined;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      el.classList.add('in');
      io.disconnect();
      t = window.setTimeout(() => el.classList.remove('rv', 'in'), 2400);
    }, { threshold: 0.15 });
    io.observe(el);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  return (
    <Tag ref={ref} className={`rv ${className}`.trim()} style={{ '--d': `${(delay % 4) * 0.1}s` } as CSSProperties}>
      {children}
    </Tag>
  );
}
