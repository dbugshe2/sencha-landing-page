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
import { BenefitsSection } from "@/components/BenefitsSection";

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
          <DistortedGlass className="w-full h-20 fixed top-0 left-0 right-0" />
          {/* hero section */}
          <HeroSection ref={heroRef} heroInView={heroInView} />

          {/* CARD ISSUERS SECTION */}
          <IntegrationsSection />

          {/* BENEFITS SECTION */}
          <BenefitsSection />

          {/* CTA (CALL TO ACTION) FOR REWARDS SECTION*/}
          <motion.section
            ref={ctaRef}
            className="bg-background container mx-auto rounded-[32px] py-8 text-center relative overflow-hidden mb-8 min-h-full flex flex-col items-center"
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
              dotSize={10}
              gap={26}
              // baseColor="#c9eab3"
              // activeColor="#56f586"
              baseColor="#999"
              activeColor="#fff"
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

          {/* ======================================
          SOLUTIONS SECTION
          ====================================== */}
          <motion.section
            ref={solutionsRef}
            // style={{ rotate: solutionsRotate }}
            className="min-h-screen flex flex-col justify-center"
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
                <span className="text-primary">✦</span> Benefits
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
                Modern credit building, 100% your brand
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-5 container mx-auto">
              {/* Phone Mockup Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={solutionsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  // y: useTransform(scrollY, [1150, 1350], [20, -40]),
                  scale: useTransform(scrollY, [1150, 1350], [0.95, 1.02]),
                }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#F5F5F7] border-[12px] border-zinc-900 rounded-[48px] min-h-[450px] relative overflow-hidden flex flex-col"
              >
                {/* ======================================
                FAKE APP HEADER - Mobile app UI mockup
                ====================================== */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{
                    y: useTransform(scrollY, [1200, 1400], [20, -10]),
                  }}
                  className="pt-8 px-6 pb-4"
                >
                  {/* <div className="w-32 h-6 bg-zinc-200 rounded-full mb-6"></div>
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
                  </motion.p> */}
                </motion.div>
                {/* ======================================
                FAKE APP CARDS - Credit card mockups
                ====================================== */}
                {/* <motion.div
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
                </motion.div> */}
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
                    title: "Zero Debt Risk",
                    description:
                      "Spend only what you have. No overdraft fees, no interest, no debt accumulation",
                  },
                  {
                    icon: Lock,
                    title: "Financial Insights",
                    description:
                      "AI-powered spending analysis and personalized financial recommendations.",
                  },
                  {
                    icon: Globe,
                    title: "Community Rewards",
                    description:
                      "Earn bonus rewards when friends join. Build credit together as a community.",
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
                    className="p-6 bg-muted rounded-3xl flex items-start gap-5"
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
                      className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0"
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
                        className="text-lg text-sidebar-foreground font-semibold mb-1"
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
                        className="text-sm text-muted-foreground leading-relaxed"
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
                className="bg-secondary text-secondary-foreground rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden min-h-[450px]"
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
                    className="text-xs font-medium text-secondary-foreground flex items-center gap-1 cursor-pointer hover:text-white transition-colors"
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
                  className="absolute bottom-0 left-0 right-0 h-64  mt-auto"
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
