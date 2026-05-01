"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WebStrands() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll("path");
    
    paths?.forEach((path) => {
      const length = path.getTotalLength();
      
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0.1,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        opacity: 0.3,
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      });
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[4500]"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      
      {/* Aggressive Web Network */}
      <g filter="url(#glow)">
        <path d="M0,200 C300,100 700,300 1000,150" stroke="url(#webGrad)" strokeWidth="0.8" fill="none" />
        <path d="M1000,800 C700,900 300,700 0,850" stroke="url(#webGrad)" strokeWidth="0.8" fill="none" />
        <path d="M200,0 C400,400 100,600 300,1000" stroke="url(#webGrad)" strokeWidth="0.5" fill="none" />
        <path d="M800,0 C600,400 900,600 700,1000" stroke="url(#webGrad)" strokeWidth="0.5" fill="none" />
        
        {/* Chaotic Strands */}
        <path d="M0,0 Q500,500 1000,1000" stroke="white" strokeWidth="0.2" fill="none" opacity="0.1" />
        <path d="M1000,0 Q500,500 0,1000" stroke="white" strokeWidth="0.2" fill="none" opacity="0.1" />
        <path d="M500,0 L500,1000" stroke="white" strokeWidth="0.1" fill="none" opacity="0.05" />
      </g>

      {/* Web Corners */}
      <path d="M0,0 L100,50 M0,0 L50,100 M0,0 L150,150" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M1000,1000 L900,950 M1000,1000 L950,900 M1000,1000 L850,850" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  );
}
