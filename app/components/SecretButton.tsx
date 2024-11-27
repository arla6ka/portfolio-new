"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Comments from './Comments';

const SecretButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 bg-white/5 backdrop-blur-sm 
                 border border-white/10 rounded-full p-4 group
                 hover:border-white/20 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-[#fef4e4]/60 group-hover:text-[#fef4e4] transition-colors duration-300"
          animate={{ rotate: isOpen ? 45 : 0 }}
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Notes Panel */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="fixed inset-x-4 bottom-4 top-20 md:inset-x-auto md:right-8 md:left-1/4 
                       bg-neutral-900/95 backdrop-blur-md border border-white/10 
                       rounded-2xl z-50 overflow-hidden"
            >
              <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                <div className="sticky top-0 z-10 bg-gradient-to-b from-neutral-900/95 to-neutral-900/0 pb-8">
                  <div className="flex justify-between items-center p-6">
                    <h2 
                      className="text-[#fef4e4] text-xl tracking-tight"
                      style={{ fontFamily: '"Overused Grotesk", sans-serif' }}
                    >
                      Secret Notes
                    </h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-[#fef4e4]/60 hover:text-[#fef4e4] 
                               transition-colors duration-300"
                    >
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <Comments />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SecretButton; 