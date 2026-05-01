"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CursorHUD() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isSensing, setIsSensing] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("button, a, .menu-item"));
      setIsSensing(!!target.closest("section, .aspect-square"));

      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-spider-cyan rounded-full pointer-events-none z-[99999] mix-blend-screen -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      
      {/* Persistent HUD Coordinate */}
      <div className="fixed bottom-12 right-6 z-[5000] font-mono text-[9px] tracking-[0.3em] opacity-40 pointer-events-none hidden md:block vertical-text">
        {coords.x.toFixed(4)}° N // {Math.abs(coords.y).toFixed(4)}° W
      </div>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </>
  );
}
