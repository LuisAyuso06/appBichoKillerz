import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Swal from 'sweetalert2';
import '../styles/loginRegister.css';

// Esquema de validación con Zod
const schema = z.object({
  email: z.string().email({ message: 'El correo electrónico no es válido' }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
  confirmPassword: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }).optional(), // Solo en caso de registro
}).refine((data) => data.password === data.confirmPassword || !data.confirmPassword, {
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
  const onSubmit = async (data: FormData) => {
    const endpoint = isRegister
      ? 'http://localhost:3001/api/auth/register'
      : 'http://localhost:3001/api/auth/login';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: isRegister ? '¡Registrado exitosamente!' : '¡Inicio de sesión exitoso!',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: result.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error de conexión con el servidor',
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
