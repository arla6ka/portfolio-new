import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScramble } from 'use-scramble';
import { Glow, GlowCapture } from '@codaworks/react-glow';

import SparklesText from "../../components/ui/sparkles-text";

export const GlowingDesigner = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    const baseStyles = "tracking-medium font-['POI_Carbonic_Trial_Regular'] font-thin text-[105px] text-[#fef4e4] mr-0";
  
    return (
      <div
        className="inline-flex items-center justify-start"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <div className="flex items-center h-[100px]">
            <SparklesText 
              text="designer"
              colors={{
                first: '#fef4e4',
                second: '#fef4e4'
              }}
              className={baseStyles}
            />
          </div>
        ) : (
          <div className="flex items-center h-[100px]">
            <span className={baseStyles}>
              designer
            </span>
          </div>
        )}
      </div>
    );
  };
  
  
  
export const BinaryEngineer = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const { ref, replay } = useScramble({
    text: 'engineer',
    speed: 0.2,
    tick: 4,
    step: 6,
    scramble: 10,
    seed: 3,
    chance: 0.9,
    range: [48, 49],
    overflow: true,
    ignore: [" "],
    playOnMount: false
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
    replay();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="inline-block relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative "
        style={{
          fontFamily: '"Geist Mono Medium", sans-serif',
          fontWeight: 400,
          fontSize: '105px'
        }}
      >
        

        <span ref={ref} className="relative tracking-tight z-10" style={{ color: '#fef4e4' }}>
          engineer
        </span>
      </motion.div>
    </div>
  );
};

const AnimatedText = () => {
  return (
    <h1 className="pr-5 text-xl leading-normal">
      <span 
        style={{ 
          fontFamily: '"Overused Grotesk", sans-serif', 
          fontWeight: 500 
        }} 
        className="self-center w-full leading-[120px] max-w-[500px] text-[110px] tracking-medium"
      >
        hello! I am Arlan <br />
        <GlowingDesigner />{" "}
        &amp;{" "}
        <BinaryEngineer />
        <br />
        currently based in SF
      </span>
    </h1>
  );
};

export default AnimatedText;