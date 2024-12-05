import React from 'react';
import { Code, Paintbrush, PenTool, Camera, BarChart3, Languages } from 'lucide-react';

const categories = [
  { icon: Code, name: 'Development & IT', count: '1.2k+ jobs' },
  { icon: Paintbrush, name: 'Design & Creative', count: '850+ jobs' },
  { icon: PenTool, name: 'Writing', count: '650+ jobs' },
  { icon: Camera, name: 'Photo & Video', count: '450+ jobs' },
  { icon: BarChart3, name: 'Digital Marketing', count: '750+ jobs' },
  { icon: Languages, name: 'Translation', count: '320+ jobs' },
];

export default function PopularCategories() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <category.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-gray-600">{category.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}