import React from "react";
import { Facebook, Instagram, MapPin, Clock, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Ubicación y Horarios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Ubicación</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-orange-500 mt-1" />
              <span>General Flores 2696, Montevideo</span>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <p>Lunes a viernes de 10 a 19hs</p>
                <p>Sábados de 10 a 14hs</p>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-orange-500" />
              <div>
                <p>+598 97 811 137</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <p>qbarato.uy@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/qbarato"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/qbarato"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} QBarato. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
