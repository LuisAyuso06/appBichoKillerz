import React from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Products from './views/Productos';
import About from './views/About';
import Cart from './views/Cart';
import LoginRegister from './views/LoginRegister'; // Importa el componente de Login/Register
import { CartProvider } from './contexts/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginRegister />} />  {/* Ruta para Login */}
          <Route path="/register" element={<LoginRegister />} />  {/* Ruta para Registro */}
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
