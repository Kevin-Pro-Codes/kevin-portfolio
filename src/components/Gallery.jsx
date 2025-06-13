import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Gallery.css';

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleKeyDown = (e) => {
    if (!isFullscreen) return;
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') setIsFullscreen(false);
  };

  const buttonLabels = ['C', 'C++', 'Java', 'Kotlin', 'Reactjs', 'Nodejs'];

  return (
    <div
      className="gallery-container"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      ref={containerRef}
    >
      {/* Top Buttons */}
      <div className="gallery-button-group">
        {buttonLabels.map((label, index) => (
          <button key={index} className="sample-button">{label}</button>
        ))}
      </div>

      {/* Image and Arrows */}
      <div className="main-image-box">
        <button className="nav-button left" onClick={prevImage}></button>

        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="main-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          onClick={() => setIsFullscreen(true)}
        />

        <button className="nav-button right" onClick={nextImage}></button>
      </div>

      {/* Dots */}
      <div className="gallery-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Fullscreen zoom view */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fullscreen-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreen(false)}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="fullscreen-image"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
