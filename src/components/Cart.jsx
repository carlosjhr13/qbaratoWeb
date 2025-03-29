import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

function Cart({ isOpen, onClose }) {
  return (
    <div className={`fixed inset-y-0 right-0 w-96 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
      <div className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                alt="Product"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-medium">Burger Classic</h3>
                <p className="text-gray-600">$12.99</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="p-1 hover:bg-gray-200 rounded-full">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span>1</span>
                  <button className="p-1 hover:bg-gray-200 rounded-full">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-200 rounded-full">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Cart Footer */}
        <div className="border-t pt-4">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">$12.99</span>
          </div>
          <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 flex items-center justify-center space-x-2">
            <ShoppingBag className="w-5 h-5" />
            <span>Checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;