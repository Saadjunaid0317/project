import { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import NavigationPill from './NavigationPill';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { motion } from 'framer-motion';

const Header = () => {
  const scrollPosition = useScrollPosition();
  const [activeNav, setActiveNav] = useState('Models');
  
  const scrolled = scrollPosition > 50;
  
  const navItems = ['Models', 'Services', 'Shop', 'Purchase', 'Contact'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`
        sticky top-0 z-50 h-20 px-16
        flex items-center justify-between
        transition-all duration-300
        ${scrolled 
          ? 'bg-white/80 backdrop-blur-lg border-b border-dark-900/10 shadow-sm' 
          : 'bg-white'
        }
      `}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src="/images/log-removebg-preview.svg" 
          alt="Westie Logo" 
          className="h-8 w-auto"
          onError={(e) => {
            // Fallback if logo not available
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = '<div class="text-dark-900 text-xl font-bold">WESTIE</div>';
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-3" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavigationPill
            key={item}
            label={item}
            isActive={activeNav === item}
            onClick={() => setActiveNav(item)}
            href={`#${item.toLowerCase()}`}
          />
        ))}
      </nav>

      {/* Contact Button */}
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            px-6 py-2.5 rounded-pill
            bg-white border border-dark-900/10
            text-dark-700 text-sm font-medium
            hover:bg-light-100
            transition-all duration-300
            flex items-center gap-2
          "
          aria-label="Contact us"
        >
          Contact Us
        </motion.button>
        
        <motion.button
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.3 }}
          className="
            w-10 h-10 rounded-full
            bg-white border border-dark-900/10
            flex items-center justify-center
            text-dark-700 hover:bg-light-100
            transition-all duration-300
          "
          aria-label="Settings"
        >
          <FiSettings size={18} />
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
