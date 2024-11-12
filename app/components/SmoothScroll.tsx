"use client"
import React, { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

const SmoothScroll = () => {
  useEffect(() => {
    // Создаем опции для фиксированных элементов
    const options = {
      damping: 0.1,
      thumbMinSize: 20,
      renderByPixels: true,
      alwaysShowTracks: false,
      continuousScrolling: true,
      delegateTo: document,
      plugins: {
        overscroll: false
      }
    };

    const scrollbar = Scrollbar.init(document.querySelector('#smooth-scroll')!, options);

    // Исправляем поведение fixed элементов
    scrollbar.track.xAxis.element.remove();
    const header = document.querySelector('.header-fixed') as HTMLElement;
    if (header) {
      scrollbar.addListener(({ offset }) => {
        header.style.top = `${offset.y + 0}px`; // 32px = 8rem (top-8)
      });
    }

    return () => {
      if (scrollbar) scrollbar.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;