"use client";

import { useEffect, useState } from "react";

export default function StatusBars() {
  const [time, setTime] = useState("");
  const [coords, setCoords] = useState("40.7128° N, 74.0060° W");
  const [mhz, setMhz] = useState(942);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour12: false }));
      setMhz((prev) => prev + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 5));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full h-12 z-[5000] flex items-center justify-between px-6 pointer-events-none border-b border-white/5 bg-background/20 backdrop-blur-sm">
        <div className="flex items-center gap-12">
          <div className="font-mono text-[9px] tracking-[0.4em] lowercase pointer-events-auto cursor-crosshair flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-spider-red rounded-full animate-pulse" /> 
            protocol // spider-man
          </div>
          <div className="font-mono text-[8px] tracking-[0.3em] opacity-30 hidden lg:block lowercase">
            surveillance node: nyc_metro_01
          </div>
        </div>
        <div className="flex items-center gap-12 pointer-events-auto">
          {/* Handled by Navigation and AccessProtocol */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full h-12 z-[5000] flex items-center justify-between px-6 pointer-events-none border-t border-white/5 bg-background/20 backdrop-blur-sm">
        <div className="flex items-center gap-12">
          <div className="font-mono text-[8px] tracking-[0.4em] opacity-40 lowercase">
            status: synchronized
          </div>
          <div className="font-mono text-[8px] tracking-[0.4em] opacity-40 hidden md:block lowercase">
            frequency: {mounted ? `${mhz}.5` : "---.-"} mhz
          </div>
        </div>
        <div className="font-mono text-[9px] tracking-[0.5em] lowercase flex items-center gap-4">
          <span className="opacity-20">time //</span> {mounted ? time : "--:--:--"} <span className="opacity-20 italic">utc</span>
        </div>
      </div>

      {/* Frame Borders */}
      <div className="fixed top-12 bottom-12 left-0 w-[1px] bg-white/5 z-[5000]" />
      <div className="fixed top-12 bottom-12 right-0 w-[1px] bg-white/5 z-[5000]" />
    </>
  );
}
