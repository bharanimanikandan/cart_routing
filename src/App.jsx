import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateCartQuantity = (id, quantity) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar cartCount={cart.length} />

        <Routes>
          <Route
            path="/"
            element={<ProductPage addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />}
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
