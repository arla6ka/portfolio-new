import React, { useRef, useLayoutEffect } from 'react';
import styles from './styles.module.css';

interface NavLinkProps {
  label: string;
}

const AnchorUnderline = ({ 
  speed = 0.5, 
  children, 
  className = '', 
  ...rest 
}: { 
  speed?: number;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  const invalidated = useRef(true);
  const raf = useRef<number>();
  const timeout = useRef<NodeJS.Timeout>();
  const duration = useRef(0.8);
  const transition = useRef('idle');
  const underline = useRef(false);
  const elRef = useRef<HTMLAnchorElement>(null!);

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

  const getComputedParams = () => {
    if (invalidated.current === false) return;
    if (!speed) {
      const elStyle = window.getComputedStyle(elRef.current);
      const appliedDuration = parseFloat(elStyle.getPropertyValue('--underline-duration'));
      duration.current = appliedDuration;
    } else {
      const elContent = elRef.current.textContent;
      const elLength = elContent?.length ?? 1;
      const animTime = Math.min(Math.max(0.4, elLength / (speed * 100)), 1.4);
      const appliedDuration = animTime * speed;
      elRef.current.style.setProperty('--underline-duration', `${appliedDuration}s`);
      duration.current = appliedDuration;
    }
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
      className={`${styles.anchor_text} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </span>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ label }) => {
  return (
    <AnchorUnderline 
      speed={0.6}
      className="text-orange-50"
    >
      {label}
    </AnchorUnderline>
  );
};

export default NavLink;