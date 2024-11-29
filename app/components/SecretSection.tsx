"use client";
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Comments from './Comments';

const SecretSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const commentsRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    
    // Если открываем секцию, прокручиваем к ней
    if (!isOpen) {
      // Небольшая задержка, чтобы анимация открытия успела начаться
      setTimeout(() => {
        commentsRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  return (
    <div className="w-full py-20">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.button
          onClick={handleClick}
          className="group relative inline-flex items-center gap-2 px-4 py-2"
          whileHover="hover"
        >
          <motion.span 
            className="font-consolas relative z-10 text-[#fef4e4]/40 text-sm tracking-wider
                     group-hover:text-[#fef4e4]/60 transition-colors duration-500"
          >
            Secret Section
          </motion.span>
          
          <motion.div
            className="absolute bottom-0 left-0 h-px w-full bg-[#fef4e4]/20"
            variants={{
              hover: {
                scaleX: 1,
                opacity: 1
              }
            }}
            initial={{ scaleX: 0.2, opacity: 0.5 }}
            transition={{ duration: 0.5 }}
          />
          
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#fef4e4]/40 group-hover:text-[#fef4e4]/60 
                     transition-colors duration-500"
            variants={{
              hover: { rotate: 45, scale: 1.1 }
            }}
            transition={{ duration: 0.5 }}
          >
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
          </motion.svg>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.div
              ref={commentsRef}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto mt-12 bg-white/[0.02] backdrop-blur-sm 
                       border border-white/10 rounded-2xl overflow-hidden"
            >
              <Comments />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SecretSection; 