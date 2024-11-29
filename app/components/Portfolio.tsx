'use client'
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText';
import SmoothScroll from './SmoothScroll';
import Header from './Header';
import CallToAction from './CallToAction';
import Footer from './Footer';
import { projects } from '../data/projects';
import ElegantLoader from './ElegantLoader';
import Comments from './Comments';
import SecretButton from './SecretButton';
import SecretSection from './SecretSection';

const ProjectCard = dynamic(() => import('./ProjectCard'));

const Portfolio: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const contentVariants = {
    initial: { 
      opacity: 0,
      filter: 'blur(20px)',
    },
    animate: { 
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      <ElegantLoader isLoading={isLoading} />
      
      <Header />

      <main id="smooth-scroll" className="flex overflow-hidden flex-col">
        <SmoothScroll />

        <motion.section
          variants={contentVariants}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          <AnimatedText />
        </motion.section>

        <motion.section
          variants={contentVariants}
          initial="initial"
          animate="animate"
          className="font-consolas font-normal flex flex-col w-full"
        >
          <div className="w-full px-4 sm:px-8 md:px-16 mt-6 sm:mt-[100px]">
            <div 
              className="columns-1 sm:columns-2 lg:columns-3 gap-6"
              style={{
                columnGap: '1.5rem'
              }}
            >
              {projects.map((project) => (
                <div key={project.id} className="mb-6 break-inside-avoid">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          <CallToAction />
        </motion.section>

        <motion.section
          variants={contentVariants}
          initial="initial"
          animate="animate"
          className="w-full mt-10 md:mt-20"
        >
          <Footer />
          <SecretSection />
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
    </div>
  );
};

export default Portfolio;