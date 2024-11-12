// hooks/useSmoothScroll.ts
import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

// Настраиваем плагин Overscroll
Scrollbar.use(OverscrollPlugin);

const options = {
  damping: 0.07,
  plugins: {
    overscroll: {
      enable: true,
      effect: 'bounce',
      damping: 0.15,
      maxOverscroll: 150,
    },
  },
};

export const useSmoothScroll = () => {
  useEffect(() => {
    // Проверяем, не на мобильном ли устройстве
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (!isMobile) {
      const scrollbar = Scrollbar.init(document.body, options);

      // Обновляем scrollbar при изменении контента
      const resizeObserver = new ResizeObserver(() => {
        scrollbar.update();
      });

      resizeObserver.observe(document.body);

      return () => {
        if (scrollbar) {
          scrollbar.destroy();
        }
        resizeObserver.disconnect();
      };
    }
  }, []);
};