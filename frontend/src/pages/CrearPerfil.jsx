// src/pages/CrearPerfil.jsx (o donde quieras usar el formulario)
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FreelancerProfileForm from '../components/FreelancerProfileForm';

const CrearPerfil = () => {
  const navigate = useNavigate();
  // ID del usuario en localStorage
  const user = localStorage.getItem('user');

  const onProfileCreated = () => {
    navigate('/profile');
  };

  if (!user) {
    return <div>Debes iniciar sesión para crear un perfil</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <FreelancerProfileForm user={user}
      onSuccess={onProfileCreated} />
    </div>
  );
};

export default CrearPerfil;