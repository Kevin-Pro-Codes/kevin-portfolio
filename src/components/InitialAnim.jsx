import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const InitialAnim = ({ onComplete }) => {
  const [phase, setPhase] = useState(1); // Start immediately with particles visible
  const [exitAnimation, setExitAnimation] = useState(false);
  const [bgColor, setBgColor] = useState('#121212');

  useEffect(() => {
    const sequence = async () => {
      // Particles already visible (phase 1)
      
      // Faster transition to form K shape (800ms)
      await new Promise(resolve => setTimeout(resolve, 800));
      setPhase(2);
      
      // Faster logo appearance (500ms)
      await new Promise(resolve => setTimeout(resolve, 500));
      setPhase(3);
      
      // Background to white (400ms)
      setBgColor('#ffffff');
      await new Promise(resolve => setTimeout(resolve, 400));
      setExitAnimation(true);
      
      // Complete (300ms)
      await new Promise(resolve => setTimeout(resolve, 300));
      onComplete();
    };
    sequence();
  }, [onComplete]);

  // Core particles for K shape
  const coreParticles = [
    { id: 1, x: 0, y: -40, size: 8 },
    { id: 2, x: 0, y: -20, size: 10 },
    { id: 3, x: 0, y: 0, size: 12 },
    { id: 4, x: 0, y: 20, size: 10 },
    { id: 5, x: 0, y: 40, size: 8 },
    { id: 6, x: 20, y: -30, size: 6 },
    { id: 7, x: 40, y: -20, size: 8 },
    { id: 8, x: 60, y: -10, size: 6 },
    { id: 9, x: 20, y: 10, size: 6 },
    { id: 10, x: 40, y: 20, size: 8 },
    { id: 11, x: 60, y: 30, size: 6 }
  ];

  // Decorative particles (reduced count for performance)
  const decorativeParticles = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 12,
    size: Math.random() * 6 + 3,
    finalX: (Math.random() - 0.5) * 100,
    finalY: (Math.random() - 0.5) * 100
  }));

  const allParticles = [...coreParticles, ...decorativeParticles];

  return (
    <AnimatePresence>
      {!exitAnimation && (
        <motion.div 
          className="particle-anim-container"
          initial={{ opacity: 1, backgroundColor: '#121212' }}
          animate={{ 
            opacity: 1,
            backgroundColor: bgColor
          }}
          transition={{ 
            backgroundColor: { duration: 0.5, ease: "easeInOut" }
          }}
          exit={{ opacity: 0 }}
        >
          {/* Black Particles */}
          {allParticles.map((particle) => {
            const isCoreParticle = particle.id <= 11;
            
            return (
              <motion.div
                key={particle.id}
                initial={{ 
                  x: (Math.random() - 0.5) * window.innerWidth,
                  y: (Math.random() - 0.5) * window.innerHeight,
                  opacity: 0,
                  scale: 0.3
                }}
                animate={{
                  x: phase >= 2 ? (isCoreParticle ? particle.x : particle.finalX) : 0,
                  y: phase >= 2 ? (isCoreParticle ? particle.y : particle.finalY) : 0,
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  type: 'spring',
                  damping: isCoreParticle ? 25 : 20,
                  stiffness: isCoreParticle ? 120 : 100,
                  delay: particle.id * 0.01, // Fast sequential appearance
                  duration: 0.6
                }}
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  backgroundColor: '#000000', // Black particles
                  borderRadius: '50%',
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  translateX: '-50%',
                  translateY: '-50%',
                  boxShadow: '0 0 5px rgba(0,0,0,0.3)' // Subtle black shadow
                }}
              />
            );
          })}
          
          {/* K Logo - switches color based on background */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, color: '#ffffff' }}
            animate={{ 
              scale: phase >= 3 ? 1 : 0.8,
              opacity: phase >= 3 ? 1 : 0,
              color: bgColor === '#ffffff' ? '#000000' : '#ffffff'
            }}
            transition={{ 
              type: 'spring',
              stiffness: 400,
              damping: 15,
              delay: 0.2
            }}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '5rem',
              fontWeight: 'bold',
              zIndex: 2
            }}
          >
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialAnim;