import Image from 'next/image';
import { affiliatePrograms } from '@/data/products';
import { TrendingUp, CheckCircle, ArrowRight, Percent } from 'lucide-react';

export default function AffiliatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-10 w-10 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Affiliate Programs</h1>
          </div>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Earn money by promoting quality music products and services. Join our affiliate programs and start earning commissions today.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Join a Program</h3>
              <p className="text-gray-600">
                Choose from our selection of verified affiliate programs that match your interests and audience.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Share & Promote</h3>
              <p className="text-gray-600">
                Get your unique referral links and start promoting products to your audience through social media, blog, or website.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Earn Commission</h3>
              <p className="text-gray-600">
                Earn commission on every sale or action generated through your referral links. Get paid regularly.
              </p>
            </div>
          </div>
        </section>

        {/* Available Programs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Affiliate Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {affiliatePrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover"
                  />
                  {program.verified && (
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {program.name}
                      </h3>
                      <p className="text-primary-600 font-medium">{program.company}</p>
                    </div>
                    <div className="bg-indigo-100 px-3 py-2 rounded-lg">
                      <div className="flex items-center">
                        <Percent className="h-5 w-5 text-indigo-600 mr-1" />
                        <span className="text-2xl font-bold text-indigo-600">
                          {program.commission}%
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 text-center">Commission</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mb-3">{program.category}</p>
                  <p className="text-gray-700 mb-4">{program.description}</p>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits</h4>
                    <ul className="space-y-2">
                      {program.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                      {program.benefits.length > 3 && (
                        <li className="text-sm text-indigo-600 font-medium">
                          +{program.benefits.length - 3} more benefits
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Requirements</h4>
                    <ul className="space-y-1">
                      {program.requirements.slice(0, 2).map((req, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
                    Join Program
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to Become an Affiliate Partner?
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
            If you have a music-related product or service and want to grow through affiliate partnerships, contact us to discuss adding your program to Kipaji Hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg">
              Contact Us
            </button>
            <a
              href="mailto:info@kipajihub.com"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              info@kipajihub.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
