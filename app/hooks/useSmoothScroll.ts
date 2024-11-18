// components/SmoothScroll.tsx
"use client";
import React from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

// Configure Overscroll plugin
Scrollbar.use(OverscrollPlugin);

const SmoothScroll = () => {
  React.useEffect(() => {
    // Check if on mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (!isMobile) {
      const scrollbar = Scrollbar.init(document.querySelector('#smooth-scroll')!, {
        damping: 0.07,
        plugins: {
          overscroll: {
            enable: true,
            effect: 'bounce',
            damping: 0.15,
            maxOverscroll: 150,
          },
        },
      });

      // Update scrollbar when content changes
      const resizeObserver = new ResizeObserver(() => {
        scrollbar.update();
      });

      resizeObserver.observe(document.querySelector('#smooth-scroll')!);

      return () => {
        if (scrollbar) {
          scrollbar.destroy();
        }
        resizeObserver.disconnect();
      };
    }
  }, []);

  return null;
};

export default SmoothScroll;