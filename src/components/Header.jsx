import React, { useState } from "react";
import { ChevronRight, ChevronLeft, Star, ShoppingCart } from "lucide-react";
import { newProducts } from "../data/products";

// Mantener la imagen por defecto aquí ya que es específica del componente
const defaultImage =
  "https://images.unsplash.com/photo-1609780447631-05b93e5a88ea?auto=format&fit=crop&w=800&q=80";

function Header({ quantity, setQuantity, pricePerUnit, quickProducts }) {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const currentProduct = newProducts[selectedProduct];

  const handleProductChange = (newIndex) => {
    setSelectedProduct(newIndex);
    setQuantity(1);
  };

  return (
    <header className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight h-[100px]">
              {currentProduct.name}
              <span className="text-2xl md:text-3xl text-gray-600 ml-3">
                {currentProduct.weight}
              </span>
            </h2>
            <p className="text-gray-500 mb-8">{currentProduct.description}</p>
            <div className="flex items-center space-x-6 mb-8">
              <div className="text-xl">
                <div>Precio: ${currentProduct.price}</div>
              </div>
              <button className="p-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 flex items-center">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() =>
                  handleProductChange(
                    selectedProduct > 0
                      ? selectedProduct - 1
                      : newProducts.length - 1
                  )
                }
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex overflow-hidden w-[360px]">
                <div
                  className="flex gap-4 transition-transform duration-300 ease-in-out"
                  style={{
                    transform: `translateX(-${selectedProduct * 120}px)`,
                    width: `${newProducts.length * 120}px`,
                  }}
                >
                  {newProducts.map((product, index) => (
                    <div
                      key={product.id}
                      onClick={() => handleProductChange(index)}
                      className={`p-2 rounded-xl flex items-center space-x-2 cursor-pointer flex-shrink-0 w-[110px] ${
                        index === selectedProduct
                          ? "bg-orange-100"
                          : "bg-gray-100"
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">
                          {product.name}
                        </div>
                        <div className="text-xs">${product.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() =>
                  setSelectedProduct((prev) =>
                    prev < newProducts.length - 1 ? prev + 1 : 0
                  )
                }
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-[400px] w-full">
              <img
                src={currentProduct.image || defaultImage}
                alt={currentProduct.name}
                className="w-full h-full rounded-2xl object-cover"
                onError={(e) => {
                  e.target.src = defaultImage;
                }}
              />
              {/* <div className="absolute bottom-4 right-4 bg-orange-500 text-white p-3 rounded-xl">
                <div className="text-sm font-medium">{currentProduct.name}</div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1">4.7</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
