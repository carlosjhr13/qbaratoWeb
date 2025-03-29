import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import SobreNosotros from "./pages/SobreNosotros";
import Tienda from "./pages/Tienda";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import {
  quickProducts,
  recommendedProducts,
  categories,
} from "./data/products";

function App() {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 24.3;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Home
                quantity={quantity}
                setQuantity={setQuantity}
                pricePerUnit={pricePerUnit}
                quickProducts={quickProducts}
                categories={categories}
                recommendedProducts={recommendedProducts}
              />
            }
          />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/tienda" element={<Tienda />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
