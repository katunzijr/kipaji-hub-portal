import Link from 'next/link';
import Image from 'next/image';
import { Music, Users, GraduationCap, Calendar, TrendingUp, Award, ArrowRight } from 'lucide-react';
import ArtistCard from '@/components/ArtistCard';
import EventCard from '@/components/EventCard';
import LearningCard from '@/components/LearningCard';
import { artists } from '@/data/artists';
import { events } from '@/data/events';
import { learningContent } from '@/data/learning';

export default function HomePage() {
  const featuredArtists = artists.slice(0, 3);
  const featuredEvents = events.filter(e => e.featured).slice(0, 3);
  const featuredCourses = learningContent.slice(0, 3);

  const features = [
    {
      icon: Users,
      title: 'Connect with Artists',
      description: 'Discover talented singers, drummers, guitarists, and more. Build your network in the music community.',
    },
    {
      icon: GraduationCap,
      title: 'Learn & Grow',
      description: 'Access courses, tutorials, and educational content from industry professionals.',
    },
    {
      icon: Calendar,
      title: 'Discover Events',
      description: 'Find concerts, workshops, masterclasses, and networking opportunities.',
    },
    {
      icon: TrendingUp,
      title: 'Find Promoters',
      description: 'Connect with experienced promoters to take your career to the next level.',
    },
    {
      icon: Award,
      title: 'Get Investors',
      description: 'Meet investors interested in supporting music projects and talent.',
    },
    {
      icon: Music,
      title: 'Marketplace',
      description: 'Buy instruments, equipment, books, and music products from trusted sellers.',
    },
  ];

  const stats = [
    { label: 'Active Artists', value: '5,000+' },
    { label: 'Learning Resources', value: '1,200+' },
    { label: 'Monthly Events', value: '300+' },
    { label: 'Success Stories', value: '800+' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Amplify Your Music Career in Tanzania
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-secondary">
              Connect with artists, learn from experts, discover opportunities, and grow your presence in the music industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-secondary text-primary hover:bg-secondary-600 transition-colors"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/artists"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-secondary text-white hover:bg-secondary hover:text-primary transition-colors"
              >
                Explore Artists
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kipaji Hub provides comprehensive tools and resources for music professionals at every stage of their career.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Artists</h2>
              <p className="text-gray-600">Discover talented musicians across Tanzania</p>
            </div>
            <Link
              href="/artists"
              className="text-primary font-semibold hover:text-secondary flex items-center transition-colors"
            >
              View All
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-2">Upcoming Events</h2>
              <p className="text-gray-100">Don`t miss out on these amazing music events</p>
            </div>
            <Link
              href="/events"
              className="text-primary-100 font-semibold hover:text-secondary flex items-center transition-colors shrink-0"
            >
              View All
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Courses</h2>
              <p className="text-gray-600">Learn from industry professionals and enhance your skills</p>
            </div>
            <Link
              href="/learning"
              className="text-primary font-semibold hover:text-secondary flex items-center transition-colors shrink-0"
            >
              View All
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <LearningCard key={course.id} content={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Take Your Music Career to the Next Level?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of artists, educators, and music professionals on Kipaji Hub today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-secondary text-primary hover:bg-secondary-600 transition-colors"
            >
              Create Your Profile
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-secondary text-white hover:bg-secondary hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
