import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Encuentra los servicios freelance perfectos
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">
            Conecta con freelancers talentosos y completa tus proyectos
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/login">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-white/70 transition duration-300 ease-in-out inline-block">
                Contratar Freelancer
              </button>
            </Link>
            <Link to="/login">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition duration-300 ease-in-out inline-block">
                Convertirse en Freelancer
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;