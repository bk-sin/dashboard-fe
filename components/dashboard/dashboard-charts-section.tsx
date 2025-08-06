"use client";

import { ChartCard } from "./chart-card";
import { RoleDistributionChart } from "./role-distribution-chart";
import { UserActivityChart } from "../user-activity-chart";
import { useDashboardCharts } from "@/store/dashboard-store";
import { RoleStat } from "./types";
import { ErrorFallback, LoadingFallback } from "./dashboard-metrics-grid";

interface DashboardChartsSectionProps {
  initialData?: {
    roleStats: RoleStat[];
  };
}

export function DashboardChartsSection({
  initialData,
}: DashboardChartsSectionProps) {
  const { data, isLoading, error, refetch } = useDashboardCharts(initialData);

  if (isLoading || !data) {
    return <LoadingFallback />;
  }

  if (error) {
    return <ErrorFallback error={error} refetch={refetch} />;
  }
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ChartCard
        title="Distribución por Roles"
        description="Porcentaje de usuarios por cada rol"
      >
        <RoleDistributionChart data={data.roleStats} />
      </ChartCard>
      <ChartCard
        title="Actividad de Usuarios"
        description="Registros y logins en los últimos 7 días"
      >
        <UserActivityChart />
      </ChartCard>
    </div>
  );
}
