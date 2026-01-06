import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [activeNav, setActiveNav] = useState('Models');
  const navItems = ['Models', 'Services', 'Shop', 'Purchase', 'Contact'];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="h-20 px-12 pt-6 flex items-center justify-between"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#0A0A0A]">
          <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/>
        </svg>
        <span className="text-[#0A0A0A] text-xl font-bold tracking-tight">WESTIE</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-2" aria-label="Main navigation">
        {navItems.map((item, index) => (
          <motion.button
            key={item}
            onClick={() => setActiveNav(item)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              px-5 py-2 rounded-full text-[14px] font-medium
              transition-all duration-300
              ${activeNav === item
                ? 'bg-[#1A1A1A] text-white' 
                : 'bg-transparent text-[#0A0A0A] hover:bg-black/5 border border-black/20'
              }
            `}
          >
            {item}
          </motion.button>
        ))}
      </nav>

      {/* Contact Button & Settings */}
      <div className="flex items-center gap-3">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            px-5 py-2 rounded-full
            bg-transparent border border-black/20
            text-[#0A0A0A] text-[14px] font-medium
            hover:bg-black/5 transition-all duration-300
          "
        >
          Contact Us
        </motion.button>
        
        <motion.button 
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="
            w-10 h-10 rounded-full
            bg-transparent border border-black/20
            flex items-center justify-center text-[#0A0A0A]
            hover:bg-black/5 transition-all duration-300
          "
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="2.5"/>
            <path d="M12 2v4m0 12v4m8-10h-4m-12 0h4m11.3-5.3l-2.8 2.8m-8.5 8.5l-2.8 2.8m11.3 0l-2.8-2.8m-8.5-8.5l-2.8-2.8"/>
          </svg>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
