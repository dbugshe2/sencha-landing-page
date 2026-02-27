import { motion } from "motion/react";
import { useScroll } from "motion/react";

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-secondary z-[9999] rounded-r-full origin-left"
      // Scale based on scroll progress
      style={{ scaleX: scrollYProgress }}
    />
  );
}
