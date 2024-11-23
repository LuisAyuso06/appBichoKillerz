import React, { useEffect, useState } from 'react'
import { serviciosApi } from './api'
import { Servicio } from '../interfaces/ServicioInterface'
import { ServicioCard } from '../components/servicioCard'
import axios from 'axios'

const Servicios: React.FC = () => {
  const [servicios, setProductos] = useState<Servicio[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Conseguir los servicios de la api
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const data = await serviciosApi.obtenerTodos()
        setProductos(data)
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.error || 'Error al cargar los servicios')
        } else {
          setError('Error al cargar los servicios')
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
        <div>Cargando servicios...</div>
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

  // Pantalla de servicios
  return (
    <div>
      <h1>Servicios</h1>
      {servicios.length === 0 ? (
        <div>No hay servicios disponibles</div>
      ) : (
        <div>
          {servicios.map((servicio) => (
            <ServicioCard key={servicio.id} servicio={servicio} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Servicios
