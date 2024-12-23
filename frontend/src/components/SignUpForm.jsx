import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous messages
    setError('');
    setSuccess('');

    // Prepare the request payload
    const payload = {
      username,
      email,
      password
    };

    try {
      const response = await axios.post('http://localhost:8000/auth/register', payload);

      // Handle successful registration
      setSuccess('Registro exitoso. Redirigiendo...');

      // Clear form fields
      setUsername('');
      setEmail('');
      setPassword('');

      // Redirect to the main page
      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (err) {
      // Handle registration error
      if (err.response) {
        setError(err.response.data.message || 'Error al registrar usuario');
      } else if (err.request) {
        setError('No se pudo conectar con el servidor');
      } else {
        setError('Error inesperado');
      }
      console.error('Registration error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-[#5046E5] text-center mb-6">
          Registrarse
        </h2>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nombre de Usuario
            </label>
            <input 
              type="text" 
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-[#5046E5] focus:border-[#5046E5] 
                         transition duration-200"
              placeholder="Elige un nombre de usuario"
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Correo Electrónico
            </label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-[#5046E5] focus:border-[#5046E5] 
                         transition duration-200"
              placeholder="tu.correo@ejemplo.com"
            />
          </div>

          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Contraseña
            </label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-[#5046E5] focus:border-[#5046E5] 
                         transition duration-200"
              placeholder="Crea una contraseña segura"
            />
          </div>

          <div>
            <button 
              type="submit" 
              className="w-full flex justify-center py-2 px-4 
                         border border-transparent rounded-md shadow-sm 
                         text-sm font-medium text-white 
                         bg-[#5046E5] hover:bg-opacity-90 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5046E5] 
                         transition duration-200"
            >
              Crear Cuenta
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              ¿Ya tienes una cuenta?{' '}
              <a 
                href="/login" 
                className="font-medium text-[#5046E5] hover:text-opacity-80 transition duration-200"
              >
                Iniciar Sesión
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
