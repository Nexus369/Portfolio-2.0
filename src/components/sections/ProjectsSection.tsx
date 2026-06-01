import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { FadeIn } from "../ui/FadeIn";
import { LiveProjectButton } from "../ui/LiveProjectButton";
import { Tilt3D } from "../ui/Tilt3D";

// ... (projects array)

const projects = [
  {
    num: "01",
    label: "Personal",
    title: "AI PPE Detection System",
    images: {
      col1top: "/ai_ppe_detection.png",
      col1bot: "/ai_ppe_detection.png",
      col2: "/ai_ppe_detection.png"
    }
  },
  {
    num: "02",
    label: "Hardware",
    title: "Humanoid Robotic Arm",
    images: {
      col1top: "/robotic_arm.png",
      col1bot: "/robotic_arm.png",
      col2: "/robotic_arm.png"
    }
  },
  {
    num: "03",
    label: "IoT Solution",
    title: "Smart GPS Tracking for Girls",
    images: {
      col1top: "/gps_tracking.png",
      col1bot: "/gps_tracking.png",
      col2: "/gps_tracking.png"
    }
  }
];

export function ProjectsSection() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" ref={container} className="bg-bg-primary rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40 transition-colors duration-500">
      <FadeIn delay={0} y={30} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
        <h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none">
          Project
        </h2>
      </FadeIn>

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10">
        {projects.map((proj, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          return (
            <Card key={i} proj={proj} i={i} progress={scrollYProgress} range={[i * 0.33, 1]} targetScale={targetScale} />
          );
        })}
      </div>
    </section>
  );
}

function Card({ proj, i, progress, range, targetScale }: { proj: any, i: number, progress: MotionValue<number>, range: [number, number], targetScale: number }) {
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32" style={{ top: `calc(6rem + ${i * 28}px)` }}>
      <motion.div 
        style={{ scale }}
        className="w-full h-full max-h-[85vh] bg-bg-primary rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-border-subtle p-4 sm:p-6 md:p-8 flex flex-col shadow-xl origin-top transition-colors duration-500"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 md:mb-10 w-full px-2 sm:px-4 gap-4 sm:gap-0">
           <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
             <span className="font-black text-text-primary text-[clamp(3rem,10vw,140px)] leading-none transition-colors duration-500">{proj.num}</span>
             <div className="flex flex-col">
               <span className="text-text-muted uppercase tracking-widest text-xs sm:text-sm transition-colors duration-500">{proj.label}</span>
               <h3 className="text-text-primary font-medium uppercase text-[clamp(1.2rem,3vw,3rem)] leading-tight transition-colors duration-500">{proj.title}</h3>
             </div>
           </div>
           <a href="https://www.linkedin.com/in/jasbir-singh-monga-240967306/details/projects/" target="_blank" rel="noopener noreferrer">
             <LiveProjectButton />
           </a>
        </div>

        <div className="flex gap-4 sm:gap-6 w-full flex-1 overflow-hidden">
          <Tilt3D depth={10} className="flex flex-col w-[40%] gap-4 sm:gap-6 h-full">
             <img src={proj.images.col1top} className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]" style={{ height: "clamp(130px, 16vw, 230px)" }} alt="Project image" />
             <img src={proj.images.col1bot} className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]" style={{ height: "clamp(160px, 22vw, 340px)", flex: 1 }} alt="Project image" />
          </Tilt3D>
          <Tilt3D depth={8} className="w-[60%] h-full">
             <img src={proj.images.col2} className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]" alt="Project image" />
          </Tilt3D>
        </div>
      </motion.div>
    </div>
  );
}
