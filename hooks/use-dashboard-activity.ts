import { useSuspenseQuery } from "@tanstack/react-query";
import { getDashboardActivity } from "@/data/dashboard-activity";

export function useDashboardActivity() {
  return useSuspenseQuery({
    queryKey: ["dashboard-activity"],
    queryFn: getDashboardActivity,
    refetchInterval: 30000, // Auto-refresh cada 30 segundos
    staleTime: 2 * 60 * 1000, // 2 minutos
  });
}
