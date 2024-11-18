// components/ProjectCard.tsx
"use client";
import { useRouter } from 'next/navigation';
import { Project } from '../data/projects';
import { WobbleCard } from './WobbleCard';

interface ProjectCardProps extends Project {}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  imageUrl, 
  title, 
  subtitle, 
  slug 
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${slug}`);
  };

  return (
    <WobbleCard
      containerClassName="w-full max-w-[584px] mb-4"
      className="p-0"
      onClick={handleClick}
    >
      <div className="flex flex-col group">
        <div className="w-full bg-white/20 overflow-hidden relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 relative z-10"
          />
        </div>
        
        <div className="mt-3 mb-3 text-xs tracking-wider uppercase" style={{ fontFamily: '"Consolas", monospace' }}>
          <h2 className="text-neutral-50">
            {title}
          </h2>
          <span className="text-zinc-500">
            {subtitle}
          </span>
        </div>
      </div>
    </WobbleCard>
  );
};

export default ProjectCard;