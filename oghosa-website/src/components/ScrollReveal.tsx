import type { PropsWithChildren } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps extends PropsWithChildren {
  className?: string;
  /** Stagger child animations when wrapping multiple items */
  staggerChildren?: number;
}

export function ScrollReveal({ children, className, staggerChildren = 0.08 }: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: PropsWithChildren<{ className?: string }>) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
    >
      {children}
    </motion.div>
  );
}

