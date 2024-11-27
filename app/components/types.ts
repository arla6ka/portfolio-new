// components/types.ts
// components/types.ts
export interface ProjectProps {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  videoUrl?: string;
  height?: string;
  liveUrl?: string;
  githubUrl?: string;
  year?: string;
  role?: string;
}
  
  export interface NavLinkProps {
    label: string;
  }
  