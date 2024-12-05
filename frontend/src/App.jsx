import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularCategories from './components/PopularCategories';
import FeaturedJobs from './components/FeaturedJobs';
import Footer from './components/Footer';


function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <PopularCategories />
      <FeaturedJobs />
      <Footer />

    </div>
  )
}

export default App
