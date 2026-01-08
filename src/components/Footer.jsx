import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck } from 'react-icons/fa';
import Container from './Container';
import { useTranslation } from 'react-i18next'; // Importar

const Footer = () => {
  const { t } = useTranslation(); // Inicializar
  const [copied, setCopied] = useState(false);
  const email = "kevinprofessionalman@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-black text-white py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-5 md:mb-0">
            <span className="font-bold text-xl">Kevin</span>
          </div>

          <div className="flex gap-3 mb-5 md:mb-0">
            <a href="https://github.com/Kevin-Pro-Codes" target="_blank" rel="noopener noreferrer"
               className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kevin-ferreira-programmer/" target="_blank" rel="noopener noreferrer"
               className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700">
              <FaLinkedin />
            </a>
            
            <button 
              onClick={handleCopyEmail}
              title={t('footer.copy_email')} // Título traduzido
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700 relative group"
            >
              {copied ? (
                <FaCheck className="text-green-400" size={14} />
              ) : (
                <FaEnvelope size={14} />
              )}
              
              {copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-[10px] py-1 px-2 rounded shadow-lg">
                  {t('footer.email_copied')}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kevin. {t('footer.rights')}</p>
          <p className="mt-1 text-sm">{t('footer.developed_with')}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;