import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="
        bg-white/20 backdrop-blur-md
        border border-white/40
        rounded-3xl p-7
        flex flex-col justify-between
        h-full
        shadow-lg
      "
    >
      <div>
        <p className="text-[14px] font-normal text-[#0A0A0A] leading-snug mb-4">
          {title}
        </p>
        <p className="text-[13px] text-[#2D2D2D] leading-relaxed mb-5 opacity-95">
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
