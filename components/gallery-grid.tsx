"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import { projects, type ProjectCategory } from "@/content/projects";
import { useLightbox } from "@/components/media-lightbox";

const categories: Array<ProjectCategory | "All"> = ["All", "Residential", "Commercial", "Industrial"];

export function GalleryGrid() {
  const { open } = useLightbox();
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const items = useMemo(() => {
    return projects
      .filter((project) => filter === "All" || project.category === filter)
      .flatMap((project) =>
        project.media.map((item) => ({
          ...item,
          projectName: project.name,
          category: project.category,
        })),
      );
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              filter === category
                ? "bg-brand-blue text-white"
                : "bg-brand-blue-tint text-brand-navy hover:bg-brand-blue/10"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <p className="mt-12 text-center text-sm text-brand-navy/60">
          No projects in this category yet. Check back soon, or request a quote for yours.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl shadow-card"
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
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
              {item.type === "video" ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-lg">
                    <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
                  </span>
                </div>
              ) : null}
              <div className="absolute inset-x-0 bottom-0 p-3">
                <p className="font-heading text-xs font-bold text-white sm:text-sm">{item.projectName}</p>
                <p className="text-[11px] text-white/75">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
