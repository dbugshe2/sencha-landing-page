import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldAlert, X, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdBlockPopup() {
  const [hasAdBlock, setHasAdBlock] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkAdBlocker = async () => {
      // Check for manual trigger in URL for testing
      const urlParams = new URLSearchParams(window.location.search);
      const isTestMode = urlParams.get("test-adblock") === "true";

      let blocked = false;
      
      if (isTestMode) {
        blocked = true;
        // Ignore dismissed state during testing
        localStorage.removeItem("adblock-dismissed");
      } else {
        // Method 1: Network request to a common ad script URL
        try {
          await fetch(
            new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
              method: 'HEAD',
              mode: 'no-cors'
            })
          );
        } catch (e) {
          // If the request is blocked, it throws an error
          blocked = true;
        }

        // Method 2: Hidden DOM element check (catches cosmetic filtering)
        if (!blocked) {
          const adElement = document.createElement("div");
          // Using classes commonly targeted by ad blockers
          adElement.className = "textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox";
          adElement.style.height = "1px";
          adElement.style.width = "1px";
          adElement.style.position = "absolute";
          adElement.style.left = "-10000px";
          document.body.appendChild(adElement);
          
          // Wait briefly to allow adblocker extensions to parse and hide the element
          await new Promise(resolve => setTimeout(resolve, 50));
          
          const isHidden = adElement.offsetHeight === 0 || window.getComputedStyle(adElement).display === "none";
          document.body.removeChild(adElement);
          
          if (isHidden) {
            blocked = true;
          }
        }
      }

      if (blocked) {
        // Only show if they haven't dismissed it previously in this session/localstorage
        const hasDismissed = localStorage.getItem("adblock-dismissed") === "true";
        if (!hasDismissed) {
          setHasAdBlock(true);
          setIsVisible(true);
        }
      }
    };

    // Run check slightly after mount to ensure smooth initial load
    const timer = setTimeout(() => {
      checkAdBlocker();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Remember the user's choice to dismiss
    localStorage.setItem("adblock-dismissed", "true");
  };

  if (!hasAdBlock) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} // smooth spring-like ease
          className="fixed bottom-6 right-6 z-[100] w-[calc(100%-3rem)] max-w-[420px]"
        >
          <div className="bg-background/80 backdrop-blur-xl border border-primary/20 p-6 rounded-[28px] shadow-neo-lg relative overflow-hidden">
            {/* Subtle animated background glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
            
            <button 
              onClick={handleDismiss}
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors bg-white/5 rounded-full p-1"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            
            <div className="flex items-start gap-5 relative z-10">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 border border-primary/20">
                <ShieldAlert className="w-6 h-6 text-primary" />
              </div>
              
              <div className="flex-1 pr-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground tracking-tight">
                  Ad Blocker Detected
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  We noticed you might be using an ad blocker. We completely respect your privacy!
                  <br /><br />
                  <span className="flex items-center gap-1.5 font-medium text-foreground bg-primary/5 p-2 rounded-lg -ml-2 w-[calc(100%+0.5rem)]">
                    <HeartHandshake className="w-4 h-4 text-primary shrink-0" /> 
                    We only track anonymous errors.
                  </span>
                  <br />
                  This helps us fix bugs and improve the site. Whitelisting us would mean a lot, but feel free to dismiss this if you prefer.
                </p>
                
                <div className="flex gap-3 mt-2">
                  <Button 
                    onClick={handleDismiss} 
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl shadow-neo-sm font-semibold"
                  >
                    I Understand
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
