import React from 'react';
import Hero from '../components/Hero';
import PopularCategories from '../components/PopularCategories';
import FeaturedJobs from '../components/FeaturedJobs';

function HomePage() {
  return (
    <>
      <Hero />
      <PopularCategories />
      <FeaturedJobs />
    </>
  )
}

export default HomePage;
