import React, { useState, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import logoName from '../assets/name.png';
import { 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import Container from './Container';
import { BR, US } from 'country-flag-icons/react/3x2'; 
import { useTranslation } from 'react-i18next'; 

const Navigation = () => {
  const { t, i18n } = useTranslation(); 
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(true);
  
  const language = i18n.language.split('-')[0].toUpperCase(); 
  const whatsappNumber = "5511966317832"; 

  const navItems = {
    PT: ['início', 'sobre', 'habilidades', 'projetos', 'contato'],
    EN: ['home', 'about', 'skills', 'projects', 'contact']
  };

  const contactText = {
    PT: 'Contato',
    EN: 'Contact'
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('pt') ? 'en' : 'pt';
    i18n.changeLanguage(newLang); 
  };

  const getSectionId = (item) => {
    if (language === 'EN') return item;
    const idMap = {
      'home': 'início',
      'about': 'sobre',
      'skills': 'habilidades',
      'projects': 'projetos',
      'contact': 'contato'
    };
    const englishId = Object.keys(idMap).find(key => idMap[key] === item);
    return englishId || item;
  };


  
  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-white shadow-lg py-4 border-b border-gray-200 ${  
      scrolled ? 'bg-white backdrop-blur-md py-2' : 'bg-white py-5'
    } ${alertVisible ? 'mt-[40px]' : 'mt-0'}`}>
      <Container>
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo - Sizes dynamically based on screen */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img 
              src={logoName}
              alt="Logo"
              className="h-8 sm:h-10 md:h-11 w-auto object-contain"
              style={{ userSelect: 'none', pointerEvents: 'none' }}
            />
          </div>
          
          {/* Desktop Nav - Hidden on small screens, flex on Large */}
          <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-10">
            {navItems[language].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(getSectionId(item))}
                className="text-gray-700 hover:text-black font-semibold transition-colors duration-200 capitalize relative group text-sm xl:text-base"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Socials and Original Language Toggle */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-all duration-300 border border-gray-300 flex items-center space-x-3"
            >
              <div className="flex items-center space-x-2">
                <div className={`flex items-center transition-all duration-300 ${language === 'PT' ? 'opacity-100 scale-105' : 'opacity-40'}`}>
                  <BR title="Português" className="w-5 h-auto rounded-sm" />
                  <span className="ml-1 text-xs font-bold">PT</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className={`flex items-center transition-all duration-300 ${language === 'EN' ? 'opacity-100 scale-105' : 'opacity-40'}`}>
                  <US title="English" className="w-5 h-auto rounded-sm" />
                  <span className="ml-1 text-xs font-bold">EN</span>
                </div>
              </div>
            </button>
            
            <div className="flex items-center gap-1 xl:gap-2">
               <a href="https://github.com/Kevin-Pro-Codes" target="_blank" rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-all">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/kevin-ferreira-programmer/" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full flex items-center justify-center text-green-600 hover:bg-green-50 transition-all">
                <FaWhatsapp size={20} />
              </a>
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="ml-2 px-5 py-2 bg-black text-white text-xs font-bold rounded-sm hover:bg-gray-800 transition-all uppercase tracking-wider"
            >
              {contactText[language]}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-800"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pt-6 pb-8 border-t border-gray-100 mt-4">
                {navItems[language].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(getSectionId(item))}
                    className="text-gray-800 hover:text-black font-bold text-lg py-1 text-left capitalize"
                  >
                    {item}
                  </button>
                ))}
                
                <div className="pt-4 flex flex-col gap-6">
                  {/* Reuse your original toggle style for mobile too */}
                  <button
                    onClick={toggleLanguage}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                        <BR className={`w-7 ${language === 'PT' ? 'opacity-100' : 'opacity-40'}`} />
                        <span className="text-gray-300">|</span>
                        <US className={`w-7 ${language === 'EN' ? 'opacity-100' : 'opacity-40'}`} />
                        <span className="font-bold ml-2">{language === 'PT' ? 'Português' : 'English'}</span>
                    </div>
                    <span className="text-xs text-gray-500 font-bold uppercase">Toggle</span>
                  </button>

                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center"><FaGithub size={22}/></a>
                    <a href="#" className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center"><FaLinkedin size={22}/></a>
                    <a href="#" className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600"><FaWhatsapp size={24}/></a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
};

export default Navigation;