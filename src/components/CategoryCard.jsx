import React from 'react';
import PropTypes from 'prop-types';

function CategoryCard({ icon: Icon, name, count }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className="bg-indigo-100 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600">{count}</p>
        </div>
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
};

export default CategoryCard;