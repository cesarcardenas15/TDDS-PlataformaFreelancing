import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">FreelanceHub</Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/jobs" className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out inline-block">Encontrar Trabajo</Link>
                <Link to="/freelancers" className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out inline-block">Explorar Freelancers</Link>
                <Link to="/how-it-works" className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out inline-block">Cómo Funciona</Link>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out inline-block">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out inline-block">
              <Bell size={20} />
            </button>
            <div className="flex items-center space-x-2">
              <Link to="/login">
                <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out inline-block">
                  <User size={20} />
                  <span>Iniciar Sesión</span>
                </button>
              </Link>
              <Link to="/signup">
                <button className="flex items-center space-x-2 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out inline-block">
                  <span>Registrarse</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
