import Image from 'next/image';
import { promoters, investors } from '@/data/promoters';
import { TrendingUp, Briefcase, MapPin, Star, CheckCircle, Mail, DollarSign } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export default function PromotersInvestorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-10 w-10 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Promoters & Investors</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Connect with experienced promoters and investors to take your music career to the next level. Find partnerships, funding, and growth opportunities.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Promoters Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Music Promoters</h2>
              <p className="text-gray-600">
                Experienced professionals who can help promote your music and organize events
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promoters.map((promoter) => (
              <div
                key={promoter.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={promoter.image}
                        alt={promoter.name}
                        fill
                        className="object-cover"
                      />
                      {promoter.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {promoter.name}
                      </h3>
                      <p className="text-primary-600 font-medium mb-2">
                        {promoter.company}
                      </p>
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {promoter.location}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold text-gray-900">{promoter.rating}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">{promoter.bio}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialization</h4>
                    <div className="flex flex-wrap gap-2">
                      {promoter.specialization.slice(0, 3).map((spec) => (
                        <span
                          key={spec}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Experience</p>
                      <p className="font-semibold text-gray-900">{promoter.experience} years</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Events</p>
                      <p className="font-semibold text-gray-900">{promoter.successfulEvents}+</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                      Contact Promoter
                    </button>
                    <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Investors Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Music Investors</h2>
              <p className="text-gray-600">
                Find investors interested in supporting music projects and talented artists
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investors.map((investor) => (
              <div
                key={investor.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={investor.image}
                        alt={investor.name}
                        fill
                        className="object-cover"
                      />
                      {investor.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-green-600 text-white p-1 rounded-full">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {investor.name}
                      </h3>
                      <p className="text-primary-600 font-medium mb-2">
                        {investor.company}
                      </p>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        {investor.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">{investor.bio}</p>

                  <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center mb-2">
                      <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                      <h4 className="text-sm font-semibold text-gray-900">Investment Range</h4>
                    </div>
                    <p className="text-lg font-bold text-green-700">
                      {formatCurrency(investor.investmentRange.min, investor.currency)} - {formatCurrency(investor.investmentRange.max, investor.currency)}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Investment Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {investor.interests.slice(0, 3).map((interest) => (
                        <span
                          key={interest}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                        >
                          {interest}
                        </span>
                      ))}
                      {investor.interests.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          +{investor.interests.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4 text-sm text-gray-600">
                    <Briefcase className="h-4 w-4 inline mr-2" />
                    <span className="font-semibold text-gray-900">{investor.portfolioCount}</span> investments in portfolio
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                      Contact Investor
                    </button>
                    <button className="px-4 py-2 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Looking for Promotion or Investment?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Create your artist profile and get discovered by promoters and investors actively looking for talent.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Create Your Profile
          </button>
        </section>
      </div>
    </div>
  );
}
