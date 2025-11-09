import { Promoter, Investor } from '@/types';

export const promoters: Promoter[] = [
  {
    id: '1',
    name: 'James Mtui',
    company: 'Busara Promotions',
    bio: 'Leading music promoter in East Africa with over 15 years of experience. Specialized in large-scale festivals and international artist bookings.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    specialization: ['Festivals', 'International Acts', 'Large Venues', 'Brand Partnerships'],
    location: 'Dar es Salaam, Tanzania',
    experience: 15,
    successfulEvents: 250,
    verified: true,
    contactEmail: 'james@busarapromotions.com',
    rating: 4.9
  },
  {
    id: '2',
    name: 'Lucy Kamau',
    company: 'Urban Beats Events',
    bio: 'Specialist in urban music events and club promotions. Known for discovering and promoting emerging Bongo Flava artists.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    specialization: ['Club Events', 'Bongo Flava', 'Emerging Artists', 'Social Media Marketing'],
    location: 'Dar es Salaam, Tanzania',
    experience: 8,
    successfulEvents: 180,
    verified: true,
    contactEmail: 'lucy@urbanbeatstanza.com',
    rating: 4.7
  },
  {
    id: '3',
    name: 'Emmanuel Shirima',
    company: 'Coastal Entertainment',
    bio: 'Beach concerts and tourism-focused music events expert. Creates unique experiences combining music with Tanzania\'s beautiful coastal locations.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    specialization: ['Beach Concerts', 'Tourism Events', 'Cultural Festivals', 'Destination Events'],
    location: 'Zanzibar, Tanzania',
    experience: 12,
    successfulEvents: 145,
    verified: true,
    contactEmail: 'emmanuel@coastalentertainment.co.tz',
    rating: 4.8
  },
  {
    id: '4',
    name: 'Patricia Mwangi',
    company: 'Gospel Music Promotions',
    bio: 'Dedicated to promoting gospel music and Christian events across Tanzania. Connecting faith-based artists with their audiences.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    specialization: ['Gospel Music', 'Christian Events', 'Church Concerts', 'Youth Programs'],
    location: 'Mbeya, Tanzania',
    experience: 10,
    successfulEvents: 95,
    verified: true,
    contactEmail: 'patricia@gospelmusictz.com',
    rating: 5.0
  }
];

export const investors: Investor[] = [
  {
    id: '1',
    name: 'Dr. Hassan Juma',
    company: 'East Africa Music Fund',
    bio: 'Venture capitalist focused on music industry investments. Supporting talented artists and music-tech startups across East Africa.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    investmentRange: {
      min: 5000000,
      max: 50000000
    },
    currency: 'TZS',
    interests: ['Artist Development', 'Music Tech', 'Recording Studios', 'Distribution Platforms'],
    location: 'Dar es Salaam, Tanzania',
    portfolioCount: 23,
    verified: true,
    contactEmail: 'hassan@eamusicfund.com'
  },
  {
    id: '2',
    name: 'Rebecca Kilonzo',
    company: 'Creative Industries Investment',
    bio: 'Angel investor passionate about supporting creative entrepreneurs. Special focus on women in music and innovative music businesses.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    investmentRange: {
      min: 2000000,
      max: 20000000
    },
    currency: 'TZS',
    interests: ['Women Artists', 'Music Education', 'Event Management', 'Music Equipment'],
    location: 'Arusha, Tanzania',
    portfolioCount: 15,
    verified: true,
    contactEmail: 'rebecca@creativeindustries.co.tz'
  },
  {
    id: '3',
    name: 'Mohamed Ali',
    company: 'Swahili Coast Ventures',
    bio: 'Investment firm backing innovative music and entertainment ventures. Looking for scalable music business opportunities.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    investmentRange: {
      min: 10000000,
      max: 100000000
    },
    currency: 'TZS',
    interests: ['Music Streaming', 'Live Events', 'Artist Management', 'Music Production'],
    location: 'Dar es Salaam, Tanzania',
    portfolioCount: 31,
    verified: true,
    contactEmail: 'mohamed@swahilicoastventures.com'
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    company: 'Impact Music Investments',
    bio: 'Social impact investor supporting music projects that create community value. Interested in music education and youth programs.',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop',
    investmentRange: {
      min: 3000000,
      max: 30000000
    },
    currency: 'TZS',
    interests: ['Music Education', 'Youth Development', 'Community Programs', 'Social Enterprise'],
    location: 'Mwanza, Tanzania',
    portfolioCount: 12,
    verified: true,
    contactEmail: 'sarah@impactmusicinvest.org'
  }
];
