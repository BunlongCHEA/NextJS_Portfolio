// TypeScript interfaces for type safety
export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  detailedPoints?: string[];
  technologies: string[];
}

export interface LearningItem {
  id: number;
  title: string;
  platform: string;
  period: string;
  description: string;
  detailedPoints: string[];
  technologies: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  cvUrl: string;
}

export interface SocialLinks {
  github: string;
  gitlab: string;
  linkedin: string;
}