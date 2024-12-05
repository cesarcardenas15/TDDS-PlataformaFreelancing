import React from 'react';
import PropTypes from 'prop-types';
import { Code, Paintbrush, PenTool, Camera, BarChart3, Languages } from 'lucide-react';
import CategoryCard from './CategoryCard';

const categories = [
  { icon: Code, name: 'Desarrollo y TI', count: '1.2k+ trabajos' },
  { icon: Paintbrush, name: 'Diseño y Creatividad', count: '850+ trabajos' },
  { icon: PenTool, name: 'Redacción', count: '650+ trabajos' },
  { icon: Camera, name: 'Foto y Video', count: '450+ trabajos' },
  { icon: BarChart3, name: 'Marketing Digital', count: '750+ trabajos' },
  { icon: Languages, name: 'Traducción', count: '320+ trabajos' },
];

function PopularCategories() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Categorías Populares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;