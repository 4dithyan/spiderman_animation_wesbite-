"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 2.5,
          ease: "expo.inOut",
          onComplete: () => {
            if (containerRef.current) containerRef.current.style.display = "none";
          },
        });
      },
    });

    // Sharp logo reveal (No Blur)
    tl.fromTo(
      logoRef.current,
      { filter: "blur(0px)", opacity: 0, scale: 0.9 },
      { filter: "blur(0px)", opacity: 1, scale: 1, duration: 4, ease: "power2.out" }
    );

    // Char-by-char text reveal
    const text = textRef.current?.innerText || "";
    if (textRef.current) {
      textRef.current.innerHTML = text
        .split("")
        .map((char) => `<span class="char opacity-0 inline-block">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");

      tl.to(
        ".char",
        {
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "power1.out",
        },
        "-=2"
      );
    }

    // Final fade out of elements before container
    tl.to([logoRef.current, textRef.current], {
      opacity: 0,
      filter: "blur(20px)",
      duration: 1.5,
      delay: 1,
      ease: "power2.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
    >
      <div ref={logoRef} className="relative w-40 h-40 mb-12">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-spider-red fill-none stroke-current stroke-[0.3]"
        >
          <path d="M50 5 L50 95 M5 50 L95 50 M15 15 L85 85 M85 15 L15 85" className="opacity-20" />
          <path d="M50 15 L65 35 L50 55 L35 35 Z" className="stroke-2" />
          <path d="M50 55 L70 85 L50 95 L30 85 Z" />
          <path d="M65 35 L90 20 M35 35 L10 20" />
          <path d="M70 85 L95 70 M30 85 L5 70" />
        </svg>
      </div>
      <div
        ref={textRef}
        className="font-mono text-[9px] tracking-[0.5em] lowercase flex flex-col items-center gap-4"
      >
        <span>network nodes // initializing access protocol</span>
        <div className="flex gap-2 opacity-30 animate-pulse">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-1 h-1 bg-spider-red rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
