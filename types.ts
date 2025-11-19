export interface SocialLink {
  name: string;
  url: string;
  icon: string; // icon name from Lucide
}

export interface Education {
  school: string;
  degree: string;
  graduation: string;
  gpa: string;
  coursework: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  skills: string[];
}

export interface Project {
  name: string;
  description: string[];
  stack: string[];
  link?: string;
  image: string;
  date: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  description?: string;
}