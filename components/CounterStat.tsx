'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, motion, useReducedMotion } from 'framer-motion';

interface CounterStatProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function CounterStat({ target, suffix = '', duration = 1500 }: CounterStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) {
      if (prefersReducedMotion) {
        // If reduced motion is preferred, show final value immediately
        if (ref.current) {
          ref.current.textContent = target.toString() + suffix;
        }
      } else {
        // Animate the counter
        motionValue.set(target);
      }
    }
  }, [isInView, motionValue, target, prefersReducedMotion, suffix]);

  useEffect(() => {
    if (!prefersReducedMotion) {
      const unsubscribe = springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = Math.floor(latest).toString() + suffix;
        }
      });

      return () => unsubscribe();
    }
  }, [springValue, suffix, prefersReducedMotion]);

  return <motion.span ref={ref}>0{suffix}</motion.span>;
}
