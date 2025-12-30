
import { motion } from 'framer-motion';
import kevinImage from '../assets/kevin.png?url';

import Container from './Container';
import React, { useState, useEffect } from 'react'; 
import { Typography } from '@mui/material';
import logoName from '../assets/name.png';
import { 
  FaGithub, 
  FaCode, 
  FaServer 
} from 'react-icons/fa'; // ← Change from 'si' to 'fa'

import { FaHandsClapping } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-24 md:pt-32 pb-12 md:pb-16 bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_#f0f0f0_25%,_transparent_25%),_linear-gradient(-45deg,_#f0f0f0_25%,_transparent_25%),_linear-gradient(45deg,_transparent_75%,_#f0f0f0_75%),_linear-gradient(-45deg,_transparent_75%,_#f0f0f0_75%)] bg-[size:20px_20px] opacity-20"></div>
        
        <div className="absolute top-20 right-4 md:right-20 w-40 h-40 md:w-56 md:h-56 bg-gray-300 rounded-full opacity-10"></div>
        <div className="absolute bottom-20 left-4 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-gray-400 rounded-full opacity-10"></div>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-sm font-medium mb-6 border border-gray-300">
              <FaHandsClapping className="w-5 h-5" />
              Olá, seja bem-vindo!
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-gray-900">Desenvolvedor</span>
              <span className="block text-black">
                Full Stack 
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Desenvolvedor Full Stack em React, Angular, Bootstrap, Tailwind, PHP, Node.js, e TypeScript. Criando aplicações completas do frontend ao backend com foco em performance e escalabilidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const alertHeight = document.querySelector('[class*="bg-yellow-500"]') ? 48 : 0;
                    const navbarHeight = 64;
                    const yOffset = -(alertHeight + navbarHeight);
                    const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 border border-black"
              >
                Contate-me
              </button>
              <a 
                href="https://github.com/Kevin-Pro-Codes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black transition-all duration-300 flex items-center justify-center gap-2 border border-gray-900"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-sm lg:max-w-md mx-auto">
              <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl transform rotate-12 opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-tr from-gray-500 to-gray-700 rounded-3xl transform -rotate-12 opacity-20"></div>
              
              <div className="relative bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-1 rounded-3xl shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <img 
                    src={kevinImage} 
                    alt="Kevin - Desenvolvedor Full Stack"
                    className="w-full h-auto object-cover rounded-2xl lg:transform lg:hover:scale-105 lg:transition-transform lg:duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              </div>

              <div className="absolute -top-3 lg:-top-4 left-2 lg:left-4 bg-white p-2 lg:p-3 rounded-lg lg:rounded-xl shadow-lg border border-gray-200">
                <FaCode className="text-gray-800 text-lg lg:text-xl" />
              </div>
              <div className="absolute -bottom-3 lg:-bottom-4 right-2 lg:right-4 bg-white p-2 lg:p-3 rounded-lg lg:rounded-xl shadow-lg border border-gray-200">
                <FaServer className="text-gray-800 text-lg lg:text-xl" />
              </div>

              <div className="absolute -left-3 lg:-left-6 top-1/3 bg-white p-3 lg:p-4 rounded-lg lg:rounded-xl shadow-lg border border-gray-200">
                <div className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-gray-900">3+</div>
                  <div className="text-xs text-gray-700">Anos Exp</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;