// app/projects/[slug]/page.tsx
"use client";
import React, { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ProjectHeader from '@/app/components/ProjectHeader';
import ProjectDetails from '@/app/components/ProjectDetails';
import { projects } from '@/app/data/projects';

const ProjectPage = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;

  // Find the project data based on the slug
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    // If project doesn't exist, redirect to home
    if (!slug || !project) {
      router.push('/');
    }
  }, [project, router, slug]);

  // If there's no project, show nothing while redirecting
  if (!project) {
    return null;
  }

  return (
    <main className="flex overflow-hidden flex-col bg-neutral-900 min-h-screen">
      <ProjectHeader />
      <ProjectDetails
        projectName={project.title}
        projectDescription={project.description}
        technologies={project.technologies}
        imageUrl={project.imageUrl}
      />
    </main>
  );
};

export default ProjectPage;