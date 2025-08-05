import { useMemo } from "react";
import { AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import { DashboardStats } from "@/components/dashboard/types";

export function useDashboardPresentation(stats: DashboardStats) {
  return useMemo(() => {
    return {
      activeUsersDisplay: `${stats.activeUsersPercentage}% del total`,
      newUsersDisplay: `+${stats.newUsersThisMonth} este mes`,
      successRateDisplay: `${stats.loginSuccessRate}%`,
      attentionDisplay: `${stats.blockedUsers} bloqueados, ${stats.unverifiedUsers} sin verificar`,

      attentionRequiredColor:
        stats.attentionRequiredCount > 10 ? "text-red-600" : "text-orange-600",
      successRateColor:
        stats.loginSuccessRate > 90 ? "text-green-600" : "text-yellow-600",

      successRateIcon:
        stats.loginSuccessRate > 90 ? CheckCircle : AlertTriangle,
      newUsersIcon: TrendingUp,

      metricCardClassName:
        stats.attentionRequiredCount > 15 ? "border-red-200 bg-red-50" : "",
    };
  }, [stats]);
}
