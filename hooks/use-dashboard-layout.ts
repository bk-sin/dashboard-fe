import { useMemo } from "react";
import { DashboardStats } from "@/components/dashboard/types";

export function useDashboardLayout(stats: DashboardStats) {
  return useMemo(
    () => ({
      shouldShowAlerts: stats.blockedUsers > 0 || stats.unverifiedUsers > 0,
      gridVariant: stats.totalUsers > 1000 ? "compact" : "standard",
      priorityMetrics:
        stats.attentionRequiredCount > 10
          ? ["attention-required", "active-users"]
          : ["total-users", "active-users"],
    }),
    [stats],
  );
}
