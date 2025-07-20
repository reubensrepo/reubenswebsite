// src/containers/HomeSection/HomeSection.js
import React from 'react';

const HomeSection = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-light mb-6 text-blue-900 tracking-wide">
          Reuben Wong
        </h1>
        <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-8">
          Data Scientist & Storyteller
        </p>
        <button 
          onClick={() => scrollToSection('about')}
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          <span>Learn more about me</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HomeSection;