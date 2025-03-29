import React from 'react';
import { ChevronRight, Star } from 'lucide-react';

function FeaturedProducts({ featuredProducts }) {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-semibold">Featured Products</h3>
          <button className="text-orange-500 flex items-center hover:text-orange-600 text-sm md:text-base">
            View All <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
                <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
              </div>
              <h4 className="font-medium mb-2">{product.name}</h4>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                <span className="text-lg font-bold text-orange-500">${product.price}</span>
                <button className="w-full sm:w-auto px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;