import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BestSellers from '../components/BestSellers';
import Collections from '../components/Collections';

import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <HeroSection />
      <BestSellers />
      <Collections />
      
    </div>
  );
}

export default Home;
