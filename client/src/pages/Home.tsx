import { Link } from "wouter";
import { CreateLeadForm } from "@/components/CreateLeadForm";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  CreditCard,
  TrendingUp,
  Building2,
  LineChart,
  Smartphone,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/**
 * Navigation bar component with desktop and mobile layouts.
 * Includes smooth scroll links and a mobile menu toggle.
 * @returns The Navbar component.
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={"/svgs/sencha-logo.svg"}
            alt="Sencha Credit Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-display font-bold text-primary tracking-tight">
            Sencha Credit
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#solutions"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Solutions
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            How It Works
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
          <Button
            variant="default"
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white rounded-lg shadow-md shadow-primary/20"
          >
            Client Login
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-b border-border bg-white overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              <a
                href="#solutions"
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#contact"
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <Button className="w-full bg-primary text-white">
                Client Login
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/**
 * Hero section component featuring the main value proposition and a call-to-action link.
 * @returns The Hero section component.
 */
function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden mesh-gradient">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Now available for Credit Unions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-[1.1] mb-6">
              Empower Your Members with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                Credit-Building
              </span>{" "}
              Debit Cards
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Turn everyday transactions into credit-building opportunities. A
              white-label solution designed specifically for forward-thinking
              Banks and Credit Unions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="h-14 px-8 text-base rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
              >
                Request a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base rounded-xl border-primary/20 text-primary hover:bg-secondary/30"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
            // style={{
            //   backgroundImage: "url('images/sencha-cards.png')",
            //   backgroundSize: "contain",
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            // }}
            >
              <div
                style={{
                  backgroundImage: "url('/svgs/sencha-cards.svg')",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="relative z-10 bg-gradient-to-br from-primary to-[#0f2e1b] bg-primary rounded-3xl p-8 shadow-2xl border border-white/10 aspect-[4/3] flex flex-col justify-between overflow-hidden group"
              >
                {/* Abstract Card Visual */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="flex justify-between items-start">
                  <div className="text-white/80 font-mono text-sm tracking-widest">
                    DEBIT
                  </div>
                  <CreditCard className="text-secondary w-8 h-8" />
                </div>

                <div className="space-y-6 relative">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/5 transform transition-transform group-hover:translate-x-2 duration-500">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <TrendingUp className="text-green-400 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-white/60">
                        Credit Score Impact
                      </div>
                      <div className="text-lg font-bold text-white">
                        +45 pts{" "}
                        <span className="text-xs font-normal text-white/60">
                          / 6 mo
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/5 transform transition-transform group-hover:translate-x-2 duration-500 delay-75">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <ShieldCheck className="text-blue-400 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-white/60">Risk Exposure</div>
                      <div className="text-lg font-bold text-white">
                        0%{" "}
                        <span className="text-xs font-normal text-white/60">
                          Secured
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-secondary/30 rounded-[2.5rem] -z-10 blur-xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Section highlighting the key value propositions/features of the platform.
 * @returns The ValueProps section component.
 */
function ValueProps() {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: "Seamless Integration",
      description:
        "Our API-first platform integrates directly with your existing core banking system without disruption.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Compliance Ready",
      description:
        "Fully regulated infrastructure that handles all KYC, AML, and credit reporting requirements automatically.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Member Wellness",
      description:
        "Help your members build their credit score safely with zero debt risk, fostering long-term loyalty.",
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Why Leading Institutions Choose Us
          </h2>
          <p className="text-lg text-muted-foreground">
            We handle the complexity of credit reporting so you can focus on
            your members.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-muted/30 border border-border/50 hover:bg-secondary/20 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Section explaining the step-by-step process of how the platform works.
 * @returns The HowItWorks section component.
 */
function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-primary text-white overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            How It Works
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            A simple process that delivers powerful results for your members.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10" />

          {[
            {
              step: "01",
              title: "Spend",
              desc: "Members use their debit card for everyday purchases just like normal.",
            },
            {
              step: "02",
              title: "Report",
              desc: "We automatically report these payments to major credit bureaus.",
            },
            {
              step: "03",
              title: "Build",
              desc: "Members see their credit score improve over time, building financial health.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="w-24 h-24 rounded-full bg-primary border-4 border-secondary/20 flex items-center justify-center mx-auto mb-8 relative z-10 shadow-xl">
                <span className="text-3xl font-display font-bold text-secondary">
                  {item.step}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/70 leading-relaxed px-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Section highlighting specific features with visual representations.
 * @returns The FeatureHighlight section component.
 */
function FeatureHighlight() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-muted">
              {/* Mockup UI */}
              <div className="bg-white p-6 border-b border-border flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="h-2 w-32 bg-muted rounded-full" />
              </div>
              <div className="p-8 bg-muted/10">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                    <div className="text-sm text-muted-foreground mb-2">
                      Credit Score
                    </div>
                    <div className="text-4xl font-bold text-primary">720</div>
                    <div className="text-xs text-green-600 font-medium mt-2 flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" /> +12 pts this month
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-border/50">
                    <div className="text-sm text-muted-foreground mb-2">
                      Reporting Status
                    </div>
                    <div className="text-lg font-bold text-primary flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Active
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      Last update: Today
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-12 bg-white rounded-lg w-full shadow-sm border border-border/50" />
                  <div className="h-12 bg-white rounded-lg w-full shadow-sm border border-border/50" />
                  <div className="h-12 bg-white rounded-lg w-full shadow-sm border border-border/50" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Give your members transparency and control.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our white-label dashboard gives your members real-time insights
              into their credit journey. They can track score improvements, view
              reported payments, and understand the factors impacting their
              financial health.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time credit score tracking",
                "Educational resources and tips",
                "Transparent reporting history",
                "Customizable alerts and notifications",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-primary font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Section containing the lead capture form for demonstrative purposes or inquiries.
 * @returns The LeadCapture section component.
 */
function LeadCapture() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-24">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Ready to launch your credit program?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Join the growing network of financial institutions empowering
              their members with next-generation credit building tools.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">
                    Bank-Grade Security
                  </h4>
                  <p className="text-muted-foreground">
                    SOC 2 Type II certified and fully compliant infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <LineChart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">
                    Fast Implementation
                  </h4>
                  <p className="text-muted-foreground">
                    Go live in weeks, not months, with our dedicated support
                    team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <CreateLeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Site footer component containing corporate information and categorized links.
 * @returns The Footer component.
 */
function Footer() {
  return (
    <footer className="bg-primary text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img
                src={"/svgs/sencha-logo.svg"}
                alt="Sencha Credit Logo"
                width={32}
                height={32}
                className="brightness-0 invert"
              />
              <span className="text-xl font-display font-bold tracking-tight">
                Sencha Credit
              </span>
            </div>
            <p className="text-white/60 max-w-sm">
              Empowering financial institutions with white-label credit building
              solutions for the modern era.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left text-white/40 text-sm">
          © {new Date().getFullYear()} Sencha Credit Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/**
 * The main landing page component for the Sencha platform.
 * Assembles all site sections: Hero, ValueProps, HowItWorks, FeatureHighlight, LeadCapture, and Footer.
 * @returns The Home page component.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <HowItWorks />
        <FeatureHighlight />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
}
