import { DashboardMetricsGrid } from "./dashboard-metrics-grid";
import { DashboardChartsSection } from "./dashboard-charts-section";
import { DashboardDetailsSection } from "./dashboard-details-section";
import { SystemAlerts } from "../system-alerts";
import { ActivityItem, RecentUser, DashboardStats, RoleStat } from "./types";

interface DashboardMainProps {
  initialActivityData?: {
    recentUsers: RecentUser[];
    recentActivity: ActivityItem[];
  };
  initialMetricsData?: {
    stats: DashboardStats;
  };
  initialChartsData?: {
    roleStats: RoleStat[];
  };
}

export function DashboardMain({
  initialActivityData,
  initialMetricsData,
  initialChartsData,
}: DashboardMainProps) {
  return (
    <main className="flex-1 p-6 space-y-6">
      <DashboardMetricsGrid initialData={initialMetricsData} />
      <DashboardChartsSection initialData={initialChartsData} />
      <DashboardDetailsSection
        initialData={initialActivityData}
        initialChartsData={initialChartsData}
      />
      <SystemAlerts initialData={initialMetricsData} />
      <DashboardMetricsGrid
        variant="secondary"
        initialData={initialMetricsData}
      />
    </main>
  );
}
