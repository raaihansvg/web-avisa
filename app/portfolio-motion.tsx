"use client";

import { animate, motion, useInView, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";

const customEase = [0.22, 1, 0.36, 1] as const;
const destinations = [
  ["about", "About"], ["experience", "Work"], ["expertise", "Skills"],
  ["achievements", "Honors"], ["contact", "Contact"],
] as const;

export function PortfolioNav() {
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const menu = useRef<HTMLDetailsElement>(null);
  const positions = useRef<{ id: string; top: number }[]>([]);
  const currentSection = useRef("");
  const pageHeight = useRef(Infinity);
  const scrollSurface = useRef(false);
  const updateActive = useCallback((value: number) => {
    const surface = value > 50;
    if (surface !== scrollSurface.current) {
      scrollSurface.current = surface;
      setScrolled(surface);
    }
    const marker = value + window.innerHeight * .35;
    const section = [...positions.current].reverse().find(item => item.top <= marker)?.id ?? "hero";
    const next = value + window.innerHeight >= pageHeight.current - 2 ? "contact" : section === "hero" ? "" : section;
    if (next !== currentSection.current) {
      currentSection.current = next;
      setActive(next);
    }
  }, []);
  useMotionValueEvent(scrollY, "change", updateActive);

  useEffect(() => {
    const sections = ["hero", ...destinations.map(([id]) => id)]
      .map(id => document.getElementById(id)).filter((element): element is HTMLElement => element !== null);
    const measure = () => {
      positions.current = sections.map(element => ({ id: element.id, top: element.getBoundingClientRect().top + window.scrollY }));
      pageHeight.current = document.documentElement.scrollHeight;
    };
    measure();
    const onResize = () => { measure(); updateActive(window.scrollY); };
    const observer = "ResizeObserver" in window ? new ResizeObserver(onResize) : undefined;
    sections.forEach(section => observer?.observe(section));
    window.addEventListener("resize", onResize);
    return () => { observer?.disconnect(); window.removeEventListener("resize", onResize); };
  }, [updateActive]);

  return <header className={`portfolio-header${scrolled ? " is-scrolled" : ""}`}>
    <nav className="nav-pill" aria-label="Main navigation">
      <a href="#hero" className="nav-brand" aria-label="Avisa — back to top"><span aria-hidden="true">A</span> AVISA</a>
      <ul className="nav-destinations">
        {destinations.slice(0, 4).map(([id, label]) => <li key={id}>
          <a href={`#${id}`} aria-current={active === id ? "location" : undefined}>
            {label}
            {active === id && <motion.span className="nav-indicator" layoutId="nav-indicator" transition={{ duration: reduced ? 0 : .8, ease: customEase }} />}
          </a>
        </li>)}
      </ul>
      <a href="#contact" className="nav-contact" aria-current={active === "contact" ? "location" : undefined}>Contact</a>
    </nav>
    <details className="mobile-nav" ref={menu}>
      <summary>Menu <span aria-hidden="true">＋</span></summary>
      <nav aria-label="Mobile navigation">
        {destinations.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => {
          if (menu.current) menu.current.open = false;
          document.getElementById(id)?.focus({ preventScroll: true });
        }}>{label}</a>)}
      </nav>
    </details>
  </header>;
}

export function HeroScene({ portrait, metadata }: { portrait: ReactNode; metadata: ReactNode }) {
  const scene = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: scene, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textX = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -25]);
  return <div ref={scene} className="hero-scene">
    <motion.div className="hero-marquee" aria-hidden="true" style={{ y: reduced ? 0 : textY, x: reduced ? 0 : textX }}>
      <div className="hero-marquee-track"><span>AVISA TRAGHANIA&nbsp;·&nbsp;</span><span>AVISA TRAGHANIA&nbsp;·&nbsp;</span></div>
    </motion.div>
    <motion.div className="hero-subject" style={{ y: reduced ? 0 : portraitY }}>
      <div className="portrait-shadow" aria-hidden="true"><span /><span /></div>
      <div className="hero-portrait">{portrait}</div>
    </motion.div>
    {metadata}
  </div>;
}

export function GpaCounter() {
  const element = useRef<HTMLSpanElement>(null);
  const inView = useInView(element, { once: true, amount: 1 });
  const reduced = useReducedMotion();
  const value = useMotionValue(3.76);
  // Critically damped, no overshoot. Only text is updated; the page never re-renders per frame.
  const smooth = useSpring(value, { stiffness: 300, damping: 40, restDelta: .0001 });
  useMotionValueEvent(smooth, "change", current => {
    if (element.current) element.current.textContent = Math.min(3.76, Math.max(3, current)).toFixed(2);
  });
  useEffect(() => {
    if (!inView || reduced) {
      smooth.jump(3.76);
      return;
    }
    smooth.jump(3);
    value.set(3);
    const playback = animate(value, 3.76, { duration: 1.2, ease: customEase });
    return () => playback.stop();
  }, [inView, reduced, smooth, value]);
  return <span aria-label="3.76"><span ref={element} aria-hidden="true">3.76</span></span>;
}
