import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, LogOut } from "lucide-react";
import Cart from "./Cart";
import AuthModal from "./AuthModal";
import { auth } from "../firebase/config";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [user, setUser] = useState(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setIsProfileMenuOpen(false);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Ejemplo de resultados de búsqueda (reemplazar con datos reales)
  const searchResults = [
    { id: 1, name: "Pizza Margherita", price: "$12.99" },
    { id: 2, name: "Hamburger Classic", price: "$8.99" },
    { id: 3, name: "Caesar Salad", price: "$7.99" },
  ].filter(
    (item) =>
      searchQuery && item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-2xl font-bold">
                <span className="text-orange-500">foo</span>
                <span className="text-black">d</span>
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link
                  to="/tienda"
                  className="text-gray-700 hover:text-orange-500"
                >
                  Tienda
                </Link>
                <Link
                  to="/sobre-nosotros"
                  className="text-gray-700 hover:text-orange-500"
                >
                  Sobre Nosotros
                </Link>
                <Link
                  to="/contacto"
                  className="text-gray-700 hover:text-orange-500"
                >
                  Contacto
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    className="w-64 pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                  />
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                </div>

                {/* Resultados de búsqueda */}
                {isSearchFocused && searchResults.length > 0 && (
                  <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {searchResults.map((result) => (
                      <div
                        key={result.id}
                        className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex justify-between items-center"
                      >
                        <span>{result.name}</span>
                        <span className="text-orange-500">{result.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="p-2 hover:bg-gray-100 rounded-full relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </button>
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-800 hover:border-green-900 transition-colors"
                  >
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      className="w-full h-full object-cover"
                    />
                  </button>

                  {isProfileMenuOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsProfileMenuOpen(false)}
                      />
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                        <div className="px-4 py-2 border-b border-gray-200">
                          <p className="font-medium truncate">
                            {user.displayName}
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            {user.email}
                          </p>
                        </div>
                        <button
                          onClick={handleLogout}
                          className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-50 flex items-center space-x-2"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Cerrar Sesión</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <button
                  className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 flex items-center"
                  onClick={() => {
                    setAuthMode("signup");
                    setIsAuthModalOpen(true);
                  }}
                >
                  <User className="w-5 h-5" />
                </button>
              )}
              {/* <button 
                className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
                onClick={() => {
                  setAuthMode('login');
                  setIsAuthModalOpen(true);
                }}
              >
                Login
              </button> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Click fuera para cerrar resultados */}
      {isSearchFocused && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsSearchFocused(false)}
        />
      )}

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}

export default Navbar;
