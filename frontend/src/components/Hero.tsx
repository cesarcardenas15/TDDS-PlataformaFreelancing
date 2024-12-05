import React from 'react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find the perfect freelance services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">
            Connect with talented freelancers and get your projects done
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50">
              Hire a Freelancer
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10">
              Become a Freelancer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}