"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "@/components/data/content";

const HERO_VIDEOS = [
  {
    src: "/hero/279507_medium.mp4",
    title: "Desert Horizon",
  },
  {
    src: "/hero/0_Man_Desert_1280x720.mp4",
    title: "Emirates Experience",
  },
];

export function Hero() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleNextVideo = useCallback(() => {
    setActiveVideo((current) => (current + 1) % HERO_VIDEOS.length);
  }, []);

  // When active video changes, reset and play it
  useEffect(() => {
    const currentVideo = videoRefs.current[activeVideo];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, [activeVideo]);

  return (
    <section aria-label="Featured destinations" className="relative min-h-[690px] h-[88svh] max-h-[940px] bg-[#29231C] text-white overflow-hidden">
      {/* Background Video Slides - Play sequentially one after other */}
      {HERO_VIDEOS.map((video, index) => (
        <div
          key={video.src}
          aria-hidden={index !== activeVideo}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeVideo ? "opacity-100 z-0" : "pointer-events-none opacity-0 -z-10"
            }`}
        >
          <video
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={video.src}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleNextVideo}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Gradients & overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-[1]" />

      {/* Constant Hero Text */}
      <div className="relative z-[2] mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-24 pt-36 md:px-10 md:pb-28 lg:px-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h1 className="font-[family-name:var(--font-bebas)] max-w-4xl whitespace-pre-line text-6xl uppercase tracking-[0.03em] leading-[0.88] md:text-8xl lg:text-[112px]">
            Find your kind{"\n"}of extraordinary.
          </h1>
          <div className="flex flex-wrap items-center justify-end gap-4 md:pb-3">
            <a
              href="#experiences"
              className="group inline-flex items-center gap-4 rounded-sm bg-[#FDB414] px-6 py-4 text-sm font-bold !text-[#1E1508] shadow-lg transition-all duration-200 hover:gap-6 hover:bg-white"
            >
              Explore experiences <ArrowUpRight size={18} className="text-[#1E1508]" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-black/35 px-5 py-4 text-sm font-semibold !text-white backdrop-blur-md border border-white/20 shadow-lg transition-colors hover:bg-black/50 hover:border-white/40"
            >
              Talk to our team <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Video slide controls aligned to right edge */}
      {/* <div className="absolute bottom-6 right-5 z-[2] flex items-center justify-end md:bottom-8 md:right-10 lg:right-16">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous hero video"
            onClick={previousSlide}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/35 text-white transition-colors hover:border-[#FDB414] hover:bg-[#FDB414] hover:text-[#251A08]"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next hero video"
            onClick={nextSlide}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/35 text-white transition-colors hover:border-[#FDB414] hover:bg-[#FDB414] hover:text-[#251A08]"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div> */}
    </section>
  );
}
