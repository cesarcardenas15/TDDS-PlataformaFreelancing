import React from 'react';

const ConstructionPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Sitio Web en Construcción</h1>
        <p className="text-xl text-gray-600 mb-6">Estamos trabajando para mejorar nuestra página web. ¡Vuelve pronto!</p>
        <a
          href="/"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out inline-block"
        >
          Volver al Inicio
        </a>
      </div>
    </div>
  );
};

export default ConstructionPage;