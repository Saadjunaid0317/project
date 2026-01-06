import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [activeNav, setActiveNav] = useState('Models');
  const navItems = ['Models', 'Services', 'Shop', 'Purchase', 'Contact'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 h-20 px-16 flex items-center justify-between bg-transparent"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img 
          src="/images/log-removebg-preview.svg" 
          alt="Westie Logo" 
          className="h-8 w-auto"
          onError={(e) => {
            e.target.outerHTML = '<div class="flex items-center gap-2"><svg width="20" height="20" viewBox="0 0 20 20" class="text-white"><path d="M10 2L2 6v6c0 5 8 8 8 8s8-3 8-8V6l-8-4z" fill="currentColor"/></svg><span class="text-white text-xl font-bold tracking-tight">WESTIE</span></div>';
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-2" aria-label="Main navigation">
        {navItems.map((item, index) => (
          <button
            key={item}
            onClick={() => setActiveNav(item)}
            className={`
              px-6 py-2 rounded-full text-[15px] font-medium text-white
              transition-all duration-300
              ${index === 0 && activeNav === item
                ? 'bg-[#1A1A1A]' 
                : 'bg-transparent hover:bg-white/15'
              }
            `}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Contact Button & Settings */}
      <div className="flex items-center gap-3">
        <button className="
          px-6 py-2.5 rounded-full
          bg-white/10 border border-white/20
          text-white text-sm font-medium
          hover:bg-white/20 transition-all duration-300
        ">
          Contact Us
        </button>
        
        <button className="
          w-10 h-10 rounded-full
          bg-white/10 border border-white/20
          flex items-center justify-center text-white
          hover:bg-white/20 transition-all duration-300
        ">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6m8.66-13.66l-4.24 4.24m-4.24 4.24l-4.24 4.24m13.66 0l-4.24-4.24m-4.24-4.24l-4.24-4.24"/>
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
