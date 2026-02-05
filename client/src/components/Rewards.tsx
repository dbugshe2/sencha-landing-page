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
      title: "5% Cashback Everywhere",
      description:
        "Earn unlimited 5% cashback on all purchases - no categories, no caps, just pure rewards",
      size: "large",
      variant: "highlight",
      tag: "Popular",
      accentColor: "#FFFFFF",
    },
    {
      id: "2",
      title: "Credit Builder",
      description:
        "Build your credit score with every purchase. Report to all 3 bureaus monthly.",
      variant: "solid",
      color: "#157e3f",
      accentColor: "#FFFFFF",
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
      title: "Smart Savings Goals",
      description:
        "Set goals, track progress, and earn bonus rewards when you hit your targets.",
      size: "wide",
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
      variant: "solid",
      color: "#d47b0f",
      accentColor: "#FFFFFF",
      tag: "Social",
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
          <div className="section-dark rounded-2xl p-12 shadow-neo-lg border-2 border-foreground/5">
            <h3 className="text-3xl font-bold mb-4 text-primary">
              
            
Members get access to transaction history as well as real time insights into their credit history
            </h3>
            <p className="text-xl mb-8 text-white/80">
View your credit score and unlock access to new credit facilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center glass-subtle rounded-xl p-6">
                <div className="text-4xl font-bold mb-2 text-primary">
                  $2.5M+
                </div>
                <div className="text-sm text-white/70">
                  Cashback Paid to Members
                </div>
              </div>
              <div className="text-center glass-subtle rounded-xl p-6">
                <div className="text-4xl font-bold mb-2 text-secondary">
                  750+
                </div>
                <div className="text-sm text-white/70">
                  Credit Score Points Average Increase
                </div>
              </div>
              <div className="text-center glass-subtle rounded-xl p-6">
                <div className="text-4xl font-bold mb-2 text-tertiary">
                  100K+
                </div>
                <div className="text-sm text-white/70">
                  Financial Goals Achieved
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
