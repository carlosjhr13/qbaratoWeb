import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import SobreNosotros from "./pages/SobreNosotros";
import Tienda from "./pages/Tienda";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 24.3;

  const quickProducts = [
    {
      name: "Burger",
      price: 3.25,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Cake",
      price: 2.25,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Salad",
      price: 5.25,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=100&q=80",
    },
  ];

  const categories = [
    {
      name: "Vegetables",
      image:
        "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Fresh Fruits",
      image:
        "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Meat & Fish",
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Snack Foods",
      image:
        "https://images.unsplash.com/photo-1621447504864-d8686f215c4b?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Beverages",
      image:
        "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=200&q=80",
    },
  ];

  const featuredProducts = [
    {
      name: "Fresh Orange Juice",
      price: 4.99,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Organic Strawberries",
      price: 3.99,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Fresh Vegetables Pack",
      price: 12.99,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80",
    },
  ];

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
                featuredProducts={featuredProducts}
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
