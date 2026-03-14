import { cn } from "@/lib/utils";
import { motion, MotionStyle } from "motion/react";

export function SectionWrapper({
  children,
  style,
  className,
}: {
  children: React.ReactNode;
  style?: MotionStyle;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(
        "flex container flex-1 mx-auto px-4 sm:px-6 lg:px-8",
        className,
      )}
      style={style}
    >
      {children}
    </motion.div>
  );
}
