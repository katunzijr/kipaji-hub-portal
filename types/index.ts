export type ArtistType = 'singer' | 'drummer' | 'guitarist' | 'pianist' | 'producer' | 'dj' | 'songwriter' | 'other';

export type ContentType = 'video' | 'book' | 'course' | 'tutorial' | 'article';

export type EventType = 'concert' | 'workshop' | 'masterclass' | 'festival' | 'competition' | 'networking';

export interface Artist {
  id: string;
  name: string;
  artistType: ArtistType[];
  bio: string;
  image: string;
  coverImage?: string;
  location: string;
  experience: number; // years
  specialties: string[];
  achievements: string[];
  socialMedia: {
    instagram?: string;
    youtube?: string;
    spotify?: string;
    facebook?: string;
  };
  rating: number;
  totalReviews: number;
  verified: boolean;
  joinedDate: string;
}

export interface LearningContent {
  id: string;
  title: string;
  description: string;
  type: ContentType;
  author: string;
  authorId: string;
  image: string;
  price: number; // in TZS
  currency: 'TZS';
  duration?: string; // for videos/courses
  pages?: number; // for books
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  tags: string[];
  rating: number;
  enrollments: number;
  createdAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  type: EventType;
  image: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  organizer: string;
  price: number; // in TZS
  currency: 'TZS';
  capacity: number;
  attendees: number;
  featured: boolean;
  tags: string[];
}

export interface Promoter {
  id: string;
  name: string;
  company: string;
  bio: string;
  image: string;
  specialization: string[];
  location: string;
  experience: number;
  successfulEvents: number;
  verified: boolean;
  contactEmail: string;
  rating: number;
}

export interface Investor {
  id: string;
  name: string;
  company: string;
  bio: string;
  image: string;
  investmentRange: {
    min: number;
    max: number;
  };
  currency: 'TZS';
  interests: string[];
  location: string;
  portfolioCount: number;
  verified: boolean;
  contactEmail: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  images: string[];
  price: number;
  currency: 'TZS';
  category: 'instrument' | 'equipment' | 'software' | 'accessory' | 'book' | 'merchandise';
  brand: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  affiliateLink?: string;
}

export interface AffiliateProgram {
  id: string;
  name: string;
  description: string;
  image: string;
  company: string;
  commission: number; // percentage
  category: string;
  benefits: string[];
  requirements: string[];
  verified: boolean;
}
