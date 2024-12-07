import React, { useRef, useLayoutEffect } from 'react';
import styles from './styles.module.css';

interface AnchorUnderlineProps {
  speed?: number;
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  [key: string]: any;
}

export const AnchorUnderline: React.FC<AnchorUnderlineProps> = ({ 
  speed = 0.5, 
  children, 
  className = '', 
  href,
  target,
  onClick,
  ...rest 
}) => {
  const invalidated = useRef(true);
  const raf = useRef<number>();
  const timeout = useRef<NodeJS.Timeout>();
  const duration = useRef(0.8);
  const transition = useRef('idle');
  const underline = useRef(false);
  const elRef = useRef<HTMLAnchorElement>(null!);

  const getComputedParams = () => {
    if (invalidated.current === false) return;
    const elContent = elRef.current.textContent;
    const elLength = elContent?.length ?? 1;
    const animTime = Math.min(Math.max(0.4, elLength / (speed * 100)), 1.4);
    const appliedDuration = animTime * speed;
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
    <a
      ref={elRef}
      href={href}
      target={target}
      className={`${styles.anchor_text} font-geist-mono ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...rest}
    >
      {children}
    </a>
  );
};

interface NavLinkProps {
  label: string;
  href?: string;
  target?: string;
}

export const AnimatedNavLink: React.FC<NavLinkProps> = ({ label, href, target }) => {
  return (
    <AnchorUnderline 
      href={href}
      target={target}
      className="font-geist-mono text-[#fef4e4] cursor-pointer"
    >
      {label}
    </AnchorUnderline>
  );
};

export default AnimatedNavLink;