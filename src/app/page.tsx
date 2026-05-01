"use client";

import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/layout/Preloader";
import StatusBars from "@/components/layout/StatusBars";
import Navigation from "@/components/layout/Navigation";
import AccessProtocol from "@/components/layout/AccessProtocol";
import CursorHUD from "@/components/layout/CursorHUD";
import WebStrands from "@/components/layout/WebStrands";
import StickyScene from "@/components/layout/StickyScene";
import SplitText from "@/components/layout/SplitText";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Atmosphere Shift
      gsap.to(mainRef.current, {
        backgroundColor: "#05051a", // Deep Midnight Blue
        scrollTrigger: {
          trigger: "#raimi",
          start: "top center",
          scrub: true,
        },
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <SmoothScroll>
      <main ref={mainRef} className="relative bg-background transition-colors duration-1000">
        <Preloader />
        <CursorHUD />
        <WebStrands />
        <Navigation />
        <AccessProtocol />
        <StatusBars />

        {/* Hero: The Vigilante (Autonomous Video) */}
        <StickyScene 
          id="hero" 
          videoUrl="/assets/videos/hero.mp4"
          scrubVideo={false}
        >
          <div className="text-center max-w-6xl">
            <span className="reveal-text font-mono text-[10px] lowercase tracking-[1.2em] text-spider-red mb-12 block">
              status // vigilant_active // node_001
            </span>
            <SplitText 
              text="THE SPIDER" 
              className="font-mono text-[clamp(3.5rem,10vw,15rem)] font-bold leading-[0.8] tracking-tighter uppercase whitespace-nowrap"
            />
            <div className="reveal-text flex flex-col items-center gap-8 mt-16">
              <div className="w-[1px] h-24 bg-white/20 animate-bounce" />
              <p className="font-mono text-[10px] max-w-md leading-relaxed uppercase tracking-[0.3em] opacity-40">
                manhattan surveillance node // operational // 2024_auth
              </p>
            </div>
          </div>
        </StickyScene>

        {/* Node Alpha: The Origin */}
        <StickyScene 
          id="raimi" 
          imageUrl="/assets/images/raimi.jpg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 w-full max-w-7xl px-20">
            <div className="reveal-text space-y-12">
              <div className="space-y-4">
                <span className="font-mono text-[10px] text-spider-red tracking-[0.5em]">01 // LEGACY</span>
                <SplitText text="RAIMI PROTOCOL" className="font-mono text-7xl font-bold tracking-tighter uppercase" />
              </div>
              <p className="font-mono text-[12px] leading-loose opacity-50 max-w-sm lowercase tracking-widest">
                the foundational architecture. a story of responsibility. 
                identifying the core nodes of the trilogy.
              </p>
            </div>
            <div className="reveal-text flex flex-col justify-end items-end space-y-16">
              <div className="border border-white/5 p-12 w-full backdrop-blur-xl bg-white/[0.01] border-l-spider-red border-l-2">
                <h4 className="font-mono text-[9px] uppercase tracking-[0.8em] text-spider-red mb-8">CORE_DATA</h4>
                <div className="space-y-6 font-mono text-[10px] opacity-40 uppercase tracking-widest">
                  <div className="flex justify-between"><span>Year</span><span>2002-2007</span></div>
                  <div className="flex justify-between"><span>Lead</span><span>Tobey_Maguire</span></div>
                  <div className="flex justify-between"><span>Status</span><span>Archived</span></div>
                </div>
              </div>
            </div>
          </div>
        </StickyScene>

        {/* Node Beta: Technical Shift */}
        <StickyScene 
          id="transit" 
          imageUrl="/assets/images/webb.jpg"
        >
          <div className="flex flex-col items-center text-center max-w-5xl">
            <span className="reveal-text font-mono text-[10px] text-spider-red tracking-[0.8em] mb-12">02 // EVOLUTION</span>
            <SplitText text="AMAZING NODES" className="font-mono text-8xl font-bold tracking-tighter uppercase mb-16" />
            <div className="reveal-text grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {[ "OSCORP_ACCESS", "GWEN_STACY_LOG", "WEB_SHOOTER_V2", "ANDREW_G_SYNC" ].map((stat, i) => (
                <div key={i} className="border border-white/10 py-8 px-4 font-mono text-[8px] tracking-widest opacity-30 hover:opacity-100 hover:border-spider-red transition-all cursor-crosshair">
                  {stat}
                </div>
              ))}
            </div>
          </div>
        </StickyScene>

        {/* Node Gamma: Unified Hub */}
        <StickyScene 
          id="mcu" 
          imageUrl="/assets/images/mcu.jpg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 w-full max-w-7xl px-20">
            <div className="reveal-text flex flex-col justify-center">
              <SplitText text="MCU INTEGRATION" className="font-mono text-8xl font-bold tracking-tighter uppercase leading-[0.8] mb-12" />
              <button className="w-fit border border-white/20 px-12 py-5 font-mono text-[10px] lowercase tracking-[0.5em] hover:bg-spider-red hover:border-spider-red transition-all">
                access_stark_tech
              </button>
            </div>
            <div className="reveal-text space-y-12">
              <div className="aspect-square w-full bg-white/5 border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000" 
                     style={{ backgroundImage: "url('/assets/images/verse.jpg')" }} />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[9px] tracking-[1em] uppercase">Verse_Sync</span>
                </div>
              </div>
            </div>
          </div>
        </StickyScene>

        {/* Final Scene */}
        <StickyScene 
          id="final" 
          imageUrl="/assets/images/final.jpg"
        >
          <div className="text-center">
            <SplitText text="SPIDER-VERSE" className="font-mono text-[clamp(4rem,15vw,20rem)] font-bold leading-none mb-16 tracking-tighter uppercase" />
            <div className="reveal-text flex flex-col items-center gap-12">
              <p className="font-mono text-[11px] lowercase tracking-[0.8em] opacity-40 max-w-xl mx-auto">
                anyone can wear the mask. join the society.
              </p>
              <button className="magnetic border-2 border-white/10 px-20 py-8 font-mono text-[12px] lowercase tracking-[1em] hover:border-spider-red hover:bg-spider-red hover:scale-105 transition-all duration-700">
                admission_portal
              </button>
            </div>
          </div>
        </StickyScene>

        <footer className="h-screen flex flex-col items-center justify-center bg-black border-t border-white/5 space-y-12">
          <div className="font-mono text-[10px] opacity-10 lowercase tracking-[2em]">
            system // spider_man // assembly // final
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-24">
            {["Peter_P_01", "Miles_M_02", "Gwen_S_03", "Miguel_O_04"].map((name) => (
              <span key={name} className="font-mono text-[10px] opacity-20 lowercase tracking-widest cursor-pointer hover:text-spider-red hover:opacity-100 transition-all">
                {name}
              </span>
            ))}
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
