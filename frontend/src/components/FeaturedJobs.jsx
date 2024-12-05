import React from 'react';
import JobCard from './JobCard';
import { jobsData } from '../data/jobsData';

function FeaturedJobs() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Trabajos Destacados</h2>
          <button className="text-indigo-600 hover:text-indigo-700 font-semibold">
            Ver Todos los Trabajos →
          </button>
        </div>
        <div className="grid gap-8">
          {jobsData.map((job) => (
            <JobCard key={job.title} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedJobs;