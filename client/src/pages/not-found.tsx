import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Link } from "wouter";
import { Home, AlertCircle, RefreshCcw, ShieldAlert, Zap } from "lucide-react";

/**
 * Modern, premium 404 Not Found page that follows the Sencha theme.
 * Specialized for high-performance fintech aesthetics.
 * @returns The 404 page component.
 */
export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-primary px-6">
      {/* Animated Background Elements (Matching Home Page) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-16 w-64 h-64 bg-tertiary/40 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-tertiary/25 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="glass-card rounded-[2.5rem] p-8 md:p-16 text-center border-2 border-white/50 bg-white/40 shadow-neo">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-secondary mb-12 shadow-neo-secondary border-2 border-white/20"
          >
            <ShieldAlert className="w-12 h-12 text-secondary-foreground" />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-8xl md:text-9xl font-black text-secondary mb-4 drop-shadow-sm">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Lost in the Digital Vault
            </h2>
            <p className="text-lg text-primary-foreground/80 font-medium mb-12 max-w-md mx-auto leading-relaxed">
              The page you're looking for seems to have been moved, deleted, or
              never existed in our secure ledger.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all border-2 border-secondary/30 w-full sm:w-auto"
            >
              <Link href="/">
                <Home className="mr-2 w-5 h-5" /> Back to Safety
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.reload()}
              className="border-2 border-foreground/10 bg-white/50 backdrop-blur-sm hover:bg-white/80 text-foreground px-8 py-6 text-lg shadow-neo-sm w-full sm:w-auto"
            >
              <RefreshCcw className="mr-2 w-5 h-5" /> Retry Sync
            </Button>
          </motion.div>
        </div>

        {/* Brand Accent Blobs */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-tertiary rounded-2xl rotate-12 -z-10 shadow-neo-sm animate-bounce animation-delay-2000"></div>
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-accent rounded-full -z-10 shadow-neo-sm flex items-center justify-center border-2 border-secondary/10">
          <Zap className="w-10 h-10 text-tertiary animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
}
