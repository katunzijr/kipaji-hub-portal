import { Artist } from '@/types';

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Amina Hassan',
    artistType: ['singer', 'songwriter'],
    bio: 'Award-winning Bongo Flava artist with over 10 years of experience. Known for powerful vocals and meaningful lyrics that resonate with audiences across East Africa.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=400&fit=crop',
    location: 'Dar es Salaam, Tanzania',
    experience: 10,
    specialties: ['Bongo Flava', 'Afrobeat', 'R&B'],
    achievements: [
      'Best Female Artist - Kilimanjaro Music Awards 2023',
      '5 Platinum Albums',
      'Over 50M streams on Spotify'
    ],
    socialMedia: {
      instagram: '@aminahassan',
      youtube: '@aminahassanofficial',
      spotify: 'aminahassan',
      facebook: 'aminahassanmusic'
    },
    rating: 4.8,
    totalReviews: 234,
    verified: true,
    joinedDate: '2020-01-15'
  },
  {
    id: '2',
    name: 'John Makonde',
    artistType: ['drummer', 'producer'],
    bio: 'Professional drummer and music producer specializing in traditional Tanzanian rhythms blended with modern beats. Session musician for top East African artists.',
    image: 'https://elements-resized.envatousercontent.com/elements-video-cover-images/files/6e7f3d7f-05bf-4f92-8f5c-35ecfa4cb8ef/inline_image_preview.jpg?w=500&cf_fit=cover&q=85&format=auto&s=a01f8675116a9f24ddd64a8fe9648111b69b8bc3ebbe522e21e77981533d1b96',
    coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=400&fit=crop',
    location: 'Arusha, Tanzania',
    experience: 8,
    specialties: ['Traditional Drums', 'Afrobeat', 'Jazz Fusion'],
    achievements: [
      'Collaborated with Diamond Platnumz',
      'Producer of the Year 2022',
      'Featured in 100+ recordings'
    ],
    socialMedia: {
      instagram: '@johnmakonde',
      youtube: '@johnmakondedrums'
    },
    rating: 4.9,
    totalReviews: 156,
    verified: true,
    joinedDate: '2019-06-20'
  },
  {
    id: '3',
    name: 'Sarah Mwambungu',
    artistType: ['guitarist', 'songwriter'],
    bio: 'Classical and contemporary guitarist bringing a unique sound to Tanzanian music. Teacher and performer with a passion for nurturing new talent.',
    image: 'https://images.pexels.com/photos/3008826/pexels-photo-3008826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    coverImage: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&h=400&fit=crop',
    location: 'Mwanza, Tanzania',
    experience: 12,
    specialties: ['Classical Guitar', 'Fingerstyle', 'Acoustic'],
    achievements: [
      'Berklee College of Music Alumni',
      'Published 3 instructional books',
      'Trained over 500 students'
    ],
    socialMedia: {
      instagram: '@sarahmwambungu',
      youtube: '@sarahguitarlessons',
      facebook: 'sarahmwambungumusic'
    },
    rating: 5.0,
    totalReviews: 89,
    verified: true,
    joinedDate: '2018-03-10'
  },
  {
    id: '4',
    name: 'Michael Kitenge',
    artistType: ['pianist', 'producer'],
    bio: 'Jazz pianist and music producer with a deep love for creating soulful melodies. Specializes in film scoring and contemporary African music.',
    image: 'https://prsfoundation.com/wp-content/uploads/2024/06/IMG_5127.jpg',
    coverImage: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1200&h=400&fit=crop',
    location: 'Dodoma, Tanzania',
    experience: 15,
    specialties: ['Jazz', 'Classical Piano', 'Film Scoring'],
    achievements: [
      'Composed music for 20+ films',
      'Jazz Festival Headliner 2023',
      'Multi-instrumentalist'
    ],
    socialMedia: {
      instagram: '@michaelkitenge',
      spotify: 'michaelkitenge'
    },
    rating: 4.7,
    totalReviews: 112,
    verified: true,
    joinedDate: '2017-11-05'
  },
  {
    id: '5',
    name: 'Grace Msangi',
    artistType: ['dj', 'producer'],
    bio: 'Leading female DJ in Tanzania, known for electrifying performances and innovative mixes. Pioneer in electronic dance music scene in East Africa.',
    image: 'https://thefader-res.cloudinary.com/private_images/w_1440,c_limit,f_auto,q_auto:best/0J0A3483_lyu4wy/emma-music-production-workshop-for-women.jpg',
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=400&fit=crop',
    location: 'Dar es Salaam, Tanzania',
    experience: 6,
    specialties: ['House Music', 'Afro House', 'EDM'],
    achievements: [
      'Resident DJ at top 5 clubs',
      'Festival bookings across Africa',
      '200K+ social media followers'
    ],
    socialMedia: {
      instagram: '@djgracemsangi',
      youtube: '@djgraceofficial',
      facebook: 'djgracemsangi'
    },
    rating: 4.6,
    totalReviews: 203,
    verified: true,
    joinedDate: '2021-02-14'
  },
  {
    id: '6',
    name: 'David Moshi',
    artistType: ['singer', 'guitarist'],
    bio: 'Gospel music artist spreading positive messages through music. Talented multi-instrumentalist and worship leader at major churches.',
    image: 'https://media.istockphoto.com/id/1137781079/photo/black-man-playing-acoustic-guitar-and-singing-on-stage.jpg?s=612x612&w=0&k=20&c=vJ54S7U7uEHO2Oa8N2QZENmOi6kcFCtaS8chva_MaWU=',
    coverImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&h=400&fit=crop',
    location: 'Mbeya, Tanzania',
    experience: 9,
    specialties: ['Gospel', 'Contemporary Christian', 'Worship'],
    achievements: [
      'Best Gospel Artist 2022',
      '3 Gospel Music Awards',
      'International tours'
    ],
    socialMedia: {
      instagram: '@davidmoshimusic',
      youtube: '@davidmoshiofficial',
      facebook: 'davidmoshimusic'
    },
    rating: 4.9,
    totalReviews: 178,
    verified: true,
    joinedDate: '2019-09-01'
  }
];
