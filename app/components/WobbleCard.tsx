// components/WobbleCard.tsx
"use client";
import React, { useState, useCallback } from "react";
import { motion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
const Noise = () => {
    return (
      <div
        className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
        style={{
          backgroundImage: "url(/noise.webp)",
          backgroundSize: "30%",
        }}
      />
    );
  };
export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    
    const x = (clientX - left - width / 2) / 10;  // Увеличили чувствительность
    const y = (clientY - top - height / 2) / 10;
    
    setMousePosition({ x, y });
  }, []);

  return (
    <motion.section
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
        transition: 'transform 0.1s ease-out'
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