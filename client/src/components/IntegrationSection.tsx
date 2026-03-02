import { cn } from "@/lib/utils";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type LogoType = {
  src: string;
  alt: string;
  isInvertable?: boolean;
};

type TileData = {
  row: number;
  col: number;
  logo?: LogoType;
};

/* [
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
] 
*/
import { Marquee } from "@/components/animations/marquee";
import { BackgroundImageTexture } from "./ui/bg-image-texture";

type BrandList = {
  image: string;
  lightimg: string;
  name: string;
};

export function IntegrationsSection({
  title = "Accepts all major debit cards",
  description = "Sencha supports every major card issuer.",
  brandList = [
    {
      image: "/svgs/VISA.svg",
      lightimg: "/svgs/VISA.svg",
      name: "Visa",
    },
    {
      image: "/svgs/Mastercard.svg",
      lightimg: "/svgs/Mastercard.svg",
      name: "Mastercard",
    },
    {
      image: "/svgs/Discover.svg",
      lightimg: "/svgs/Discover.svg",
      name: "Discover",
    },
    {
      image: "/svgs/American Express.svg",
      lightimg: "/svgs/AmericanExpress.svg",
      name: "American Express",
    },
  ],
}: Readonly<{
  title?: string;
  description?: string;
  brandList?: BrandList[];
}>) {
  const { scrollY } = useScroll(); // Global scroll position and progress

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

  const cardsY = useTransform(scrollY, [600, 800], [30, -20]); // Parallax for card issuers section

  return (
    <BackgroundImageTexture variant="inflicted" opacity={0.3}>
      <motion.section
        ref={cardsRef}
        // style={{ y: cardsY }}
        className="relative flex flex-col w-full overflow-hidden py-12"
      >
        <motion.div className="text-center max-w-sm mx-auto lg:max-w-md xl:max-w-lg mb-4">
          <motion.h2 className="text-4xl font-semibold tracking-tight">
            {title}
          </motion.h2>
          <p className="text-lg text-center text-muted-foreground leading-8">
            {description}
          </p>
        </motion.div>
        <div className="lg:py-16 sm:py-12 py-8">
          <Marquee pauseOnHover className="[--duration:20s] p-0">
            {brandList.map((brand, index) => (
              <div key={index}>
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-36 h-20 mr-2 lg:mr-4 dark:hidden"
                />
                <img
                  src={brand.lightimg}
                  alt={brand.name}
                  className="hidden dark:block w-36 h-20 mr-2 lg:mr-8"
                />
              </div>
            ))}
          </Marquee>

          {/* Left blur */}
          <div className="pointer-events-none absolute inset-y-0 top-0 bottom-0 left-0 w-1/4 bg-gradient-to-r from-accent to-transparent" />

          {/* Right blur */}
          <div className="pointer-events-none absolute inset-y-0 top-0 bottom-0 right-0 w-1/4 bg-gradient-to-l from-accent to-transparent" />
        </div>
        <motion.div className="text-center absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-accent px-2 py-1 rounded-full text-xs font-semibold text-accent-foreground"
          >
            <span className="text-primary">✓</span>
            <span>And many more...</span>
          </motion.div>
        </motion.div>
      </motion.section>
    </BackgroundImageTexture>
  );
}
