"use client";

import { motion, type MotionProps } from "framer-motion";

export const FadeUp = motion.div;

export const fadeUpProps: MotionProps = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut" },
};
