import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import HomeSection from './containers/HomeSection/HomeSection';
import AboutSection from './containers/AboutSection/AboutSection';
import ProjectsSection from './containers/ProjectsSection/ProjectsSection';
import ContactSection from './containers/ContactSection/ContactSection';

function App() {
  return (
    <div className="app">
      <Navigation />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;