"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };

      const dateOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Los_Angeles',
        weekday: 'long',
        year: 'numeric',
      };

      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', options));
      setDate(now.toLocaleDateString('en-US', dateOptions));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-neutral-900 relative overflow-hidden">
      {/* Ambient background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/80 opacity-50 pointer-events-none" />

      <div className="w-full border-t border-white/[0.08] relative z-10">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center py-6 sm:py-8 
                      px-4 sm:px-8 md:px-16 gap-4 sm:gap-0">
          {/* Left side - Name */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p 
              className="text-[#fef4e4]/60 text-sm text-center sm:text-left"
              style={{ fontFamily: '"Geist Mono", monospace' }}
            >
              © 2024 Arlan Marat
            </p>
          </motion.div>

          {/* Right side - Timer */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span 
                className="text-[#fef4e4]/40 text-sm uppercase tracking-wider"
                style={{ fontFamily: '"Geist Mono", monospace' }}
              >
                CALIFORNIA
              </span>
            </div>
            <div className="flex flex-col items-center sm:items-end">
              <motion.div 
                className="text-[#fef4e4] text-lg font-light tabular-nums"
                style={{ fontFamily: '"Geist Mono", monospace' }}
              >
                {time}
              </motion.div>
              <motion.div 
                className="text-[#fef4e4]/40 text-xs uppercase tracking-wider"
                style={{ fontFamily: '"Geist Mono", monospace' }}
              >
                {date}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#fef4e4]/10 to-transparent" />
    </footer>
  );
}
