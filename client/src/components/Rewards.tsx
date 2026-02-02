import React from "react";
import { motion } from "framer-motion";
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
      title: "Credit Score Builder",
      description:
        "Build your credit score with every purchase. Report to all 3 bureaus monthly.",
      variant: "solid",
      color: "#1E5110",
      accentColor: "#FFFFFF",
      tag: "Core Feature",
    },
    {
      id: "3",
      title: "Zero Debt Risk",
      description:
        "Spend only what you have. No overdraft fees, no interest, no debt accumulation.",
      variant: "solid",
      color: "#FFC566",
      accentColor: "#242424",
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
      accentColor: "#FFFFFF",
    },
    {
      id: "6",
      title: "Premium Perks",
      description:
        "Access exclusive deals, travel benefits, and financial wellness tools.",
      variant: "solid",
      color: "#DEF8EC",
      accentColor: "#1E5110",
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
      variant: "glass",
      accentColor: "#FFFFFF",
      tag: "Social",
    },
  ];

  return (
    <section className="py-24 bg-white">
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
          <div className="bg-accent rounded-2xl p-12 text-primary">
            <h3 className="text-3xl font-bold mb-4">
              Join 50,000+ Members Building Credit Smartly
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Start earning rewards from day one. No hidden fees, no credit
              check, just pure financial empowerment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$2.5M+</div>
                <div className="text-sm opacity-80">
                  Cashback Paid to Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">750+</div>
                <div className="text-sm opacity-80">
                  Credit Score Points Average Increase
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100K+</div>
                <div className="text-sm opacity-80">
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
