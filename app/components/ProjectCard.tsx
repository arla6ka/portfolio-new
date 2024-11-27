// components/ProjectCard.tsx
"use client";
import { useRouter } from 'next/navigation';
import { Project } from '../data/projects';
import { motion } from 'framer-motion'; 

interface ProjectCardProps extends Project {
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  imageUrl, 
  title, 
  subtitle, 
  slug,
  technologies = []
}) => {
  const router = useRouter();

  return (
    <motion.div
      className="w-full max-w-[584px] mb-4 group relative overflow-hidden cursor-pointer rounded-xl"
      onClick={() => router.push(`/projects/${slug}`)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="flex flex-col">
        {/* Image Container */}
        <div className="w-full bg-white/[0.08] overflow-hidden relative rounded-xl">
          {/* Main Image */}
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-auto object-cover transition-all duration-700 
                     group-hover:scale-[1.02] group-hover:brightness-[0.9]"
          />

          {/* Subtle border overlay */}
          <div className="absolute inset-0 rounded-xl border border-[#fef4e4]/5 group-hover:border-[#fef4e4]/10 
                       transition-colors duration-500" />

          {/* Gradient Overlay with improved aesthetics */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/95 via-neutral-900/50 to-neutral-900/20
                       opacity-0 group-hover:opacity-100 transition-all duration-500
                       rounded-xl backdrop-blur-[2px] group-hover:backdrop-blur-[1px]" />

          {/* Technologies Stack with refined styling */}
          <div className="absolute inset-0 flex items-end">
            <motion.div 
              className="w-full p-6 translate-y-[20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                       transition-all duration-500 ease-out"
            >
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="px-3 py-1 bg-[#fef4e4]/10 backdrop-blur-[8px] rounded-md
                             text-[#fef4e4] text-xs tracking-wider
                             border border-[#fef4e4]/20 hover:border-[#fef4e4]/30
                             transition-all duration-300"
                    style={{ fontFamily: '"Consolas", monospace' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced Corner Arrow */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 
                       transition-all duration-500">
            <div className="bg-[#fef4e4]/10 backdrop-blur-[8px] rounded-xl
                        w-8 h-8 flex items-center justify-center
                        border border-[#fef4e4]/20 hover:border-[#fef4e4]/30
                        transition-all duration-300">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-[#fef4e4]"
              >
               <path 
  d="M7 17L17 7M17 7V15M17 7H9" 
  stroke="currentColor" 
  strokeWidth="1.5"
  strokeLinecap="round" 
  strokeLinejoin="round"
/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Content with subtle hover effect */}
        <motion.div 
          className="mt-4 mb-3 px-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 
            className="text-s tracking-wider uppercase text-[#fef4e4] mb-1
                     group-hover:text-[#fef4e4] transition-colors duration-300"
            style={{ fontFamily: '"Consolas", monospace' }}
          >
            {title}
          </h2>
          
          <span 
            className="text-s tracking-wider uppercase text-zinc-500
                     group-hover:text-zinc-400 transition-colors duration-300"
            style={{ fontFamily: '"Consolas", monospace' }}
          >
            {subtitle}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;