import { FadeIn } from "../ui/FadeIn";
import { Magnet } from "../ui/Magnet";
import { Tilt3D } from "../ui/Tilt3D";
import { StaggeredText } from "../ui/StaggeredText";

export function HeroSection() {  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 text-text-primary font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
        <a href="#about" className="interactive block p-2"><StaggeredText text="About" /></a>
        <a href="#services" className="interactive block p-2"><StaggeredText text="Expertise" /></a>
        <a href="#projects" className="interactive block p-2"><StaggeredText text="Projects" /></a>
        <a href="#contact" className="interactive block p-2"><StaggeredText text="Contact" /></a>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-between pt-10">
        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[16vw] mt-6 sm:mt-4 md:-mt-5 text-center">
              HI, i&apos;M JASBIR
            </h1>
          </FadeIn>
        </div>

        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20">
          <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            <p className="text-text-primary font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)]">
              an embedded systems engineer driven by building intelligent electronics and iot solutions
            </p>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-[55%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:-bottom-16 md:-bottom-20 lg:-bottom-24 pointer-events-auto">
        <Magnet padding={150} strength={3}>
          <Tilt3D depth={25} className="w-full h-full">
            <img 
              src="/sikh_engineer_transparent.png" 
              alt="Jasbir Portrait" 
              className="w-full h-auto object-contain pointer-events-none drop-shadow-2xl"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 85%)',
                maskImage: 'linear-gradient(to bottom, black 65%, transparent 85%)'
              }}
            />
          </Tilt3D>
        </Magnet>
      </FadeIn>
    </section>
  );
}
