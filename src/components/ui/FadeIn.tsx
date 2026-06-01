import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { type ElementType, type ReactNode } from "react";

interface FadeInProps extends HTMLMotionProps<any> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
}

export function FadeIn({ children, delay = 0, duration = 0.7, x = 0, y = 30, as = "div", ...props }: FadeInProps) {
  const MotionComponent = motion.create ? motion.create(as as any) : (motion as any)(as);
  
  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
