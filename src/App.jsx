import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import InitialAnim from './components/InitialAnim';
import Anim from './components/Anim';

import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './index.css';
import './App.css';
import './styles/Home.css';
import './styles/Gallery.css';
import './styles/Projects.css';
import './styles/Contact.css';

import kevinImg from './assets/kevin3.jpg';
import ss1 from './assets/ss1.png';
import ss2 from './assets/ss2.png';
import ss3 from './assets/ss3.png';

function App() {
  const [navVisible, setNavVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [initialAnimComplete, setInitialAnimComplete] = useState(false);

  const toggleNav = () => setNavVisible(!navVisible);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setNavVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Control body class during initial animation
  useEffect(() => {
    if (!initialAnimComplete) {
      document.body.classList.add('initial-anim-active');
    } else {
      document.body.classList.remove('initial-anim-active');
    }
  }, [initialAnimComplete]);

  // Handle navigation
  const navigateTo = (page) => {
    setCurrentPage(page);
    setNavVisible(false);
  };

  const galleryImages = [
    { src: ss1, alt: "Project 1", caption: "" },
    { src: ss2, alt: "Project 2", caption: "" },
    { src: ss3, alt: "Project 3", caption: "" }
  ];

  // Home page component
  const HomePage = () => (
    <>
      <main className="main-content">
        <section className="divisionx">
          <div className="image-with-title">
            {/* TITLE ABOVE IMAGE */}
            <h1 className="image-title">Kevin</h1>

            {/* IMAGE */}
            <div className="photo-wrapper">
              <img src={kevinImg} alt="Profile" className="round-image" />

              {/* Orbit Balls */}
              <motion.div
                className="orbit-wrapper"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              >
                <div className="orbit-ball top"></div>
                <div className="orbit-ball right"></div>
                <div className="orbit-ball bottom"></div>
                <div className="orbit-ball left"></div>
              </motion.div>
            </div>

            {/* DESCRIPTION BELOW IMAGE */}
            <div className="image-text-box">
              <p className="image-text-box-p">
                Olá! Meu nome é Kevin Ferreira e sou estudante de programação com pouco mais de dois anos de estudo, atualmente estudante de ADS na UNIASSELVI e busco uma vaga de estágio ou vaga de programador junior. Atualmente estou focando em desenvolvimento Full Stack: Reactjs e Nodejs.
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="divisionx">
          <Gallery images={galleryImages} />
        </section>
      </main>

      <Footer />
    </>
  );

  // Render the current page with animation
  const renderPage = () => {
    if (!initialAnimComplete) return null;

    return (
      <AnimatePresence mode="wait">
        <Anim key={currentPage}>
          {currentPage === 'projects' ? (
            <Projects onClose={() => navigateTo('home')} />
          ) : currentPage === 'contact' ? (
            <Contact onClose={() => navigateTo('home')} />
          ) : (
            <HomePage />
          )}
        </Anim>
      </AnimatePresence>
    );
  };

  return (
    <div className="container">
      {/* Initial Animation */}
      <InitialAnim onComplete={() => setInitialAnimComplete(true)} />

      {/* Main Content */}
      {initialAnimComplete && (
        <div className="inner-content">
          {/* Hamburger Menu */}
          <div
            className="hamburger-container"
            onClick={toggleNav}
            ref={buttonRef}
            role="button"
            tabIndex={0}
            aria-label="Toggle menu"
            onKeyDown={(e) => e.key === 'Enter' && toggleNav()}
          >
            <div className="hamburger-icon">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>

            {/* Animated Menu */}
            <AnimatePresence>
              {navVisible && (
                <motion.div
                  ref={menuRef}
                  className="hamburger-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <ul>
                    <li onClick={() => navigateTo('home')}>Início</li>
                    <li onClick={() => navigateTo('projects')}>Projetos</li>
                    <li onClick={() => navigateTo('contact')}>Contato</li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Page Content */}
          {renderPage()}
        </div>
      )}
    </div>
  );
}

export default App;
