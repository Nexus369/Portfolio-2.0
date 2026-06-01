import { cn } from "../../lib/utils";

interface LiveProjectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function LiveProjectButton({ className, ...props }: LiveProjectButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full border-2 border-text-primary text-text-primary",
        "uppercase tracking-widest font-medium bg-transparent",
        "px-8 py-3 sm:px-10 sm:py-3.5",
        "text-sm sm:text-base",
        "transition-colors duration-500 hover:bg-text-primary/10",
        className
      )}
      {...props}
    >
      Live Project
    </button>
  );
}
