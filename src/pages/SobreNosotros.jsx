import React from 'react';

function SobreNosotros() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Sobre Nosotros</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center text-left">
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              Nuestro emprendimiento tiene como objetivo principal satisfacer a quienes
              consideramos son nuestro principal capital, es decir, clientes y
              consumidores. Es por esto que es nuestra meta brindar productos de la
              mejor calidad y precio.
            </p>
            <p>
              También buscamos que nuestros clientes se sientan cómodos y encuentren
              todo lo que necesitan aquí en QBarato, por lo que hacemos gran
              hincapié en la continua evolución de nuestros servicios e instalaciones.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=500&q=80"
              alt="Tienda QBarato"
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=500&q=80"
              alt="Productos QBarato"
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1601599963565-b7ba49346e47?auto=format&fit=crop&w=500&q=80"
              alt="Interior QBarato"
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=500&q=80"
              alt="Equipo QBarato"
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411.76646543830736!2d-56.18110737153685!3d-34.87837182280194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f810463e9ee31%3A0x9768081d3125f4d5!2sQBarato!5e0!3m2!1ses!2suy!4v1703537671669!5m2!1ses!2suy"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default SobreNosotros;
