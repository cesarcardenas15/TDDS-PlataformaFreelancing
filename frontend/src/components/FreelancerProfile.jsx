import React from 'react';
import { useNavigate } from 'react-router-dom';


const FreelancerProfile = ({ profileData }) => {
  const navigate = useNavigate();

  const navigateToCreatePost = () => {
    navigate('/crear-servicio');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Tarjeta de Perfil */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {profileData?.nombre || 'Nombre del Freelancer'}
              </h1>
              <p className="text-gray-600 mb-4">
                {profileData?.telefono || 'Teléfono'}
              </p>
            </div>
            <button
              onClick={navigateToCreatePost}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Crear Publicación
            </button>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Biografía</h2>
            <p className="text-gray-700">
              {profileData?.biografia || 'Sin biografía'}
            </p>
          </div>
        </div>

        {/* Sección de Publicaciones */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Mis Publicaciones
            </h2>
          </div>

          {/* Lista de Publicaciones */}
          <div className="space-y-4">
            {profileData?.publicaciones?.length > 0 ? (
              profileData.publicaciones.map((publicacion) => (
                <div
                  key={publicacion.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <h3 className="font-semibold text-lg mb-2">
                    {publicacion.titulo}
                  </h3>
                  <p className="text-gray-600">
                    {publicacion.descripcion}
                  </p>
                  <div className="mt-2 text-sm text-gray-500">
                    Publicado: {new Date(publicacion.fecha).toLocaleDateString()}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No tienes publicaciones aún. ¡Crea tu primera publicación!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;