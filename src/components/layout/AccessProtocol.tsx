"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";

export default function AccessProtocol() {
  const [isOpen, setIsOpen] = useState(false);
  const maskRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mask = maskRef.current;
    const form = formRef.current;

    if (isOpen) {
      if (mask) {
        gsap.to(mask, {
          clipPath: "circle(150% at 85% 5%)",
          duration: 1.2,
          ease: "power4.inOut",
        });
      }
      
      if (form) {
        const elements = gsap.utils.toArray(form.querySelectorAll(".form-el"));
        if (elements.length > 0) {
          gsap.fromTo(
            elements,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.4 }
          );
        }
      }
    } else {
      if (mask) {
        gsap.to(mask, {
          clipPath: "circle(0% at 85% 5%)",
          duration: 1,
          ease: "power4.inOut",
        });
      }
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-3 right-32 z-[5001] font-mono text-[9px] tracking-widest uppercase border border-white/20 px-4 py-1 hover:bg-white hover:text-black transition-all"
      >
        Send Request
      </button>

      <div
        ref={maskRef}
        className="fixed inset-0 z-[10005] bg-background pointer-events-none flex items-center justify-center"
        style={{ clipPath: "circle(0% at 85% 5%)", pointerEvents: isOpen ? "all" : "none" }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
        >
          <X size={32} strokeWidth={1} />
        </button>

        <div ref={formRef} className="w-full max-w-xl px-12 space-y-12">
          <header className="form-el">
            <span className="font-mono text-[9px] text-spider-red tracking-[0.4em] uppercase mb-4 block">
              Admission // Protocol
            </span>
            <h2 className="font-mono text-5xl font-bold tracking-tight">Join the Network</h2>
          </header>

          <form className="space-y-8">
            <div className="form-el group">
              <label className="font-mono text-[9px] uppercase tracking-widest text-white/30 group-focus-within:text-spider-red transition-colors">
                Subject_Name // 
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-spider-red transition-colors font-mono text-xl tracking-tight"
                placeholder="PETER_PARKER_01"
              />
            </div>
            <div className="form-el group">
              <label className="font-mono text-[9px] uppercase tracking-widest text-white/30 group-focus-within:text-spider-red transition-colors">
                Comm_Node // Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-spider-red transition-colors font-mono text-xl tracking-tight"
                placeholder="P.PARKER@DAILYBUGLE.COM"
              />
            </div>
            <div className="form-el pt-8">
              <button className="w-full border border-white/10 py-6 font-mono text-[10px] uppercase tracking-[0.5em] hover:bg-spider-red hover:text-white hover:border-spider-red transition-all duration-500">
                Transmit_Protocol_Request
              </button>
            </div>
          </form>
          
          <footer className="form-el pt-12 border-t border-white/5">
            <p className="font-mono text-[8px] tracking-widest text-white/20 leading-relaxed uppercase">
              By transmitting, you agree to the spatial surveillance protocols and network security measures of the Spider-Man initiative.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
