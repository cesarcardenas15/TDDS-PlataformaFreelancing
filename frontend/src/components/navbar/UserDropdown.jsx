import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const DropDownProfile = () => {
    const navigate = useNavigate();

    function LogOut() {
        let refreshToken = localStorage.getItem('refresh_token');
        try {
          // Send login request to the new backend
          const response = axios.post('http://localhost:8000/auth/logout', {
            "refresh": refreshToken
          });
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('user');

          console.log('Sesion Cerrada');
          window.dispatchEvent(new Event('storage'));
          // Redirect to main page
          navigate('/');
        } catch (err) {
          console.error('Error:', err.response ? err.response.data : err.message);
        }
    }
    return (
        <div className="flex flex-col bg-white dropDownProfile">
            <ul className="flex flex-col gap-4">
                <Link to="/profile">
                    <li>Perfil</li>
                </Link>
                <Link to="/crear-perfil">
                    <li className="text-green-600 font-bold">Convertirse en Freelancer</li>
                </Link>
                <Link to="/" onClick={LogOut}>
                    <li className='text-red-500 font-bold'>Cerrar Sesión</li>
                </Link>
            </ul>
        </div>
    )
}


export default DropDownProfile