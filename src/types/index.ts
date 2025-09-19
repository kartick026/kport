export interface Project {
  slug: string;
  title: string;
  date: string;
  stack: string[];
  metrics: string[];
  links: {
    code?: string;
    demo?: string;
  };
  excerpt: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  metrics?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}
