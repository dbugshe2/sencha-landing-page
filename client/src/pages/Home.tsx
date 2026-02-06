import { Link } from "wouter";
import { CreateLeadForm } from "@/components/CreateLeadForm";
import DecorativeImage from "@/components/DecorativeImage";
import Rewards from "@/components/Rewards";
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
  Star,
  ArrowRight,
  Users,
  Zap,
  BarChart3,
  Globe,
  Award,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

/**
 * Modern navigation bar with glassmorphism effect and smooth animations.
 * @returns The Navbar component.
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed container mx-auto left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 
        ${
          isScrolled
            ? "md:top-6 w-auto glass-card rounded-full shadow-neo px-6 md:px-8 py-2 md:py-3 max-w-4xl mx-auto border-2 border-foreground/10"
            : "w-full bg-primary rounded-b-3xl md:rounded-b-[2rem] px-4 md:px-6 py-3 md:py-4 max-w-full"
        }`}
    >
      <div className={`${isScrolled ? "" : "container mx-auto px-6"}`}>
        <div className="flex items-center space-x-8 justify-between">
          <a href="/#0" className="shrink-0">
            <img
              src="/svgs/sencha-logo-black.svg"
              className={
                isScrolled ? "shrink-0 w-24 h-10" : "shrink-0 w-28 h-12"
              }
              alt="Sencha"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#how-it-works"
              className="text-primary-foreground whitespace-nowrap font-semibold hover:text-secondary transition-colors"
            >
              How it Works
            </a>
            <a
              href="#rewards"
              className="text-primary-foreground/80 font-semibold hover:text-secondary transition-colors"
            >
              Rewards
            </a>
              <Button
                  asChild
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full shadow-neo-sm border-2 border-foreground/10"
                >
                  <a href="#leads">Get Demo</a>
                </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-primary/20 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t-2 border-primary/20"
            >
              <div className="flex flex-col space-y-4">
                <a
                  href="#how-it-works"
                  className="text-foreground font-medium hover:text-secondary py-2"
                  onClick={() => setIsOpen(false)}
                >
                  How it Works
                </a>
                <a
                  href="#rewards"
                  className="text-foreground font-medium hover:text-secondary py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Rewards
                </a>
                  <Button
                  asChild
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full shadow-neo-sm border-2 border-foreground/10"
                >
                  <a href="#leads">Get Demo</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

/**
 * Modern hero section with gradient background and animated elements.
 * @returns The Hero section component.
 */
