import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Fetch users from the API
      const response = await axios.get('http://localhost:8000/api/usuarios', {
        params: { email }, // Optional: filter by email if backend supports it
      });

      const users = response.data;

      // Find user with matching email
      const user = users.find((user) => user.email === email);

      if (user) {
        // Check if password_hash matches the entered password
        if (user.password_hash === password) {
          // Successful login
          console.log('Usuario autenticado:', user);
          
          // Store user info in localStorage 
          localStorage.setItem('user', JSON.stringify(user));

          // Redirect to services page
          navigate('/servicios');
        } else {
          // Incorrect password
          setError('Contraseña incorrecta.');
        }
      } else {
        // User not found
        setError('El correo electrónico no está registrado.');
      }
    } catch (err) {
      // Handle network or server errors
      setError('Error al iniciar sesión. Inténtalo de nuevo más tarde.');
      console.error('Error:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-[#5046E5] text-center mb-6">
          Iniciar Sesión
        </h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="Ingresa tu contraseña"
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
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
