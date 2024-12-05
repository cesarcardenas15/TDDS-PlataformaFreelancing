import React from 'react';

const jobs = [
  {
    title: 'Senior Full Stack Developer',
    budget: '$3000-5000',
    description: 'Looking for an experienced developer to build a social media platform...',
    skills: ['React', 'Node.js', 'PostgreSQL'],
    postedTime: '2 hours ago'
  },
  {
    title: 'UI/UX Designer',
    budget: '$1500-3000',
    description: 'Need a talented designer to create a modern and intuitive interface...',
    skills: ['Figma', 'UI Design', 'User Research'],
    postedTime: '5 hours ago'
  },
  {
    title: 'Content Writer',
    budget: '$500-1000',
    description: 'Seeking a creative writer for our tech blog. Must have experience...',
    skills: ['Copywriting', 'SEO', 'Technical Writing'],
    postedTime: '1 day ago'
  }
];

export default function FeaturedJobs() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Jobs</h2>
          <button className="text-indigo-600 hover:text-indigo-700 font-semibold">
            View All Jobs →
          </button>
        </div>
        <div className="grid gap-8">
          {jobs.map((job) => (
            <div key={job.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
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
                  <p className="text-lg font-semibold text-indigo-600">{job.budget}</p>
                  <p className="text-sm text-gray-500">{job.postedTime}</p>
                </div>
              </div>
              <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}