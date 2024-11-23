import React, { useEffect, useState } from 'react';
import { serviciosApi } from './api';
import { Servicio } from '../interfaces/ServicioInterface';
import axios from 'axios';

const Servicios: React.FC = () => {
  const [servicios, setProductos] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const data = await serviciosApi.obtenerTodos();
        setProductos(data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.error || 'Error al cargar los servicios');
        } else {
          setError('Error al cargar los servicios');
        }
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Cargando servicios...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Servicios</h1>
      {servicios.length === 0 ? (
        <div>No hay servicios disponibles</div>
      ) : (
        <div>
          {servicios.map((producto) => (
            <div key={producto.id} style={{ margin: '20px' }}>
              <h2>{producto.nombre}</h2>
              <p>{producto.descripcion}</p>
              <p>Precio: ${producto.precio}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Servicios;