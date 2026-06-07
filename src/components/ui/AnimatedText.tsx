import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";

export function AnimatedText({ text, className }: { text: string; className?: string }) {
  const container = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.95", "start 0.2"]
  });

  const words = text.split(" ");

  return (
    <p ref={container} className={cn("flex flex-wrap justify-center", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return (
          <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />
        );
      })}
    </p>
  );
}

const Word = ({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) => {
  const characters = word.split("");
  const amount = range[1] - range[0];
  const step = amount / characters.length;

  return (
    <span className="relative inline-block mr-1.5 sm:mr-2 md:mr-2.5">
      {characters.map((char, i) => {
        const start = range[0] + (i * step);
        const end = range[0] + (step * (i + 1));
        
        return (
          <Character key={i} char={char} progress={progress} range={[start, end]} />
        );
      })}
    </span>
  );
};

const Character = ({ char, progress, range }: { char: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [12, 0]);
  const rotateX = useTransform(progress, range, [30, 0]);
  const filter = useTransform(progress, range, ["blur(4px)", "blur(0px)"]);
  
  return (
    <span className="relative inline-block" style={{ perspective: "1000px" }}>
      <span className="invisible">{char}</span>
      <motion.span 
        style={{ opacity, y, rotateX, filter, transformOrigin: "bottom" }} 
        className="absolute left-0 top-0 text-inherit"
      >
        {char}
      </motion.span>
    </span>
  );
};
