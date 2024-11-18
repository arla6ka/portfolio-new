import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScramble } from 'use-scramble';
import SparklesText from "../../components/ui/sparkles-text";

export const GlowingDesigner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="inline-block relative cursor-pointer mr-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative"
        style={{
          fontFamily: '"Eksell Display TRIAL", sans-serif',
          fontSize: '110px',

          fontWeight: 300,
        }}
      >
        {isHovered ? (
          <SparklesText 
            text="designer"
            colors={{
              first: '#fef4e4',
              second: '#fef4e4'
            }}
            className="text-[110px] font-large"
            
          />
        ) : (
          <span className="" style={{ color: '#fef4e4' }}>
            designer
          </span>
        )}
      </motion.div>
    </div>
  );
};

export const BinaryEngineer = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const { ref, replay } = useScramble({
    text: 'engineer',
    speed: 0.4,
    tick: 8,
    step: 8,
    scramble: 10,
    seed: 2,
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
        className="relative"
        style={{
          fontFamily: '"Geist Mono Medium", sans-serif',
          fontWeight: 100,
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
    <h1 className="pr-5 ">
      <span 
        style={{ 
          fontFamily: '"Overused Grotesk", sans-serif', 
          fontWeight: 500 
        }} 
        className="inline-block w-full leading-[115px] max-w-full text-[110px] tracking-medium"
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