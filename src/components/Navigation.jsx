import React, { useState, useEffect } from 'react'; 
import { motion } from 'framer-motion';
import logoName from '../assets/name.png';
import { 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp, // Adicionado aqui
  FaBars,
  FaTimes
} from 'react-icons/fa';
import Container from './Container';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(true);

  // Substitua pelo seu número (DDI + DDD + Número) sem espaços ou símbolos
  const whatsappNumber = "5511966317832"; 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkAlertVisibility = () => {
      const alert = document.querySelector('[class*="bg-yellow-500"]');
      setAlertVisible(!!alert);
    };
    
    checkAlertVisibility();
    const interval = setInterval(checkAlertVisibility, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const alertHeight = alertVisible ? 48 : 0;
      const navbarHeight = 64;
      const yOffset = -(alertHeight + navbarHeight);
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-white shadow-lg py-4 border-b border-gray-200 ${alertVisible ? 'mt-[40px]' : 'mt-0'}`}>
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logoName}
              alt="Kevin Ferreira Logo"
              className="h-auto w-[200px] sm:w-[240px] md:w-[280px]"
              style={{ 
                display: 'block',
                userSelect: 'none',
              }}
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-800 hover:text-black font-medium transition-colors duration-200 capitalize relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Kevin-Pro-Codes" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 hover:text-black transition-all duration-300">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/kevin-ferreira-programmer/" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 hover:text-black transition-all duration-300">
              <FaLinkedin size={20} />
            </a>
            {/* Botão WhatsApp Desktop */}
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-100 transition-all duration-300">
              <FaWhatsapp size={22} />
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 border border-black"
            >
              Contato
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-800 hover:text-black transition-colors"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-6 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-800 hover:text-black font-medium text-lg py-2 text-left capitalize"
                >
                  {item}
                </button>
              ))}
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/Kevin-Pro-Codes" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 hover:text-black">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 hover:text-black">
                  <FaLinkedin size={20} />
                </a>
                {/* Botão WhatsApp Mobile */}
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-100">
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </nav>
  );
};

export default Navigation;