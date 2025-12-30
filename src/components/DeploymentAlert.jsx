import React, { useState, useEffect } from 'react'; 
import { FaExclamationTriangle, FaTimes } from 'react-icons/fa';

const DeploymentAlert = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className={`w-full bg-yellow-500 border-b border-yellow-600 ${isMobile ? 'py-2' : 'py-2'}`}>
        <div className="relative w-full">
          {/* Container with hidden overflow to prevent breaking */}
          <div className="overflow-hidden">
            <div className="flex items-start justify-start min-w-max px-3 sm:px-4 md:px-6">
              <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 whitespace-nowrap">
                <FaExclamationTriangle 
                  className="text-black flex-shrink-0" 
                  size={isMobile ? 14 : 16} 
                />
                {/* Static message - single line, no wrap */}
                <div className="text-black font-medium text-center whitespace-nowrap">
                  {/* Desktop version */}
                  <span className="hidden sm:inline text-xs sm:text-sm md:text-base truncate">
                  Para reprodução completa, o backend funciona através do repositório do GitHub, rodando localmente
                  </span>
                  {/* Mobile version */}
                  <span className="sm:hidden text-xs truncate">
                  Backend requer processamento local
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Close button - positioned over the text if needed */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-800 transition-colors p-1 bg-yellow-500/80 backdrop-blur-sm"
            aria-label="Fechar alerta"
          >
            <FaTimes size={isMobile ? 14 : 16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeploymentAlert;