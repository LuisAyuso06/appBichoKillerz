import { Producto } from '../interfaces/ProductoInterface'

// Componente que renderiza las tarjetas de los productos
export const ProductCard: React.FC<{ producto: Producto }> = ({ producto }) => {
  return (
    <div>
      {producto.imagen && (
        <div>
          <div>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio} MXN</p>
            <p>Stock: {producto.stock}</p>
          </div>
          <img
            src={
              producto.imagen.startsWith('data:image')
                ? producto.imagen
                : `data:image/jpeg;base64,${producto.imagen}`
            }
            alt={producto.nombre}
          />
        </div>
      )}
    </div>
  )
}
