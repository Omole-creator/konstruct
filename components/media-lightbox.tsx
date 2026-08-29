"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

export interface LightboxMedia {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  title?: string;
  caption?: string;
}

interface LightboxContextValue {
  open: (media: LightboxMedia) => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function MediaLightboxProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<LightboxMedia | null>(null);

  const open = useCallback((media: LightboxMedia) => setActive(media), []);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <LightboxContext.Provider value={value}>
      {children}

      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy-deep/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="flex max-h-[90vh] w-full max-w-lg flex-col items-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            {active.type === "video" ? (
              <video
                src={active.src}
                poster={active.poster}
                controls
                autoPlay
                playsInline
                className="max-h-[75vh] w-auto max-w-full rounded-2xl bg-black"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[75vh] w-auto max-w-full rounded-2xl bg-black object-contain"
              />
            )}
            {(active.title || active.caption) && (
              <div className="text-center text-white">
                {active.title ? <p className="font-heading text-lg font-bold">{active.title}</p> : null}
                {active.caption ? <p className="text-sm text-white/70">{active.caption}</p> : null}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within a MediaLightboxProvider");
  }
  return context;
}
