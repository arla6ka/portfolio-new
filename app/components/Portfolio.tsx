"use client"
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ProjectProps } from './types';
import NavLink from './NavLink';
import AnimatedText from './AnimatedText';
import React from 'react';
import SmoothScroll from './SmoothScroll';

const ProjectCard = dynamic(() => import('./ProjectCard'));

const projects = [
    { imageUrl: '/images/vindex.png', title: 'Project 1', subtitle: 'Description 1' },
    { imageUrl: '/images/jn.png', title: 'Project 2', subtitle: 'Description 2' },
    { imageUrl: '/images/example2.jpg', title: 'Project 2', subtitle: 'Description 2' },
];
const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "30%",
      }}
    />
  );
};

const Portfolio: React.FC = () => {
  // Добавляем smooth scroll при монтировании компонента
  

  return (
    <main id="smooth-scroll" className="flex overflow-hidden flex-col py-8 bg-neutral-900">
      <SmoothScroll />
      <header className="header-fixed absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center z-5">
        <motion.button 
          className="flex overflow-hidden gap-2 justify-center items-center p-3 leading-none text-center border border-orange-50 border-solid bg-white bg-opacity-20 rounded-[90px] shadow-[0px_4px_4px_rgba(9,9,9,0.26)] relative group"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2, ease: [0.65, 0, 0.35, 1] }
          }}
        >
          {/* Фоновая анимация */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-50/10 to-white/20"
            initial={{ x: '-100%' }}
            whileHover={{ 
              x: '100%',
              transition: { 
                duration: 1,
                ease: [0.65, 0, 0.35, 1],
                repeat: Infinity
              }
            }}
          />

          <motion.span 
            style={{ fontFamily: '"Almarena Neue Display", sans-serif', fontWeight: 400 }}
            className="self-stretch ml-0.5 mt-0.5 text-white е relative z-10"
            whileHover={{
              letterSpacing: "0.05em",
              transition: { duration: 0.3 }
            }}
          >
            LETS BE FRIENDS
          </motion.span>

          {/* Анимированная иконка */}
          <motion.img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1d9fb49a80b6409d95b33aae870e08d218048e1b60a85271ae3be504e26804a?placeholderIfAbsent=true&apiKey=5ea96845361b4ac1907671ae2430d85d"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[1.45] relative z-10"
            alt=""
            
          />

          {/* Светящийся эффект при наведении */}
          <motion.div
            className="absolute inset-0 rounded-[90px] opacity-0 group-hover:opacity-100"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
              filter: 'blur(8px)'
            }}
            initial={{ scale: 0.8 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 }
            }}
          />
        </motion.button>
      </header>

      <div 
        style={{ fontFamily: '"Almarena Neue Display", sans-serif', fontWeight: 400 }} 
        className="flex justify-end items-center mt-4 mr-12 text-orange-50"
      >
        <nav className="flex gap-6 items-center">
          <NavLink label="RESUME" />
          <NavLink label="LINKEDIN" />
        </nav>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        className="self-start pr-44 pl-16 mt-[180px] font-medium text-orange-50 leading-[156px] text-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-10 max-sm:mt-14 max-sm:mb-14"
      >
        <AnimatedText />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
        style={{ fontFamily: '"Consolas", sans-serif', fontWeight: 400 }}
        className="flex flex-col px-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
      >
        <div className="mt-24 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            
            {[0, 1, 2].map((columnIndex) => (
              <div key={columnIndex} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                {projects.slice(columnIndex * 3, (columnIndex + 1) * 3).map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .scrollbar-track {
          background: #171717 !important;
        }

        .scrollbar-thumb {
          background: #454545 !important;
          border-radius: 4px;
        }

        #smooth-scroll {
          width: 100%;
          height: 100vh;
        }
      `}</style>
    </main>
  );
};

export default Portfolio;