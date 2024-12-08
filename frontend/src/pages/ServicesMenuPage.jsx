import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch services and profiles concurrently
        const [servicesResponse, profilesResponse] = await Promise.all([
          axios.get('http://localhost:8000/api/servicios'),
          axios.get('http://localhost:8000/api/perfiles')
        ]);

        setServices(servicesResponse.data);
        setProfiles(profilesResponse.data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los servicios. Inténtalo de nuevo más tarde.');
        setLoading(false);
        console.error('Error:', err.response ? err.response.data : err.message);
      }
    };

    fetchData();
  }, []);

  // Function to find freelancer profile by ID
  const getFreelancerProfile = (freelancerId) => {
    return profiles.find(profile => profile.id === freelancerId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-[#5046E5]">Cargando servicios...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#5046E5] text-center mb-8">
          Servicios de Freelancers
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const freelancer = getFreelancerProfile(service.freelancer);

            return (
              <div 
                key={service.id} 
                className="bg-white shadow-md rounded-lg overflow-hidden 
                            transform transition duration-300 
                            hover:scale-105 hover:shadow-xl"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-[#5046E5] mb-3">
                    {service.titulo}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {service.descripcion}
                  </p>

                  {freelancer && (
                    <div className="mb-4">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 mr-2">
                          Freelancer:
                        </span>
                        <span className="text-gray-600">
                          {freelancer.nombre}
                        </span>
                      </div>
                      
                      <div className="text-sm text-gray-500 mt-1">
                        {freelancer.biografia.length > 100 
                          ? `${freelancer.biografia.substring(0, 100)}...` 
                          : freelancer.biografia}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-green-600">
                      ${service.precio}
                    </span>
                    
                    <button
                      onClick={() => {/* Implement contact or hire logic */}}
                      className="px-4 py-2 bg-[#5046E5] text-white 
                                 rounded-md hover:bg-opacity-90 
                                 transition duration-300"
                    >
                      Contactar
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {services.length === 0 && (
          <div className="text-center text-gray-600 mt-12">
            No hay servicios disponibles en este momento.
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;
