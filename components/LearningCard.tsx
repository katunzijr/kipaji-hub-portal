import Link from 'next/link';
import Image from 'next/image';
import { LearningContent } from '@/types';
import { Clock, BookOpen, Star, Users } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface LearningCardProps {
  content: LearningContent;
}

export default function LearningCard({ content }: LearningCardProps) {
  const getTypeIcon = () => {
    switch (content.type) {
      case 'book':
        return <BookOpen className="h-4 w-4" />;
      case 'video':
      case 'course':
      case 'tutorial':
        return <Clock className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getLevelColor = () => {
    switch (content.level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Link href={`#`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 bg-gray-200">
          <Image
            src={content.image}
            alt={content.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2 bg-white text-primary px-2 py-1 rounded-md text-xs font-semibold uppercase">
            {content.type}
          </div>
          <div className={`absolute top-2 right-2 px-2 py-1 rounded-md text-xs font-semibold ${getLevelColor()}`}>
            {content.level}
          </div>
        </div>
        <div className="p-4">
          <p className="text-xs text-gray-500 mb-1">{content.category}</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {content.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {content.description}
          </p>
          <p className="text-sm text-gray-700 mb-3">by {content.author}</p>

          <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                {getTypeIcon()}
                <span className="ml-1">
                  {content.duration || `${content.pages} pages`}
                </span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{content.enrollments}</span>
              </div>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 font-medium text-gray-900">{content.rating}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <div>
              <span className="text-2xl font-bold text-primary-600">
                {formatCurrency(content.price, content.currency)}
              </span>
            </div>
            <button className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-md hover:bg-primary-700 transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
