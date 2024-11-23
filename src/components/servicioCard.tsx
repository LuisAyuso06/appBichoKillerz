import { Servicio } from '../interfaces/ServicioInterface'

// Componente que renderiza las tarjetas de los servicios
export const ServicioCard: React.FC<{ servicio: Servicio }> = ({ servicio }) => {
  return (
    <div>
      {servicio.imagen && (
        <div>
          <div>
            <h2>{servicio.nombre}</h2>
            <p>{servicio.descripcion}</p>
            <p>Precio: ${servicio.precio} MXN</p>
          </div>
          <img
            src={
              servicio.imagen.startsWith('data:image')
                ? servicio.imagen
                : `data:image/jpeg;base64,${servicio.imagen}`
            }
            alt={servicio.nombre}
          />
        </div>
      )}
    </div>
  )
}
