import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const CTAButton = ({ 
  text, 
  variant = 'primary', 
  icon = true, 
  onClick,
  className = '' 
}) => {
  const baseStyles = "px-7 py-3.5 rounded-pill text-sm font-medium inline-flex items-center gap-2 cursor-pointer transition-all duration-300 focus-visible:outline-2 focus-visible:outline-primary-orange focus-visible:outline-offset-2";
  
  const variantStyles = {
    primary: "bg-dark-900 text-white hover:bg-dark-800",
    secondary: "bg-transparent text-dark-900 border border-dark-900/30 hover:bg-dark-900/5"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <span>{text}</span>
      {icon && (
        <motion.span
          className="inline-flex items-center"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.3 }}
        >
          <FiArrowRight size={16} />
        </motion.span>
      )}
    </motion.button>
  );
};

export default CTAButton;
