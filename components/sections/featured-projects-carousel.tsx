"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

import { featuredCarouselItems } from "@/content/projects";
import { useLightbox } from "@/components/media-lightbox";

const AUTO_ADVANCE_MS = 3800;

export function FeaturedProjectsCarousel() {
  const { open } = useLightbox();
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (pausedRef.current) return;
      setIndex((current) => (current + 1) % featuredCarouselItems.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const card = cardRefs.current[index];
    const track = trackRef.current;
    if (card && track) {
      track.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
    }
  }, [index]);

  const goTo = (nextIndex: number) => {
    const total = featuredCarouselItems.length;
    setIndex(((nextIndex % total) + total) % total);
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onTouchStart={() => (pausedRef.current = true)}
      onTouchEnd={() => (pausedRef.current = false)}
    >
      <button
        type="button"
        aria-label="Previous project"
        onClick={() => goTo(index - 1)}
        className="absolute left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-lg transition-transform hover:scale-105 sm:left-2 sm:h-11 sm:w-11"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next project"
        onClick={() => goTo(index + 1)}
        className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-lg transition-transform hover:scale-105 sm:right-2 sm:h-11 sm:w-11"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] sm:px-6 lg:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {featuredCarouselItems.map((item, itemIndex) => (
          <div
            key={item.id}
            ref={(el) => {
              cardRefs.current[itemIndex] = el;
            }}
            className="group relative aspect-[4/5] w-[220px] shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-card sm:w-[260px]"
            onClick={() =>
              open({
                type: item.type,
                src: item.src,
                poster: item.poster,
                alt: item.alt,
                title: item.projectName,
                caption: item.caption,
              })
            }
          >
            <Image
              src={item.type === "video" ? item.poster! : item.src}
              alt={item.alt}
              fill
              sizes="260px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {item.type === "video" ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-lg transition-transform group-hover:scale-110">
                  <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
                </span>
              </div>
            ) : null}

            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-heading text-sm font-bold leading-tight text-white sm:text-base">
                {item.projectName}
              </p>
              <p className="text-xs text-white/75">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {featuredCarouselItems.map((item, dotIndex) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Show ${item.projectName} - ${item.caption}`}
            onClick={() => goTo(dotIndex)}
            className={`h-1.5 rounded-full transition-all ${
              dotIndex === index ? "w-6 bg-brand-blue" : "w-1.5 bg-brand-navy/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
