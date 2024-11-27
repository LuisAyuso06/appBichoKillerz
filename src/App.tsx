import React from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Products from './views/Products';
import Services from './views/Services';
import About from './views/About';
import LoginRegister from './views/LoginRegister'; // Importa el componente de Login/Register
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<LoginRegister />} />  {/* Ruta para Login */}
          <Route path="/register" element={<LoginRegister />} />  {/* Ruta para Registro */}
        </Routes>
      </Router>
  );
};

export default App;
