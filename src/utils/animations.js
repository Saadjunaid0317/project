// Page Load Animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

// Hover Animations
export const cardHoverVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

// Button Animations
export const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 }
};

// Arrow Icon Animation
export const arrowVariants = {
  rest: { x: 0 },
  hover: {
    x: [0, 4, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Headline Reveal Animation
export const headlineVariants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// Glass Card Animation
export const glassCardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    backdropFilter: "blur(0px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    backdropFilter: "blur(10px)",
    transition: {
      duration: 0.6,
      delay: 0.4
    }
  }
};
