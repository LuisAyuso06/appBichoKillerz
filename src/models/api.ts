import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Especifica la URL completa del backend
  headers: {
    'Content-Type': 'application/json'
  }
});

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
}

export const productosApi = {
  obtenerTodos: async (): Promise<Producto[]> => {
    try {
      const { data } = await api.get<Producto[]>('/productos');
      return data;
    } catch (error) {
      console.error('Error al obtener productos:', error);
      throw error;
    }
  },

  obtenerPorId: async (id: number): Promise<Producto> => {
    const { data } = await api.get<Producto>(`/productos/${id}`);
    return data;
  }
};