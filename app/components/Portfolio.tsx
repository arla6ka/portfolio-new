"use client";
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import React from 'react';
import AnimatedText from './AnimatedText';
import SmoothScroll from './SmoothScroll';
import Header from './Header';
import { projects } from '../data/projects';

const ProjectCard = dynamic(() => import('./ProjectCard'));

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
          className="self-start pr-44 pl-[60px] mt-[150px] font-medium text-orange-50 leading-[156px] text-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-10 max-sm:mt-14 max-sm:mb-14"
        >
          <AnimatedText />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
          style={{ fontFamily: '"Consolas", monospace', fontWeight: 400 }}
          className="flex flex-col px-16 w-full"
        >
          <div className="mt-24 max-w-full">
            <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                />
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
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
};

export default Portfolio;