import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScramble } from 'use-scramble';
import SparklesText from "./sparkles-text";

export const GlowingDesigner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="inline-block relative cursor-pointer mr-0 sm:mr-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.005,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      {isHovered ? (
        <SparklesText 
          text="designer"
          colors={{
            first: '#fef4e4',
            second: '#fef4e4'
          }}
          sparklesCount={12}
          className="font-overused text-[40px] sm:text-[55px] md:text-[75px] lg:text-[110px] text-[#fef4e4] tracking-tighter"
        />
      ) : (
        <span 
          className="font-overused font-medium text-[40px] sm:text-[55px] md:text-[75px] lg:text-[110px] text-[#fef4e4] tracking-tighter"
        >
          designer
        </span>
      )}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute inset-0 blur-2xl bg-[#fef4e4] rounded-full"
            style={{ mixBlendMode: 'screen' }}
          />
        )}
      </AnimatePresence>
    </motion.div>
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
    <motion.div 
      className="inline-block relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ 
        scale: 1.01,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      <motion.div
        className="font-geist-mono font-medium tracking-[-0.09em] relative"
      >
        <motion.span 
          ref={ref} 
          className="relative z-10 text-[38px] sm:text-[52px] md:text-[72px] lg:text-[105px]" 
          style={{ 
            color: '#fef4e4',
          }}
          animate={{
            textShadow: isHovered 
              ? '0 0 15px rgba(254, 244, 228, 0.15)' 
              : '0 0 0px rgba(254, 244, 228, 0)',
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          engineer
        </motion.span>

        <AnimatePresence mode="wait">
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="absolute inset-0 blur-xl bg-[#fef4e4] rounded-full"
              style={{ mixBlendMode: 'screen' }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const AnimatedText = () => {
  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    }
  };

  const lineVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="flex justify-start mt-[120px] mb-10 md:mb-0 md:mt-[144px]">
      <motion.div 
        className="w-full max-w-[2400px] px-4 sm:px-8 md:px-16"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span 
          variants={lineVariants}
          className="font-overused font-medium inline-block w-full 
                     leading-[45px] sm:leading-[65px] md:leading-[85px] lg:leading-[115px] 
                     text-[40px] sm:text-[55px] md:text-[75px] lg:text-[110px] 
                     tracking-tighter text-[#fef4e4]"
        >
          hello! I am Arlan <br />
          <GlowingDesigner />{" "}
          &amp;{" "}
          <BinaryEngineer /> <br />
          currently based in SF
        </motion.span>
      </motion.div>
    </div>
  );
};

export default AnimatedText;