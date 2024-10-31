import React from 'react';
import { motion } from 'framer-motion';

interface VanProps {
  className?: string;
}

const Van: React.FC<VanProps> = ({ className }) => {
  const vanVariants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={`relative ${className}`}
      variants={vanVariants}
      initial="initial"
      animate="animate"
    >
      
      <img src="src/assets/images/van1.png" alt="Van" className="absolute" />
    </motion.div>
  );
};

export default Van;