import TechTree, { type CategoryNode } from "../ui/tech-tree";
import { FadeIn } from "../ui/FadeIn";
import { ScrollTextReveal } from "../ui/ScrollTextReveal";
import { Cpu, Wifi, Code, Brain, Cloud } from "lucide-react";

const techTreeData: CategoryNode[] = [
  {
    id: "hardware",
    name: "Hardware",
    icon: Cpu,
    skills: [
      { id: "esp32", name: "ESP32", energy: 98 },
      { id: "nodemcu", name: "NodeMCU8266", energy: 95 },
      { id: "arduino", name: "Arduino Boards", energy: 90 },
      { id: "raspberry", name: "Raspberry Pi", energy: 85 },
    ]
  },
  {
    id: "protocols",
    name: "Protocols",
    icon: Wifi,
    skills: [
      { id: "wifi", name: "WiFi & BLE", energy: 95 },
      { id: "i2c", name: "I2C/SPI/UART", energy: 95 },
      { id: "espnow", name: "ESP-NOW", energy: 90 },
      { id: "lora", name: "CAN & LoRa", energy: 80 },
    ]
  },
  {
    id: "software",
    name: "Programming",
    icon: Code,
    skills: [
      { id: "cpp", name: "Embedded C++", energy: 95 },
      { id: "python", name: "Python", energy: 90 },
      { id: "c", name: "C", energy: 85 },
    ]
  },
  {
    id: "ai",
    name: "AI & Vision",
    icon: Brain,
    skills: [
      { id: "genai", name: "Generative AI", energy: 80 },
      { id: "llm", name: "LLM Models", energy: 75 },
      { id: "opencv", name: "OpenCV", energy: 70 },
      { id: "tensor", name: "TensorFlow", energy: 65 },
    ]
  },
  {
    id: "cloud",
    name: "IoT Cloud",
    icon: Cloud,
    skills: [
      { id: "arduino-cloud", name: "Arduino Cloud", energy: 90 },
      { id: "vercel", name: "Vercel / GitHub", energy: 85 },
      { id: "spiffs", name: "SPIFFS / NVS", energy: 85 },
      { id: "hf", name: "Hugging Face", energy: 75 },
    ]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-bg-primary relative z-10 transition-colors duration-500 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <FadeIn delay={0} y={30} className="w-full text-center mb-10 z-20 relative px-6">
          <h2 className="text-text-primary font-black uppercase leading-none tracking-tight text-[clamp(3rem,8vw,100px)] transition-colors duration-500">
            <ScrollTextReveal text="SKILLS" />
          </h2>
        </FadeIn>
      </div>
      <div className="w-full">
        <TechTree categories={techTreeData} rootName="Embedded Systems Engineer" />
      </div>
    </section>
  );
}
