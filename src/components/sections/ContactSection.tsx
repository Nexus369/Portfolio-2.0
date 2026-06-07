import { FadeIn } from "../ui/FadeIn";
import { AnimatedText } from "../ui/AnimatedText";
import { ScrollTextReveal } from "../ui/ScrollTextReveal";
import HardwareConsole from "../ui/hardware-console";

export function ContactSection() {
  return (
    <section id="contact" className="bg-bg-primary relative z-20 px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40 flex flex-col items-center justify-center border-t border-border-subtle transition-colors duration-500">
      <FadeIn delay={0} y={30} className="w-full text-center mb-10 sm:mb-16">
        <h2 className="text-text-primary font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none">
          <ScrollTextReveal text="LET'S TALK" />
        </h2>
      </FadeIn>
      
      <div className="flex flex-col items-center w-full max-w-4xl text-center gap-12 sm:gap-16">
        <AnimatedText 
          text="Got a project in mind? I'm always open to discussing new opportunities, creative collaborations, or just chatting about embedded systems and IoT."
          className="text-text-primary font-light text-[clamp(1rem,2vw,1.5rem)] leading-relaxed transition-colors duration-500 max-w-2xl mx-auto"
        />
        
        <FadeIn delay={0.2} y={30} className="w-full">
          <HardwareConsole />
        </FadeIn>
      </div>

      <FadeIn delay={0.4} y={20} className="w-full mt-32 sm:mt-40 flex flex-col sm:flex-row justify-between items-center text-text-muted text-xs sm:text-sm uppercase tracking-widest gap-6 sm:gap-4 transition-colors duration-500">
        <span>© {new Date().getFullYear()} Jasbir. All rights reserved.</span>
        <div className="flex gap-6 sm:gap-10">
          <a href="https://www.instagram.com/elysiqn_xq_/?__pwa=1" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors duration-500">Instagram</a>
          <a href="https://www.linkedin.com/in/jasbir-singh-monga-240967306/" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors duration-500">LinkedIn</a>
        </div>
      </FadeIn>
    </section>
  );
}
