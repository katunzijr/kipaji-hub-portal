import Link from 'next/link';
import Image from 'next/image';
import { Artist } from '@/types';
import { MapPin, Star, CheckCircle } from 'lucide-react';

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Link href={`/artists/${artist.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 bg-gray-200">
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {artist.verified && (
            <div className="absolute top-2 right-2 bg-primary-600 text-white p-1 rounded-full">
              <CheckCircle className="h-4 w-4" />
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{artist.name}</h3>
          <p className="text-sm text-primary-600 mb-2">
            {artist.artistType.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(', ')}
          </p>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{artist.location}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm font-medium text-gray-900">{artist.rating}</span>
              <span className="ml-1 text-sm text-gray-500">({artist.totalReviews})</span>
            </div>
            <span className="text-xs text-gray-500">{artist.experience} years exp</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-1">
            {artist.specialties.slice(0, 2).map((specialty) => (
              <span
                key={specialty}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {specialty}
              </span>
            ))}
            {artist.specialties.length > 2 && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                +{artist.specialties.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
