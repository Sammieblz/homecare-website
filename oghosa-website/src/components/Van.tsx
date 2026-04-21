import React, { useEffect } from 'react';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface VanProps {
  className?: string;
}

const Van: React.FC<VanProps> = ({ className }) => {
  const controls = useAnimation();
  const reduceMotion = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });

  useEffect(() => {
    if (reduceMotion) return;
    if (inView) {
      void controls.start('animate');
    }
  }, [controls, inView, reduceMotion]);

  const vanVariants = {
    initial: { x: -220, opacity: 0.9 },
    animate: {
      x: 720,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 42,
        damping: 14,
        mass: 0.85,
      },
    },
  };

  return (
    <div className={`van-container overflow-x-hidden ${className ?? ''}`}>
      <div className="w-full py-4 border-y border-blue-900/10 bg-white/60">
        <motion.div
          ref={ref}
          variants={vanVariants}
          initial="initial"
          animate={reduceMotion ? 'initial' : controls}
          className="flex justify-start"
        >
          <img src="/Images/van1.png" alt="Van" className="van-image" />
        </motion.div>
      </div>
    </div>
  );
};

export default Van;
