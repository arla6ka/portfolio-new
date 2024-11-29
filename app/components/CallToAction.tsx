import React from 'react';
import { motion } from 'framer-motion';
import { WobbleCard } from './WobbleCard';
import { AnchorUnderline } from './NavLink';

const CallToAction = () => {
  return (
    <section className="relative w-full bg-neutral-900 overflow-hidden">
      {/* Ambient background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute inset-0 bg-gradient-conic from-[#fef4e4]/10 via-transparent to-[#fef4e4]/10 
                         animate-slow-spin [--tw-gradient-stops:theme(colors.neutral.900/0.1),theme(colors.transparent),theme(colors.neutral.900/0.1)]" />
        </div>
      </div>

      <WobbleCard
        containerClassName="px-4 sm:px-8 md:px-16 w-full my-20 relative z-10"
        className="w-full rounded-2xl bg-gradient-to-b from-neutral-900/80 to-neutral-900/40
                  backdrop-blur-md border border-white/10 shadow-2xl shadow-black/40"
      >
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center py-32 px-4 sm:px-8 text-center relative overflow-hidden"
        >
          {/* Decorative elements with adjusted opacity */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(255,255,255,0))]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,244,228,0.03),rgba(255,255,255,0))]"
          />

          <motion.h2 
            className="font-overused font-medium text-[48px] sm:text-[72px] md:text-[110px] leading-tight 
                     tracking-tighter text-[#fef4e4] mb-8 relative z-10 
                     bg-clip-text text-transparent bg-gradient-to-b from-[#fef4e4] to-[#fef4e4]/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's Talk Shop
          </motion.h2>
          
          <motion.p 
            className="font-geist-mono max-w-2xl text-l md:text-xl text-[#fef4e4]/60 mb-12 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Got a project in mind? Let's create something extraordinary together. 
            Drop me a line and let's start the conversation.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="mailto:arlan.marat@uni.minerva.edu"
              className="font-geist-mono group relative py-3 px-6 bg-[#fef4e4] text-neutral-900 rounded-lg
                       overflow-hidden transition-all duration-300
                       text-sm uppercase tracking-wider shadow-lg shadow-white/5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Send Email</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#fef4e4]/20 to-[#fef4e4]/10 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>

            <AnchorUnderline 
              href="/resume"
              speed={0.6}
              className="font-geist-mono text-[#fef4e4] text-sm uppercase tracking-wider group relative"
            >
              <span className="group-hover:text-transparent bg-clip-text bg-gradient-to-r 
                           from-[#fef4e4] to-[#fef4e4]/80 transition-all duration-300">
                Download Resume
              </span>
            </AnchorUnderline>
          </motion.div>

        </motion.div>
      </WobbleCard>
    </section>
  );
};

export default CallToAction;
