"use client";

import {
  useDashboardActivity,
  useDashboardCharts,
  useDashboardMetrics,
} from "@/hooks/use-dashboard-data";
import { DashboardMetricsGrid } from "./dashboard-metrics-grid";
import { useDashboardPresentation } from "@/hooks/use-dashboard-calculations";
import { DashboardChartsSection } from "./dashboard-charts-section";
import { DashboardDetailsSection } from "./dashboard-details-section";
import { SystemAlerts } from "../system-alerts";

export function DashboardMain() {
  const { data: activityData } = useDashboardActivity();
  const { data: chartsData } = useDashboardCharts();
  const { data: metricsData } = useDashboardMetrics();

  const presentation = useDashboardPresentation(metricsData.stats);
  return (
    <main className="flex-1 p-6 space-y-6">
      <DashboardMetricsGrid
        stats={metricsData.stats}
        presentation={presentation}
        variant="main"
      />

      <DashboardChartsSection roleStats={chartsData.roleStats} />

      <DashboardDetailsSection
        roleStats={chartsData.roleStats}
        recentUsers={activityData.recentUsers}
        recentActivity={activityData.recentActivity}
      />

      <SystemAlerts
        blockedUsers={metricsData.stats.blockedUsers}
        unverifiedUsers={metricsData.stats.unverifiedUsers}
        failedLogins={metricsData.stats.failedLoginsToday}
      />

      <DashboardMetricsGrid
        stats={metricsData.stats}
        presentation={presentation}
        variant="secondary"
      />
    </main>
  );
}
