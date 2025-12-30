import React from 'react';
import DeploymentAlert from './components/DeploymentAlert';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import ClosedSourceProjects from './components/ClosedSourceProjects';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <DeploymentAlert />
      <Navigation />
      <div className="pt-16">
        <Hero />
        <About />
        <ClosedSourceProjects />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;