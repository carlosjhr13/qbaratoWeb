import React from 'react';
import { ChevronRight, ChevronLeft, Star, Plus, Minus } from 'lucide-react';

function Header({ quantity, setQuantity, pricePerUnit, quickProducts }) {
  return (
    <header className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Order your<br />
              <span className="text-gray-700">favourite Foods</span>
            </h2>
            <p className="text-gray-500 mb-6">
              Fresh and tasty seafood curry at street, consectetur adipisicing elit. Cupiditate accusamus ducati pariatur pres.
            </p>
            <div className="flex items-center space-x-6 mb-8">
              <div className="text-xl">
                Total order: <span className="font-bold">${(pricePerUnit * quantity).toFixed(2)}</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-white rounded-full"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-white rounded-full"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 flex items-center">
                Buy Now
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <ChevronLeft className="w-5 h-5" />
              </button>
              {quickProducts.map((product, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-2xl flex items-center space-x-2 ${
                    index === 2 ? 'bg-orange-100' : index === 1 ? 'bg-pink-100' : 'bg-green-100'
                  }`}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium">{product.name}</div>
                    <div className="text-xs">${product.price}</div>
                  </div>
                </div>
              ))}
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
                alt="Salad bowl"
                className="w-full rounded-2xl"
              />
              <div className="absolute bottom-4 right-4 bg-orange-500 text-white p-3 rounded-xl">
                <div className="text-sm font-medium">Salad</div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1">4.7</span>
                </div>
                <div className="text-xs mt-1">10-15 mins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;