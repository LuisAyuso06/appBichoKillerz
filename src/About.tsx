import React from 'react';
import "./about.css"; // Importa los estilos del carrusel
import { Carousel } from 'react-responsive-carousel';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">Sobre Nosotros</h2>
      <div className="about-content">
        <div className="about-carousel">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            interval={3000}
          >
            <div>
              <img src="https://via.placeholder.com/100x200" alt="Imagen 1" />
              <p className="legend">Nuestro equipo</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100x200" alt="Imagen 2" />
              <p className="legend">Nuestras instalaciones</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/100x200" alt="Imagen 3" />
              <p className="legend">Nuestros productos</p>
            </div>
          </Carousel>
        </div>
        <div className="about-text">
          <p>
            Somos una tienda dedicada a ofrecer los mejores productos. Nuestro equipo se
            enfoca en brindarte la mejor experiencia, con productos seleccionados
            cuidadosamente para ti.
          </p>
          <p>
            Trabajamos en un ambiente innovador y nuestras instalaciones están diseñadas
            para garantizar la calidad de nuestros productos y servicios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
