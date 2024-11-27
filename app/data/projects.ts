// data/projects.ts
export interface Project {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    liveUrl?: string;
    githubUrl?: string;
    year?: string;
    role?: string;
  }
  
  export const projects: Project[] = [
    {
      id: '1',
      slug: 'vindex-project',
      title: 'Vindex Project',
      subtitle: 'Web Development',
      description: `Vindex is a comprehensive web application that revolutionizes data visualization and analysis. Built with modern web technologies, it offers real-time data processing and interactive visualizations.
  
      The project focused on creating an intuitive user interface while maintaining high performance with large datasets. Key features include customizable dashboards, real-time collaboration, and advanced filtering capabilities.
  
      The application successfully reduced data analysis time by 60% and is currently used by over 1000 analysts worldwide.`,
      technologies: ['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'D3.js'],
      imageUrl: '/images/1.png'
    },
    {
      id: '2',
      slug: 'nofilter-app',
      title: 'NoFilter App',
      subtitle: 'Mobile Development',
      description: `NoFilter is a revolutionary mobile application that transforms how people interact with photo editing. The app uses AI to suggest contextual edits while maintaining the authenticity of original images.
  
      As the lead developer, I implemented the core editing engine and designed the real-time filter system. The app processes over 1 million photos daily with an average response time of 100ms.
  
      Key achievements include reducing processing time by 40% and increasing user engagement by 200%.`,
      technologies: ['React Native', 'Python', 'TensorFlow', 'AWS', 'Redux'],
      imageUrl: '/images/2.png'
    },
    {
      id: '3',
      slug: 'jn-platform',
      title: 'JN Platform',
      subtitle: 'Full Stack Development',
      description: `JN Platform is an enterprise-level content management system that handles millions of daily transactions. The platform provides real-time analytics, automated content optimization, and advanced user management.
  
      I led the development of the core infrastructure and implemented the microservices architecture. The system maintains 99.99% uptime and handles peak loads of 10,000 requests per second.
  
      The platform has been adopted by major media companies and has processed over 5 billion content items to date.`,
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Docker', 'Kubernetes'],
      imageUrl: '/images/3.png'
    }
  ];