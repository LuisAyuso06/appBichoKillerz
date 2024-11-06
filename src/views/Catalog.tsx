import React from 'react';
import Catalog from '../models/CatalogModel';

const Products: React.FC = () => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <Catalog />
    </div>
  );
};

export default Products;