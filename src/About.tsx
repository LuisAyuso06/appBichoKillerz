import React from 'react';
import './about.css'; // Importa los estilos del carrusel
import { Carousel } from 'react-responsive-carousel';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">NUESTRA EMPRESA</h2>
      <div className="about-content">
        <div className="about-carousel">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            interval={3000}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button type="button" onClick={onClickHandler} title={label} className="arrow-prev">
                  &#10094;
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button type="button" onClick={onClickHandler} title={label} className="arrow-next">
                  &#10095;
                </button>
              )
            }
            transitionTime={500}
          >
            <div>
              <img src="/assets/plagas1.png" alt="" />
            </div>
            <div>
              <img src="/assets/plagas2.png" alt="" />
            </div>
            <div>
              <img src="/assets/plagas3.png" alt="" />
            </div>
          </Carousel>
        </div>
        <div className="about-text">
          <p>
            En BichoKillerz, nos dedicamos a ofrecer soluciones integrales para el control de plagas, combinando productos innovadores y ecológicos con servicios profesionales especializados. Nos enorgullece ser líderes en el mercado, proporcionando a nuestros clientes herramientas y asesoramiento para gestionar y prevenir infestaciones de manera eficiente y respetuosa con el medio ambiente.
          </p>
          <p>
            Entendemos la importancia de mantener hogares, negocios y entornos libres de plagas sin comprometer el bienestar del planeta. Por ello, nuestra tienda en línea ofrece una amplia gama de productos eco-friendly, diseñados para controlar y erradicar plagas como roedores, insectos y aves, entre otros, minimizando el impacto ambiental.
          </p>
          <p>
            En BichoKillerz, creemos en la importancia de cuidar tanto a nuestros clientes como al entorno en el que vivimos. Por eso, seguimos desarrollando y mejorando nuestras soluciones para ofrecer siempre lo mejor en términos de calidad, eficacia y sostenibilidad.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info">
            <h3>Contacto</h3>
            <p>Calle Stefan Papucho, México</p>
            <p>Teléfono: +999 549 5294 </p>
            <p>Email: contacto@bichokillerz.com</p>
          </div>
          <div className="footer-social">
            <h3>Síguenos</h3>
            <div className="info-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook: BichoKillerz</a>
            </div>
            <div className="info-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram: BichitoKillez</a>
            </div>
            <div className="info-social">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter: BichoKillerz</a>
            </div>
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

