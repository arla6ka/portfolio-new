import React from 'react';
import { motion } from 'framer-motion';
import { WobbleCard } from './WobbleCard';
import { AnchorUnderline } from './NavLink';

const CallToAction = () => {
  return (
    <section className="relative w-full bg-neutral-900 overflow-hidden">
      <WobbleCard
        containerClassName="px-4 sm:px-8 md:px-16 w-full my-20"
        className="w-full rounded-2xl bg-gradient-to-b from-white/5 to-transparent 
                   backdrop-blur-sm border border-white/10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center py-32 px-4 sm:px-8 text-center"
        >
          <h2 
            className="text-[48px] sm:text-[72px] md:text-[110px] leading-tight tracking-tighter text-[#fef4e4] mb-8"
            style={{ fontFamily: '"Overused Grotesk", sans-serif', fontWeight: 500 }}
          >
            Let's Talk Shop
          </h2>
          
          <p 
            className="max-w-2xl text-xl text-[#fef4e4]/60 mb-12"
            style={{ fontFamily: '"Geist Mono", monospace' }}
          >
            Got a project in mind? Let's create something extraordinary together. 
            Drop me a line and let's start the conversation.
          </p>

          <div className="flex gap-8 items-center">
            <motion.a
              href="mailto:your.email@example.com"
              className="py-3 px-6 bg-[#fef4e4] text-neutral-900 rounded-lg
                       hover:bg-[#fef4e4]/90 transition-all duration-300
                       text-sm uppercase tracking-wider"
              style={{ fontFamily: '"Geist Mono", monospace' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Email
            </motion.a>

            <AnchorUnderline 
              speed={0.6}
              className="text-[#fef4e4] text-sm uppercase tracking-wider"
              style={{ fontFamily: '"Geist Mono", monospace' }}
            >
              Download Resume
            </AnchorUnderline>
          </div>
        </motion.div>
      </WobbleCard>
    </section>
  );
};

export default CallToAction;