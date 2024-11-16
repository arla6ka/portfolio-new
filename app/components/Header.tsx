// components/Header.tsx
"use client";
import React, { useRef, useLayoutEffect } from 'react';
import styles from './styles.module.css';

interface NavLinkProps {
  label: string;
}

const AnimatedNavLink: React.FC<NavLinkProps> = ({ label }) => {
  const invalidated = useRef(true);
  const raf = useRef<number>();
  const timeout = useRef<NodeJS.Timeout>();
  const duration = useRef(0.8);
  const transition = useRef('idle');
  const underline = useRef(false);
  const elRef = useRef<HTMLSpanElement>(null!);

  const getComputedParams = () => {
    if (invalidated.current === false) return;
    const elContent = elRef.current.textContent;
    const elLength = elContent?.length ?? 1;
    const animTime = Math.min(Math.max(0.4, elLength / (0.6 * 100)), 1.4);
    const appliedDuration = animTime * 0.6;
    elRef.current.style.setProperty('--underline-duration', `${appliedDuration}s`);
    duration.current = appliedDuration;
  };

  const animateIn = () => {
    getComputedParams();
    cancelAnimationFrame(raf.current!);
    raf.current = requestAnimationFrame(() => {
      transition.current = 'in';
      elRef.current.dataset.state = 'in';
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        transition.current = 'idle';
        if (underline.current !== true) {
          animateOut();
        }
      }, duration.current * 1000 * 0.65);
    });
  };

  const animateOut = () => {
    elRef.current.dataset.state = 'out';
    transition.current = 'out';
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      transition.current = 'idle';
      if (underline.current === true) {
        animateIn();
      }
    }, duration.current * 1000 * 0.9);
  };

  const handleMouseEnter = () => {
    underline.current = true;
    if (transition.current !== 'idle') return;
    animateIn();
  };

  const handleMouseLeave = () => {
    underline.current = false;
    if (transition.current !== 'idle') return;
    animateOut();
  };

  useLayoutEffect(() => {
    return () => {
      clearTimeout(timeout.current);
      cancelAnimationFrame(raf.current!);
    };
  }, []);

  return (
    <span
      ref={elRef}
      className={`${styles.anchor_text} text-[#fef4e4] cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </span>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-neutral-900">
      <div className="flex justify-between items-center px-16 py-6 text-[16px] leading-none border-b border-zinc-500/30">
        <h1 
          className="text-[#fef4e4]"
          style={{ fontFamily: '"Overused Grotesk", sans-serif', fontWeight: 400 }}
        >
          Arlan <span className="">@Design Engineer</span>
        </h1>
        <nav className="flex gap-6 items-center">
          <AnimatedNavLink label="Resume" />
          <AnimatedNavLink label="Linkedin" />
        </nav>
      </div>
    </header>
  );
};

export default Header;