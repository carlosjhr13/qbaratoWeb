import React from "react";
import { ShoppingCart } from "lucide-react";

function RecommendedProducts({ recommendedProducts }) {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">
          Productos Recomendados
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {recommendedProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                {/* <button className="absolute top-4 right-4 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600">
                  <ShoppingCart className="w-5 h-5" />
                </button> */}
              </div>
              <h4 className="font-medium mb-2">{product.name}</h4>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-green-600">
                  ${product.price}
                </span>
                <button className="text-orange-500 p-2 rounded-full hover:bg-orange-100 transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecommendedProducts;
