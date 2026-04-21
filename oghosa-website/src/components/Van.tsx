import React, { useCallback, useEffect, useRef } from 'react';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export type VanAppearance = 'default' | 'onDark';

interface VanProps {
  className?: string;
  /** Kept for API compatibility; track is transparent so the van sits on the parent background */
  appearance?: VanAppearance;
}

/** No fill or border; van sits directly on the section background */
const trackClassName = 'w-full bg-transparent py-4';

export const Van: React.FC<VanProps> = ({ className }) => {
  const controls = useAnimation();
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const computeTravel = useCallback(() => {
    const el = trackRef.current;
    if (!el) return { start: -200, end: 900, duration: 2.8 };
    const w = el.clientWidth;
    const vanW =
      imgRef.current?.getBoundingClientRect().width ||
      Math.min(280, Math.max(160, Math.round(w * 0.42)));
    // Start mostly off the left; end fully past the right edge so the van disappears
    const start = Math.min(-100, -Math.round(vanW * 0.92));
    const end = w + vanW + 48;
    const distance = end - start;
    const duration = Math.min(4.2, Math.max(2.2, distance / 420));
    return { start, end, duration };
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      void controls.set({ x: 0, opacity: 1 });
      return;
    }
    if (!inView) return;

    const ease = [0.22, 0.61, 0.36, 1] as const;

    const run = () => {
      const { start, end, duration } = computeTravel();
      void controls.set({ x: start, opacity: 0.95 });
      void controls.start({
        x: end,
        opacity: 1,
        transition: {
          type: 'tween',
          duration,
          ease,
        },
      });
    };

    const img = imgRef.current;
    if (!img) return;

    if (img.complete && img.naturalWidth > 0) {
      let innerRaf = 0;
      const outerRaf = requestAnimationFrame(() => {
        innerRaf = requestAnimationFrame(run);
      });
      return () => {
        cancelAnimationFrame(outerRaf);
        cancelAnimationFrame(innerRaf);
      };
    }

    img.addEventListener('load', run, { once: true });
    return () => img.removeEventListener('load', run);
  }, [controls, inView, reduceMotion, computeTravel]);

  if (reduceMotion) {
    return (
      <div className={`van-container w-full overflow-x-hidden ${className ?? ''}`}>
        <div ref={trackRef} className={trackClassName}>
          <div className="flex justify-center">
            <img
              src="/Images/van1.png"
              alt="Oghosa transport van"
              className="h-auto max-h-48 w-auto max-w-[min(100%,280px)] object-contain"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`van-container w-full overflow-x-hidden ${className ?? ''}`}>
      <div ref={trackRef} className={trackClassName}>
        <motion.div ref={inViewRef} animate={controls} className="flex justify-start" initial={false}>
          <img
            ref={imgRef}
            src="/Images/van1.png"
            alt="Oghosa transport van"
            className="van-image h-auto w-auto max-w-[min(100%,280px)] shrink-0 object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Van;
