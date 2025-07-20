// src/containers/AboutSection/AboutSection.js
import React from 'react';
import profilePhoto from '../../assets/images/outdoor-profile-photo.jpg'; // Import my profile photo

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-12 text-blue-900">
          About Me
        </h2>
        
        {/* Photo Placeholder */}
        <div className="mb-12">
          <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg flex items-center justify-center border-4 border-white">
            <img
            src={profilePhoto} // Placeholder for profile photo
            alt="Reuben Wong"
            className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
        {/* About Content */}
        <div className="mb-16">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
            I am currently a data scientist who enjoys digging for insights, helping people understand difficult concepts, and forming new connections. I have a variety of experience from working with clinical patient data, member profile data, and digital activity data and enjoy figuring out ways we can utilize advanced analytics and statistics to deliver business value to companies.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            In my free time I love practicing mindfulness, dancing, thrifting, and spending time with people I love.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-4 text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <a 
              href="mailto:wreuben1993@gmail.com" 
              className="text-lg md:text-xl font-light hover:underline"
            >
              wreuben1993@gmail.com
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-4 text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <a 
              href="https://linkedin.com/in/reuben-wong" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg md:text-xl font-light hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;