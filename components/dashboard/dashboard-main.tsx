"use client";

import { useDashboardData } from "@/hooks/use-dashboard-data";
import { useDashboardPresentation } from "@/hooks/use-dashboard-calculations";
import { DashboardMetricsGrid } from "./dashboard-metrics-grid";
import { DashboardChartsSection } from "./dashboard-charts-section";
import { DashboardDetailsSection } from "./dashboard-details-section";
import { SystemAlerts } from "../system-alerts";

export function DashboardMain() {
  const { data } = useDashboardData();
  const { stats, roleStats, recentUsers, recentActivity } = data;
  const presentation = useDashboardPresentation(data);

  return (
    <main className="flex-1 p-6 space-y-6">
      <DashboardMetricsGrid
        stats={stats}
        presentation={presentation}
        variant="main"
      />

      <DashboardChartsSection roleStats={roleStats} />

      <DashboardDetailsSection
        roleStats={roleStats}
        recentUsers={recentUsers}
        recentActivity={recentActivity}
      />

      <SystemAlerts
        blockedUsers={stats.blockedUsers}
        unverifiedUsers={stats.unverifiedUsers}
        failedLogins={stats.failedLoginsToday}
      />

      <DashboardMetricsGrid
        stats={stats}
        presentation={presentation}
        variant="secondary"
      />
    </main>
  );
}
