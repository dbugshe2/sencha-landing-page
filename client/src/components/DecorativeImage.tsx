import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CreditCard, Zap, ShieldCheck, Sparkles } from "lucide-react";

interface DecorativeImageProps {
  src: string;
  alt?: string;
  className?: string;
}

/**
 * Enhanced Decorative image component with creative floating shapes,
 * performant animations, and elegant cursor-following effects.
 */
export default function DecorativeImage({
  src,
  alt = "Decorative image",
  className = "",
}: DecorativeImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse move parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Transform mouse values to parallax shifts
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);
  const xTranslate = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]);
  const yTranslate = useTransform(mouseYSpring, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative perspective-1000 ${className}`}
      style={{ perspective: "1000px" }}
    >
      {/* Background Floating Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl z-0"
      />

      {/* Main Image Container with 3D Tilt */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10"
      >
        {/* Main image with rounded corners */}
        <motion.img
          src={src}
          alt={alt}
          className="relative z-10 w-full h-auto rounded-3xl object-cover shadow-2xl border border-white/10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Glassmorphism Badge */}
        <motion.div
          style={{ x: xTranslate, y: yTranslate, translateZ: 50 }}
          className="absolute -bottom-6 -right-6 md:-right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl z-30 flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
            <Sparkles className="text-secondary-foreground w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold text-foreground italic uppercase tracking-wider">
              Rewards
            </div>
            <div className="text-[10px] text-foreground/70">
              + many more
            </div>
          </div>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            x: useTransform(mouseXSpring, [-0.5, 0.5], [-30, 30]),
            translateZ: 100,
          }}
          className="absolute -top-8 left-10 p-3 bg-primary rounded-xl shadow-lg z-20"
        >
          <Zap className="text-white w-5 h-5" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            x: useTransform(mouseXSpring, [-0.5, 0.5], [-40, 40]),
            translateZ: 80,
          }}
          className="absolute top-1/2 -left-8 p-3 bg-secondary rounded-xl shadow-lg z-20"
        >
          <CreditCard className="text-secondary-foreground w-5 h-5" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          style={{
            x: useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]),
            translateZ: 120,
          }}
          className="absolute top-10 -right-6 p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full shadow-lg z-20"
        >
          <ShieldCheck className="text-white w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Original Decorative Accents (Animated) */}
      <motion.div
        animate={{ height: ["100%", "90%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-4 h-full bg-primary/20 rounded-tr-2xl rounded-br-2xl z-0"
      />
      <motion.div
        animate={{ width: ["100%", "95%", "100%"] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-0 left-0 right-4 h-4 bg-primary/20 rounded-bl-2xl rounded-br-2xl z-0"
      />
    </div>
  );
}
