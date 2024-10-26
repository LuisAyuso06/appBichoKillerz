import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import '../styles/about.css'; // Importa el archivo de estilos de About

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">NUESTRA EMPRESA</h2>
      <div className="about-content">
        <div className="about-carousel">
        </div>

        <div className="about-text">
          <p>
            En BichoKillerz, nos dedicamos a ofrecer soluciones integrales para el control de plagas, combinando productos innovadores y ecológicos con servicios profesionales especializados.
          </p>
          <p>
            Entendemos la importancia de mantener hogares, negocios y entornos libres de plagas sin comprometer el bienestar del planeta. 
          </p>
          <p>
            En BichoKillerz, creemos en la importancia de cuidar tanto a nuestros clientes como al entorno en el que vivimos. Por eso, seguimos desarrollando y mejorando nuestras soluciones.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info">
            <h3>Contacto</h3>
            <p>📍Calle Stefan Papucho, México</p>
            <p>📞Teléfono: +999 549 5294 </p>
            <p>✉️Email: contacto@bichokillerz.com</p>
          </div>
          <div className="footer-social">
            <h3>Síguenos</h3>
            <div className="info-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘Facebook: BichoKillerz</a>
            </div>
            <div className="info-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷 Instagram: BichitoKillez</a>
            </div>
            <div className="info-social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">✖️ X : BichoKillerz</a>
            </div>
          </div>
    
          <div className="footer-logo">
                <Link to="/">
          <img src="/src/img/image.png" alt="Logo de la tienda" className="logo-image" />
                </Link>
            </div>
          
          <div className="footer-credits">
            <p>&copy; 2024 BichoKillerz. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
