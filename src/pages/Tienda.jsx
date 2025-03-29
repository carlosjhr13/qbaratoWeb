import React, { useState } from 'react';
import { Star } from 'lucide-react';

function Tienda() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = [
    { id: 1, name: 'Todas', icon: '🏠' },
    { id: 2, name: 'Vegetables', icon: '🥬' },
    { id: 3, name: 'Fresh Fruits', icon: '🍎' },
    { id: 4, name: 'Meat & Fish', icon: '🥩' },
    { id: 5, name: 'Snack Foods', icon: '🍿' },
    { id: 6, name: 'Beverages', icon: '🥤' },
  ];

  const products = [
    {
      id: 1,
      name: 'Fresh Orange Juice',
      price: 4.99,
      category: 'Beverages',
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 2,
      name: 'Organic Broccoli',
      price: 2.49,
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 3,
      name: 'Fresh Strawberries',
      price: 3.99,
      category: 'Fresh Fruits',
      image: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 4,
      name: 'Atlantic Salmon Fillet',
      price: 12.99,
      category: 'Meat & Fish',
      image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 5,
      name: 'Mixed Nuts Pack',
      price: 6.99,
      category: 'Snack Foods',
      image: 'https://images.unsplash.com/photo-1536591375075-068a5fcd4c24?auto=format&fit=crop&w=300&q=80',
    },
  ];

  const filteredProducts = selectedCategory === 'Todas' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Sidebar de categorías */}
        <div className="w-64 flex-shrink-0">
          <h2 className="text-lg font-semibold mb-4">Categorías</h2>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                  selectedCategory === category.name
                    ? 'bg-orange-500 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid de productos */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-orange-500">
                    ${product.price}
                  </span>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 text-sm">
                    Agregar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tienda;
