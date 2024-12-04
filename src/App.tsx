import React from 'react';
import Navbar from './components/Navbar';
import Products from './views/Products';
import Services from './views/Services';
import About from './views/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
  );
};

export default App;
