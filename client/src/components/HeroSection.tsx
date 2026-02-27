import React from "react";
import { cn } from "@/lib/utils";
import {
  ForwardRefComponent,
  HTMLMotionProps,
  motion,
  useTransform,
} from "motion/react";
import AnimatedBadge from "./ui/animated-badge";
import { Button } from "./ui/button";
import { ExpandableScreenTrigger } from "./ui/expandable-screen";
// @ts-ignore
import Squares from "./vfx/Squares";
// @ts-ignore
import Waves from "./vfx/Waves";
import { useScroll } from "motion/react";

interface HeroProps extends HTMLMotionProps<"section"> {
  heroInView: boolean;
}

const HeroSection = React.forwardRef<HTMLElement, HeroProps>((props, ref) => {
  const { heroInView } = props;
  const { scrollY } = useScroll();
  return (
    <motion.section
      ref={ref}
      className="min-h-screen w-full max-w-screen p-4 md:p-8 relative flex justify-center items-center"
    >
      <Squares
        speed={0.25}
        squareSize={40}
        direction="diagonal"
        borderColor="#29ff69" // dark green borders
        hoverFillColor="#222" // Dark gray on hover
        className="opacity-25 -z-0"
      />
      <Waves
        lineColor="#157e3f"
        // background="radial-gradient(circle, rgba(225,225,225,0.7) 0%, transparent 70%)"
        background="radial-gradient(circle,`${#def8ec}` rgba(225,225,225,0.7) 0%, transparent 70%)"
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-4 md:grid-rows-1 max-h-[80vh]">
        <div className="bg-secondary flex-1 md:max-h-full h-full neo-card debug  text-white rounded-[32px] p-8 flex flex-col justify-center relative overflow-hidden">
          {/* <img src="/svgs/sencha-wave.svg)" alt="" className="absolute" /> */}
          <div className="relative z-20 flex flex-1 flex-col justify-center">
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <AnimatedBadge
                text="Book a Demo Today"
                color="#157e3f"
                href="#demo"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                y: useTransform(scrollY, [0, 200], [0, -20]),
                opacity: useTransform(scrollY, [0, 150], [1, 0.9]),
              }}
              className="text-5xl text-secondary-foreground font-light md:text-6xl leading-[1.1] mb-8 tracking-tight"
            >
              Risk Free
              <br />
              <span className="text-secondary-foreground font-semibold">
                Credit Building
              </span>
            </motion.h1>
            <motion.div>
              <p>Empower your members with credit-building debit cards.</p>
            </motion.div>
            <motion.div transition={{}} className="mt-4">
              <ExpandableScreenTrigger>
                <Button className="rounded-full bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-6 text-base">
                  Get a Demo
                </Button>
              </ExpandableScreenTrigger>
            </motion.div>
          </div>
          {/* Sencha Debit card left */}
          <motion.img
            src="/svgs/sencha-card.svg"
            // animate={heroInView ? { opacity: 0.8 } : {}}
            transition={{ duration: 0.3, delay: 0.3 }}
            style={{
              y: useTransform(scrollY, [0, 350], [55, 5]),
              scale: useTransform(scrollY, [0, 300], [1, 1.65]),
              rotate: useTransform(scrollY, [0, 300], [0, -25]),
            }}
            className="absolute border-3 h-36 bottom-0 hover:rotate-45 -right-20 z-10"
          />
        </div>
        <div className="flex flex-col h-[60vh] w-full flex-1">
          <div
            // whileHover={{ y: -5 }}
            className="flex flex-col flex-1 bg-accent neo-card group rounded-[32px] p-8 w-full relative overflow-hidden"
          >
            <h3 className="text-2xl font-semibold mb-2">
              Built for community banks and credit unions
            </h3>
            <p className="text-zinc-500 text-sm max-w-[80%]">
              Turn everyday transactions into credit building.
            </p>
            <motion.img
              src={"/svgs/card-stack.svg"}
              whileHover={{ y: -46 }}
              style={{
                y: useTransform(scrollY, [0, 200], [0, -46]),
              }}
              className="absolute h-[450px] -right-32 -bottom-[200px]"
            />
          </div>
          <div className="flex flex-col md:flex-row flex-1 gap-2 z-10">
            {[
              {
                idx: 1,
                figure: "1M",
                label: "clients",
                iconSrc: "/svgs/youngins-talkin.svg",
                badge: "Worldwide",
                bg: "bg-accent",
              },
              {
                idx: 2,
                figure: "45%",
                label: "less",
                iconSrc: "/svgs/young-people.svg",
                badge: "Cheaper",
                bg: "bg-secondary",
              },
            ].map((item) => (
              <motion.div
                key={item.idx}
                whileHover={{ scale: 1.05 }}
                className={cn(
                  "neo-card rounded-[32px] p-6 flex flex-1 w-full flex-col justify-between",
                  item.bg,
                )}
              >
                {/* <AnimatedBadge text={item.badge} /> */}
                <img src={item.iconSrc} alt="" className={cn("w-28 h-auto")} />
                <motion.div className="text-4xl font-bold">
                  {item.figure}
                  <span className="text-base font-normal text-zinc-500">
                    {item.label}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
});
HeroSection.displayName = "HeroSection";

export { HeroSection };
