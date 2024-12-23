import React from "react";
import { Link } from 'react-router-dom';

const DropDownProfile = () => {
    return (
        <div className="flex flex-col dropDownProfile">
            <ul className="flex flex-col gap-4">
                <Link to="/profile">
                    <li>Perfil</li>
                </Link>
                <Link to="/become-freelance">
                    <li>Convertirse en Freelancer</li>
                </Link>
                <Link to="/logout">
                    <li>Cerrar Sesión</li>
                </Link>
            </ul>
        </div>
    )
}

export default DropDownProfile