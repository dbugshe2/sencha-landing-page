import { motion, useInView } from "motion/react";
import { useRef } from "react";

import {
  Plus,
  BarChart2,
  Briefcase,
  UserRoundPlus,
  HandCoins,
  ChartSpline,
} from "lucide-react";

export function BenefitsSection() {
  const benefitsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, {
    once: true,
    margin: "-100px",
  });
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

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.2fr_1.2fr] container min-h-[60vh] mx-auto gap-5">
        {/* ======================================
              BENEFIT MAIN - Comprehensive app experience
              ====================================== */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#F5F5F7] rounded-[32px] p-10 min-h-[400px] relative overflow-hidden flex flex-col justify-between"
        >
          <div>
            <motion.h3 className="text-3xl font-semibold mb-4 max-w-[70%] leading-tight">
              A simple 3-step process
            </motion.h3>
            <motion.p className="text-zinc-500 text-sm max-w-[60%]">
              that helps Gen Z build credit without debt risk.
            </motion.p>
          </div>
          {/* ======================================
                FLOATING ACTION BUTTONS - Interactive elements
                ====================================== */}
          <motion.div className="flex gap-3 mt-8">
            {[UserRoundPlus, HandCoins, ChartSpline].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={
                  index === 0
                    ? "w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
                    : "w-12 h-12 rounded-full bg-white text-secondary shadow-sm flex items-center justify-center"
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
              BENEFIT DARK - Easy banking card
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
                <div className={`w-3 h-3 rounded-full ${item.color}`}></div>{" "}
                {item.text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
