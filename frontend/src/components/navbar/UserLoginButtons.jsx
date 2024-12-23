import React from "react";
import { Link } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';

function UserLoginButtons() {
    return (
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
    );
}

export default UserLoginButtons;