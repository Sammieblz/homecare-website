import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface VanProps {
  className?: string;
}

const Van: React.FC<VanProps> = ({ className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  if (inView) {
    controls.start('animate');
  }

  const vanVariants = {
    initial: { x: -300, opacity: 0.8 },
    animate: {
      x: [0, 100, 300, 500, 700], // Move across the screen in steps
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 10,
        delay: 0.3,
        duration: 4,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`van-container ${className}`}
      variants={vanVariants}
      initial="initial"
      animate={controls}
    >
      <img src="/Images/van1.png" alt="Van" className="van-image" />
    </motion.div>
  );
};

export default Van;
