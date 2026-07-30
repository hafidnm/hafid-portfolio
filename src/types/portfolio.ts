export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'web-app' | 'landing-page' | 'dashboard' | 'ui-ux';
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: string; // e.g. 'Advanced', 'Intermediate'
    iconName: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    cvUrl?: string;
    availableForWork: boolean;
    social: {
      github: string;
      linkedin: string;
      twitter: string;
    };
    stats: {
      label: string;
      value: string;
    }[];
  };
  skillCategories: SkillCategory[];
  projects: Project[];
  experiences: ExperienceItem[];
  services: ServiceItem[];
}