function Hero() {
  /**
   * as the user scrolls, the background image zooms in and scrolls with the user
   *
   */

  //   const [imageScale, setImageScale] = useState(1);
  // const [imageOffset, setImageOffset] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollRatio = window.scrollY / window.innerHeight;
  //     setImageScale(1 + scrollRatio * 0.5);
  //     setImageOffset(-window.scrollY * 0.5);
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <section className="relative min-h-screen pt-28 flex items-center justify-center overflow-hidden bg-primary">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          // style={{
          //     backgroundImage: `url('/images/genz01.jpg')`,
          //     backgroundSize: `${imageScale} 100%`,
          //     backgroundPosition: `center ${imageOffset}px`,
          //     backgroundRepeat: isScrolled ? "no-repeat" : "no-repeat",
          //   }}
          className="scroll-m-24 absolute top-0 left-0 w-full h-full"
        ></div>
        <div className="absolute top-20 left-20 w-80 h-80 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-16 w-64 h-64 bg-secondary/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-tertiary/15 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-8">
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-6 lg:gap-16 lg:items-center">
          {/* Left side - Hero text */}
          <div className="text-center lg:col-span-4 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold mb-2 shadow-neo-sm border-2 border-secondary/20">
                <div className="w-5 h-5 bg-primary animate-pulse rounded-full flex items-center justify-center mr-2">
                  <Zap className="w-3 h-3 text-tertiary" />
                </div>
                NOW AVAILABLE FOR COMMUNITY BANKS AND CREDIT UNIONS
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight font-medium">
                Risk-Free&nbsp;
                <span className="text-secondary font-bold">
                  Credit Building
                </span>
              </h1>

              <p className="text-xl text-primary-foreground font-medium mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Empower your members with credit-building debit cards. Turn
                everyday transactions into credit building opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                   {/* <Button
                  asChild
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full shadow-neo-sm border-2 border-foreground/10"
                >
                </Button> */}
                <Button
                asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all border-2 border-secondary/30"
                >
                  <a href="#leads">Get a Demo  <ArrowRight className="ml-2 w-5 h-5" /></a>
                 
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground/20 bg-white/50 backdrop-blur-sm hover:bg-white/80 text-foreground px-8 py-6 text-lg"
                >
                  Learn More
                </Button> */}
              </div>

              {/* Stats with glass cards */}
              {/* <div className="grid grid-cols-3 gap-4 mt-16 max-w-xl mx-auto lg:mx-0">
                <div className="glass-card rounded-xl p-4 text-center shadow-neo-sm border-2 border-white/50 bg-white/40">
                  <div className="text-2xl md:text-3xl font-extrabold text-tertiary mb-1">
                    18 - 45+
                  </div>
                  <div className="text-primary-foreground font-medium text-xs md:text-sm">
                    Age Range
                  </div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center shadow-neo-sm border-2 border-white/50 bg-white/40">
                  <div className="text-2xl md:text-3xl font-extrabold text-secondary mb-1">
                    0%
                  </div>
                  <div className="text-primary-foreground font-medium text-xs md:text-sm">
                    Debt Risk
                  </div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center shadow-neo-sm border-2 border-white/50 bg-white/40">
                  <div className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-1">
                    10K+
                  </div>
                  <div className="text-primary-foreground font-medium text-xs md:text-sm">
                    Users Helped
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>

          {/* Right side - Decorative image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 lg:mt-0 lg:col-span-2"
          >
            <DecorativeImage
              src="/images/genz01.jpg"
              alt="Sencha credit building cards"
              className={"max-w-sm w-80 mx-auto lg:max-w-md"}
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
            <ChevronDown className="w-5 h-5 text-foreground/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Features section with modern card design.
 * @returns The Features section component.
 */
function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Zero Debt Risk",
      description:
        "Members use their own money with debit cards, eliminating debt while building credit history.",
      gradient: "from-primary to-primary/80",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Tracking",
      description:
        "Dashboard shows credit score improvements and payment history in real-time.",
      gradient: "from-primary to-primary/80",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Bank-Grade Security",
      description:
        "SOC 2 Type II certified infrastructure with enterprise-level security protocols.",
      gradient: "from-primary to-primary/80",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile First",
      description:
        "Gen Z-friendly mobile app with intuitive design and seamless user experience.",
      gradient: "from-primary to-primary/80",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "API Integration",
      description:
        "Seamless integration with existing core banking systems through robust APIs.",
      gradient: "from-primary to-primary/80",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Compliance Ready",
      description:
        "Fully compliant with FCRA, Reg E, and all major banking regulations.",
      gradient: "from-primary to-primary/80",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Sencha
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            The modern credit-building solution designed for Gen Z and built for
            financial institutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xs hover:shadow-sm transition-all duration-300 h-full">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
/**
 * How it works section with modern timeline design.
 * @returns The HowItWorks section component.
 */
function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Sign Up",
      description:
        "Gen Z users download your app and sign up for the credit-building debit card in minutes.",
      color: "bg-primary",
      textColor: "text-primary-foreground",
    },
    {
      step: "02",
      title: "Spend Daily",
      description:
        "Members use their debit card for everyday purchases like coffee, groceries, and subscriptions.",
      color: "bg-secondary",
      textColor: "text-secondary-foreground",
    },
    {
      step: "03",
      title: "Build Credit",
      description:
        "We automatically report positive payment history to all major credit bureaus each month.",
      color: "bg-tertiary",
      textColor: "text-tertiary-foreground",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A simple 3-step process that helps Gen Z build credit without debt
            risk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div
                className={`${step.color} rounded-2xl p-8 h-full shadow-neo border-2 border-foreground/10 hover:shadow-neo-lg hover:-translate-y-1 transition-all`}
              >
                {/* Step Number */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm ${step.textColor} text-2xl font-bold mb-6 border-2 border-white/30`}
                >
                  {step.step}
                </div>

                <h3 className={`text-2xl font-bold ${step.textColor} mb-4`}>
                  {step.title}
                </h3>
                <p className={`${step.textColor} opacity-90 leading-relaxed`}>
                  {step.description}
                </p>

                {/* Connection Arrow */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 lg:-right-4 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white shadow-neo-sm flex items-center justify-center border-2 border-foreground/10">
                      <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-foreground" />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Rewards section showcasing the benefits and incentives for users.
 * @returns The Rewards section component.
 */
function RewardsSection() {
  return <Rewards />;
}

/**
 * Testimonials section with modern card design.
 * @returns The Testimonials section component.
 */
function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechForward Bank",
      content:
        "Sencha's credit-building solution has transformed how we serve Gen Z members. Our engagement is up 40% and we're seeing real financial wellness improvements.",
      avatar: "https://via.placeholder.com/100x100/8B5CF6/FFFFFF?text=SC",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "VP Innovation, Community Credit Union",
      content:
        "Implementation was seamless and the results have been outstanding. Our members love building credit without the risk of traditional credit cards.",
      avatar: "https://via.placeholder.com/100x100/059669/FFFFFF?text=MR",
      rating: 5,
    },
    {
      name: "Amanda Foster",
      role: "Director, NextGen Financial",
      content:
        "Finally, a solution that speaks to Gen Z's needs while maintaining our risk-averse approach. It's a win-win for everyone involved.",
      avatar: "https://via.placeholder.com/100x100/DC2626/FFFFFF?text=AF",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Leading Institutions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            See how our partners are transforming the financial future of Gen Z.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Pricing section with modern card design.
 * @returns The Pricing section component.
 */
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Custom",
      description:
        "Perfect for community banks getting started with credit-building solutions.",
      features: [
        "Up to 1,000 active members",
        "Basic analytics dashboard",
        "Email support",
        "Standard reporting",
      ],
      featured: false,
    },
    {
      name: "Growth",
      price: "Custom",
      description:
        "Ideal for growing institutions with expanding member bases.",
      features: [
        "Up to 10,000 active members",
        "Advanced analytics & insights",
        "Priority support",
        "Custom reporting",
        "Full API access",
        "White-label branding",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Comprehensive solution for large financial institutions.",
      features: [
        "Unlimited active members",
        "Enterprise analytics suite",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Choose the plan that fits your institution's needs and scale as you
            grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`relative ${plan.featured ? "scale-105 z-10" : ""}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-8 border-2 transition-all duration-300 ${
                  plan.featured
                    ? "bg-primary border-primary text-primary-foreground shadow-2xl"
                    : "bg-card border-border hover:border-primary/50 hover:shadow-lg"
                }`}
              >
                <div className="text-center mb-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${plan.featured ? "text-primary-foreground" : "text-foreground"}`}
                  >
                    {plan.name}
                  </h3>
                  <div
                    className={`text-3xl font-bold mb-4 ${plan.featured ? "text-primary-foreground" : "text-foreground"}`}
                  >
                    {plan.price}
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          plan.featured
                            ? "text-primary-foreground"
                            : "text-primary"
                        }`}
                      />
                      <span
                        className={`text-sm ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className={`w-full h-12 rounded-xl font-medium transition-colors ${
                    plan.featured
                      ? "bg-background text-primary hover:bg-background/90"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
/**
 * CTA section with gradient background.
 * @returns The CTA section component.
 */
function CTA() {
  return (
    <section id="leads" className="py-24 bg-secondary overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-8 leading-tight">
              Ready to launch your <br />
              <span className="text-primary">credit-building</span> program?
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-10 leading-relaxed max-w-lg">
              Help your credit union/community bank spin up a credit builder
              program in no time
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-neo-sm border-2 border-white/30">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div className="text-secondary-foreground font-medium text-lg">
                  Relationship Deepening
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-neo-sm border-2 border-white/30">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div className="text-secondary-foreground font-medium text-lg">
                  Member Retention
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-neo-sm border-2 border-white/30">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div className="text-secondary-foreground font-medium text-lg">
                  Deposit Growth
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CreateLeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
/**
 * Footer with modern design.
 * @returns The Footer component.
 */
function Footer() {
  return (
    <footer className="section-dark">
      {/* Background decoration */}
      <div className="relative flex py-8">
        <div className="absolute top-0 right-0 -translate-y-1/2 w-[400px] h-[200px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="flex-1">
          {/* Content */}
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-20 h-20 px-2 rounded-xl flex items-center justify-center">
                    <img src="svgs/sencha-logo-all-white.svg" alt="Sencha" />
                  </div>
                </div>
                <p className="text-white/80 max-w-sm mb-6">
                  Empower Your Members with Credit-Building Debit Cards
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer border border-white/10">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer border border-white/10">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div>
                {/* <h4 className="font-bold mb-6">Product</h4> */}
                <ul className="space-y-4">
                  {/* <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li> */}
                </ul>
              </div>

              <div>
                {/* <h4 className="font-bold mb-6">Company</h4> */}
                <ul className="space-y-4">
                  {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li> */}
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
              <p>
                &copy; {new Date().getFullYear()} Sencha Credit Inc. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * The main landing page component with modern design.
 * @returns The Home page component.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        {/* <Features /> */}
        <HowItWorks />
        <RewardsSection />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
