import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function JobCard({ title, budget, description, skills, postedTime }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-indigo-600">{budget}</p>
          <p className="text-sm text-gray-500">{postedTime}</p>
        </div>
      </div>
      <Link to="/en-construccion">
        <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Aplicar Ahora
        </button>
      </Link>
    </div>
  );
}

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  budget: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  postedTime: PropTypes.string.isRequired,
};

export default JobCard;