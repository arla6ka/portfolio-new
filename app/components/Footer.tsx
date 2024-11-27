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
    <footer className="w-full bg-neutral-900">
      <div className="w-full border-t border-white/[0.08]">
        <div className="w-full flex justify-between items-center py-8">
          {/* Left side - Name with left padding */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pl-[70px]"
          >
            <p 
              className="text-[#fef4e4]/60 text-sm"
              style={{ fontFamily: '"Geist Mono", monospace' }}
            >
              © 2024 Arlan Marat
            </p>
          </motion.div>

          {/* Right side - Timer with right padding */}
          <motion.div 
            className="flex items-center gap-8 mr-[70px]"
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
            <div className="flex flex-col items-end">
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
    </footer>
  );
}
