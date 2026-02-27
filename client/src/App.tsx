import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import LandingPage from "./pages/NewLandingPage";

/**
 * Main router component that defines the application's page structure.
 * Uses `wouter` for lightweight client-side routing.
 * @returns The router component with defined routes.
 */
function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Root application component that sets up global providers.
 * Includes QueryClientProvider, TooltipProvider, and global Toaster.
 * @returns The main application component.
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
