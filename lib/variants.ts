import type { Variants } from "framer-motion";

export type FadeDirection = "up" | "down" | "left" | "right" | "none";

const QUANTUM_EASE: [number, number, number, number] = [0.25, 0.6, 0.3, 0.8];

export const fadeIn = (
  direction: FadeDirection = "up",
  delay: number = 0
): Variants => {
  const offsetX =
    direction === "left" ? 36 : direction === "right" ? -36 : 0;
  const offsetY =
    direction === "up" ? 36 : direction === "down" ? -36 : 0;

  return {
    hidden: {
      opacity: 0,
      x: offsetX,
      y: offsetY,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.65,
        delay,
        ease: QUANTUM_EASE,
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0.05
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const scaleIn = (delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.6,
      delay,
      ease: QUANTUM_EASE,
    },
  },
});

