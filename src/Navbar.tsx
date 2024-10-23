import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useCartContext } from './CartContext';

const Navbar: React.FC = () => {
  const { cartItems } = useCartContext();

  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <Link to="/">
                <img src="/src/logo.svg" alt="Logo de la tienda" className="logo-image" />
            </Link>
        </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">
            <button className="">
              <span className="material-symbols-outlined">home</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button className="">
            <span className="material-symbols-outlined">info</span>
            </button>
          </Link>
        </li>
      </ul>

      <SearchBar />

      <div className="cart">
        <Link to="/cart">
          <button className="">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
