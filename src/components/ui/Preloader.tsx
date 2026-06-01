import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; 
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;
    
    // StrictMode safeguard
    let isMounted = true;

    const timer = setInterval(() => {
      if (!isMounted) return;
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      
      // Randomize slightly for realistic loading feel
      if (Math.random() > 0.2) {
        setProgress(nextProgress);
      }

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          if (isMounted) onComplete();
        }, 300);
      }
    }, interval);

    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      key="preloader"
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-bg-primary transition-colors duration-500"
    >
      <div className="relative flex flex-col items-center" style={{ perspective: "1000px" }}>
        {/* 3D Spinning Rings */}
        <motion.div
          animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 180] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full border-t-2 border-l-2 border-text-primary opacity-30 shadow-[0_0_30px_var(--border-subtle)] transition-colors duration-500"
          style={{ transformStyle: "preserve-3d" }}
        />
        <motion.div
          animate={{ rotateX: [360, 0], rotateY: [360, 0], rotateZ: [180, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 w-32 h-32 md:w-48 md:h-48 rounded-full border-b-2 border-r-2 border-[var(--hero-grad-start)] opacity-50 transition-colors duration-500"
          style={{ transformStyle: "preserve-3d" }}
        />
        
        {/* Progress Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-black text-[clamp(2rem,4vw,3.5rem)] text-transparent bg-clip-text bg-gradient-to-br from-text-primary to-text-muted tracking-tighter transition-colors duration-500">
            {progress}
            <span className="text-xl md:text-2xl font-light opacity-50 ml-1">%</span>
          </span>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-text-muted uppercase tracking-[0.3em] sm:tracking-[0.5em] text-xs sm:text-sm font-light animate-pulse transition-colors duration-500"
      >
        Initializing System...
      </motion.div>
    </motion.div>
  );
}
