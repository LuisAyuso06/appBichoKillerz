import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {

  return (
    <nav className="navbar">
        
      <div className="navbar-logo">
        <Link to="/">
          <img src="/src/img/image_white.png" alt="Logo de la tienda" className="logo-image" />
        </Link>
      </div>
        
      <ul className="navbar-links">
        <li>
          <Link to="/about">
            <button className="aboutButton tooltip">
              <span className='tooltiptext'>About</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/Products">
            <button className="catalogButton tooltip">
              <span className='tooltiptext'>Products</span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/Services">
            <button className="catalogButton tooltip">
              <span className='tooltiptext'>Services</span>
            </button>
          </Link>
        </li>
      </ul>

      <SearchBar />

      <div className="login">
        <Link to="/login">
          <button className="loginButton tooltip">
            <span className='tooltiptext'>Login</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
