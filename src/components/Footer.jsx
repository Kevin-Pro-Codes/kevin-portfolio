import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-5 md:mb-0">
            <div className="flex items-center space-x-2">
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div className="flex items-center space-x-2">
                  <div style={{ position: 'relative', display: 'inline-block', padding: '10px' }}>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mb-5 md:mb-0">
            <a href="https://github.com/Kevin-Pro-Codes" target="_blank" rel="noopener noreferrer"
               className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700">
              <FaLinkedin />
            </a>
            <a href="mailto:contato@portfolio.dev"
               className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kevin. Todos os direitos reservados.</p>
          <p className="mt-1 text-sm">Desenvolvido com React, Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;