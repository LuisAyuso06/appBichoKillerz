import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2';
import './loginRegister.css';

// Esquema de validación con Zod
const schema = z.object({
  email: z.string().email({ message: 'El correo electrónico no es válido' }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
  confirmPassword: z.string().min(6).optional(), // Solo en caso de registro
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
});

// Tipos de datos para el formulario
type FormData = z.infer<typeof schema>;

const LoginRegister: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Función que maneja el envío del formulario
  const onSubmit = (data: FormData) => {
    if (isRegister) {
      // Lógica de registro
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Ha sido Registrado exitosamente!',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      // Lógica de login
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Ha iniciado sesion exitosamente!',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  // Alterna entre el formulario de login y el de registro
  const toggleForm = () => setIsRegister(!isRegister);

  return (
    <div className="form-container">
      <h2>{isRegister ? 'Registro' : 'Iniciar Sesión'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <input
            type="email"
            {...register('email')}
            placeholder="✉️ Correo electrónico"
            className={`input-field ${errors.email ? 'error' : ''}`}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="input-group">
          <input
            type="password"
            {...register('password')}
            placeholder="🔒 Contraseña"
            className={`input-field ${errors.password ? 'error' : ''}`}
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        {isRegister && (
          <div className="input-group">
            <input
              type="password"
              {...register('confirmPassword')}
              placeholder="🔒 Confirmar contraseña"
              className={`input-field ${errors.confirmPassword ? 'error' : ''}`}
            />
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
          </div>
        )}

        <button type="submit" className="submit-button">
          {isRegister ? 'Registrarse' : 'Iniciar Sesión'}
        </button>
      </form>

      <p className="toggle-text">
        {isRegister ? '¿Ya tienes una cuenta?' : '¿No tienes cuenta?'}
        <button onClick={toggleForm} className="toggle-button">
          {isRegister ? 'Inicia sesión aquí' : 'Regístrate aquí'}
        </button>
      </p>
    </div>
  );
};

export default LoginRegister;
