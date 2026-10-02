export type CategoryType = 'all' | 'trailer' | 'photo' | 'montage' | 'cinematic';

export interface Project {
  id: string;
  title: string;
  category: CategoryType;
  categoryLabel: string;
  client: string;
  serverName: string;
  duration?: string;
  photoCount?: string;
  resolution: string;
  fps: string;
  image: string;
  aspectRatio: '16:9' | '4:3';
  views: string;
  likes: string;
  synopsis: string;
  lore: string;
  specs: {
    graphicMod: string;
    cameraTool: string;
    editingSoftware: string;
    colorGrade: string;
  };
  tags: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: number;
  popular?: boolean;
  color: string;
  badge?: string;
  turnaround: string;
  features: string[];
  idealFor: string;
}

export interface SoundEffectItem {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  color: string;
  type: 'bass' | 'gunshot' | 'turbo' | 'siren' | 'riser';
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
