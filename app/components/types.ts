// components/types.ts
// components/types.ts
export interface ProjectProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  slug: string;  // Add this
  aspectRatio?: number;
}
  
  export interface NavLinkProps {
    label: string;
  }
  