import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="/src/img/image_white.png"
            alt="Logo de la tienda"
            className="logo-image"
          />
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/Products" className="navbar-item">
          <button className="catalogButton">
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>
        </Link>

        <Link to="/Services" className="navbar-item">
          <button className="cartButton">
            <span className="material-symbols-outlined">linked_services</span>
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
