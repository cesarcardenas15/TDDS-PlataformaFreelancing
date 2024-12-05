import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-[#5046E5] text-center mb-6">
          Iniciar Sesión
        </h2>
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
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="h-4 w-4 text-[#5046E5] focus:ring-[#5046E5] border-gray-300 rounded"
              />
              <label 
                htmlFor="remember" 
                className="ml-2 block text-sm text-gray-900"
              >
                Recordarme
              </label>
            </div>
            
            <div className="text-sm">
              <a 
                href="#" 
                className="font-medium text-[#5046E5] hover:text-opacity-80 transition duration-200"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
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
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              ¿No tienes una cuenta?{' '}
              <a 
                href="#" 
                className="font-medium text-[#5046E5] hover:text-opacity-80 transition duration-200"
              >
                Regístrate
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
