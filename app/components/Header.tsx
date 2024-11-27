import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedNavLink } from './NavLink';

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-neutral-900/80"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-transparent pointer-events-none" />

      <div className="flex justify-between items-center px-16 py-6 text-[16px] leading-none border-b border-zinc-500/10 relative">
        <motion.h1 
          className="flex items-center gap-3 group relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span 
            className="text-[#fef4e4] relative"
            style={{ fontFamily: '"Overused Grotesk", sans-serif', fontWeight: 400 }}
          >
            Arlan
            <motion.div 
              className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#fef4e4]/30"
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </span>
          <span 
            className="text-[#fef4e4]/60 relative pl-3 border-l border-zinc-500/30"
            style={{ fontFamily: '"Geist Mono", monospace' }}
          >
            @Design Engineer
          </span>
          
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.h1>

        <motion.nav 
          className="flex gap-8 items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnimatedNavLink label="Resume" />
          <AnimatedNavLink label="Linkedin" />
        </motion.nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#fef4e4]/10 to-transparent" />
    </motion.header>
  );
};

export default Header;