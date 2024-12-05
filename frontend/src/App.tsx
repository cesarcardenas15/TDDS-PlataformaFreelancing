import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularCategories from './components/PopularCategories';
import FeaturedJobs from './components/FeaturedJobs';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <PopularCategories />
      <FeaturedJobs />
      
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FreelanceHub</h3>
              <p className="text-gray-400">
                Connect with the best freelancers for your projects.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Clients</h4>
              <ul className="space-y-2 text-gray-400">
                <li>How to Hire</li>
                <li>Talent Marketplace</li>
                <li>Project Catalog</li>
                <li>Enterprise</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Freelancers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>How to Find Work</li>
                <li>Direct Contracts</li>
                <li>Market Insights</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help & Support</li>
                <li>Success Stories</li>
                <li>Blog</li>
                <li>Community</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 FreelanceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;