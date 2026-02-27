// Icon imports from Lucide React
import {
  ArrowUpRight,
  Zap,
  Lock,
  Globe,
  Plus,
  BarChart2,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

// Routing and navigation
import { Link } from "wouter";

// UI components
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// React hooks
import { useEffect, useState, useRef, useTransition } from "react";

// Custom components
import { Footer } from "@/components/Footer";
import AnimatedBadge from "@/components/ui/animated-badge";
// @ts-ignore // TODO: Add TypeScript types for Aurora component
import Aurora from "@/components/vfx/Aurora";
// @ts-ignore // TODO: Add TypeScript types for Squares component
import Squares from "@/components/vfx/Squares";
// @ts-ignore // TODO: Add TypeScript types for Waves component
import Waves from "@/components/vfx/Waves";

// Framer Motion imports for animations
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
  MotionValue,
  useMotionValue,
} from "motion/react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { DistortedGlass } from "@/components/ui/distorted-glass";
import { BackgroundImageTexture } from "@/components/ui/bg-image-texture";
import type { TextureVariant } from "@/components/ui/bg-image-texture";
import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from "@/components/ui/expandable-screen";
import { CreateLeadForm } from "@/components/CreateLeadForm";
import { HeroSection } from "@/components/HeroSection";
import { ScrollIndicator } from "@/components/ScrollIndicator";

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

// Fade in with upward motion animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Stagger container animation for child elements
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

// Floating animation for continuous up/down movement
const floatAnimation = {
  y: [0, -15, 0], // Move up 15px and back to original position
  transition: {
    duration: 4, // 4 seconds for complete animation cycle
    repeat: Infinity, // Loop forever
    ease: "easeInOut", // Smooth acceleration and deceleration
  },
};

/**
 * Types and interfaces
 */

const textureVariants: TextureVariant[] = [
  "fabric-of-squares",
  "grid-noise",
  "inflicted",
  "debut-light",
  "groovepaper",
  "none",
];

const textureMap: Record<Exclude<TextureVariant, "none">, string> = {
  "fabric-of-squares": "/textures/fabric-of-squares.png",
  "grid-noise": "/textures/grid-noise.png",
  inflicted: "/textures/inflicted.png",
  "debut-light": "/textures/debut-light.png",
  groovepaper: "/textures/groovepaper.png",
};

// ============================================================================
// MAIN LANDING PAGE COMPONENT
// ============================================================================

