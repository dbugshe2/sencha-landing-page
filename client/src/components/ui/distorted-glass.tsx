import { cn } from "@/lib/utils";
import "./distorted-glass.css";

export const DistortedGlass = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        // "relative hidden h-[50px] w-[360px] overflow-hidden rounded-b-2xl lg:w-[600px]  xl:block xl:w-full",
        className,
      )}
    >
      <div className="pointer-events-none absolute bottom-0  z-10 size-full overflow-hidden">
        <div className="glass-effect size-full"></div>
      </div>
      <svg>
        <title>Distorted Glass</title>
        <defs>
          <filter id="fractal-noise-glass">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.12 0.12"
              numOctaves="1"
              result="warp"
            ></feTurbulence>
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale="30"
              in="SourceGraphic"
              in2="warp"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
