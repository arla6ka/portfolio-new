import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CallToAction from './CallToAction';

interface ProjectDetailsProps {
  projectName: string;
  projectDescription: string;
  technologies: string[];
  imageUrl?: string;
  videoUrl?: string;
  projectLink?: string;
  githubLink?: string;
  year?: string;
  role?: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  projectName,
  projectDescription,
  technologies,
  imageUrl,
  videoUrl,
  projectLink,
  githubLink,
  year = "2024",
  role = "Design & Development"
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full pt-20 mb-[-40px] md:mb-[-100px] sm:pt-24 md:pt-32"
      >
        <div className="px-5 sm:px-8 md:px-16">
          {/* Project Title Section */}
          <motion.div variants={itemVariants} className="mb-16 sm:mb-20 md:mb-32">
            <h1 
              className="font-overused font-medium text-[42px] sm:text-[72px] md:text-[130px] text-[#fef4e4] leading-[1.1] tracking-[-0.02em] mb-10 sm:mb-16 md:mb-20"
            >
              {projectName}
            </h1>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 md:gap-32">
              <div className="group">
                <p 
                  className="font-geist-mono text-zinc-500 mb-2 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm"
                >
                  ROLE
                </p>
                <p 
                  className="font-geist-mono text-[#fef4e4] text-base sm:text-lg group-hover:text-[#fef4e4]/80 transition-colors duration-300"
                >
                  {role}
                </p>
              </div>
              <div className="group">
                <p 
                  className="font-geist-mono text-zinc-500 mb-2 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm"
                >
                  YEAR
                </p>
                <p 
                  className="font-geist-mono text-[#fef4e4] text-base sm:text-lg group-hover:text-[#fef4e4]/80 transition-colors duration-300"
                >
                  {year}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Project Media with enhanced hover effects */}
          <motion.div variants={itemVariants} className="w-full mb-16 sm:mb-20 md:mb-32">
            <div className="relative group w-full aspect-video overflow-hidden rounded-lg">
              {videoUrl ? (
                <video
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-all duration-700
                           group-hover:scale-[1.02] group-hover:brightness-110"
                />
              ) : (
                <motion.img
                  src={imageUrl}
                  alt={projectName}
                  className="w-full h-full object-cover transition-all duration-700
                           group-hover:scale-[1.02] group-hover:brightness-110"
                />
              )}
              <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </div>
          </motion.div>

          {/* Project Content with refined grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 md:gap-24 mb-16 sm:mb-20 md:mb-32">
            {/* Description with enhanced typography */}
            <motion.div variants={itemVariants} className="col-span-1 md:col-span-8">
              <p 
                className="font-geist-mono text-lg sm:text-xl md:text-2xl leading-relaxed text-[#fef4e4]/80 mb-8 sm:mb-12 md:mb-16"
              >
                {projectDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {projectLink && (
                  <Link 
                    href={projectLink}
                    target="_blank"
                    className="font-geist-mono group relative py-3 sm:py-4 px-6 sm:px-8 bg-[#fef4e4] text-neutral-900 rounded-lg 
                             overflow-hidden transition-all duration-300 text-center
                             text-xs sm:text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-[#fef4e4]/10"
                  >
                    <span className="relative z-10">View Project</span>
                    <div className="absolute inset-0 bg-[#fef4e4]/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                )}
                {githubLink && (
                  <Link 
                    href={githubLink}
                    target="_blank"
                    className="font-geist-mono group relative py-3 sm:py-4 px-6 sm:px-8 border border-[#fef4e4]/20 text-[#fef4e4] rounded-lg
                             overflow-hidden transition-all duration-300 text-center
                             text-xs sm:text-sm uppercase tracking-wider hover:border-[#fef4e4]/40"
                  >
                    <span className="relative z-10 group-hover:text-[#fef4e4]">Source Code</span>
                    <div className="absolute inset-0 bg-[#fef4e4]/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                )}
              </div>
            </motion.div>

            {/* Technologies with hover effects */}
            <motion.div variants={itemVariants} className="col-span-1 md:col-span-4">
              <h3 
                className="font-geist-mono text-zinc-500 uppercase tracking-wider mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm"
              >
                Technologies
              </h3>
              <div className="flex flex-wrap md:flex-col gap-3 sm:gap-4 md:gap-5">
                {technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="font-geist-mono text-[#fef4e4]/80 hover:text-[#fef4e4] transition-colors duration-300 
                             text-base sm:text-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced CallToAction integration */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <CallToAction />
      </motion.div>
    </>
  );
};

export default ProjectDetails;