export default function LandingPage() {
  // SCROLL & VIEW HOOKS
  const { scrollY, scrollYProgress } = useScroll(); // Global scroll position and progress

  // Section refs for intersection observer (trigger animations when visible)
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" }); // Trigger 100px before element enters viewport

  const benefitsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, {
    once: true,
    margin: "-100px",
  });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  const ctaInViewMotion = useMotionValue(ctaInView ? 1 : 0);

  // Update the motion value when ctaInView changes
  useEffect(() => {
    ctaInViewMotion.set(ctaInView ? 1 : 0);
  }, [ctaInView]);

  const solutionsRef = useRef(null); // Currently unused but kept for future implementation
  const solutionsInView = useInView(solutionsRef, {
    once: true,
    margin: "-100px",
  });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  // ======================================
  // SCROLL-BASED ANIMATIONS
  // ======================================
  // Hero section animations
  const heroY = useTransform(scrollY, [0, 300], [0, -50]); // Move up as user scrolls down
  const heroOpacity = useTransform(scrollY, [0, 200], [1, 0]); // Fade out as user scrolls

  // Navigation animations
  const navScale = useTransform(scrollY, [0, 100], [1, 0.95]); // Slightly shrink when scrolling
  const navBackground = useTransform(scrollY, [0, 50], [0, 1]); // Fade in background
  // const navY = useTransform(scrollY, [0, 100], [0, -10]); // Move up slightly when scrolling

  // ======================================
  // HELPER FUNCTIONS
  // ======================================
  // Helper function for transforming MotionValue to CSS values
  // Used for dynamic styling based on scroll position
  const transformToCss = (
    value: MotionValue<number>,
    transformer: (v: number) => string,
  ) => {
    return useTransform(value, transformer);
  };

  // ======================================
  // PARALLAX EFFECTS
  // ======================================
  // Section-specific parallax effects for depth and visual interest
  const benefitsY = useTransform(scrollY, [300, 600], [50, -50]); // Parallax movement for benefits section
  const ctaScale = useTransform(scrollYProgress, [0.4, 0.6], [0.9, 1.1]); // Scale CTA section based on scroll progress
  const solutionsRotate = useTransform(scrollY, [800, 1200], [0, 5]); // Rotate solutions section (currently unused)
  const cardsY = useTransform(scrollY, [600, 800], [30, -30]); // Parallax for card issuers section

  // Smooth scroll to top function
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ======================================
  // RENDER
  // ======================================
  return (
    <>
      {/* scroll progress indicator */}
      <ScrollIndicator />
      <ExpandableScreen
        layoutId="cta-card"
        triggerRadius="100px"
        contentRadius="24px"
      >
        <div className="min-h-screen max-w-vw overflow-hidden bg-background dark:bg-muted font-sans pb-10">
          {/* navbar */}
          <BackgroundImageTexture
            variant={"grid-noise"}
            opacity={0.2}
            className={cn(
              "fixed z-50 h-20 rounded-none neo-card right-0 left-0 top-0",
            )}
          >
            <div className="relative">
              <DistortedGlass className="absolute top-0 left-0 w-full h-20 opacity-75" />
            </div>
            <div className="flex p-4 items-center rounded-none z-50 justify-between">
              <motion.a
                href="#0"
                onClick={scrollToTop}
                className="flex z-40 items-center gap-2 text-2xl font-bold"
              >
                <motion.img
                  src={"/svgs/sencha-logo-black.svg"}
                  className={cn("shrink-0 transition-all w-[85px] h-10")}
                  alt="Sencha"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.a>
              <motion.div className="hidden z-50 md:flex items-center gap-8 text-bas lj                                                            font-medium text-zinc-500">
                {["How it Works", "Rewards"].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className={cn(
                      " font-bold transition-colors text-foreground/65 hover:text-foreground",
                    )}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
              <motion.div
                className="z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="default"
                  className="rounded-full px-6 bg-[#1C1D24] text-white hover:bg-zinc-800"
                >
                  Get Demo
                </Button>
              </motion.div>
            </div>
          </BackgroundImageTexture>

          {/* hero section */}
          <HeroSection heroInView={heroInView} />

          {/* CARD ISSUERS SECTION */}
          <motion.section
            ref={cardsRef}
            style={{ y: cardsY }}
            className="mb-16 relative flex flex-col h-96 overflow-hidden justify-center"
          >
            {/* ======================================
            SQUARES BACKGROUND ANIMATION
            ====================================== */}
            {/* Animated squares background */}
            {/* <Squares
          speed={0.25} // Slow movement speed
          squareSize={40} // 40px squares
          direction="diagonal" // Diagonal movement pattern
          borderColor="#999" // Light gray borders
          hoverFillColor="#222" // Dark gray on hover
        /> */}
            <img
              src="/svgs/dude-carying-card.svg"
              alt=""
              className="absolute w-full"
            />
            <motion.div className="text-center mb-12">
              <motion.h2 className="text-3xl font-semibold tracking-tight mb-4">
                Accept all major debit cards
              </motion.h2>
              <motion.p className="text-zinc-500 text-lg max-w-2xl mx-auto">
                Sencha supports every major card issuer, making it easy for
                customers to pay with their preferred debit card
              </motion.p>
            </motion.div>

            <motion.div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* ======================================
                CARD LOGO DATA - Configure which cards to display
                ====================================== */}
              {[
                { name: "Visa", color: "text-[#1A1F71]" },
                { name: "Mastercard", color: "text-[#EB001B]" },
                { name: "American Express", color: "text-[#006FCF]" },
                { name: "Discover", color: "text-[#FF6000]" },
                { name: "Capital One", color: "text-[#004977]" },
                { name: "Chase", color: "text-[#0066CC]" },
                { name: "Bank of America", color: "text-[#012169]" },
                // Additional cards commented out for cleaner design
                // { name: "Wells Fargo", color: "text-[#FF0000]" },
                // { name: "Citibank", color: "text-[#003A6F]" },
                // { name: "US Bank", color: "text-[#002868]" },
                // { name: "PNC Bank", color: "text-[#0066B3]" },
                // { name: "TD Bank", color: "text-[#006633]" },
              ].map((card, index) => (
                <motion.div
                  key={card.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={cardsInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  // transition={{
                  //   duration: 0.6,
                  //   delay: 0.5 + index * 0.08,
                  //   type: "spring",
                  //   stiffness: 100,
                  // }}
                  // style={{
                  //   y: useTransform(
                  //     scrollY,
                  //     [700 + index * 10, 900 + index * 10],
                  //     [20, -10],
                  //   ),
                  //   scale: useTransform(
                  //     scrollY,
                  //     [700 + index * 10, 900 + index * 10],
                  //     [0.95, 1.05],
                  //   ),
                  // }}
                  whileHover={{
                    scale: 1.15,
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-2 cursor-pointer group"
                >
                  <motion.div
                    initial={{
                      rotate: 0,
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                    animate={{
                      rotate: [0, -2, 2, 0],
                      y: [0, -3, 0],
                      boxShadow: cardsInView
                        ? [
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                            "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          ]
                        : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                    transition={{
                      duration: 4 + index * 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      scale: 1.1,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-zinc-100 ${card.color} font-bold text-sm md:text-base`}
                  >
                    {card.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </motion.div>
                  <motion.span className="text-xs md:text-sm text-zinc-600 font-medium text-center max-w-[80px]">
                    {card.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="text-center mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-[#F5F5F7] px-6 py-3 rounded-full text-sm font-semibold text-zinc-700"
              >
                <span className="text-[#8C88FF]">✓</span>
                <span>And many more local and regional banks</span>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* BENEFITS SECTION */}
          <motion.section
            ref={benefitsRef}
            className="mb-16 min-h-screen flex flex-col justify-center"
          >
            <motion.div className="text-center mb-10">
              <motion.span className="inline-flex items-center gap-2 bg-[#F5F5F7] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span className="text-[#8C88FF]">✦</span> Benefits
              </motion.span>
              <motion.h2 className="text-4xl font-semibold tracking-tight">
                Where ambition meets trust
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.2fr_1.2fr] gap-5">
              {/* ======================================
              BENEFIT MAIN - Comprehensive app experience
              ====================================== */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#F5F5F7] rounded-[32px] p-10 min-h-[400px] relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <motion.h3 className="text-3xl font-semibold mb-4 max-w-[70%] leading-tight">
                    Comprehensive app experience
                  </motion.h3>
                  <motion.p className="text-zinc-500 text-sm max-w-[60%]">
                    Take full control of your finances with just a few taps.
                    From everyday spending to big goals.
                  </motion.p>
                </div>
                {/* ======================================
                FLOATING ACTION BUTTONS - Interactive elements
                ====================================== */}
                <motion.div className="flex gap-3 mt-8">
                  {[Plus, BarChart2, Briefcase].map((Icon, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={
                        index === 0
                          ? "w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center"
                          : "w-12 h-12 rounded-full bg-white text-[#8C88FF] shadow-sm flex items-center justify-center"
                      }
                    >
                      <Icon size={20} />
                    </motion.div>
                  ))}
                </motion.div>
                {/* ======================================
                BACKGROUND PLACEHOLDER - Image placeholder
                ====================================== */}
                <motion.div className="absolute bottom-0 right-0 w-1/2 h-3/4 bg-zinc-200 rounded-tl-[64px]"></motion.div>
              </motion.div>

              {/* ======================================
              BENEFIT TALL LIGHT - Personalized design card
              ====================================== */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-[#F5F5F7] rounded-[32px] p-6 flex flex-col"
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

              {/* ======================================
              BENEFIT TALL DARK - Easy banking card
              ====================================== */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#272932] text-white rounded-[32px] p-6 flex flex-col justify-between relative overflow-hidden"
              >
                <motion.h4 className="text-xl font-semibold text-center mt-2 z-10">
                  Easy Banking
                </motion.h4>

                {/* ======================================
                GLASS EFFECT - Decorative background element
                ====================================== */}
                <motion.div className="absolute top-16 right-0 left-0 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></motion.div>

                <motion.div className="bg-white text-zinc-900 p-5 rounded-[20px] mt-auto z-10 space-y-4">
                  {/* ======================================
                BANKING FEATURES - Feature list with icons
                ====================================== */}
                  {[
                    { color: "bg-blue-500", text: "Analysis and statistics" },
                    { color: "bg-blue-400", text: "Transfers" },
                    { color: "bg-blue-300", text: "Investing" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-sm font-medium"
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${item.color}`}
                      ></div>{" "}
                      {item.text}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* CTA (CALL TO ACTION) SECTION*/}
          <motion.section
            ref={ctaRef}
            className="bg-[#1C1D24] text-white rounded-[32px] py-24 px-6 text-center relative overflow-hidden mb-16 min-h-screen flex flex-col justify-center"
          >
            {/* DECORATIVE GRADIENTS - Background visual elements */}
            <motion.div className="absolute -top-10 right-[10%] w-64 h-32 bg-gradient-to-tr from-[#8C88FF] to-[#FF88C2] rounded-3xl rotate-12 opacity-80 blur-[2px]"></motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: -6 }}
              animate={ctaInView ? { opacity: 0.8, rotate: -6 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                rotate: useTransform(scrollY, [800, 1000], [-6, -8]),
                scale: useTransform(scrollY, [800, 1000], [1, 1.3]),
                x: useTransform(scrollY, [800, 1000], [0, -30]),
              }}
              className="absolute -bottom-16 left-[5%] w-72 h-40 bg-gradient-to-bl from-[#8C88FF] to-[#00C6FF] rounded-3xl -rotate-6 opacity-80 blur-[2px]"
            ></motion.div>

            {/* CTA CONTENT - Main message and button */}
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  y: useTransform(scrollY, [850, 1050], [30, -20]),
                  scale: useTransform(scrollY, [850, 1050], [1, 1.05]),
                }}
                className="text-4xl md:text-5xl font-semibold tracking-tight mb-8"
              >
                Join the world's
                <br />
                fastest-growing bank
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  scale: useTransform(scrollY, [900, 1100], [1, 1.1]),
                  y: useTransform(scrollY, [900, 1100], [0, -15]),
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/">
                  <Button className="rounded-full bg-[#8C88FF] hover:bg-[#7a76e6] text-white px-8 py-6 text-base">
                    Get started
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.section>

          {/* ======================================
          SOLUTIONS SECTION
          ====================================== */}
          <motion.section
            ref={solutionsRef}
            // style={{ rotate: solutionsRotate }}
            className="mb-16 min-h-screen flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              style={{
                opacity: useTransform(scrollY, [1000, 1200], [0, 1]),
                y: useTransform(scrollY, [1000, 1200], [30, 0]),
              }}
              className="text-center mb-10"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={solutionsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  scale: useTransform(scrollY, [1050, 1250], [0.8, 1]),
                  opacity: useTransform(scrollY, [1050, 1250], [0, 1]),
                }}
                className="inline-flex items-center gap-2 bg-[#F5F5F7] px-4 py-2 rounded-full text-sm font-semibold mb-4"
              >
                <span className="text-[#8C88FF]">✦</span> Solutions
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  opacity: useTransform(scrollY, [1100, 1300], [0, 1]),
                  y: useTransform(scrollY, [1100, 1300], [20, 0]),
                }}
                className="text-4xl font-semibold tracking-tight"
              >
                Bank less, live more
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-5">
              {/* Phone Mockup Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={solutionsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  y: useTransform(scrollY, [1150, 1350], [20, -40]),
                  scale: useTransform(scrollY, [1150, 1350], [0.95, 1.02]),
                }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#F5F5F7] border-[12px] border-zinc-900 rounded-[48px] min-h-[450px] relative overflow-hidden flex flex-col"
              >
                {/* ======================================
                FAKE APP HEADER - Mobile app UI mockup
                ====================================== */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{
                    y: useTransform(scrollY, [1200, 1400], [20, -10]),
                  }}
                  className="pt-8 px-6 pb-4"
                >
                  <div className="w-32 h-6 bg-zinc-200 rounded-full mb-6"></div>
                  <p className="text-xs text-zinc-500 mb-1">Total Balance</p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={solutionsInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    style={{
                      scale: useTransform(scrollY, [1250, 1450], [1, 1.1]),
                    }}
                    className="text-2xl font-bold"
                  >
                    $8 600
                  </motion.p>
                </motion.div>
                {/* ======================================
                FAKE APP CARDS - Credit card mockups
                ====================================== */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={solutionsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  style={{
                    x: useTransform(scrollY, [1200, 1400], [-20, 10]),
                  }}
                  className="flex gap-3 px-6 overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={solutionsInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    style={{
                      y: useTransform(scrollY, [1250, 1450], [0, -15]),
                      // rotate: useTransform(scrollY, [1250, 1450], [0, -5]),
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-32 bg-gradient-to-b from-blue-400 to-blue-600 rounded-xl flex-shrink-0"
                  ></motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={solutionsInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    style={{
                      y: useTransform(scrollY, [1250, 1450], [0, -20]),
                      // rotate: useTransform(scrollY, [1250, 1450], [0, 5]),
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-32 bg-gradient-to-b from-purple-400 to-purple-600 rounded-xl flex-shrink-0"
                  ></motion.div>
                </motion.div>
              </motion.div>

              {/* ======================================
              FEATURE LIST - Key features with icons
              ====================================== */}
              <div className="flex flex-col gap-4 justify-center">
                {/* ======================================
                FEATURE DATA - Configure feature items
                ====================================== */}
                {[
                  {
                    icon: Zap,
                    title: "Instant Access",
                    description:
                      "Open an account in minutes and start using your card right away.",
                  },
                  {
                    icon: Lock,
                    title: "Smart Security",
                    description:
                      "Your money is safe with multi-factor authentication.",
                  },
                  {
                    icon: Globe,
                    title: "Global Freedom",
                    description:
                      "Pay, travel, and withdraw money anywhere without hidden fees.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={solutionsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                    style={{
                      x: useTransform(
                        scrollY,
                        [1150 + index * 50, 1350 + index * 50],
                        [50, -10],
                      ),
                      opacity: useTransform(
                        scrollY,
                        [1150 + index * 50, 1350 + index * 50],
                        [0, 1],
                      ),
                    }}
                    whileHover={{ x: 10 }}
                    className="bg-[#F5F5F7] p-6 rounded-[24px] flex items-start gap-5"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={solutionsInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
                      style={{
                        scale: useTransform(
                          scrollY,
                          [1200 + index * 50, 1400 + index * 50],
                          [1, 1.1],
                        ),
                      }}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-[#E0E4FF] text-[#8C88FF] flex items-center justify-center flex-shrink-0"
                    >
                      <feature.icon size={24} className="fill-current" />
                    </motion.div>
                    <div>
                      <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.7 + index * 0.15,
                        }}
                        style={{
                          y: useTransform(
                            scrollY,
                            [1200 + index * 50, 1400 + index * 50],
                            [10, -5],
                          ),
                        }}
                        className="text-lg font-semibold mb-1"
                      >
                        {feature.title}
                      </motion.h4>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.8 + index * 0.15,
                        }}
                        style={{
                          y: useTransform(
                            scrollY,
                            [1250 + index * 50, 1450 + index * 50],
                            [10, -5],
                          ),
                        }}
                        className="text-sm text-zinc-500 leading-relaxed"
                      >
                        {feature.description}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* ======================================
              RIGHT DARK CARD - Visual accent element
              ====================================== */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={solutionsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                  x: useTransform(scrollY, [1150, 1350], [50, -20]),
                  scale: useTransform(scrollY, [1150, 1350], [0.95, 1.03]),
                }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#1C1D24] text-white rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden min-h-[450px]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  style={{
                    y: useTransform(scrollY, [1200, 1400], [20, -10]),
                  }}
                  className="flex justify-end relative z-10"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={solutionsInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    style={{
                      x: useTransform(scrollY, [1250, 1450], [0, 5]),
                    }}
                    whileHover={{ x: 5, color: "#fff" }}
                    className="text-xs font-medium text-zinc-400 flex items-center gap-1 cursor-pointer hover:text-white transition-colors"
                  >
                    Learn more <ArrowUpRight size={14} />
                  </motion.span>
                </motion.div>
                {/* ======================================
                ABSTRACT GLASS PLACEHOLDER - Decorative element
                ====================================== */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.7 }}
                  style={{
                    y: useTransform(scrollY, [1250, 1450], [50, -30]),
                    scale: useTransform(scrollY, [1250, 1450], [1, 1.3]),
                    opacity: useTransform(scrollY, [1250, 1450], [0.4, 0.8]),
                  }}
                  className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-600/40 via-purple-600/20 to-transparent border-t border-white/10 mt-auto"
                ></motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* End main content container */}
          {/* ======================================
        FOOTER COMPONENT
        ====================================== */}
          <Footer />
        </div>
        {/* lead form modal */}
        <ExpandableScreenContent className="bg-secondary">
          <div className="flex h-full items-center justify-center p-8">
            <section
              id="leads"
              className="py-24 bg-secondary overflow-hidden relative"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-8 leading-tight">
                      Ready to launch your <br />
                      <span className="text-primary">credit-building</span>{" "}
                      program?
                    </h2>
                    <p className="text-xl text-secondary-foreground mb-10 leading-relaxed max-w-lg">
                      Help your credit union/community bank spin up a credit
                      builder program in no time
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-neo-sm border-2 border-white/30">
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-secondary-foreground font-medium text-lg">
                          Relationship Deepening
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-neo-sm border-2 border-white/30">
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-secondary-foreground font-medium text-lg">
                          Member Retention
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-neo-sm border-2 border-white/30">
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-secondary-foreground font-medium text-lg">
                          Deposit Growth
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <CreateLeadForm />
                  </motion.div>
                </div>
              </div>
            </section>
          </div>
        </ExpandableScreenContent>
      </ExpandableScreen>
    </>
  );
}

// ============================================================================
// END OF LANDING PAGE COMPONENT
// ============================================================================
