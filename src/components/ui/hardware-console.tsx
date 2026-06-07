"use client";

import { useState } from "react";
import { cn } from "../../lib/utils";
import { Send, Terminal, ShieldAlert } from "lucide-react";

export default function HardwareConsole() {
  const [status, setStatus] = useState("IDLE");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("TRANSMITTING...");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Web3Forms Access Key from .env
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus("DELIVERED");
        setTimeout(() => {
          setStatus("IDLE");
          form.reset();
        }, 4000);
      } else {
        setStatus("FAILED");
        setTimeout(() => setStatus("IDLE"), 4000);
      }
    } catch (error) {
      setStatus("FAILED");
      setTimeout(() => setStatus("IDLE"), 4000);
    }
  };

  return (
    <div className="w-full max-w-3xl relative mx-auto">
      {/* Outer Casing */}
      <div className="relative rounded-sm border-[3px] border-border-subtle bg-[#0c0c0c] p-1 shadow-[0_0_40px_rgba(6,182,212,0.15)] overflow-hidden font-mono">
        
        {/* Top Status Bar */}
        <div className="flex items-center justify-between bg-[#1a1a1a] border-b-[3px] border-border-subtle px-4 py-3">
          <div className="flex items-center space-x-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></span>
            </div>
            <span className="text-cyan-500 text-xs font-bold tracking-widest uppercase">
              SYS_ONLINE // SECURE_COMMS
            </span>
          </div>
          <Terminal size={14} className="text-gray-500" />
        </div>

        {/* Main Panel */}
        <div className="bg-[#050505] p-6 sm:p-10 relative">
          {/* Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1))] bg-[length:100%_4px] opacity-20 z-10"></div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-8 relative z-20">
            
            {/* Name Field */}
            <div className="flex flex-col group">
              <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 flex items-center">
                <span className="mr-2 text-cyan-700">►</span> IDENTIFIER (NAME)
              </label>
              <input 
                type="text" 
                name="name"
                required
                className="bg-transparent border-b border-gray-800 focus:border-cyan-500 outline-none text-cyan-50 font-mono py-2 transition-colors duration-300 placeholder:text-gray-800"
                placeholder="GUEST_USER"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col group">
              <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 flex items-center">
                <span className="mr-2 text-cyan-700">►</span> RETURN_ADDRESS (EMAIL)
              </label>
              <input 
                type="email" 
                name="email"
                required
                className="bg-transparent border-b border-gray-800 focus:border-cyan-500 outline-none text-cyan-50 font-mono py-2 transition-colors duration-300 placeholder:text-gray-800"
                placeholder="user@network.com"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col group">
              <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 flex items-center">
                <span className="mr-2 text-cyan-700">►</span> PAYLOAD_DATA (MESSAGE)
              </label>
              <textarea 
                name="message"
                required
                rows={4}
                className="bg-[#111] border border-gray-800 focus:border-cyan-500 outline-none text-cyan-50 font-mono p-4 mt-1 resize-none transition-colors duration-300 placeholder:text-gray-800 focus:bg-[#151515]"
                placeholder="Enter transmission payload here..."
              />
            </div>

            {/* Execute Button */}
            <div className="pt-6 flex justify-end">
              <button 
                type="submit"
                disabled={status !== "IDLE"}
                className={cn(
                  "relative overflow-hidden group px-8 py-4 bg-cyan-500 text-black font-black uppercase tracking-widest text-sm transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] focus:outline-none flex items-center border border-cyan-400",
                  status !== "IDLE" ? "opacity-50 cursor-not-allowed bg-gray-600 border-gray-500 text-white" : "cursor-pointer"
                )}
              >
                {status === "IDLE" ? (
                  <>
                    <span className="relative z-10 mr-3">INITIATE TRANSMISSION</span>
                    <Send size={16} className="relative z-10" />
                  </>
                ) : status === "TRANSMITTING..." ? (
                  <>
                    <span className="relative z-10 animate-pulse text-white">{status}</span>
                  </>
                ) : status === "FAILED" ? (
                  <>
                    <span className="relative z-10 text-red-500">{status}</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10 text-white">{status}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Warning Bar */}
        <div className="bg-cyan-950/30 border-t-[3px] border-border-subtle px-4 py-2 flex items-center justify-center">
          <ShieldAlert size={12} className="text-cyan-700 mr-2" />
          <span className="text-[9px] text-cyan-700 font-bold uppercase tracking-[0.2em]">End-to-End Encryption Enabled • Awaiting Input</span>
        </div>
      </div>
    </div>
  );
}
