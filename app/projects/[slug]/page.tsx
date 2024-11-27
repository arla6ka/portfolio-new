'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import ProjectHeader from '@/app/components/ProjectHeader';
import ProjectDetails from '@/app/components/ProjectDetails';
import { projects } from '@/app/data/projects';

const ProjectPage = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return null;
  }

  const imageUrl = project.imageUrl || '/images/default-project-image.png';

  return (
    <main className="bg-neutral-900">
      <ProjectHeader />
      <ProjectDetails
        projectName={project.title}
        projectDescription={project.description}
        technologies={project.technologies}
        imageUrl={imageUrl}
        videoUrl={project.videoUrl}
        projectLink={project.liveUrl}
        githubLink={project.githubUrl}
        year={project.year}
        role={project.role}
      />
      <footer className="w-full bg-neutral-900 px-4 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto py-12">
          {/* Содержимое футера */}
        </div>
      </footer>
    </main>
  );
};

export default ProjectPage;