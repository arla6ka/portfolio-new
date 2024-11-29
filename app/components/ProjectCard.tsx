"use client";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ProjectProps } from './types';

const ProjectCard: React.FC<ProjectProps> = ({ 
  id,
  imageUrl,
  videoUrl,
  title, 
  subtitle, 
  slug,
  technologies = []
}) => {
  const router = useRouter();
  const hasMedia = Boolean(videoUrl || imageUrl);

  if (!hasMedia) {
    return (
      <motion.div 
        className="rounded-2xl p-7 backdrop-blur-[2px] border border-[#fef4e4]/5 
                  bg-gradient-to-b from-white/[0.08] to-transparent inline-block w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="font-geist-mono text-sm tracking-wider uppercase text-[#fef4e4] mb-2">
          {title}
        </h2>
        <span className="font-geist-mono text-sm tracking-wider uppercase text-[#fef4e4]/40">
          {subtitle}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div
      onClick={() => router.push(`/projects/${slug}`)}
      className="group cursor-pointer inline-block w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="rounded-2xl overflow-hidden backdrop-blur-[2px] border border-[#fef4e4]/5 
                    bg-gradient-to-b from-white/[0.08] to-transparent
                    transition-all duration-500 group-hover:border-[#fef4e4]/10">
        <div className="relative overflow-hidden">
          <div className="transform transition-all duration-700 group-hover:scale-[1.02]">
            {videoUrl ? (
              <video
                src={videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover transition-all duration-700 
                         group-hover:brightness-[0.95]"
              />
            ) : imageUrl && (
              <img
                src={imageUrl}
                alt={title}
                className="w-full object-cover transition-all duration-700 
                         group-hover:brightness-[0.95]"
              />
            )}
          </div>

          <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
            
            <div className="absolute inset-0 bg-neutral-900/95 opacity-0 group-hover:opacity-40 
                          transition-opacity duration-700 ease-in-out" />

            {technologies.length > 0 && (
              <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                <div className="flex flex-wrap gap-2.5 translate-y-[20px] opacity-0 
                             group-hover:translate-y-0 group-hover:opacity-100
                             transition-all duration-500 ease-out delay-[50ms]">
                  {technologies.map((tech, index) => (
                    <span
                      key={`${id}-${tech}-${index}`}
                      className="font-geist-mono relative overflow-hidden px-4 py-1.5 
                               rounded-lg text-[#fef4e4] text-xs tracking-wider
                               shadow-lg shadow-black/20 border border-[#fef4e4]/10
                               hover:border-[#fef4e4]/20 group/tag
                               transform hover:-translate-y-[2px] hover:scale-105
                               transition-all duration-300 ease-out"
                    >
                      <div className="absolute inset-0 -z-10 bg-neutral-900/80 backdrop-blur-[8px]" />
                      <div className="absolute inset-0 -z-10 opacity-0 group-hover/tag:opacity-100
                                   transition-opacity duration-300
                                   bg-gradient-to-r from-[#fef4e4]/[0.08] via-[#fef4e4]/[0.04] to-[#fef4e4]/[0.08]" />
                      <span className="relative z-10">
                        {tech}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 
                         transition-all duration-500 translate-x-2 group-hover:translate-x-0
                         delay-[50ms]">
              <div className="relative overflow-hidden bg-neutral-900/95 backdrop-blur-[8px] 
                            rounded-xl w-10 h-10 flex items-center justify-center 
                            border border-[#fef4e4]/10 shadow-lg shadow-black/20
                            group-hover:border-[#fef4e4]/20 transition-all duration-500
                            hover:bg-neutral-900">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-[#fef4e4]/60 transform rotate-45 
                           group-hover:rotate-0 group-hover:scale-110 group-hover:text-[#fef4e4]
                           transition-all duration-500 ease-out"
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
        </div>

        <div className="p-7 bg-gradient-to-b from-transparent to-neutral-900/30">
          <h2 className="font-geist-mono text-sm tracking-wider uppercase text-[#fef4e4] mb-2">
            {title}
          </h2>
          <span className="font-geist-mono text-sm tracking-wider uppercase text-[#fef4e4]/40">
            {subtitle}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;