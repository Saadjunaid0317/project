import { motion } from 'framer-motion';

const CTAButton = ({ 
  text, 
  variant = 'primary', 
  icon = true, 
  onClick,
  className = '' 
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        inline-flex items-center gap-2
        px-6 py-3 rounded-full text-sm font-medium
        transition-all duration-300
        ${variant === 'primary' 
          ? 'bg-[#1A1A1A] text-white hover:bg-[#2D2D2D]' 
          : 'bg-white/10 text-[#1A1A1A] border border-[#1A1A1A]/20 hover:bg-white/20'
        }
        ${className}
      `}
    >
      <span>{text}</span>
      {icon && (
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>
      )}
    </motion.button>
  );
};

export default CTAButton;
