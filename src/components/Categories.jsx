import React from 'react';

function Categories({ categories }) {
  return (
    <section className="bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">Top Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <img src={category.image} alt={category.name} className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-full object-cover" />
              <p className="font-medium text-sm md:text-base">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;