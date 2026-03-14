import { cn, scrollToTop } from "@/lib/utils";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ExpandableScreenTrigger } from "./ui/expandable-screen";

export function NavBar() {
  return (
    <motion.div
      className={cn(
        "fixed z-50 h-20 flex flex-1 bg-background right-0 left-0 top-0 border-r-0 border-l-0 border-t-0 border-b-secondary border-b-0 rounded-none neo-card",
      )}
    >
      <div className="container mx-auto flex flex-1 shrink-0 justify-between items-center">
        <motion.a
          href="#0"
          onClick={scrollToTop}
          className="flex z-40 items-center gap-2 text-2xl font-bold "
        >
          <motion.img
            src={"/svgs/sencha-logo-black.svg"}
            className={cn("shrink-0 transition-all w-[85px] h-10")}
            alt="Sencha"
            whileHover={{ scale: 1.1 }}
          />
        </motion.a>
        <motion.div className="hidden z-50 md:flex items-center gap-8 text-bas lj                                                            font-medium text-zinc-500">
          {[
            { label: "How it Works", href: "#how-it-works" },
            { label: "Rewards", href: "#rewards" },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={cn(
                " font-bold transition-colors text-foreground/65 hover:text-foreground",
              )}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          className="z-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExpandableScreenTrigger>
            <Button
              variant="default"
              className="rounded-full px-6 bg-[#1C1D24] text-white hover:bg-zinc-800"
            >
              Get Demo
            </Button>
          </ExpandableScreenTrigger>
        </motion.div>
      </div>
    </motion.div>
  );
}
