import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCartContext } from './CartContext';

const productSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  price: z.number().min(1, 'El precio debe ser mayor a 0'),
});

type ProductForm = z.infer<typeof productSchema>;

const AddProductForm: React.FC = () => {
  const { addItem } = useCartContext();
  const { register, handleSubmit, formState: { errors } } = useForm<ProductForm>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data: ProductForm) => {
    addItem({ id: Date.now(), ...data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Nombre del producto" />
      {errors.name && <p>{errors.name.message}</p>}
      <input {...register('price', { valueAsNumber: true })} placeholder="Precio" type="number" />
      {errors.price && <p>{errors.price.message}</p>}
      <button type="submit">Agregar al carrito</button>
    </form>
  );
};

export default AddProductForm;
