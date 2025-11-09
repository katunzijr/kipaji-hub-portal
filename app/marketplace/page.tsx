import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { ShoppingCart, Filter } from 'lucide-react';

export default function MarketplacePage() {
  const categories = ['All', 'Instruments', 'Equipment', 'Software', 'Books', 'Accessories', 'Merchandise'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <ShoppingCart className="h-10 w-10 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Music Marketplace</h1>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl">
            Shop for instruments, equipment, books, and music products. Find everything you need for your music journey from trusted sellers.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {products.length} Products Available
            </h2>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* All Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
            Load More Products
          </button>
        </div>

        {/* Info Banner */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Affiliate Products
          </h3>
          <p className="text-gray-700 mb-4">
            Many products in our marketplace are affiliate links. When you make a purchase through these links,
            we may earn a commission at no extra cost to you. This helps support Kipaji Hub and allows us to
            continue providing valuable resources to the music community.
          </p>
          <p className="text-sm text-gray-600">
            All products are carefully selected and recommended based on quality and value for musicians.
          </p>
        </div>
      </div>
    </div>
  );
}
