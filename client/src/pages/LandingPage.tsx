// Icon imports from Lucide React
import { ArrowUpRight, Zap, Lock, Globe, CheckCircle2 } from "lucide-react";

// React hooks
import { useEffect, useRef } from "react";

// Custom components
import { Footer } from "@/components/Footer";
// @ts-ignore // TODO: Add TypeScript types for Waves component
import DotGrid from "@/components/vfx/DotGrid";

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
import { IntegrationsSection } from "@/components/IntegrationSection";
import { NavBar } from "@/components/NavBar";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ShiftCardDemo } from "@/components/ShiftCard";
import { StripeBgGuides } from "@/components/vfx/StripeBgGuides";
import { cn } from "@/lib/utils";

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
  const heroNotOutOfView = useInView(heroRef, { once: false, margin: "100px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  const ctaInViewMotion = useMotionValue(ctaInView ? 1 : 0);

  // Update the motion value when ctaInView changes
  useEffect(() => {
    ctaInViewMotion.set(ctaInView ? 1 : 0);
  }, [ctaInView]);

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  // ======================================
  // SCROLL-BASED ANIMATIONS
  // ======================================

  // Navigation animations
  const navScale = useTransform(scrollY, [0, 100], [1, 0.95]); // Slightly shrink when scrolling
  const navBackground = useTransform(scrollY, [0, 50], [0, 1]); // Fade in background
  // const navY = useTransform(scrollY, [0, 100], [0, -10]); // Move up slightly when scrolling

  // ======================================
  // PARALLAX EFFECTS
  // ======================================
  // Section-specific parallax effects for depth and visual interest
  const benefitsY = useTransform(scrollY, [300, 600], [50, -50]); // Parallax movement for benefits section
  const ctaScale = useTransform(scrollYProgress, [0.4, 0.6], [0.9, 1.1]); // Scale CTA section based on scroll progress
  const solutionsRotate = useTransform(scrollY, [800, 1200], [0, 5]); // Rotate solutions section (currently unused)

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
        <div className="min-h-screen max-w-vw overflow-hidden font-sans pb-10">
          {/* navbar */}
          <NavBar />
          <DistortedGlass
            className={cn(
              heroNotOutOfView ? "opacity-0" : "opacity-100",
              "w-full h-14 fixed z-40 top-10 left-0 right-0",
            )}
          />
          {/* hero section */}
          <HeroSection ref={heroRef} heroInView={heroInView} />

          {/* CARD ISSUERS SECTION */}
          <IntegrationsSection />

          {/* BENEFITS SECTION */}
          <FeaturesSection />

          {/* CTA (CALL TO ACTION) FOR REWARDS SECTION*/}
          <div className="w-full h-full py-8 flex flex-1">
            <motion.section
              id="rewards"
              ref={ctaRef}
              className="bg-background container mx-auto rounded-[32px] py-16 text-center relative overflow-hidden mb-8 min-h-full flex flex-col items-center"
            >
              <div className="relative z-10 max-w-4xl glass px-4 rounded-3xl group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="px-4 py-6"
                >
                  <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                    Community Rewards
                    <br />
                    <span className="text-secondary italic">Program</span>
                  </h2>
                  <p className="text-md md:text-lg mb-12 max-w-sm lg:max-w-md mx-auto font-medium">
                    Enable your members earn bonus rewards when friends join.
                    Build credit together as a community.
                  </p>
                  <ExpandableScreenTrigger>
                    <motion.button
                      whileHover="hover"
                      initial="initial"
                      className="relative px-14 py-6 bg-primary text-primary-foreground font-black text-lg rounded-full overflow-hidden transition-colors duration-300"
                    >
                      <motion.div
                        variants={{
                          initial: { y: 0 },
                          hover: { y: -100 },
                        }}
                        className="relative z-10"
                      >
                        LAUNCH A CREDIT BUILDER
                      </motion.div>
                      <motion.div
                        variants={{
                          initial: { y: 100 },
                          hover: { y: 0 },
                        }}
                        className="absolute inset-0 flex items-center justify-center bg-secondary text-secondary-foreground z-10"
                      >
                        REQUEST A DEMO 🚀
                      </motion.div>
                      <motion.div
                        variants={{
                          hover: { scale: 1.5, rotate: 90 },
                        }}
                        className="absolute -right-4 -top-4 w-12 h-12 bg-black/10 rounded-full blur-xl"
                      />
                    </motion.button>
                  </ExpandableScreenTrigger>
                </motion.div>

                {/* Interactive Cursor Follower (Visual only, following section center/mouse interaction via group hover) */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#56f586]/10 rounded-full blur-[120px] pointer-events-none -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Animated dots background */}
              <DotGrid
                dotSize={6}
                gap={8}
                // baseColor="#c9eab3"
                // activeColor="#56f586"
                activeColor="#def7eb"
                // baseColor="#999"
                baseColor="#157e46"
                // activeColor="#fff"
                proximity={150}
                speedTrigger={100}
                shockRadius={250}
                shockStrength={5}
                maxSpeed={5000}
                resistance={750}
                returnDuration={1.5}
                className="absolute left-0 right-0 top-0 bottom-0 opacity-15 -z-0"
              />
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
            </motion.section>
          </div>

          {/* ======================================
          SOLUTIONS SECTION
          ====================================== */}
          {/* <SolutionsSection /> */}

          {/* End main content container */}
          {/* ======================================
        FOOTER COMPONENT
        ====================================== */}
          <Footer />
          <StripeBgGuides
            columnCount={6}
            animated={true}
            animationDuration={8}
            glowColor="hsl(var(--secondary))"
            randomize={true}
            randomInterval={3000}
            contained={false}
          />
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
