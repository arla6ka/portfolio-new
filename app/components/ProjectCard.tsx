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
        <h2 className="text-sm tracking-wider uppercase text-[#fef4e4] mb-2 font-mono">
          {title}
        </h2>
        <span className="text-sm tracking-wider uppercase text-[#fef4e4]/40 font-mono">
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

          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/95 via-neutral-900/40 to-transparent
                       opacity-0 group-hover:opacity-100 transition-all duration-500
                       backdrop-blur-[1px]">
            {technologies.length > 0 && (
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="flex flex-wrap gap-2.5 translate-y-[20px] opacity-0 
                             group-hover:translate-y-0 group-hover:opacity-100
                             transition-all duration-500 ease-out delay-[50ms]">
                  {technologies.map((tech, index) => (
                    <span
                      key={`${id}-${tech}-${index}`}
                      className="px-4 py-1.5 bg-[#fef4e4]/[0.08] backdrop-blur-[8px] rounded-lg
                               text-[#fef4e4] text-xs tracking-wider font-mono
                               border border-[#fef4e4]/10 group-hover:border-[#fef4e4]/20
                               shadow-lg shadow-black/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 
                         transition-all duration-500 translate-x-2 group-hover:translate-x-0
                         delay-[50ms]">
              <div className="bg-[#fef4e4]/[0.08] backdrop-blur-[8px] rounded-xl w-10 h-10 
                          flex items-center justify-center border border-[#fef4e4]/10
                          shadow-lg shadow-black/20">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-[#fef4e4] rotate-45 group-hover:rotate-0 transition-all duration-300"
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
          <h2 className="text-sm tracking-wider uppercase text-[#fef4e4] mb-2 font-mono
                      transition-colors duration-300 group-hover:text-[#fef4e4]">
            {title}
          </h2>
          <span className="text-sm tracking-wider uppercase text-[#fef4e4]/40 font-mono
                        transition-colors duration-300 group-hover:text-[#fef4e4]/60">
            {subtitle}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;