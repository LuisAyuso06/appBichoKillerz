import React from "react";
import { Link } from "react-router-dom";
// import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  const location = useLocation(); // Obtiene la ubicación actual

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/About">
          <img
            src="/src/img/image_white.png"
            alt="Logo de la tienda"
            className="logo-image"
          />
        </Link>
      </div>

      {/* Barra de búsqueda */}
      <div className="navbar-search">
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar en Bichokillerz"
            className="search-input"
          />
          <button className="search-button">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>

      {/* Enlaces del Navbar */}
      <div className="navbar-links">
        {/* Botón de productos, se oculta si estamos en la página de productos */}
        {location.pathname !== "/Products" && (
          <Link to="/Products" className="navbar-item">
            <button className="catalogButton">
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>
          </Link>
        )}

        {/* Botón de servicios, se oculta si estamos en la página de servicios */}
        {location.pathname !== "/Services" && (
          <Link to="/Services" className="navbar-item">
            <button className="cartButton">
              <span className="material-symbols-outlined">linked_services</span>
            </button>
          </Link>
        )}

        {/* Botón de carrito, se muestra en todas las páginas */}
        <Link to="/cart" className="navbar-item">
          <button className="cartButton">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
        </Link>

        {/* Botón de login, se muestra en todas las páginas */}
        <Link to="/login" className="navbar-item">
          <button className="loginButton">
            <span className="material-symbols-outlined">login</span>
          </button>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
