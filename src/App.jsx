import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import './styles/index.css';

function App() {
  return (
    <AnimatePresence>
      <div className="min-h-screen bg-[#FAF9F6]">
        {/* Skip to main content */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-dark-900 focus:rounded-lg"
        >
          Skip to main content
        </a>
        
        {/* Main container with orange gradient and rounded corners */}
        <div className="min-h-screen p-6">
          <div className="gradient-primary rounded-[3rem] min-h-[calc(100vh-3rem)] overflow-hidden">
            <Header />
            <main role="main" id="main-content">
              <HeroSection />
            </main>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
