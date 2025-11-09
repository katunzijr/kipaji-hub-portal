# Kipaji Hub - Tanzania's Premier Music Platform

A comprehensive Next.js platform connecting music artists, educators, promoters, and investors in Tanzania.

## Features

- **Artist Profiles**: Discover talented singers, drummers, guitarists, and more
- **Learning Platform**: Access courses, tutorials, and educational content
- **Events Discovery**: Find concerts, workshops, masterclasses, and networking opportunities
- **Promoters & Investors**: Connect with experienced promoters and investors
- **Music Marketplace**: Shop for instruments, equipment, and music products
- **Affiliate Programs**: Earn commissions by promoting music products and services

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Currency**: Tanzanian Shilling (TZS)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
kipaji-hub-portal/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Homepage
│   ├── artists/             # Artists pages
│   ├── learning/            # Learning content pages
│   ├── events/              # Events pages
│   ├── promoters-investors/ # Promoters & investors pages
│   ├── marketplace/         # Marketplace pages
│   └── affiliates/          # Affiliate programs pages
├── components/              # Reusable React components
├── data/                    # Dummy data files
├── lib/                     # Utility functions
├── types/                   # TypeScript type definitions
└── public/                  # Static assets
```

## Key Pages

- **Homepage** (`/`): Hero section, featured artists, events, and courses
- **Artists** (`/artists`): Browse and discover music artists
- **Artist Profile** (`/artists/[id]`): Detailed artist information
- **Learning** (`/learning`): Educational courses and content
- **Events** (`/events`): Music events and opportunities
- **Promoters & Investors** (`/promoters-investors`): Connect with industry professionals
- **Marketplace** (`/marketplace`): Music products and equipment
- **Affiliates** (`/affiliates`): Affiliate marketing programs

## Contact

Email: info@kipajihub.com

## License

All rights reserved © 2024 Kipaji Hub
