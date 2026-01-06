import { motion } from 'framer-motion';

const NavigationPill = ({ label, isActive = false, onClick, href = '#' }) => {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-5 py-2.5 rounded-pill text-[15px] font-medium
        transition-all duration-300 ease-out
        inline-block cursor-pointer
        focus-visible:outline-2 focus-visible:outline-primary-orange focus-visible:outline-offset-2
        ${isActive 
          ? 'bg-dark-900 text-white font-semibold' 
          : 'bg-white text-dark-700 hover:bg-light-100 border border-dark-900/10'
        }
      `}
    >
      {label}
    </motion.a>
  );
};

export default NavigationPill;
