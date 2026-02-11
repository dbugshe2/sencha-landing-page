import React from "react";
import { motion } from "motion/react";
import {
  BentoGridTemplateTwo,
  BentoItem,
} from "../../../components/ui/bento-grid-template-two";

/**
 * Rewards section showcasing the benefits and incentives for users using bento grid layout.
 * @returns The Rewards section component.
 */
export default function Rewards() {
  const rewardsData: BentoItem[] = [
    {
      id: "1",
      title: "",
      description: "",
      size: "large",
      variant: "highlight",
      image: "/images/paying-with-sencha.jpg",
      tag: "",
      accentColor: "#FFFFFF",
    },
    {
      id: "2",
      title: "Credit Builder",
      description:
        "Build your credit score with every purchase. Report to all 3 bureaus monthly.",
      variant: "solid",
      color: "#def8ec",
      accentColor: "#157e3f",
      tag: "Core Feature",
    },
    {
      id: "3",
      title: "Zero Debt Risk",
      description:
        "Spend only what you have. No overdraft fees, no interest, no debt accumulation.",
      variant: "solid",
      color: "#ffc566",
      accentColor: "#253237",
    },
    {
      id: "4",
      title: "Instant Approval",
      description:
        "Get approved in minutes with no credit check. No minimum credit score required.",
      variant: "default",
      tag: "Fast",
    },
    {
      id: "5",
      title: "",
      description: "",
      size: "wide",
      image: "/images/easy-to-use.jpg",
      variant: "glass",
      accentColor: "#253237",
    },
    {
      id: "6",
      title: "Premium Perks",
      description:
        "Access exclusive deals, travel benefits, and financial wellness tools.",
      variant: "solid",
      color: "#def8ec",
      accentColor: "#157e3f",
      tag: "Premium",
    },
    {
      id: "7",
      title: "Financial Insights",
      description:
        "AI-powered spending analysis and personalized financial recommendations.",
      variant: "default",
    },
    {
      id: "8",
      title: "Community Rewards",
      description:
        "Earn bonus rewards when friends join. Build credit together as a community.",
      variant: "default",
      tag: "",
    },
  ];

  return (
    <section id="rewards" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get cash back at your favorite stores
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Smart credit-building meets real rewards. Earn cash back on daily
            essentials while building a rock-solid credit history.
          </p>
        </motion.div>

        <BentoGridTemplateTwo
          items={rewardsData}
          gap={6}
          animate={true}
          className="mb-16"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="section-accent rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4 text-secondary">
              View your credit score and unlock access to new credit facilities.
            </h3>
            <p className="text-xl mb-8 text-foreground/70">
              Members get access to transaction history as well as real time
              insights into their credit history
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center bg-background text-foreground shadow-neo rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">676</div>
                <div className="text-sm font-medium">
                  Average Gen Z Credit Score
                </div>
              </div>
              <div className="text-center bg-background text-foreground shadow-neo rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">80%</div>
                <div className="text-sm font-medium">
                  Gen Z Adults Have No Credit History
                </div>
              </div>
              <div className="text-center bg-background text-foreground shadow-neo rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">51%</div>
                <div className="text-sm font-medium">
                  GenZ Trust Fintech over traditional banks
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
