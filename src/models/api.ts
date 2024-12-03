import axios from 'axios'
import { Producto } from '../interfaces/ProductoInterface'
import { Servicio } from '../interfaces/ServicioInterface'
import { Login    } from '../interfaces/LoginInterface'

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const productosApi = {
  obtenerTodos: async (): Promise<Producto[]> => {
    try {
      const { data } = await api.get<Producto[]>('/productos')
      return data
    } catch (error) {
      console.error('Error al obtener productos:', error)
      throw error
    }
  },

  obtenerPorId: async (id: number): Promise<Producto> => {
    const { data } = await api.get<Producto>(`/productos/${id}`)
    return data
  },
}

export const serviciosApi = {
  obtenerTodos: async (): Promise<Servicio[]> => {
    try {
      const { data } = await api.get<Servicio[]>('/servicios')
      return data
    } catch (error) {
      console.error('Error al obtener los servicios:', error)
      throw error
    }
  },

  obtenerPorId: async (id: number): Promise<Servicio> => {
    const { data } = await api.get<Servicio>(`/servicios/${id}`)
    return data
  },
}

export const loginApi = {
  obtenerTodos: async (): Promise<Login[]> => {
    try {
      const { data } = await api.get<Login[]>('/login')
      return data
    } catch (error) {
      console.error('Error al obtener el usuario:', error)
      throw error
    }
  },

  obtenerPorId: async (id: number): Promise<Login> => {
    const { data } = await api.get<Login>(`/login/${id}`)
    return data
  },
}
