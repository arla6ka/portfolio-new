// components/ProjectHeader.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { AnchorUnderline } from './NavLink';

const ProjectHeader: React.FC = () => {
  const router = useRouter();

  const handleGoBack = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    router.back();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-neutral-900">
      <div className="flex justify-between items-center px-16 py-6 text-[16px] leading-none border-b border-zinc-500/30">
        <AnchorUnderline 
          speed={0.6}
          className="text-[#fef4e4] cursor-pointer"
          onClick={handleGoBack}
        >
          Go Back
        </AnchorUnderline>
        <nav className="flex gap-6 items-center">
          <AnchorUnderline speed={0.6} className="text-[#fef4e4] cursor-pointer">
            Resume
          </AnchorUnderline>
          <AnchorUnderline speed={0.6} className="text-[#fef4e4] cursor-pointer">
            Linkedin
          </AnchorUnderline>
        </nav>
      </div>
    </header>
  );
};

export default ProjectHeader;