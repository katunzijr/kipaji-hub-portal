import LearningCard from '@/components/LearningCard';
import { learningContent } from '@/data/learning';
import { GraduationCap, Filter } from 'lucide-react';

export default function LearningPage() {
  const categories = ['All', 'Music Production', 'Instruments', 'Vocals', 'Music Business', 'DJing', 'Music Theory'];
  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary-600 to-secondary-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <GraduationCap className="h-10 w-10 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Learn & Grow</h1>
          </div>
          <p className="text-xl text-secondary-100 max-w-3xl">
            Access high-quality courses, tutorials, and educational content from industry professionals. Master your craft and take your skills to the next level.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              {learningContent.length} Courses & Resources
            </h2>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>

          {/* Categories */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-secondary-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Levels */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Skill Level</h3>
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    level === 'All Levels'
                      ? 'bg-secondary-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningContent.map((content) => (
            <LearningCard key={content.id} content={content} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-secondary-600 text-white font-semibold rounded-lg hover:bg-secondary-700 transition-colors">
            Load More Content
          </button>
        </div>
      </div>
    </div>
  );
}
