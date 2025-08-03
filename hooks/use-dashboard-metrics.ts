import { useSuspenseQuery } from "@tanstack/react-query";
import { getDashboardMetrics } from "@/data/dashboard-metrics";

export function useDashboardMetrics() {
  return useSuspenseQuery({
    queryKey: ["dashboard-metrics"],
    queryFn: getDashboardMetrics,
    staleTime: 1 * 60 * 1000, // 1 minuto
  });
}
