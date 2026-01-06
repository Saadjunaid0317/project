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
        bg-[#E8F1F8]/80 backdrop-blur-lg
        border border-white/60
        rounded-3xl p-7
        flex flex-col justify-between
        h-full
        shadow-md
      "
    >
      <div>
        <p className="text-[14px] font-medium text-[#0A0A0A] leading-snug mb-4">
          {title}
        </p>
        <p className="text-[13px] text-[#1A1A1A] leading-relaxed mb-5">
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
