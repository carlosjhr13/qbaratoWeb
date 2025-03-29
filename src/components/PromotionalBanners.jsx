import React from 'react';

function PromotionalBanners() {
  return (
    <section className="bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-yellow-100 rounded-lg p-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">Fresh & Healthy</h4>
            <p className="text-gray-600 mb-4">Organic vegetables & fruits</p>
            <button className="text-orange-500 font-medium">Shop Now →</button>
          </div>
          <div className="bg-green-100 rounded-lg p-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">Best Prices</h4>
            <p className="text-gray-600 mb-4">Fresh vegetables on sale</p>
            <button className="text-orange-500 font-medium">Shop Now →</button>
          </div>
          <div className="bg-red-100 rounded-lg p-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">Free Delivery</h4>
            <p className="text-gray-600 mb-4">On orders over $50</p>
            <button className="text-orange-500 font-medium">Shop Now →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromotionalBanners;