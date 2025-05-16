import React from 'react';
import Footer from './assets/components/Footer';
import Contact from './assets/components/Contact';
import Project from './assets/components/Project';
import Skills from './assets/components/Skills';
import AboutMe from './assets/components/AboutMe'; 
import HeroSection from './assets/components/HeroSection'; 
import CenteredNavbar from './assets/components/Navbar'; 

function App() {
  return (
    <div>
      <CenteredNavbar />
      <HeroSection/>
      <AboutMe/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;

