"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function SplitText({ text, className, delay = 0 }: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chars = containerRef.current?.querySelectorAll(".char");
    if (!chars) return;

    gsap.set(chars, { opacity: 0, y: 20, filter: "blur(0px)" });

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      stagger: 0.02,
      duration: 1.5,
      delay,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, [text, delay]);

  return (
    <div ref={containerRef} className={className}>
      {text.split("").map((char, i) => (
        <span key={i} className="char inline-block whitespace-pre">
          {char}
        </span>
      ))}
    </div>
  );
}
