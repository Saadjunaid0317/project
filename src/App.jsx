import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import './styles/index.css';

function App() {
  return (
    <AnimatePresence>
      {/* Orange background layer */}
      <div className="min-h-screen bg-gradient-to-br from-[#FF5722] via-[#FF7043] to-[#FF8A65] p-6">
        
        {/* White container (the "device screen") */}
        <div className="bg-[#FAF9F6] rounded-[3rem] min-h-[calc(100vh-3rem)] overflow-hidden shadow-2xl border border-white/40">
          
          <Header />
          
          <main role="main" id="main-content">
            <HeroSection />
          </main>
          
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
