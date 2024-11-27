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
          className="self-start pr-44 pl-[60px] mt-[120px] font-medium text-orange-50 leading-[156px] text-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-10 max-sm:mt-14 max-sm:mb-14"
        >
          <AnimatedText />
        </motion.section>

        <motion.section
          variants={contentVariants}
          initial="initial"
          animate="animate"
          style={{ fontFamily: '"Consolas", monospace', fontWeight: 400 }}
          className="flex flex-col px-16 w-full"
        >
          <div className="mt-16 max-w-full">
            <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call To Action Section */}
        <motion.section
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          <CallToAction />
        </motion.section>

        {/* Footer Section */}
        <motion.section
          variants={contentVariants}
          initial="initial"
          animate="animate"
          className="w-full"
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