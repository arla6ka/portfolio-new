// components/ProjectCard.tsx
"use client";
import { ProjectProps } from './types';
import { WobbleCard } from './WobbleCard';

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

export const projects = [
    { imageUrl: '/images/vindex.png', title: 'Project 1', subtitle: 'Description 1' },
    { imageUrl: '/images/noFilter.png', title: 'Project 2', subtitle: 'Description 2' },
    { imageUrl: '/images/jn.png', title: 'Project 2', subtitle: 'Description 2' },
];

const ProjectCard: React.FC<ProjectProps> = ({ imageUrl, title, subtitle }) => {
  return (
    <WobbleCard
      containerClassName="w-full max-w-[584px] mb-4"
      className="p-0"
    >
      <div className="flex flex-col group">
        
        <div className="w-full bg-white/20 overflow-hidden relative">
         
          <img
           
            src={ imageUrl}
            alt={title}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 relative z-10"
          />
        </div>
        
        {/* Текст под изображением */}
        <div className="mt-3 mb-3 text-xs tracking-wider uppercase">
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