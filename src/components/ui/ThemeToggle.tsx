import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-10 z-[100]">
      <button
        onClick={toggleTheme}
        className="relative flex items-center justify-between w-20 h-10 p-1 rounded-full overflow-hidden bg-white/20 dark:bg-black/40 backdrop-blur-md border border-[rgba(12,12,12,0.1)] dark:border-[rgba(255,255,255,0.1)] shadow-lg transition-colors duration-500"
        aria-label="Toggle Theme"
      >
        <div className="relative z-10 flex items-center justify-center w-1/2 h-full">
          <Moon className={`w-4 h-4 transition-colors duration-500 ${theme === "dark" ? "text-white" : "text-black/50"}`} />
        </div>
        <div className="relative z-10 flex items-center justify-center w-1/2 h-full">
          <Sun className={`w-4 h-4 transition-colors duration-500 ${theme === "light" ? "text-black" : "text-white/50"}`} />
        </div>
        
        {/* Liquid Glass Bubble */}
        <motion.div
          layout
          initial={false}
          animate={{
            x: theme === "dark" ? 0 : 40,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          className="absolute left-1 w-[32px] h-[32px] rounded-full bg-white/80 dark:bg-black/60 shadow-[0_2px_10px_rgba(0,0,0,0.1)] backdrop-blur-sm z-0 border border-white/50 dark:border-white/10"
        />
      </button>
    </div>
  );
}
