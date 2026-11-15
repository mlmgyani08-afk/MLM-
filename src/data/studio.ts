export const STUDIO_INFO = {
  brand: 'MLM STUDIO',
  tagline: 'We Build Digital Excellence.',
  founder: 'Hardik Pandit',
  location: 'India',
  email: 'mlmgyani08@gmail.com',
  whatsappDisplay: '+91 7011285228',
  whatsappHref:
    'https://wa.me/917011285228?text=Hello%20Hardik%2C%20I%20would%20like%20to%20discuss%20a%20web%20project%20with%20MLM%20STUDIO.',
  instagramHref: 'https://www.instagram.com/_mlmgyani?obrf=ZjNtaDEzNG9iZHN5',
  instagramHandle: '@_mlmgyani',
  pricingNote: 'Contact for pricing.',
} as const;

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  summary: string;
  deliverables: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-website',
    index: '01',
    title: 'Business Website Development',
    summary:
      'Bespoke multi-page digital flagships designed to establish brand authority, communicate value with clarity, and convert visitors into inquiries.',
    deliverables: 'Brand Architecture · Custom Layout · Direct Lead Pathways',
  },
  {
    id: 'landing-page',
    index: '02',
    title: 'Landing Page Development',
    summary:
      'Focused single-page experiences structured around crisp storytelling, visual restraint, and deliberate calls to action for launches and campaigns.',
    deliverables: 'Narrative Flow · Fast Load Speed · Conversion Clarity',
  },
  {
    id: 'portfolio-website',
    index: '03',
    title: 'Portfolio Website Development',
    summary:
      'Refined personal and creative showcases crafted for founders, consultants, and independent creators who want their work framed with distinction.',
    deliverables: 'Editorial Framing · Refined Typography · Curated Presentation',
  },
  {
    id: 'responsive-design',
    index: '04',
    title: 'Responsive Website Design',
    summary:
      'Precision-calibrated interfaces engineered to feel effortless and balanced across widescreen desktops, tablets, and handheld mobile screens.',
    deliverables: 'Fluid Breakpoints · Accessible Contrast · Touch-Ready Controls',
  },
];

export interface TechnologyItem {
  name: string;
  role: string;
  description: string;
}

export const TECHNOLOGIES: TechnologyItem[] = [
  {
    name: 'HTML',
    role: 'Semantic Structure',
    description:
      'Clean, accessible document architecture built for search visibility, screen readers, and lasting structural clarity.',
  },
  {
    name: 'CSS',
    role: 'Visual Precision',
    description:
      'Tailored editorial typography, disciplined grid geometry, and fluid responsive styling without visual clutter.',
  },
  {
    name: 'JavaScript',
    role: 'Interactive Polish',
    description:
      'Lightweight, purposeful client-side interactivity and smooth transitions that feel effortless on every device.',
  },
];

export interface WhyPillar {
  index: string;
  title: string;
  detail: string;
}

export const WHY_PILLARS: WhyPillar[] = [
  {
    index: '01',
    title: 'Clean and modern design',
    detail:
      'Restrained luxury aesthetics shaped by purposeful whitespace, calm typography, and disciplined visual hierarchy.',
  },
  {
    index: '02',
    title: 'Responsive layouts',
    detail:
      'Every section and interaction is crafted to adapt gracefully across mobile phones, tablets, and widescreen displays.',
  },
  {
    index: '03',
    title: 'Attention to detail',
    detail:
      'From hairline alignment and contrast ratios to hover timing, subtle refinements elevate the entire impression.',
  },
  {
    index: '04',
    title: 'User-friendly experiences',
    detail:
      'Intuitive navigation and clear reading rhythm ensure visitors immediately understand your offer and how to reach you.',
  },
  {
    index: '05',
    title: 'Creative approach',
    detail:
      'Every site is shaped around your specific brand voice rather than recycled templates or generic agency formulas.',
  },
];

export const COLLABORATION_TRACKS = [
  'Business Website Development',
  'Landing Page Development',
  'Portfolio Website Development',
  'Responsive Website Design',
  'Inaugural Studio Collaboration',
] as const;
