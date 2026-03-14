import { Zap, Globe, ArrowUpRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { ShiftCardDemo } from "./ShiftCard";
import { useRef } from "react";

export function SoltionsSection() {
  const { scrollY } = useScroll();
  const solutionsRef = useRef(null); // Currently unused but kept for future implementation

  const solutionsInView = useInView(solutionsRef, {
    once: true,
    margin: "-100px",
  });

  return (
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
            scale: useTransform(scrollY, [1150, 1350], [0.95, 1.02]),
          }}
          className="bg-[#F5F5F7] border-[12px] border-zinc-900 rounded-[48px] min-h-[450px] relative overflow-hidden flex flex-col items-center justify-center p-4"
        >
          <ShiftCardDemo />
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
  );
}
