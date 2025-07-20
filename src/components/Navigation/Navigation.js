// src/components/Navigation/Navigation.js
import React from 'react';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-light text-blue-600">RW</div>
        <div className="space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;