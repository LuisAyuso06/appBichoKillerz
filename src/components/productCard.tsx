import { Producto } from '../interfaces/ProductoInterface'
import '../styles/catalogStyles.css'

// Componente que renderiza las tarjetas de los productos
export const ProductCard: React.FC<{ producto: Producto }> = ({ producto }) => {
  return (
    <div className="catalogCard">
      {producto.imagen && (
        <div>
          <div className="catalogCardText">
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p><strong>Precio: $</strong>{producto.precio} MXN</p>
            <p><strong>Inventario: </strong>{producto.stock} piezas</p>
          </div>
          <div className="catalogCardImg">
            <img
              src={
                producto.imagen.startsWith('data:image')
                  ? producto.imagen
                  : `data:image/jpeg;base64,${producto.imagen}`
              }
              alt={producto.nombre}
            />
          </div>
        </div>
      )}
    </div>
  )
}
