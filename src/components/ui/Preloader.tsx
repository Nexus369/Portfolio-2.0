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
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-text-primary transition-colors duration-500"
    >
      <div className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 overflow-hidden">
         <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-bg-primary uppercase tracking-widest text-sm md:text-lg font-medium"
         >
           Portfolio ©2026
         </motion.div>
         <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="text-bg-primary/60 uppercase tracking-widest text-xs md:text-sm mt-2"
         >
           Loading Experience
         </motion.div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 flex items-end overflow-hidden">
        <motion.span 
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="font-black text-[clamp(4rem,10vw,8rem)] text-bg-primary leading-none tracking-tighter"
        >
          {progress}
        </motion.span>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-4xl text-bg-primary/50 font-light mb-2 sm:mb-4 ml-1 sm:ml-2"
        >
          %
        </motion.span>
      </div>
    </motion.div>
  );
}
