import Link from 'next/link';
import Image from 'next/image';
import { Event } from '@/types';
import { Calendar, MapPin, Users } from 'lucide-react';
import { formatCurrency, formatDate } from '@/lib/utils';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const spotsLeft = event.capacity - event.attendees;
  const percentageFilled = (event.attendees / event.capacity) * 100;

  return (
    <Link href={`#`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 bg-gray-200">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {event.featured && (
            <div className="absolute top-2 left-2 bg-primary-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
              Featured
            </div>
          )}
          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-xs font-medium">
            {event.type.toUpperCase()}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {event.title}
          </h3>
          <div className="space-y-2 mb-3">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2 text-primary-600" />
              <span>{formatDate(event.date)} - {event.time}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2 text-primary-600" />
              <span className="line-clamp-1">{event.venue}, {event.location}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-2 text-primary-600" />
              <span>{event.attendees} / {event.capacity} attendees</span>
            </div>
          </div>

          {/* Capacity Bar */}
          <div className="mb-3">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  percentageFilled >= 90 ? 'bg-red-600' : percentageFilled >= 70 ? 'bg-yellow-600' : 'bg-green-600'
                }`}
                style={{ width: `${percentageFilled}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {spotsLeft > 0 ? `${spotsLeft} spots left` : 'Sold out'}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-500">From</span>
              <p className="text-lg font-bold text-primary-600">
                {formatCurrency(event.price, event.currency)}
              </p>
            </div>
            <button className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-md hover:bg-primary-700 transition-colors">
              Get Tickets
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
