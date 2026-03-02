import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Pizza04Icon,
  CommandFreeIcons,
  GlobalSearchIcon,
} from "@hugeicons/core-free-icons";

const FEATURES: AppFeature[] = [
  {
    id: "signup",
    label: "Sign up",
    icon: Pizza04Icon,
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200",
    description:
      "Gen Z users download your app and sign up for the credit-building debit card in minutes.",
  },
  {
    id: "spend",
    label: "Spend Daily",
    icon: CommandFreeIcons,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200",
    description:
      "Members use their debit card for everyday purchases like coffee, groceries, and subscriptions.",
  },
  {
    id: "build",
    label: "Build Credit",
    icon: GlobalSearchIcon,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200",
    description:
      "We automatically report positive payment history to all major credit bureaus each month.",
  },
];

import { UserRoundPlus, HandCoins, ChartSpline } from "lucide-react";

import FeatureCarousel, { AppFeature } from "./feature-carousel";
import { cn } from "@/lib/utils";

export function BenefitsSection() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const benefitsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, {
    once: true,
    margin: "-100px",
  });
  const currentIndex =
    ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  return (
    <motion.section
      ref={benefitsRef}
      className="mb-16 min-h-screen flex flex-col justify-center"
    >
      <motion.div className="text-center mb-10">
        <motion.span className="inline-flex items-center gap-2 bg-[#F5F5F7] px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <span className="text-primary">✦</span> Features
        </motion.span>
        <motion.h2 className="text-4xl font-semibold tracking-tight">
          How it works
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] container min-h-[60vh] mx-auto gap-5">
        {/* ======================================
              BENEFIT MAIN - Comprehensive app experience
              ====================================== */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-muted rounded-[32px] p-12 min-h-[70vh] relative overflow-hidden flex flex-col justify-between"
        >
          <div>
            <motion.h3 className="text-3xl font-semibold mb-4 max-w-[70%] leading-tight">
              A simple 3-step process
            </motion.h3>
            <motion.p className="text-zinc-500 text-sm max-w-[60%]">
              that helps Gen Z build credit without debt risk.
            </motion.p>
          </div>
          <FeatureCarousel
            step={step}
            currentIndex={currentIndex}
            setStep={setStep}
            isPaused={isPaused}
            setIsPaused={setIsPaused}
            features={FEATURES}
          />
          {/* ======================================
                FLOATING ACTION BUTTONS - Interactive elements
                ====================================== */}
          <motion.div className="flex gap-3 mt-8 z-10">
            {[UserRoundPlus, HandCoins, ChartSpline].map((Icon, index) => (
              <motion.button
                key={`${index}-${Icon.name}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleChipClick(index)}
                // onMouseEnter={() => setIsPaused(true)}
                // onMouseLeave={() => setIsPaused(false)}
                className={cn(
                  "w-16 h-16 neo-card rounded-full bg-accent text-accent-foreground flex items-center justify-center",
                  currentIndex === index &&
                    "w-16 h-16 neo-card rounded-full bg-primary text-primary-foreground flex items-center justify-center",
                )}
              >
                <Icon size={20} />
              </motion.button>
            ))}
          </motion.div>
          {/* ======================================
                BACKGROUND PLACEHOLDER - Image placeholder
                ====================================== */}
          {/* <motion.div className="absolute bottom-0 right-0 w-1/2 h-3/4 bg-zinc-200 rounded-tl-[64px]"></motion.div> */}
        </motion.div>

        {/* ======================================
              BENEFIT TALL LIGHT - Personalized design card
              ====================================== */}
        <motion.div
          whileHover={{ y: -10 }}
          className="bg-muted rounded-[32px] p-6 flex flex-col"
        >
          <motion.div className="w-full flex-1 bg-gradient-to-br from-[#43e97b] to-[#38f9d7] rounded-[20px] mb-6"></motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            // style={{
            //   opacity: useTransform(scrollY, [480, 680], [0, 1]),
            //   y: useTransform(scrollY, [480, 680], [20, 0]),
            // }}
            className="text-center pb-4"
          >
            <span className="inline-block bg-white px-3 py-1 rounded-full text-xs font-semibold text-zinc-500 mb-2">
              20+ colors
            </span>
            <h4 className="text-xl font-semibold">Personalized design</h4>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
