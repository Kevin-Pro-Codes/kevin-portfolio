import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Gallery.css';


const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
 const buttonLabels = ['C', 'C++', 'Java', 'Kotlin', 'Reactjs', 'Nodejs'];

  return (
   <div className="gallery-container">

  {/* New button group */}
<div className="gallery-button-group">
        {buttonLabels.map((label, index) => (
          <button key={index} className="sample-button">{label}</button>
        ))}
      </div>

  <div className="gallery-wrapper">
   {!isZoomed && (
  <button className="arrow-button left" onClick={prevImage} aria-label="Previous image" />
)}

    <div 
      className="gallery-image-container"
      onClick={() => setIsZoomed(!isZoomed)}
    >
      <motion.img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="gallery-image"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          scale: isZoomed ? 1.5 : 1
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>

    {!isZoomed && (
  <button className="arrow-button right" onClick={nextImage} aria-label="Next image" />
)}
  </div>

  <AnimatePresence>
    {isZoomed && (
      <motion.div
        className="zoom-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsZoomed(false)}
      />
    )}
  </AnimatePresence>

  <div className="gallery-dots">
    {images.map((_, index) => (
      <button
        key={index}
        className={`dot ${index === currentIndex ? 'active' : ''}`}
        onClick={() => {
          setCurrentIndex(index);
          setIsZoomed(false);
        }}
      />
    ))}
  </div>
</div>

  );
};

export default Gallery;