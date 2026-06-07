"use client";

import { useState } from "react";
import { cn } from "../../lib/utils";

export interface SkillNode {
  id: string;
  name: string;
  energy: number;
}

export interface CategoryNode {
  id: string;
  name: string;
  icon: any;
  skills: SkillNode[];
}

interface TechTreeProps {
  categories: CategoryNode[];
  rootName?: string;
  className?: string;
}

export default function TechTree({ categories, rootName = "Embedded Systems Core", className }: TechTreeProps) {
  const [activePath, setActivePath] = useState<string | null>(null);

  return (
    <div className={cn("relative w-full max-w-5xl mx-auto py-10 px-4 overflow-x-auto pb-32", className)}>
      <div className="min-w-[800px] flex flex-col items-center">
        
        {/* ROOT NODE */}
        <div 
          className={cn(
            "relative z-10 flex flex-col items-center justify-center px-10 py-5 rounded-xl border-2 bg-bg-primary shadow-xl transition-all duration-300 cursor-default",
            activePath ? "border-text-primary text-text-primary shadow-[0_0_20px_var(--text-primary)] shadow-text-primary/20" : "border-border-subtle text-text-primary"
          )}
          onMouseEnter={() => setActivePath('root')}
          onMouseLeave={() => setActivePath(null)}
        >
          <span className="font-black tracking-widest uppercase text-lg sm:text-xl">{rootName}</span>
        </div>

        {/* ROOT TO BRIDGE VERTICAL LINE */}
        <div className={cn("w-[2px] h-8 transition-colors duration-300", activePath ? "bg-text-primary" : "bg-border-subtle")}></div>

        {/* HORIZONTAL BRIDGE & CATEGORIES */}
        <div className="flex justify-center w-full relative">
          {categories.map((cat, i) => {
            const isCatActive = activePath === cat.id || activePath?.startsWith(`${cat.id}-`);
            
            return (
              <div key={cat.id} className="flex flex-col items-center relative flex-1">
                
                {/* HORIZONTAL BRIDGE SEGMENTS */}
                {i !== 0 && (
                  <div className={cn("absolute top-0 left-0 w-1/2 h-[2px] transition-colors duration-300", isCatActive || activePath ? "bg-border-subtle" : "bg-border-subtle")}></div>
                )}
                {i !== categories.length - 1 && (
                  <div className={cn("absolute top-0 right-0 w-1/2 h-[2px] transition-colors duration-300", isCatActive || activePath ? "bg-border-subtle" : "bg-border-subtle")}></div>
                )}
                
                {/* VERTICAL LINE DOWN TO CATEGORY */}
                <div className={cn("w-[2px] h-8 transition-all duration-300", isCatActive ? "bg-text-primary shadow-[0_0_8px_var(--text-primary)]" : "bg-border-subtle")}></div>

                {/* CATEGORY NODE */}
                <div 
                  className={cn(
                    "relative z-10 flex flex-col items-center justify-center w-36 h-24 rounded-xl border-2 bg-bg-primary transition-all duration-300 cursor-pointer hover:scale-105",
                    isCatActive ? "border-text-primary shadow-[0_0_15px_rgba(0,0,0,0.1)] shadow-text-primary/20 scale-105" : "border-border-subtle"
                  )}
                  onMouseEnter={() => setActivePath(cat.id)}
                  onMouseLeave={() => setActivePath(null)}
                >
                  <cat.icon size={28} className={cn("mb-2 transition-colors", isCatActive ? "text-text-primary" : "text-text-muted")} />
                  <span className={cn("text-sm font-bold text-center leading-tight transition-colors", isCatActive ? "text-text-primary" : "text-text-muted")}>{cat.name}</span>
                </div>

                {/* SKILLS */}
                <div className="flex flex-col items-center w-full mt-0">
                  {cat.skills.map((skill) => {
                    const isSkillActive = activePath === `${cat.id}-${skill.id}`;
                    const isBranchActive = isSkillActive || isCatActive;
                    
                    return (
                      <div key={skill.id} className="flex flex-col items-center w-full relative group">
                        {/* VERTICAL LINE DOWN TO SKILL */}
                        <div className={cn("w-[2px] h-6 transition-all duration-300", isBranchActive ? "bg-text-primary" : "bg-border-subtle")}></div>
                        
                        {/* SKILL NODE */}
                        <div 
                          className={cn(
                            "relative z-10 w-36 py-3 px-2 rounded-md border text-center transition-all duration-300 cursor-crosshair overflow-hidden",
                            isSkillActive 
                              ? "border-text-primary bg-text-primary text-bg-primary shadow-[0_0_10px_var(--text-primary)] scale-110" 
                              : isCatActive 
                                ? "border-text-primary/50 bg-bg-primary text-text-primary"
                                : "border-border-subtle bg-bg-primary text-text-muted opacity-60 group-hover:opacity-100"
                          )}
                          onMouseEnter={() => setActivePath(`${cat.id}-${skill.id}`)}
                          onMouseLeave={() => setActivePath(null)}
                        >
                          <span className="text-xs font-bold uppercase tracking-wider block truncate px-1">{skill.name}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
