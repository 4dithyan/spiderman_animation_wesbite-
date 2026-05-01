"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalLines() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll("path");
    
    paths?.forEach((path) => {
      const length = path.getTotalLength();
      
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[4000] opacity-20"
      viewBox="0 0 100 1000"
      preserveAspectRatio="none"
    >
      <path d="M10 0 L10 1000" stroke="white" strokeWidth="0.1" fill="none" />
      <path d="M90 0 L90 1000" stroke="white" strokeWidth="0.1" fill="none" />
      <path d="M0 100 L100 120" stroke="white" strokeWidth="0.05" fill="none" />
      <path d="M100 300 L0 350" stroke="white" strokeWidth="0.05" fill="none" />
      <path d="M0 600 L100 650" stroke="white" strokeWidth="0.05" fill="none" />
      <path d="M100 850 L0 900" stroke="white" strokeWidth="0.05" fill="none" />
    </svg>
  );
}
