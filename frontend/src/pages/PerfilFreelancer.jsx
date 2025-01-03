import FreelancerProfile from '../components/FreelancerProfile';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const PerfilFreelancer = () => {
  // Aquí deberías obtener los datos del perfil de tu API
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // Llamada a tu API
        const response = await axios.post('http://localhost:8000/api/perfiles');
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error al cargar el perfil:', error);
      }
    };

    fetchProfileData();
  }, []);

  return <FreelancerProfile profileData={profileData} />;
};

export default PerfilFreelancer;