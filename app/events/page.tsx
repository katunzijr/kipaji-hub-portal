import EventCard from '@/components/EventCard';
import { events } from '@/data/events';
import { Calendar, Filter } from 'lucide-react';

export default function EventsPage() {
  const eventTypes = ['All', 'Concert', 'Workshop', 'Masterclass', 'Festival', 'Competition', 'Networking'];
  const upcomingEvents = events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Calendar className="h-10 w-10 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Discover Events</h1>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl">
            Find concerts, workshops, masterclasses, and networking opportunities. Connect with the music community and grow your network.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {events.length} Upcoming Events
            </h2>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {eventTypes.map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  type === 'All'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.filter(e => e.featured).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* All Events */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
            Load More Events
          </button>
        </div>
      </div>
    </div>
  );
}
