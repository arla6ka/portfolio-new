'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import ProjectHeader from '@/app/components/ProjectHeader';
import ProjectDetails from '@/app/components/ProjectDetails';
import { projects } from '@/app/data/projects';
import { motion } from 'framer-motion';
import Footer from '@/app/components/Footer';

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
      <motion.section
          initial="initial"
          animate="animate"
          className="w-full mt-10 md:mt-20"
        >
          <Footer />
        </motion.section>
    </main>
  );
};

export default ProjectPage;