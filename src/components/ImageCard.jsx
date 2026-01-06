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
        relative rounded-[2rem] overflow-hidden
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
          transition={{ delay: 0.6, duration: 0.6 }}
          className="
            absolute bottom-6 right-6
            bg-[#1A1A1A]/80 backdrop-blur-md
            border border-white/10
            rounded-2xl p-6
            max-w-[280px]
          "
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-white">
              {overlayContent.title}
            </h4>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <p className="text-xs text-white/80 leading-relaxed">
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
