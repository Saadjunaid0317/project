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
    <section className="px-12 pb-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto"
      >
          {/* Desktop Layout */}
          {isDesktop && (
            <>
              {/* HEADLINE - OUTSIDE GRID */}
              <motion.div
                variants={headlineVariants}
                className="mb-6 flex items-start justify-between"
              >
                <div className="flex items-start gap-5">
                  {/* Red Accent - THREE HORIZONTAL BARS */}
                  <div className="flex flex-col gap-1.5 mt-5">
                    <div className="w-16 h-2 bg-[#C1121F] rounded-sm" />
                    <div className="w-16 h-2 bg-[#C1121F] rounded-sm" />
                    <div className="w-16 h-2 bg-[#C1121F] rounded-sm" />
                  </div>
                  
                  <h1 className="text-[6.5rem] font-black text-[#0A0A0A] leading-[0.88] tracking-[-0.04em] uppercase" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 900}}>
                    DESIGNING<br/>SPACES<br/>FOR MODERN<br/>LIFE
                  </h1>
                </div>

                {/* Top Right Description Text */}
                <div className="max-w-[240px] text-right mt-2">
                  <p className="text-[13px] text-[#2D2D2D] leading-relaxed font-normal">
                    Westie blends minimal design and thoughtful planning to create calm, functional and timeless homes.
                  </p>
                </div>
              </motion.div>

              {/* GRID LAYOUT - Adjusted proportions */}
              <div className="grid grid-cols-[2fr_1.8fr_1.5fr] grid-rows-[380px_240px] gap-5">
                
                {/* Large Stairs Image - Spans 2 columns, 1 row */}
                <div className="col-span-2 row-span-1">
                  <ImageCard 
                    image="/images/big.png"
                    alt="Modern minimalist staircase with dramatic orange lighting"
                  />
                </div>
                
                {/* Tall Pool Image - Right side, spans 2 rows */}
                <div className="col-start-3 row-span-2">
                  <ImageCard 
                    image="/images/water.png"
                    hasGlassOverlay={true}
                    overlayContent={{
                      title: "Design Philosophy",
                      description: "Learn how our principles shape every home we create, from concept to completion."
                    }}
                    alt="Modern pool with architectural overhang at dusk"
                  />
                </div>
                
                {/* Small Image - Bottom left */}
                <div className="col-start-1 row-start-2">
                  <ImageCard 
                    image="/images/small.png"
                    alt="Contemporary architecture exterior detail"
                  />
                </div>
                
                {/* Glass Card - Bottom middle */}
                <div className="col-start-2 row-start-2">
                  <GlassCard 
                    title="At Westie, we design homes where form and function work in perfect balance."
                    description="Clean architecture, natural light, and thoughtful details come together to create spaces that feel simple, durable, and effortlessly comfortable."
                    buttonText="Explore our homes"
                    onButtonClick={() => console.log('Explore clicked')}
                  />
                </div>
              </div>
            </>
          )}

          {/* Tablet Layout */}
          {isTablet && (
            <>
              <motion.div variants={headlineVariants} className="mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col gap-1 mt-3">
                    <div className="w-12 h-1.5 bg-[#C1121F] rounded-sm" />
                    <div className="w-12 h-1.5 bg-[#C1121F] rounded-sm" />
                    <div className="w-12 h-1.5 bg-[#C1121F] rounded-sm" />
                  </div>
                  <h1 className="text-6xl font-black text-[#0A0A0A] leading-tight tracking-tighter uppercase">
                    DESIGNING SPACES FOR MODERN LIFE
                  </h1>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <ImageCard 
                    image="/images/big.png"
                    alt="Modern staircase"
                  />
                </div>
                
                <ImageCard 
                  image="/images/small.png"
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
                    image="/images/water.png"
                    hasGlassOverlay={true}
                    overlayContent={{
                      title: "Design Philosophy",
                      description: "Learn how our principles shape every home."
                    }}
                    alt="Modern pool"
                  />
                </div>
              </div>
            </>
          )}

          {/* Mobile Layout */}
          {isMobile && (
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex flex-col gap-1 mt-2">
                  <div className="w-10 h-1.5 bg-[#C1121F] rounded-sm" />
                  <div className="w-10 h-1.5 bg-[#C1121F] rounded-sm" />
                  <div className="w-10 h-1.5 bg-[#C1121F] rounded-sm" />
                </div>
                <h1 className="text-4xl font-black text-[#0A0A0A] leading-tight tracking-tighter uppercase">
                  DESIGNING SPACES FOR MODERN LIFE
                </h1>
              </div>
              
              <ImageCard image="/images/big.png" alt="Modern staircase" />
              <GlassCard 
                title="At Westie, we design homes where form and function work in perfect balance."
                description="Clean architecture and thoughtful details."
                buttonText="Explore our homes"
                onButtonClick={() => console.log('Explore clicked')}
              />
              <ImageCard 
                image="/images/water.png"
                hasGlassOverlay={true}
                overlayContent={{
                  title: "Design Philosophy",
                  description: "Learn how our principles shape every home."
                }}
                alt="Modern pool"
              />
              <ImageCard image="/images/small.png" alt="Architecture detail" />
            </div>
          )}
        </motion.div>
    </section>
  );
};

export default HeroSection;
