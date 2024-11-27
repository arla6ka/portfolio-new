import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ElegantLoaderProps {
  isLoading: boolean;
}

const ElegantLoader: React.FC<ElegantLoaderProps> = ({ isLoading }) => {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{
              backdropFilter: 'blur(40px) brightness(0.7)',
              WebkitBackdropFilter: 'blur(40px) brightness(0.7)',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}
            animate={{
              backdropFilter: 'blur(0px) brightness(1)',
              WebkitBackdropFilter: 'blur(0px) brightness(1)',
              backgroundColor: 'rgba(0, 0, 0, 0)',
            }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          />

          {/* Дополнительный слой для более плавного перехода */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ElegantLoader;