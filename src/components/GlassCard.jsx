import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { glassCardVariants } from '../utils/animations';

const GlassCard = ({ 
  title, 
  description, 
  buttonText, 
  gridArea, 
  onButtonClick 
}) => {
  return (
    <motion.div
      style={{ gridArea }}
      variants={glassCardVariants}
      initial="hidden"
      animate="visible"
      className="
        bg-white/70 backdrop-blur-sm border border-dark-900/10 shadow-md
        rounded-3xl p-10
        flex flex-col justify-between
        min-h-full
      "
    >
      <div>
        <h3 className="text-lg font-semibold text-dark-900 mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-[15px] font-normal text-dark-800 leading-relaxed mb-6 max-w-[90%]">
          {description}
        </p>
      </div>
      
      <div className="mt-auto">
        <CTAButton 
          text={buttonText}
          variant="primary"
          onClick={onButtonClick}
        />
      </div>
    </motion.div>
  );
};

export default GlassCard;
