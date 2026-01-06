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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        inline-flex items-center gap-3
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
          whileHover={{ x: 3 }}
          className="w-7 h-7 rounded-full bg-white flex items-center justify-center"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>
      )}
    </motion.button>
  );
};

export default CTAButton;
