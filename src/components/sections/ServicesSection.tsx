import { FadeIn } from "../ui/FadeIn";
import { ScrollTextReveal } from "../ui/ScrollTextReveal";

const services = [
  {
    num: "01",
    name: "Embedded Systems",
    desc: "Designing and programming efficient, low-latency microcontrollers and firmware for custom hardware applications."
  },
  {
    num: "02",
    name: "IoT Solutions",
    desc: "Connecting hardware to the cloud using Raspberry Pi, Arduino, and custom protocols for real-time monitoring and control."
  },
  {
    num: "03",
    name: "Electronics & PCB",
    desc: "End-to-end prototyping, from breadboarding circuits to designing custom Printed Circuit Boards (PCBs) for manufacturing."
  },
  {
    num: "04",
    name: "Machine Learning",
    desc: "Deploying lightweight ML models on edge devices for intelligent processing, automation, and predictive maintenance."
  },
  {
    num: "05",
    name: "Cloud Integration",
    desc: "Building robust web dashboards using Python and Vercel to visualize and interact with remote hardware fleets."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-text-primary rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 transition-colors duration-500">
      <div className="max-w-5xl mx-auto flex flex-col">
        <FadeIn delay={0} y={30} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2 className="text-bg-primary font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none transition-colors duration-500">
            <ScrollTextReveal text="Expertise" />
          </h2>
        </FadeIn>

        <div className="flex flex-col w-full">
          {services.map((svc, i) => (
            <FadeIn key={i} delay={i * 0.1} y={30}>
              <div className="flex flex-row items-start py-8 sm:py-10 md:py-12 border-t border-bg-primary/20 last:border-b transition-colors duration-500">
                <div className="w-[15%] sm:w-[20%] md:w-[25%] flex-shrink-0">
                  <span className="text-bg-primary font-black text-[clamp(3rem,10vw,140px)] leading-none transition-colors duration-500">
                    {svc.num}
                  </span>
                </div>
                <div className="flex flex-col flex-1 pl-4 sm:pl-8 md:pl-12 pt-2 sm:pt-4 md:pt-6">
                  <h3 className="text-bg-primary font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] mb-2 transition-colors duration-500">
                    {svc.name}
                  </h3>
                  <p className="text-bg-primary font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60 transition-colors duration-500">
                    {svc.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
