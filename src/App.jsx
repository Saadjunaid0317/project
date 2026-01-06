import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import './styles/index.css';

function App() {
  return (
    <AnimatePresence>
      <div className="min-h-screen bg-white">
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-dark-900 focus:rounded-lg focus:outline-2 focus:outline-primary-orange"
        >
          Skip to main content
        </a>
        
        <Header />
        <main role="main">
          <HeroSection />
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
