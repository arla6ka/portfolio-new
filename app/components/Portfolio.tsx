"use client"
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ProjectProps } from './types';
import AnimatedText from './AnimatedText';
import React from 'react';
import SmoothScroll from './SmoothScroll';
import Header from './Header';

const ProjectCard = dynamic(() => import('./ProjectCard'));

const projects = [
    { imageUrl: '/images/1.png', title: 'Project 1', subtitle: 'Description 1' },
    { imageUrl: '/images/2.png', title: 'Project 2', subtitle: 'Description 2' },
    { imageUrl: '/images/3.png', title: 'Project 2', subtitle: 'Description 2' },
    { imageUrl: '/images/4.png', title: 'Project 1', subtitle: 'Description 1' },
    { imageUrl: '/images/1.png', title: 'Project 2', subtitle: 'Description 2' },
    { imageUrl: '/images/1.png', title: 'Project 2', subtitle: 'Description 2' },
    { imageUrl: '/images/1.png', title: 'Project 1', subtitle: 'Description 1' },
    { imageUrl: '/images/1.png', title: 'Project 2', subtitle: 'Description 2' },
    { imageUrl: '/images/1.png', title: 'Project 2', subtitle: 'Description 2' },
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
  return (
    <>
      <Header />
      <main id="smooth-scroll" className="flex overflow-hidden flex-col py-8 bg-neutral-900">
        <SmoothScroll />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="self-start pr-44 pl-16 mt-[240px] font-medium text-orange-50 leading-[156px] text-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-10 max-sm:mt-14 max-sm:mb-14"
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
      </main>

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
    </>
  );
};

export default Portfolio;