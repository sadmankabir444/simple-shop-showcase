import { Variants, AnimationType } from 'framer-motion';

export const fadeIn = (direction = 'up', delay = 0): Variants => ({
  hidden: {
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      duration: 0.8,
      delay: delay,
    },
  },
});

export const staggerContainer = (staggerChildren = 0.2, delayChildren = 0.1): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerChildren,
      delayChildren: delayChildren,
    },
  },
});

export const slideIn = (direction = 'right', animType: 'tween' | 'spring' | 'inertia' | 'keyframes' = 'tween', delay = 0, duration = 0.5): Variants => ({
  hidden: {
    x: direction === 'right' ? 100 : direction === 'left' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type: animType,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const scaleIn = (scaleMax = 1.1, delay = 0, duration = 0.25): Variants => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: scaleMax,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const textVariant = (delay: number): Variants => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      duration: 1.25,
      delay: delay,
    },
  },
});

export const textContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const slideInAnimation: Variants = {
  hidden: { x: '-100%', opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

export const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};