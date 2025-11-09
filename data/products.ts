import { Product, AffiliateProgram } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Professional Studio Headphones',
    description: 'Premium over-ear headphones designed for music production and mixing. Crystal clear sound with exceptional comfort for long sessions.',
    image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop'
    ],
    price: 450000,
    currency: 'TZS',
    category: 'equipment',
    brand: 'AudioTech Pro',
    inStock: true,
    rating: 4.8,
    reviews: 156,
    affiliateLink: 'https://affiliate.example.com/headphones'
  },
  {
    id: '2',
    name: 'USB Audio Interface',
    description: 'Professional 2-channel audio interface for home recording. High-quality preamps and crystal-clear conversion.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=600&fit=crop'
    ],
    price: 650000,
    currency: 'TZS',
    category: 'equipment',
    brand: 'SoundCraft',
    inStock: true,
    rating: 4.9,
    reviews: 203,
    affiliateLink: 'https://affiliate.example.com/audiointerface'
  },
  {
    id: '3',
    name: 'Acoustic Guitar - Steel String',
    description: 'Beautiful handcrafted acoustic guitar with rich, warm tone. Perfect for beginners and intermediate players.',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=600&h=600&fit=crop'
    ],
    price: 850000,
    currency: 'TZS',
    category: 'instrument',
    brand: 'Harmony Guitars',
    inStock: true,
    rating: 4.7,
    reviews: 89,
    affiliateLink: 'https://affiliate.example.com/guitar'
  },
  {
    id: '4',
    name: 'MIDI Keyboard Controller',
    description: '61-key MIDI controller with velocity-sensitive keys, drum pads, and assignable knobs. Perfect for music production.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=600&fit=crop'
    ],
    price: 750000,
    currency: 'TZS',
    category: 'equipment',
    brand: 'KeyMaster',
    inStock: true,
    rating: 4.6,
    reviews: 134,
    affiliateLink: 'https://affiliate.example.com/midi'
  },
  {
    id: '5',
    name: 'Studio Monitor Speakers (Pair)',
    description: 'Active studio monitors delivering accurate sound reproduction. Essential for professional mixing and mastering.',
    image: 'https://images.unsplash.com/photo-1545484047-7f86f48c7f82?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1545484047-7f86f48c7f82?w=600&h=600&fit=crop'
    ],
    price: 1200000,
    currency: 'TZS',
    category: 'equipment',
    brand: 'MonitorPro',
    inStock: true,
    rating: 5.0,
    reviews: 167,
    affiliateLink: 'https://affiliate.example.com/monitors'
  },
  {
    id: '6',
    name: 'Music Production Software Bundle',
    description: 'Complete DAW with virtual instruments, effects plugins, and sample libraries. Everything you need to produce professional music.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop'
    ],
    price: 550000,
    currency: 'TZS',
    category: 'software',
    brand: 'BeatMaker Suite',
    inStock: true,
    rating: 4.8,
    reviews: 445,
    affiliateLink: 'https://affiliate.example.com/software'
  },
  {
    id: '7',
    name: 'Professional Drum Set',
    description: '5-piece acoustic drum set with cymbals and hardware. Perfect for live performances and studio recording.',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&h=600&fit=crop'
    ],
    price: 2500000,
    currency: 'TZS',
    category: 'instrument',
    brand: 'DrumTech',
    inStock: true,
    rating: 4.9,
    reviews: 78,
    affiliateLink: 'https://affiliate.example.com/drums'
  },
  {
    id: '8',
    name: 'Music Theory Complete Guide',
    description: 'Comprehensive book covering all aspects of music theory from basics to advanced concepts. Includes exercises and examples.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=600&fit=crop'
    ],
    price: 45000,
    currency: 'TZS',
    category: 'book',
    brand: 'Music Masters Publishing',
    inStock: true,
    rating: 4.7,
    reviews: 234,
    affiliateLink: 'https://affiliate.example.com/theorybook'
  }
];

export const affiliatePrograms: AffiliateProgram[] = [
  {
    id: '1',
    name: 'Music Gear Tanzania Affiliate',
    description: 'Earn commission promoting quality music equipment. Wide range of instruments, recording gear, and accessories.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop',
    company: 'Music Gear Tanzania',
    commission: 15,
    category: 'Equipment & Instruments',
    benefits: [
      '15% commission on all sales',
      'Exclusive promotional materials',
      'Monthly bonus for top performers',
      'Early access to new products'
    ],
    requirements: [
      'Active social media presence',
      'Minimum 1000 followers',
      'Passion for music',
      'Professional conduct'
    ],
    verified: true
  },
  {
    id: '2',
    name: 'Streaming Service Partner',
    description: 'Promote premium music streaming service and earn recurring commissions for every subscription.',
    image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=600&h=400&fit=crop',
    company: 'AfriStream Music',
    commission: 20,
    category: 'Digital Services',
    benefits: [
      '20% recurring monthly commission',
      'Lifetime customer value',
      'Custom referral dashboard',
      'Marketing support'
    ],
    requirements: [
      'Music industry connection',
      'Content creation ability',
      'Email list or social following'
    ],
    verified: true
  },
  {
    id: '3',
    name: 'Online Music Courses Affiliate',
    description: 'Share educational content and earn commission on course enrollments. Help artists learn and grow.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop',
    company: 'Tanzania Music Academy',
    commission: 25,
    category: 'Education',
    benefits: [
      '25% commission per enrollment',
      'Free access to all courses',
      'Promotional video content',
      'Dedicated affiliate manager'
    ],
    requirements: [
      'Teaching or music background',
      'Active online presence',
      'Commitment to education'
    ],
    verified: true
  },
  {
    id: '4',
    name: 'Studio Recording Services',
    description: 'Refer artists to professional recording studios and earn commission on session bookings.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop',
    company: 'Premium Studios Network',
    commission: 10,
    category: 'Services',
    benefits: [
      '10% commission on bookings',
      'Discounted rates for your projects',
      'Studio tour privileges',
      'Networking opportunities'
    ],
    requirements: [
      'Music industry connections',
      'Artist network',
      'Professional reputation'
    ],
    verified: true
  }
];
