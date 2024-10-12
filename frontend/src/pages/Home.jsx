// import React from 'react';
// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
// import BestSellers from '../components/BestSellers';
// import Collections from '../components/Collections';
// import Footer from '../components/Footer'; 
// import './Home.css';

// function Home() {
//   return (
//     <div className="Home">
//       <Navbar />
//       <HeroSection />
//       <BestSellers />
//       <Collections />
//       <Footer />
//     </div>
//   );
// }

// export default Home;
// Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BestSellers from '../components/BestSellers';
import Collections from '../components/Collections';
import Footer from '../components/Footer'; 
import './Home.css';

function Home() {
  return (
    <div className="Home home-container">
      <Navbar />
      <HeroSection />
      <BestSellers />
      <Collections />
      <Footer />
    </div>
  );
}

export default Home;
