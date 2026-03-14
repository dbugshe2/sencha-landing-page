import { useState, useEffect, useCallback, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { CardStats } from "@shared/schema";

export function useCardStats() {
  const queryClient = useQueryClient();
  const [localStats, setLocalStats] = useState({
    scrollCount: 0,
    totalAmount: 0,
    paymentCount: 0,
    paymentAmount: 0,
  });

  const lastScrollY = useRef(0);
  const syncTimeout = useRef<NodeJS.Timeout | null>(null);

  // Fetch initial stats
  const { data: serverStats } = useQuery<CardStats>({
    queryKey: ["cardStats"],
    queryFn: async () => {
      const res = await fetch(api.cardStats.get.path);
      if (!res.ok) throw new Error("Failed to fetch stats");
      return res.json();
    },
    refetchInterval: 5000, // refresh every 5s to get other users' updates
  });

  // Mutation to sync
  const syncMutation = useMutation({
    mutationFn: async (updates: typeof localStats) => {
      const res = await fetch(api.cardStats.update.path, {
        method: api.cardStats.update.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deltaScrollCount: updates.scrollCount,
          deltaTotalAmount: updates.totalAmount,
          deltaPaymentCount: updates.paymentCount,
          deltaPaymentAmount: updates.paymentAmount,
        }),
      });
      if (!res.ok) throw new Error("Failed to sync stats");
      return res.json();
    },
    onSuccess: (updatedStats) => {
      queryClient.setQueryData(["cardStats"], updatedStats);
    },
  });

  const scheduleSync = useCallback((currentLocal: typeof localStats) => {
    if (syncTimeout.current) clearTimeout(syncTimeout.current);
    syncTimeout.current = setTimeout(() => {
      if (currentLocal.scrollCount > 0 || currentLocal.totalAmount > 0) {
        syncMutation.mutate(currentLocal);
        setLocalStats({ scrollCount: 0, totalAmount: 0, paymentCount: 0, paymentAmount: 0 });
      }
    }, 2000); // debounce 2s
  }, [syncMutation]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY.current;

      // Only count scrolling down every 100px
      if (deltaY > 100) { 
        lastScrollY.current = currentScrollY;
        
        const randomAmount = Math.floor(Math.random() * 50) + 10; // $10 to $60
        // Arbitrary logic for "successful credit payment" -> say 1 in 5 scrolls is a payment
        const isPayment = Math.random() < 0.2;
        
        setLocalStats(prev => {
          const next = {
            ...prev,
            scrollCount: prev.scrollCount + 1,
            totalAmount: prev.totalAmount + randomAmount,
            paymentCount: prev.paymentCount + (isPayment ? 1 : 0),
            paymentAmount: prev.paymentAmount + (isPayment ? randomAmount : 0),
          };
          scheduleSync(next);
          return next;
        });
      } else if (deltaY < 0) {
        // Reset lastScrollY if scrolled up so we can scroll down again to trigger
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scheduleSync]);

  const displayStats = {
    scrollCount: (serverStats?.scrollCount || 0) + localStats.scrollCount,
    totalAmount: (serverStats?.totalAmount || 0) + localStats.totalAmount,
    paymentCount: (serverStats?.paymentCount || 0) + localStats.paymentCount,
    paymentAmount: (serverStats?.paymentAmount || 0) + localStats.paymentAmount,
  };

  return displayStats;
}
