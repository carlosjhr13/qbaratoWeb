import React, { useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { promotions as defaultPromotions } from "../data/products";

function StorePromotions({ promotions = defaultPromotions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= promotions.length - (itemsToShow - 1) ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? promotions.length - itemsToShow : prev - 1
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Promociones Activas</h2>
          {/* <button className="flex items-center text-orange-500 hover:text-orange-600">
            Ver todas <ArrowRight className="w-4 h-4 ml-2" />
          </button> */}
        </div>

        <div className="relative px-8">
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
                width: `${promotions.length * 25}%`,
              }}
            >
              {promotions.map((promo) => (
                <div key={promo.id} className="w-1/3 px-2">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img
                        src={promo.image}
                        alt={promo.title}
                        className="w-full h-48 object-cover rounded-t-xl"
                      />
                      {/* <button className="absolute top-4 right-4 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600">
                        <ShoppingCart className="w-5 h-5" />
                      </button> */}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {promo.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{promo.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="text-green-600 font-semibold text-lg">
                          ${promo.price}
                        </div>
                        <button className="text-orange-500 p-2 rounded-full hover:bg-orange-100 transition-colors">
                          <ShoppingCart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default StorePromotions;
