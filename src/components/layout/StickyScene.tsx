"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StickySceneProps {
  children: React.ReactNode;
  imageUrl?: string;
  videoUrl?: string;
  id: string;
  scrubVideo?: boolean;
}

export default function StickyScene({ children, imageUrl, videoUrl, id, scrubVideo = true }: StickySceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    
    const initGSAP = () => {
      const ctx = gsap.context(() => {
        // Pinning the container
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        });

        // Video Scrubbing Logic
        if (videoUrl && video && scrubVideo) {
          video.pause();
          video.currentTime = 0;

          ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "+=200%",
            scrub: 1,
            onUpdate: (self) => {
              const duration = video.duration;
              if (duration && !isNaN(duration) && isFinite(duration)) {
                video.currentTime = self.progress * duration;
              }
            },
          });
        } else if (video && !scrubVideo) {
          video.play().catch(() => {
            // Handle autoplay block if necessary
          });
        }

        // Focus Engine / Media Scale (No Fade)
        gsap.fromTo(
          mediaRef.current,
          { scale: 1.3, filter: "brightness(1)" },
          {
            scale: 1,
            filter: "brightness(1)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "center top",
              scrub: 1,
            },
          }
        );
        
        // HUD / Technical Grid
        gsap.fromTo(
          hudRef.current,
          { y: "15%", scale: 1.1 },
          {
            y: "-15%",
            scale: 0.9,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=200%",
              scrub: 1,
            },
          }
        );

        // Transition: Web Mask Reveal
        gsap.fromTo(
          containerRef.current,
          { clipPath: "circle(0% at 50% 50%)" },
          {
            clipPath: "circle(100% at 50% 50%)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "top top",
              scrub: 1,
            },
          }
        );

        // Typography: Precision Focus Reveal (Handled by SplitText component)
      }, containerRef);

      return ctx;
    };

    let ctx: gsap.Context;

    if (videoUrl && video) {
      if (video.readyState >= 1) {
        ctx = initGSAP();
      } else {
        video.onloadedmetadata = () => {
          ctx = initGSAP();
        };
      }
    } else {
      ctx = initGSAP();
    }

    return () => {
      ctx?.revert();
      if (video) video.onloadedmetadata = null;
    };
  }, [videoUrl]);

  return (
    <section
      ref={containerRef}
      id={id}
      className="relative h-screen w-full overflow-hidden bg-black"
      style={{ clipPath: "circle(0% at 50% 50%)" }}
    >
      <div ref={mediaRef} className="absolute inset-0">
        {videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrl}
            muted
            playsInline
            autoPlay={!scrubVideo}
            loop={!scrubVideo}
            preload="auto"
            className="w-full h-full object-cover opacity-100"
          />
        ) : (
          <div
            className="w-full h-full bg-cover bg-center opacity-100"
            style={{ backgroundImage: `url('${imageUrl}')` }}
          />
        )}
      </div>
      
      {/* Layer 3: HUD / Web Mesh */}
      <div 
        ref={hudRef}
        className="absolute inset-0 z-10 pointer-events-none opacity-20"
        style={{ 
          backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(196, 30, 58, 0.2) 100%), repeating-linear-gradient(rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px)',
          backgroundSize: '100% 100%, 40px 40px'
        }}
      />

      {/* Layer 4: Atmosphere (Only for Images) */}
      {!videoUrl && (
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />
      )}
      
      {/* Layer 5: Content */}
      <div
        ref={contentRef}
        className="relative z-30 h-full w-full flex flex-col items-center justify-center px-12"
      >
        {children}
      </div>
    </section>
  );
}
