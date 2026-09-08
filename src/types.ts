export type Language = 'esp' | 'eng';

export interface TarotPlan {
  id: string;
  title: string;
  tagline?: string;
  priceUSD: number;
  format: 'written' | 'voice' | 'videocall';
  features: string[];
  duration?: string;
  questionsCount: number;
  popular?: boolean;
}

export interface DigitalProduct {
  id: string;
  type: 'ebook' | 'course';
  tag?: string;
  title: string;
  description: string;
  syllabus?: string[];
  priceUSD: number;
  gumroadUrl?: string;
}
