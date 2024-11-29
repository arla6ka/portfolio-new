import React from 'react';
import { motion } from 'framer-motion';
import { AnchorUnderline } from './NavLink';

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-neutral-900/80"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-transparent pointer-events-none" />

      <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 py-4 sm:py-5 md:py-6 
                    text-[14px] sm:text-[15px] md:text-[16px] leading-none border-b border-zinc-500/10 relative">
        <motion.h1 
          className="flex items-center gap-2 sm:gap-3 group relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span 
            className="font-overused font-normal text-[#fef4e4] relative whitespace-nowrap"
          >
            Arlan
            <motion.div 
              className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#fef4e4]/30"
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </span>
          <span 
            className="font-geist-mono text-[#fef4e4]/60 relative pl-2 sm:pl-3 border-l border-zinc-500/30 text-[12px] sm:text-[14px] md:text-[16px]"
          >
            @Design Engineer
          </span>
          
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-emerald-500 rounded-full 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.h1>

        <motion.nav 
          className="flex gap-4 sm:gap-6 md:gap-8 items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnchorUnderline 
            href="/resume"
            speed={0.6}
            className="font-overused font-medium text-[#fef4e4] hover:text-[#fef4e4]/90 transition-colors duration-300"
          >
            Resume
          </AnchorUnderline>
          <AnchorUnderline 
            href="https://www.linkedin.com/in/arlanmarat/"
            target="_blank"
            speed={0.6}
            className="font-overused font-medium text-[#fef4e4] hover:text-[#fef4e4]/90 transition-colors duration-300"
          >
            Linkedin
          </AnchorUnderline>
        </motion.nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#fef4e4]/10 to-transparent" />
    </motion.header>
  );
};

export default Header;