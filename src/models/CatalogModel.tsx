import { useEffect, useState } from 'react';

interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
}

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/productos')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.nombre}</h2>
            <p>{product.descripcion}</p>
            <p>${product.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;