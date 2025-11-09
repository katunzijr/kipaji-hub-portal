import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { artists } from '@/data/artists';
import {
  MapPin,
  Star,
  CheckCircle,
  Calendar,
  Award,
  Instagram,
  Youtube,
  Facebook,
  Music2,
  Mail,
  Phone
} from 'lucide-react';

export function generateStaticParams() {
  return artists.map((artist) => ({
    id: artist.id,
  }));
}

export default async function ArtistProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const artist = artists.find((a) => a.id === id);

  if (!artist) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="relative h-80 bg-gradient-to-r from-primary-600 to-primary-800">
        {artist.coverImage && (
          <Image
            src={artist.coverImage}
            alt={artist.name}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="relative -mt-32 pb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-48 h-48 rounded-xl overflow-hidden border-4 border-white shadow-xl bg-white">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
              </div>
              {artist.verified && (
                <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white p-2 rounded-full shadow-lg">
                  <CheckCircle className="h-6 w-6" />
                </div>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {artist.name}
                  </h1>
                  <p className="text-xl text-primary-600 mb-3">
                    {artist.artistType.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(' • ')}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {artist.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {artist.experience} years experience
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                      <span className="font-semibold text-gray-900">{artist.rating}</span>
                      <span className="ml-1">({artist.totalReviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                    Contact Artist
                  </button>
                  <button className="px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">{artist.bio}</p>
            </div>

            {/* Specialties */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {artist.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Award className="h-6 w-6 mr-2 text-primary-600" />
                Achievements
              </h2>
              <ul className="space-y-3">
                {artist.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Reviews</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">2 weeks ago</span>
                    </div>
                    <p className="text-gray-700">
                      Excellent musician! Professional, talented, and easy to work with. Highly recommended!
                    </p>
                    <p className="text-sm text-gray-500 mt-2">- John Doe</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect</h3>
              <div className="space-y-3">
                {artist.socialMedia.instagram && (
                  <a
                    href={`https://instagram.com/${artist.socialMedia.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <Instagram className="h-5 w-5 mr-3" />
                    {artist.socialMedia.instagram}
                  </a>
                )}
                {artist.socialMedia.youtube && (
                  <a
                    href={`https://youtube.com/${artist.socialMedia.youtube}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <Youtube className="h-5 w-5 mr-3" />
                    {artist.socialMedia.youtube}
                  </a>
                )}
                {artist.socialMedia.facebook && (
                  <a
                    href={`https://facebook.com/${artist.socialMedia.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <Facebook className="h-5 w-5 mr-3" />
                    {artist.socialMedia.facebook}
                  </a>
                )}
                {artist.socialMedia.spotify && (
                  <a
                    href={`https://spotify.com/artist/${artist.socialMedia.spotify}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <Music2 className="h-5 w-5 mr-3" />
                    Spotify Profile
                  </a>
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Member Since</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {new Date(artist.joinedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Rating</p>
                  <p className="text-lg font-semibold text-gray-900">{artist.rating}/5.0</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Reviews</p>
                  <p className="text-lg font-semibold text-gray-900">{artist.totalReviews}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Response Time</p>
                  <p className="text-lg font-semibold text-gray-900">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to collaborate?</h3>
              <p className="mb-6 text-primary-100">
                Get in touch to discuss your project or booking.
              </p>
              <button className="w-full px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
