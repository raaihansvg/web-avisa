"use client";

import { useEffect, useRef } from "react";

export default function Intro() {
  const overlay = useRef<HTMLDivElement>(null);
  const percent = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = overlay.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      // CSS starts at first paint, so hydration never restarts the intro.
      const animation = element.getAnimations()[0];
      const elapsed = typeof animation?.currentTime === "number" ? animation.currentTime : 0;
      const fraction = Math.min(Math.max(elapsed, 0) / 2200, 1);
      if (percent.current) percent.current.textContent = `${Math.round((1 - Math.pow(1 - fraction, 3)) * 100)}%`;
      if (fraction < 1 && !motion.matches) frame = requestAnimationFrame(update);
    };
    if (!motion.matches) frame = requestAnimationFrame(update);
    const onMotion = () => {
      if (motion.matches) cancelAnimationFrame(frame);
    };
    motion.addEventListener("change", onMotion);
    return () => {
      cancelAnimationFrame(frame);
      motion.removeEventListener("change", onMotion);
    };
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .1 });
    document.querySelectorAll(".reveal-item").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <div ref={overlay} className="intro" aria-hidden="true">
    <div className="intro-copy">
      <p className="intro-name">Avisa Traghania</p>
      <p className="intro-label">Portfolio intro</p>
      <div className="intro-track"><div /></div>
      <span ref={percent} className="intro-percent">0%</span>
    </div>
  </div>;
}
