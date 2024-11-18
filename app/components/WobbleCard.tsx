// components/WobbleCard.tsx
"use client";
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface WobbleCardProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  onClick?: () => void;
}

export const WobbleCard: React.FC<WobbleCardProps> = ({
  children,
  containerClassName,
  className,
  onClick
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    
    const x = (clientX - left - width / 2) / 40;
    const y = (clientY - top - height / 2) / 40;
    
    setMousePosition({ x, y });
  }, []);

  return (
    <motion.section
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      animate={{
        scale: isHovering ? 1.02 : 1,
        transition: { duration: 0.2 }
      }}
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg) translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
          : "perspective(1000px) rotateY(0deg) rotateX(0deg) translate3d(0, 0, 0)",
        transition: 'transform 0.1s ease-out',
        cursor: onClick ? 'pointer' : 'default'
      }}
      className={cn("relative", containerClassName)}
    >
      <motion.div
        style={{
          transform: isHovering
            ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0)`
            : "translate3d(0px, 0px, 0)",
          transition: 'transform 0.1s ease-out'
        }}
        className={cn("", className)}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};