import {
  DashboardChartsSection,
  DashboardDetailsSection,
  DashboardMetricsGrid,
} from "@/components/dashboard";
import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { SystemAlerts } from "@/components/system-alerts";
import {
  getDashboardActivity,
  getDashboardCharts,
  getDashboardMetrics,
} from "@/data";

export default async function Home() {
  const [activityData, metricsData, chartsData] = await Promise.all([
    getDashboardActivity(),
    getDashboardMetrics(),
    getDashboardCharts(),
  ]);

  return (
    <DashboardLayout>
      <main className="flex-1 p-6 space-y-6">
        <DashboardMetricsGrid initialData={metricsData} />
        <DashboardChartsSection initialData={chartsData} />
        <DashboardDetailsSection
          initialData={activityData}
          initialChartsData={chartsData}
        />
        <SystemAlerts initialData={metricsData} />
        <DashboardMetricsGrid variant="secondary" initialData={metricsData} />
      </main>
    </DashboardLayout>
  );
}
