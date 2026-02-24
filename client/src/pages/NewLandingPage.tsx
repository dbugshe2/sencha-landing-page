import {
  ArrowUpRight,
  Zap,
  Lock,
  Globe,
  Plus,
  BarChart2,
  Briefcase,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 3);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isHeroScrolled = isScrolled;
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-6 mb-8">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <img
              src={"/svgs/sencha-logo-black.svg"}
              className={cn(
                "shrink-0 transition-all duration-300",
                isScrolled ? "w-20 h-8" : "w-24 h-10",
              )}
              alt="Sencha"
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#" className="hover:text-zinc-900 transition-colors">
              How it Works
            </a>
            <a href="#" className="hover:text-zinc-900 transition-colors">
              Rewards
            </a>
            {/* <a href="#" className="hover:text-zinc-900 transition-colors">
              Benefits
            </a>
            <a href="#" className="hover:text-zinc-900 transition-colors">
              User stories
            </a> */}
          </div>
          <Button
            variant="default"
            className="rounded-full px-6 bg-[#1C1D24] text-white hover:bg-zinc-800"
          >
            Get Demo
          </Button>
        </nav>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-16">
          {/* Hero Left */}
          <div className="bg-secondary text-white rounded-[32px] p-10 flex flex-col justify-between min-h-[480px] relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-5xl text-secondary-foreground md:text-6xl font-semibold leading-[1.1] mb-8 tracking-tight">
                Risk Free
                <br />
                Credit Building
              </h1>
              <Button className="rounded-full bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-6 text-base">
                Get Demo
              </Button>
            </div>
            {/* Placeholder for the 3D Cubes */}
            <div className="absolute bottom-0 left-10 right-10 h-48 bg-gradient-to-t from-accent to-transparent rounded-t-[24px] opacity-80"></div>
          </div>

          {/* Hero Right */}
          <div className="flex flex-col gap-5">
            {/* Top Card */}
            <div className="bg-accent rounded-[32px] p-8 flex-1 relative overflow-hidden">
              <h3 className="text-2xl font-semibold mb-2">
                Built for community banks and credit unions
              </h3>
              <p className="text-zinc-500 text-sm max-w-[80%]">
                Instant access, advanced protection, and a seamless experience
                every time you pay
              </p>
              {/* Placeholder for 3D Card */}
              <div className="absolute -bottom-10 -right-10 w-64 h-48 bg-gradient-to-tr from-[#a18cd1] to-[#fbc2eb] rounded-2xl transform -rotate-6 opacity-90"></div>
            </div>

            {/* Bottom Stats Cards */}
            <div className="grid grid-cols-2 gap-5 h-48">
              <div className="bg-accent rounded-[32px] p-8 flex flex-col justify-between">
                <p className="text-zinc-500 text-sm font-medium">Worldwide</p>
                <div className="text-4xl font-bold">
                  1M{" "}
                  <span className="text-base font-normal text-zinc-500">
                    clients
                  </span>
                </div>
              </div>
              <div className="bg-secondary text-white rounded-[32px] p-8 flex flex-col justify-between">
                <p className="text-zinc-400 text-sm font-medium">Cheaper</p>
                <div className="text-4xl font-bold">
                  45%{" "}
                  <span className="text-base font-normal text-zinc-400">
                    less
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-[#F5F5F7] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="text-[#8C88FF]">✦</span> Benefits
            </span>
            <h2 className="text-4xl font-semibold tracking-tight">
              Where ambition meets trust
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.2fr_1.2fr] gap-5">
            {/* Benefit Main */}
            <div className="bg-[#F5F5F7] rounded-[32px] p-10 min-h-[400px] relative overflow-hidden flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-semibold mb-4 max-w-[70%] leading-tight">
                  Comprehensive app experience
                </h3>
                <p className="text-zinc-500 text-sm max-w-[60%]">
                  Take full control of your finances with just a few taps. From
                  everyday spending to big goals.
                </p>
              </div>
              {/* Placeholder for Girl Photo & Floating Buttons */}
              <div className="flex gap-3 mt-8">
                <div className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center">
                  <Plus size={20} />
                </div>
                <div className="w-12 h-12 rounded-full bg-white text-[#8C88FF] shadow-sm flex items-center justify-center">
                  <BarChart2 size={20} />
                </div>
                <div className="w-12 h-12 rounded-full bg-white text-[#8C88FF] shadow-sm flex items-center justify-center">
                  <Briefcase size={20} />
                </div>
              </div>
              {/* Fake Image Background */}
              <div className="absolute bottom-0 right-0 w-1/2 h-3/4 bg-zinc-200 rounded-tl-[64px]"></div>
            </div>

            {/* Benefit Tall Light */}
            <div className="bg-[#F5F5F7] rounded-[32px] p-6 flex flex-col">
              <div className="w-full flex-1 bg-gradient-to-br from-[#43e97b] to-[#38f9d7] rounded-[20px] mb-6 opacity-80"></div>
              <div className="text-center pb-4">
                <span className="inline-block bg-white px-3 py-1 rounded-full text-xs font-semibold text-zinc-500 mb-2">
                  20+ colors
                </span>
                <h4 className="text-xl font-semibold">Personalized design</h4>
              </div>
            </div>

            {/* Benefit Tall Dark */}
            <div className="bg-[#272932] text-white rounded-[32px] p-6 flex flex-col justify-between relative overflow-hidden">
              <h4 className="text-xl font-semibold text-center mt-2 z-10">
                Easy Banking
              </h4>

              {/* 3D Glass placeholder */}
              <div className="absolute top-16 right-0 left-0 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>

              <div className="bg-white text-zinc-900 p-5 rounded-[20px] mt-auto z-10 space-y-4">
                <div className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>{" "}
                  Analysis and statistics
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>{" "}
                  Transfers
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-3 h-3 rounded-full bg-blue-300"></div>{" "}
                  Investing
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1C1D24] text-white rounded-[32px] py-24 px-6 text-center relative overflow-hidden mb-16">
          {/* Decorative Gradients */}
          <div className="absolute -top-10 right-[10%] w-64 h-32 bg-gradient-to-tr from-[#8C88FF] to-[#FF88C2] rounded-3xl rotate-12 opacity-80 blur-[2px]"></div>
          <div className="absolute -bottom-16 left-[5%] w-72 h-40 bg-gradient-to-bl from-[#8C88FF] to-[#00C6FF] rounded-3xl -rotate-6 opacity-80 blur-[2px]"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
              Join the world's
              <br />
              fastest-growing bank
            </h2>
            <Link href="/">
              <Button className="rounded-full bg-[#8C88FF] hover:bg-[#7a76e6] text-white px-8 py-6 text-base">
                Get started
              </Button>
            </Link>
          </div>
        </section>

        {/* Solutions Section */}
        <section>
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-[#F5F5F7] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="text-[#8C88FF]">✦</span> Solutions
            </span>
            <h2 className="text-4xl font-semibold tracking-tight">
              Bank less, live more
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-5">
            {/* Phone Mockup Placeholder */}
            <div className="bg-[#F5F5F7] border-[12px] border-zinc-900 rounded-[48px] min-h-[450px] relative overflow-hidden flex flex-col">
              {/* Fake App Header */}
              <div className="pt-8 px-6 pb-4">
                <div className="w-32 h-6 bg-zinc-200 rounded-full mb-6"></div>
                <p className="text-xs text-zinc-500 mb-1">Total Balance</p>
                <p className="text-2xl font-bold">$8 600</p>
              </div>
              {/* Fake App Cards */}
              <div className="flex gap-3 px-6 overflow-hidden">
                <div className="w-24 h-32 bg-gradient-to-b from-blue-400 to-blue-600 rounded-xl flex-shrink-0"></div>
                <div className="w-24 h-32 bg-gradient-to-b from-purple-400 to-purple-600 rounded-xl flex-shrink-0"></div>
              </div>
            </div>

            {/* Feature List */}
            <div className="flex flex-col gap-4 justify-center">
              <div className="bg-[#F5F5F7] p-6 rounded-[24px] flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#E0E4FF] text-[#8C88FF] flex items-center justify-center flex-shrink-0">
                  <Zap size={24} className="fill-current" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Instant Access</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Open an account in minutes and start using your card right
                    away.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5F7] p-6 rounded-[24px] flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#E0E4FF] text-[#8C88FF] flex items-center justify-center flex-shrink-0">
                  <Lock size={24} className="fill-current" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Smart Security</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Your money is safe with multi-factor authentication.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5F7] p-6 rounded-[24px] flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#E0E4FF] text-[#8C88FF] flex items-center justify-center flex-shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Global Freedom</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Pay, travel, and withdraw money anywhere without hidden
                    fees.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Dark Card */}
            <div className="bg-[#1C1D24] text-white rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden min-h-[450px]">
              <div className="flex justify-end relative z-10">
                <span className="text-xs font-medium text-zinc-400 flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                  Learn more <ArrowUpRight size={14} />
                </span>
              </div>
              {/* Abstract Glass Placeholder */}
              <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-600/40 via-purple-600/20 to-transparent border-t border-white/10 mt-auto"></div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
