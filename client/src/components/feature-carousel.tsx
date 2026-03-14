"use client";

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

type IconSvgObject =
  | [
      string,
      {
        [key: string]: string | number;
      },
    ][]
  | readonly (readonly [
      string,
      {
        readonly [key: string]: string | number;
      },
    ])[];

export interface AppFeature {
  id: string;
  label: string;
  icon: IconSvgObject;
  image: string;
  description: string;
}

interface Props {
  step: number;
  setStep: (step: number | ((oldStep: number) => number)) => void;
  isPaused: boolean;
  setIsPaused: (isPaused: boolean) => void;
  onFeatureChange?: (featureIdx: number) => void;
  features?: AppFeature[];
  currentIndex: number;
}

const AUTO_PLAY_INTERVAL = 5000;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function FeatureCarousel({
  step,
  setStep,
  isPaused,
  onFeatureChange,
  features = [],
  currentIndex,
}: Readonly<Props>) {
  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
    onFeatureChange?.((step + 1) % features.length || 0);
  }, [step, features.length, onFeatureChange]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = features.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="absolute bottom-0 min-h-[500px] right-10">
      <div className="relative w-full h-[500px] max-w-[320px] aspect-[4/5] flex items-center justify-center">
        {features.map((feature, index) => {
          const status = getCardStatus(index);
          const isActive = status === "active";
          const isPrev = status === "prev";
          const isNext = status === "next";

          return (
            <motion.div
              key={feature.id}
              initial={false}
              animate={{
                x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                opacity: isActive ? 1 : isPrev || isNext ? 0 : 0,
                rotate: isPrev ? -3 : isNext ? 3 : 0,
                zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                pointerEvents: isActive ? "auto" : "none",
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
                mass: 0.8,
              }}
              className="absolute inset-0 rounded-[2rem] md:rounded-[2.8rem] overflow-hidden border-4 md:border-8 border-muted bg-muted origin-center"
            >
              <img
                src={feature.image}
                alt={feature.label}
                className={cn(
                  "w-full h-full object-cover transition-all duration-700",
                  isActive
                    ? "grayscale-0 blur-0"
                    : "grayscale blur-[2px] brightness-75",
                )}
              />

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pointer-events-none"
                  >
                    <div className="bg-background text-foreground px-4 py-1.5 rounded-full text-sm font-normal uppercase tracking-[0.2em] w-fit shadow-lg border border-border/50">
                      {index + 1}
                    </div>
                    <p className="text-white font-normal text-xl md:text-2xl leading-tight drop-shadow-md tracking-tight">
                      {/* {feature.description} */}
                      {feature.label}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* <div
                    className={cn(
                      "absolute top-8 left-8 flex items-center gap-3 transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  >
                    <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
                    <span className="text-white/80 text-[10px] font-normal uppercase tracking-[0.3em] font-mono">
                      Live Session
                    </span>
                  </div> */}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
