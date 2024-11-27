'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  const resumeUrl = '/Arlan CV.pdf';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="min-h-screen bg-neutral-900 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,244,228,0.02),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,244,228,0.01),transparent_50%)]" />
      </div>

      {/* Animated decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-20 w-72 h-72 bg-[radial-gradient(circle_at_center,rgba(255,244,228,0.01),transparent_70%)]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-20 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(255,244,228,0.01),transparent_70%)]"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-5xl"
        >
          {/* Enhanced title section */}
          <motion.div 
            className="relative mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-[48px] sm:text-[72px] md:text-[80px] leading-tight tracking-tighter 
                       text-center relative z-10 bg-clip-text text-transparent 
                       bg-gradient-to-b from-[#fef4e4] to-[#fef4e4]/80"
              style={{ fontFamily: '"Overused Grotesk", sans-serif', fontWeight: 500 }}
            >
              My Resume
            </motion.h1>
            {/* Decorative elements for title */}
            <div className="absolute inset-0 " />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0 "
            />
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            className="w-full mb-8 rounded-xl overflow-hidden
                     backdrop-blur-sm bg-white/[0.02] border border-[#fef4e4]/10
                     shadow-[0_0_50px_-12px_rgba(254,244,228,0.1)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <iframe
              src={resumeUrl}
              className="w-full h-[600px] sm:h-[700px] md:h-[800px]"
              title="Resume"
            />
          </motion.div>

          {/* Action buttons */}
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href={resumeUrl}
              download
              className="group relative py-3 px-6 text-sm uppercase tracking-wider
                       bg-[#fef4e4]/10 text-[#fef4e4] rounded-lg overflow-hidden
                       border border-[#fef4e4]/20 backdrop-blur-sm
                       transition-all duration-300 hover:bg-[#fef4e4]/20"
              style={{ fontFamily: '"Geist Mono", monospace' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Download PDF</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#fef4e4]/10 to-transparent 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>

            <motion.button
              onClick={copyToClipboard}
              className="group relative py-3 px-6 text-sm uppercase tracking-wider
                       bg-[#fef4e4]/10 text-[#fef4e4] rounded-lg overflow-hidden
                       border border-[#fef4e4]/20 backdrop-blur-sm
                       transition-all duration-300 hover:bg-[#fef4e4]/20"
              style={{ fontFamily: '"Geist Mono", monospace' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Copy URL</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#fef4e4]/10 to-transparent 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle gradient borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fef4e4]/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#fef4e4]/10 to-transparent" />
    </div>
  );
} 