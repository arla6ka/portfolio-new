import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { AnchorUnderline } from './NavLink';

const ProjectHeader: React.FC = () => {
  const router = useRouter();

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
        {/* Back button with aligned arrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={() => router.back()}
          className="group cursor-pointer flex items-center gap-1.5 relative"
          whileHover="hover"
        >
          <motion.span
            className="text-[#fef4e4]/60 mb-[2px] text-[12px] sm:text-[14px] md:text-[16px]"
            variants={{
              hover: {
                x: -4,
                transition: { duration: 0.3 }
              }
            }}
          >
            ←
          </motion.span>
          <span className="text-[#fef4e4] group-hover:text-[#fef4e4]/90 transition-colors duration-300">
            Go Back
          </span>
          
          {/* Underline effect */}
         
        </motion.div>

        {/* Navigation */}
        <motion.nav 
          className="flex gap-4 sm:gap-6 md:gap-8 items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnchorUnderline 
            href="/resume"
            speed={0.6} 
            className="text-[#fef4e4]/80 hover:text-[#fef4e4] transition-colors duration-300 cursor-pointer"
          >
            Resume
          </AnchorUnderline>
          <AnchorUnderline 
            href="https://www.linkedin.com/in/arlanmarat/"
            target="_blank"
            speed={0.6} 
            className="text-[#fef4e4]/80 hover:text-[#fef4e4] transition-colors duration-300 cursor-pointer"
          >
            Linkedin
          </AnchorUnderline>
        </motion.nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#fef4e4]/10 to-transparent" />
    </motion.header>
  );
};

export default ProjectHeader;