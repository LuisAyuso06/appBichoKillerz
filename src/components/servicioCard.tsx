import { Servicio } from '../interfaces/ServicioInterface'
import '../styles/catalogStyles.css'

// Componente que renderiza las tarjetas de los servicios
export const ServicioCard: React.FC<{ servicio: Servicio }> = ({ servicio }) => {
  return (
    <div className='catalogCard'>
      {servicio.imagen && (
        <div>
          <div className="catalogCardText">
            <h2>{servicio.nombre}</h2>
            <p>{servicio.descripcion}</p>
            <p><strong>Precio: $</strong>{servicio.precio} MXN</p>
          </div>
          <div className="catalogCardImg">
            <img
              src={
                servicio.imagen.startsWith('data:image')
                  ? servicio.imagen
                  : `data:image/jpeg;base64,${servicio.imagen}`
              }
              alt={servicio.nombre}
            />
          </div>
        </div>
      )}
    </div>
  )
}
