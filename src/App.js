import React from 'react';
import Navigation from './components/Navigation/Navigation';
import HomeSection from './containers/HomeSection/HomeSection';
import AboutSection from './containers/AboutSection/AboutSection';


const App = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Navigation />
      <HomeSection />
      <AboutSection />
    </div>
  );
};

export default App;