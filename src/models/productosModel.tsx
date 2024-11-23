import React, { useEffect, useState } from 'react'
import { productosApi } from './api'
import { Producto } from '../interfaces/ProductoInterface'
import { ProductCard } from '../components/productCard'
import axios from 'axios'

const Productos: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Conseguir los productos de la api
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

  // Pantalla de carga
  if (loading) {
    return (
      <div>
        <div>Cargando productos...</div>
      </div>
    )
  }

  // Pantalla de error
  if (error) {
    return (
      <div>
        <div>{error}</div>
      </div>
    )
  }

  // Pantalla de productos
  return (
    <div>
      <h1>Productos</h1>
      {productos.length === 0 ? (
        <div>No hay productos disponibles</div>
      ) : (
        <div>
          {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Productos
