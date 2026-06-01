import { useRef, useEffect } from "react";

const skills = [
  "Embedded Systems",
  "Arduino",
  "Vercel",
  "Python",
  "Machine Learning",
  "IoT Engineer",
  "Raspberry Pi",
  "Electronics",
  "C/C++",
  "Microcontrollers",
  "PCB Design"
];

const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

export function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !row1Ref.current || !row2Ref.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      
      // Calculate offset based on exact spec
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      
      row1Ref.current.style.transform = `translate3d(${offset - 800}px, 0, 0)`;
      row2Ref.current.style.transform = `translate3d(${-(offset - 200)}px, 0, 0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call to set position
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-6 sm:gap-10">
      <div 
        ref={row1Ref} 
        style={{ willChange: 'transform' }} 
        className="flex gap-8 sm:gap-12 md:gap-16 whitespace-nowrap min-w-max items-center"
      >
        {duplicatedSkills.map((skill, i) => (
          <div key={`row1-${i}`} className="flex items-center gap-8 sm:gap-12 md:gap-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--hero-grad-start)] to-[var(--hero-grad-end)] font-black uppercase tracking-widest text-[clamp(2rem,5vw,4.5rem)] leading-none">
              {skill}
            </span>
            <span className="text-text-primary text-[clamp(1.2rem,3vw,2.5rem)]">✦</span>
          </div>
        ))}
      </div>
      <div 
        ref={row2Ref} 
        style={{ willChange: 'transform' }} 
        className="flex gap-8 sm:gap-12 md:gap-16 whitespace-nowrap min-w-max items-center"
      >
        {duplicatedSkills.map((skill, i) => (
          <div key={`row2-${i}`} className="flex items-center gap-8 sm:gap-12 md:gap-16">
            <span className="text-text-primary font-black uppercase tracking-widest text-[clamp(2rem,5vw,4.5rem)] leading-none opacity-20 hover:opacity-100 transition-opacity duration-300 cursor-default">
              {skill}
            </span>
            <span className="text-text-primary text-[clamp(1.2rem,3vw,2.5rem)] opacity-20">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
