import { cn } from "../../lib/utils";
import { Magnet } from "./Magnet";

interface ContactButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function ContactButton({ 
  className, 
  href = "https://mail.google.com/mail/?view=cm&fs=1&to=opjasbir85@gmail.com", 
  target = "_blank",
  rel = "noopener noreferrer",
  ...props 
}: ContactButtonProps) {
  return (
    <Magnet padding={80} strength={0.4}>
      <a
        href={href}
        target={target}
        rel={rel}
        className={cn(
          "interactive rounded-full uppercase tracking-widest font-medium text-white inline-block text-center cursor-pointer",
          "px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4",
          "text-xs sm:text-sm md:text-base",
          "transition-transform hover:scale-105 active:scale-95",
          className
        )}
        style={{
          background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
          boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
          outline: "2px solid white",
          outlineOffset: "-3px"
        }}
        {...props}
      >
        Contact Me
      </a>
    </Magnet>
  );
}
