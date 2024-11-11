// components/ProjectCard.tsx
import { ProjectProps } from './types';

const ProjectCard: React.FC<ProjectProps> = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="flex flex-col text-xs tracking-wider leading-5 uppercase text-neutral-50 max-md:mt-3 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <div
          className="flex w-full bg-white bg-opacity-20 max-w-[584px] min-h-[306px] max-md:max-w-full"
          style={{
            backgroundImage: `url(${imageUrl})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          role="img"
          aria-label={title}
        />
        <h2 className="mt-3 mb-3">
          {title} <br />
          <span className="text-zinc-500">{subtitle}</span>
        </h2>
      </div>
    </div>
  );
};

export default ProjectCard;
