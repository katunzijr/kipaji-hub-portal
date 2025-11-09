import ArtistCard from '@/components/ArtistCard';
import { artists } from '@/data/artists';
import { Music, Filter } from 'lucide-react';

export default function ArtistsPage() {
  const artistTypes = ['All', 'Singer', 'Drummer', 'Guitarist', 'Pianist', 'Producer', 'DJ'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Music className="h-10 w-10 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Discover Artists</h1>
          </div>
          <p className="text-xl text-primary-100 max-w-3xl">
            Connect with talented musicians across Tanzania. Find singers, instrumentalists, producers, and DJs for your next project.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {artists.length} Artists Found
            </h2>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {artistTypes.map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  type === 'All'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Artist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
            Load More Artists
          </button>
        </div>
      </div>
    </div>
  );
}
