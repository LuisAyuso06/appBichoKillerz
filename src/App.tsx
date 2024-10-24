import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import About from './About';
import Cart from './Cart';
import LoginRegister from './LoginRegister'; // Importa el componente de Login/Register
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
          <Route path="/login" element={<LoginRegister />} />  {/* Ruta para Login */}
          <Route path="/register" element={<LoginRegister />} />  {/* Ruta para Registro */}
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
