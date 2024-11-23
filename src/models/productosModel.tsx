import React, { useEffect, useState } from 'react'
import { productosApi } from './api'
import { Producto } from '../interfaces/ProductoInterface'
import axios from 'axios'

const Productos: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const data = await productosApi.obtenerTodos()
        setProductos(data)
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.error || 'Error al cargar los productos')
        } else {
          setError('Error al cargar los productos')
        }
      } finally {
        setLoading(false)
      }
    }

    cargarProductos()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Cargando productos...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    )
  }

  return (
    <div>
      <h1>Productos</h1>
      {productos.length === 0 ? (
        <div>No hay productos disponibles</div>
      ) : (
        <div>
          {productos.map((producto) => (
            <div key={producto.id} style={{ margin: '20px' }}>
              <h2>{producto.nombre}</h2>
              <p>{producto.descripcion}</p>
              <p>Precio: ${producto.precio}</p>
              <p>Stock: {producto.stock}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Productos
