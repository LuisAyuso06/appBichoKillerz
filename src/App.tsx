import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import About from './About';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
