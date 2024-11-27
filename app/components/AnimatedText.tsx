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
          className="text-[40px] sm:text-[65px] md:text-[85px] lg:text-[110px] text-[#fef4e4] tracking-tighter"
        />
      ) : (
        <span 
          style={{ 
            fontFamily: '"Overused Grotesk"',
            fontWeight: 500,
          }}
          className="text-[40px] sm:text-[65px] md:text-[85px] lg:text-[110px] text-[#fef4e4] tracking-tighter"
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
        className="relative"
        style={{
          fontFamily: '"Geist Mono Medium", sans-serif',
          fontWeight: 100,
        }}
      >
        <motion.span 
          ref={ref} 
          className="relative tracking-tighter z-10 text-[38px] sm:text-[62px] md:text-[82px] lg:text-[105px]" 
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
    <div className="flex justify-center sm:justify-start mt-[120px] md:mt-[144px] sm:ml-0">
      <motion.div 
        className="min-w-[400px] sm:min-w-[640px] md:min-w-[768px] mt-[60px] lg:mt- ml-[130px] lg:ml-0 lg:min-w-[1024px] sm:pr-2 md:pr-3 lg:pr-4"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span 
          variants={lineVariants}
          style={{ 
            fontFamily: '"Overused Grotesk", sans-serif', 
            fontWeight: 500 
          }} 
          className="inline-block w-full leading-[45px] sm:leading-[75px] md:leading-[95px] lg:leading-[115px] 
                     max-w-full text-[40px] sm:text-[65px] md:text-[85px] lg:text-[110px] tracking-tighter"
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