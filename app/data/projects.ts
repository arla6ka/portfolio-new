// data/projects.ts
export interface Project {
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

export const projects: Project[] = [
  {
    id: '1',
    slug: 'cardpranks',
    title: 'CardPranks',
    subtitle: 'Online Business Platform',
    description: `CardPranks is a full-stack application I developed as a mini online business platform. The main idea was to create a service where people can order prank postcards to be sent to their friends or relatives. These postcards appear to be from people they don't know, making it a fun and harmless prank.

    I built this project from scratch, implementing both frontend and backend functionality. The platform allows users to customize their prank postcards, manage orders, and track deliveries. It was an interesting project that combined business logic with web development.`,
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Express'],
    videoUrl: '/videos/cardpranks.mp4',
    imageUrl: '/images/1.png'
  },
  {
    id: '2',
    slug: 'url-shortener',
    title: 'Shortener',
    subtitle: 'URL Shortener Service',
    description: `This URL shortener is a personal project I developed to simplify link management. The application provides basic but essential functionality for creating shortened URLs. Users can input long URLs and receive shortened versions that are easier to share and manage.

    The project includes features like custom URL aliases, basic analytics for link clicks, and a simple dashboard for managing shortened links. It was a great opportunity to practice full-stack development and work with URL routing.`,
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/images/2.png'
  }
  ,

  {
    id: '3',
    slug: 'admit',
    title: 'Admitium University Admissions',
    subtitle: 'Landing Page x AI',
    description: `This project was created for a client who needed a landing page for their university admissions service. The client was very happy with the results and the project was completed in just 1 day.`,
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Express', 'Clerk' , 'EdgeDB' , 'OpenAI API'],
    videoUrl: '/videos/admit.mp4',
    imageUrl: '/images/1.png'
  },
  

  {
    id: '4',
    slug: 'bazaar',
    title: 'Bazaar AI',
    subtitle: 'Online Shopping Assistant',
    height: '400px',
    description: `I developed this AI platform during the nFactorial Incubator, one of Central Asia's most selective IT bootcamps. Completed in one month, Bazaar AI is a smart shopping assistant that scrapes multiple marketplaces to find the best and most cost-effective products for users.

    The platform uses AI to analyze product listings, compare prices, and provide personalized recommendations. It aggregates data from various sources to help users make informed purchasing decisions. The project demonstrates the practical application of AI in everyday shopping scenarios.`,
    technologies: ['Next.js', 'OpenAI API', 'MongoDB', 'Node.js', 'TypeScript', 'Puppeteer', 'Tailwind CSS'],
    imageUrl: '/images/3.png'
  },
  {
    id: '5',
    slug: 'vton',
    title: 'AI Virtual Try-On',
    subtitle: 'NVIDIA x Vercel Hackathon',
    description: `This project was created during the NVIDIA x Vercel hackathon in just 2 hours. We developed a virtual try-on service that allows users to virtually try on clothes using artificial intelligence. The application integrates with Replicate's machine learning models to provide realistic clothing visualization.

    The service processes user photos and selected clothing items to generate realistic previews of how the clothes would look when worn. Despite the short development time, we managed to create a functional prototype that demonstrates the potential of AI in e-commerce.`,
    technologies: ['Next.js', 'Replicate API', 'VTON ML Model', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    videoUrl: '/videos/vton.mp4',
    imageUrl: '/images/1.png'
  },
  {
    id: '6',
    slug: 'grocery-shopping-helper',
    title: 'Minerva Grocery AI',
    subtitle: 'Grocery Shopping Assistant',
    description: `I developed this project specifically for university students who shop at Trader Joe's, Costco, and Target. The application helps students find the most cost-effective groceries across these three stores. Users can input their shopping list, and the system automatically finds the best deals and products.

    The main goal was to help students save both money and time by comparing prices and products across different stores. The application analyzes prices, product quality, and store locations to provide optimal shopping recommendations.`,
    technologies: ['Next.js', 'MongoDB', 'Node.js', 'Express', 'TypeScript', 'Redis', 'Tailwind CSS'],
    imageUrl: '/images/1.png'
  },
  
];