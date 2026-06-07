import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";

export function ScrollTextReveal({ text, className }: { text: string; className?: string }) {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "center 0.5"]
  });

  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={container} className={cn("relative inline-block whitespace-nowrap", className)}>
      <span className="opacity-20 select-none whitespace-nowrap">{text}</span>
      <motion.span 
        className="absolute left-0 top-0 h-full overflow-hidden text-inherit select-none whitespace-nowrap"
        style={{ width }}
      >
        <span className="inline-block whitespace-nowrap">{text}</span>
      </motion.span>
    </div>
  );
}
