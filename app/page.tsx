import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { DashboardMain } from "../components/dashboard/dashboard-main";
import { getDashboardActivity } from "@/data/dashboard-activity";
import { getDashboardMetrics } from "@/data/dashboard-metrics";
import { getDashboardCharts } from "@/data/dashboard-charts";

export default async function Home() {
  const [activityData, metricsData, chartsData] = await Promise.all([
    getDashboardActivity(),
    getDashboardMetrics(),
    getDashboardCharts(),
  ]);

  return (
    <DashboardLayout>
      <DashboardMain
        initialActivityData={activityData}
        initialMetricsData={metricsData}
        initialChartsData={chartsData}
      />
    </DashboardLayout>
  );
}
