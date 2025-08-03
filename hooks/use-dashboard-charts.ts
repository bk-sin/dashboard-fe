import { useSuspenseQuery } from "@tanstack/react-query";
import { getDashboardCharts } from "@/data/dashboard-charts";

export function useDashboardCharts() {
  return useSuspenseQuery({
    queryKey: ["dashboard-charts"],
    queryFn: getDashboardCharts,
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
}
