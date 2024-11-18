// components/ProjectDetails.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useScramble } from 'use-scramble';

interface TechnologyProps {
  name: string;
  index: number;
}

const Technology: React.FC<TechnologyProps> = ({ name, index }) => {
  const { ref, replay } = useScramble({
    text: name,
    speed: 0.6,
    tick: 8,
    step: 3,
    scramble: 10,
    seed: 2,
    chance: 0.8,
    overflow: true,
    range: [48, 122],
    playOnMount: false
  });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1 
      }}
      onMouseEnter={() => replay()}
      className="block text-zinc-500 mb-4 uppercase tracking-wider cursor-pointer"
      style={{ fontFamily: '"Consolas", monospace' }}
    >
      {name}
    </motion.span>
  );
};

interface ProjectDetailsProps {
  projectName: string;
  projectDescription: string;
  technologies: string[];
  imageUrl: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  projectName,
  projectDescription,
  technologies,
  imageUrl
}) => {
  const consolasStyle = { fontFamily: '"Consolas", monospace' };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full pt-32 pb-16" // Added pb-32 for bottom spacing
      style={consolasStyle}
    >
      <div className="px-16 max-w-full">
        <div className="w-full bg-white/20 overflow-hidden mb-">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            src={imageUrl}
            alt={projectName}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid grid-cols-12 gap-8 mt-16 "> {/* Added mb-16 for content spacing */}
          <div className="col-span-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#fef4e4] text-2xl mb-8 uppercase tracking-wider"
              style={consolasStyle}
            >
              {projectName}
            </motion.h1>
            
            <div className="space-y-">
              {technologies.map((tech, index) => (
                <Technology 
                  key={tech} 
                  name={tech} 
                  index={index}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-9 text-[#fef4e4] text-lg leading-relaxed whitespace-pre-line"
            style={consolasStyle}
          >
            {projectDescription}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;