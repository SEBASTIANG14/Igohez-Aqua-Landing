"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={false} whileInView={reduced ? {} : { y: [16, 0], opacity: [0.65, 1] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>;
}
