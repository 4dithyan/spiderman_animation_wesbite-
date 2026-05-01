"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(maskRef.current, {
        clipPath: "circle(150% at 95% 5%)",
        duration: 1.2,
        ease: "power4.inOut",
      });
      gsap.fromTo(
        ".menu-item",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.4 }
      );
    } else {
      gsap.to(maskRef.current, {
        clipPath: "circle(0% at 95% 5%)",
        duration: 1,
        ease: "power4.inOut",
      });
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-3 right-6 z-[10010] font-mono text-[9px] tracking-[0.3em] uppercase hover:text-spider-red transition-colors"
      >
        {isOpen ? "[ Close ]" : "[ Menu ]"}
      </button>

      <div
        ref={maskRef}
        className="fixed inset-0 z-[10009] bg-background flex items-center justify-center pointer-events-none"
        style={{ clipPath: "circle(0% at 95% 5%)", pointerEvents: isOpen ? "all" : "none" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full max-w-5xl px-12">
          <div className="flex flex-col gap-12">
            {[
              { label: "node // alpha", title: "RAIMI_TRILOGY" },
              { label: "node // beta", title: "WEBB_DUOLOGY" },
              { label: "node // gamma", title: "MCU_MULTIVERSE" },
              { label: "node // delta", title: "SPIDER_VERSE" },
            ].map((item, i) => (
              <div key={i} className="menu-item group cursor-pointer">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-spider-red mb-2 block opacity-40 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
                <h3 className="font-mono text-4xl md:text-6xl tracking-tighter group-hover:translate-x-6 transition-transform duration-500 group-hover:text-spider-red">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-end gap-16 border-l border-white/5 pl-24">
            <div className="menu-item">
              <h4 className="font-mono text-[9px] uppercase tracking-[0.4em] mb-6 opacity-20">
                Network Nodes
              </h4>
              <ul className="flex flex-col gap-4">
                {["OSCORP_MAIN_FRAME", "DAILY_BUGLE_ARCHIVE", "STARK_INDUSTRIES_V2"].map((node) => (
                  <li key={node} className="font-mono text-[10px] tracking-widest hover:text-spider-red cursor-pointer transition-colors opacity-60 hover:opacity-100">
                    {node}
                  </li>
                ))}
              </ul>
            </div>
            <div className="menu-item pt-12 border-t border-white/5">
              <h4 className="font-mono text-[9px] uppercase tracking-[0.4em] mb-4 opacity-20">
                System Status
              </h4>
              <p className="font-mono text-[9px] tracking-[0.3em] text-spider-red uppercase animate-pulse">
                Active Protocol: Obsidian // Spider-Man
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
