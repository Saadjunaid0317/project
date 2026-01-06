import { motion } from 'framer-motion';
import { useState } from 'react';
import { cardHoverVariants } from '../utils/animations';

const ImageCard = ({ 
  image, 
  gridArea, 
  size = 'medium', 
  hasGlassOverlay = false, 
  overlayContent,
  alt = "Westie Architecture" 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      style={{ gridArea }}
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="
        relative rounded-3xl overflow-hidden
        cursor-pointer
        w-full h-full
        shadow-md
      "
    >
      {/* Image */}
      <img 
        src={image}
        alt={alt}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        className={`
          w-full h-full object-cover object-center
          transition-transform duration-500 ease-out
          ${isHovered ? 'scale-110' : 'scale-100'}
          ${imageLoaded ? 'opacity-100' : 'opacity-0'}
        `}
      />
      
      {/* Hover Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="
          absolute inset-0
          bg-black/20
          pointer-events-none
        "
      />

      {/* Glass Overlay (if enabled) */}
      {hasGlassOverlay && overlayContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="
            absolute bottom-8 right-8
            bg-white/90 backdrop-blur-sm
            rounded-2xl p-6 shadow-xl
            max-w-[320px]
            border border-white/20
          "
        >
          <h4 className="text-base font-semibold text-dark-900 mb-2">
            {overlayContent.title}
          </h4>
          <p className="text-sm text-dark-800 leading-relaxed">
            {overlayContent.description}
          </p>
        </motion.div>
      )}

      {/* Loading Placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </motion.div>
  );
};

export default ImageCard;
