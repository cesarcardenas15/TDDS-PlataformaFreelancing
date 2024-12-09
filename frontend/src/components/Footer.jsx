import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SkillSphere</h3>
            <p className="text-gray-400">
              Conecta con los mejores freelancers para tus proyectos.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Para Clientes</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Cómo Contratar</li>
              <li>Catálogo de Proyectos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Para Freelancers</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Cómo Encontrar Trabajo</li>
              <li>Comunidad</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Ayuda y Soporte</li>
              <li>Casos de Éxito</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 SkillSphere. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;