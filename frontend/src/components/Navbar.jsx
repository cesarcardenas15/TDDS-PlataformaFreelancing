import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600">SkillSphere</h1>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/en-construccion" className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out inline-block">Encontrar Trabajo</Link>
                <Link to="/en-construccion" className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out inline-block">Explorar Freelancers</Link>
                <Link to="/en-construccion" className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out inline-block">Cómo Funciona</Link>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
          <Link to="/en-construccion">
              <button className="p-2 text-gray-600 hover:text-indigo-600">
                <Search size={20} />
              </button>
            </Link>
            <Link to="/en-construccion">
              <button className="p-2 text-gray-600 hover:text-indigo-600">
                <Bell size={20} />
              </button>
            </Link>
            <Link to="/login">
              <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out inline-block">
                <User size={20} />
                <span>Iniciar Sesión</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
