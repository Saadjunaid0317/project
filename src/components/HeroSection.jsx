import { motion } from 'framer-motion';
import ImageCard from './ImageCard';
import GlassCard from './GlassCard';
import { containerVariants, headlineVariants } from '../utils/animations';
import { useMediaQuery } from '../hooks/useMediaQuery';

const HeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isDesktop = !isMobile && !isTablet;

  return (
    <section id="main-content" className="bg-white min-h-screen pt-24 pb-16 px-6 md:px-10 lg:px-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto"
      >
        {/* Desktop Layout */}
        {isDesktop && (
          <div className="grid grid-cols-[1fr_1.2fr_1fr] grid-rows-[1fr_0.8fr] gap-6 relative">
            {/* Headline */}
            <motion.div
              variants={headlineVariants}
              className="absolute top-0 left-0 z-10 max-w-[600px]"
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Red Accent Element */}
                <div className="w-16 h-16 bg-accent-red rounded-2xl flex-shrink-0 mt-1" />
                
                <h1 className="text-hero font-black text-dark-900 leading-tight tracking-tight">
                  DESIGNING SPACES
                  <br />
                  FOR MODERN
                  <br />
                  LIFE
                </h1>
              </div>
            </motion.div>

            {/* Large Stairs Image */}
            <ImageCard 
              image="/images/big.png"
              gridArea="1 / 1 / 2 / 3"
              size="large"
              alt="Modern minimalist staircase with dramatic orange lighting"
            />
            
            {/* Small Image */}
            <ImageCard 
              image="/images/small.png"
              gridArea="2 / 1 / 3 / 2"
              size="small"
              alt="Contemporary architecture exterior detail"
            />
            
            {/* Glass Card - Text + CTA */}
            <GlassCard 
              gridArea="2 / 2 / 3 / 3"
              title="At Westie, we design homes where form and function work in perfect balance."
              description="Clean architecture, natural light, and thoughtful details come together to create spaces that feel simple, durable, and effortlessly comfortable."
              buttonText="Explore our homes"
              onButtonClick={() => console.log('Explore clicked')}
            />
            
            {/* Pool Image (Tall) with Glass Overlay */}
            <ImageCard 
              image="/images/water.png"
              gridArea="1 / 3 / 3 / 4"
              size="tall"
              hasGlassOverlay={true}
              overlayContent={{
                title: "Design Philosophy",
                description: "Learn how our principles shape every home we create, from concept to completion."
              }}
              alt="Modern pool with architectural overhang at dusk"
            />
            
            {/* Additional Text on Right Side */}
            <div className="absolute top-4 right-4 max-w-[280px] text-right z-10">
              <p className="text-sm text-dark-800 leading-relaxed">
                Westie blends minimal design and thoughtful planning to create calm, functional and timeless homes.
              </p>
            </div>
          </div>
        )}

        {/* Tablet Layout */}
        {isTablet && (
          <div className="grid grid-cols-2 gap-5">
            {/* Headline */}
            <motion.div variants={headlineVariants} className="col-span-2 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-red rounded-lg flex-shrink-0" />
                <h1 className="text-6xl font-black text-dark-900 leading-tight">
                  DESIGNING SPACES FOR MODERN LIFE
                </h1>
              </div>
            </motion.div>

            {/* Images and Cards */}
            <div className="col-span-2">
              <ImageCard 
                image="/images/hero-stairs.jpg"
                alt="Modern staircase"
              />
            </div>
            
            <ImageCard 
              image="/images/hero-small.jpg"
              alt="Architecture detail"
            />
            
            <GlassCard 
              title="At Westie, we design homes where form and function work in perfect balance."
              description="Clean architecture, natural light, and thoughtful details come together."
              buttonText="Explore our homes"
              onButtonClick={() => console.log('Explore clicked')}
            />
            
            <div className="col-span-2">
              <ImageCard 
                image="/images/hero-pool.jpg"
                hasGlassOverlay={true}
                overlayContent={{
                  title: "Design Philosophy",
                  description: "Learn how our principles shape every home."
                }}
                alt="Modern pool"
              />
            </div>
          </div>
        )}

        {/* Mobile Layout */}
        {isMobile && (
          <div className="flex flex-col gap-4">
            {/* Headline */}
            <motion.div variants={headlineVariants} className="mb-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent-red rounded-lg flex-shrink-0" />
                <h1 className="text-5xl font-black text-dark-900 leading-tight">
                  DESIGNING SPACES FOR MODERN LIFE
                </h1>
              </div>
            </motion.div>

            {/* Stacked Images and Cards */}
            <ImageCard 
              image="/images/hero-stairs.jpg"
              alt="Modern staircase"
            />
            
            <GlassCard 
              title="Design Philosophy"
              description="At Westie, we design homes where form and function work in perfect balance."
              buttonText="Explore our homes"
              onButtonClick={() => console.log('Explore clicked')}
            />
            
            <ImageCard 
              image="/images/hero-pool.jpg"
              alt="Modern pool"
            />
            
            <ImageCard 
              image="/images/hero-small.jpg"
              alt="Architecture detail"
            />
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default HeroSection;
