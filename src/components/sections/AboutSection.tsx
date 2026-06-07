import { FadeIn } from "../ui/FadeIn";
import { ContactButton } from "../ui/ContactButton";
import { AnimatedText } from "../ui/AnimatedText";
import { ScrollTextReveal } from "../ui/ScrollTextReveal";

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      
      {/* Top Left: Moon */}
      <FadeIn 
        delay={0.1} 
        x={-80} 
        y={0} 
        duration={0.9} 
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon" className="w-full h-auto" />
      </FadeIn>

      {/* Top Right: Lego */}
      <FadeIn 
        delay={0.15} 
        x={80} 
        y={0} 
        duration={0.9} 
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego" className="w-full h-auto" />
      </FadeIn>

      {/* Bottom Left: 3D Object */}
      <FadeIn 
        delay={0.25} 
        x={-80} 
        y={0} 
        duration={0.9} 
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D Object" className="w-full h-auto" />
      </FadeIn>

      {/* Bottom Right: 3D Group */}
      <FadeIn 
        delay={0.3} 
        x={80} 
        y={0} 
        duration={0.9} 
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D Group" className="w-full h-auto" />
      </FadeIn>

      <div className="flex flex-col items-center justify-center z-10 w-full max-w-[800px]">
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="text-text-primary font-black uppercase leading-none tracking-tight text-[clamp(2rem,6vw,90px)]">
            <ScrollTextReveal text="THE MAD SCIENTIST" />
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center mt-10 sm:mt-14 md:mt-16 gap-16 sm:gap-20 md:gap-24">
          <AnimatedText 
            text="I talk to machines so they can talk to you. As an embedded systems engineer, I breathe C++ and sweat solder. From resurrecting bricked microcontrollers to building autonomous IoT beasts that live in the cloud, I bend hardware to my will and write code that makes electrons dance. If it has a chip, I can make it smart. If it doesn't, I'll put a chip in it. Let's build something insane together!"
            className="text-text-primary font-medium text-center leading-relaxed max-w-[600px] text-[clamp(1rem,2vw,1.35rem)]"
          />
          
          <FadeIn delay={0.2} y={30}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
