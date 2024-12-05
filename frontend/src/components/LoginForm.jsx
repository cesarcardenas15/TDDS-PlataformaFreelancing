import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Keeping this for potential future use
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.get(`http://localhost:8000/api/usuarios`, {
        params: { email }, // Passing the email as a query parameter
      });

      const users = response.data;

      // Check if a user with the given email exists
      const user = users.find((user) => user.email === email);

      if (user) {
        // Handle successful email verification
        console.log('Usuario encontrado:', user);
        
        // Store user info in localStorage if needed
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect to home or dashboard
        navigate('/');
      } else {
        // Handle case where user does not exist
        setError('El correo electrónico no está registrado.');
      }
    } catch (err) {
      // Handle error in the request
      setError('Error al verificar el correo electrónico. Inténtalo de nuevo más tarde.');
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
            <button 
              type="submit" 
              className="w-full flex justify-center py-2 px-4 
                         border border-transparent rounded-md shadow-sm 
                         text-sm font-medium text-white 
                         bg-[#5046E5] hover:bg-opacity-90 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5046E5] 
                         transition duration-200"
            >
              Verificar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
