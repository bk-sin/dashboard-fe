import { ChartCard } from "./chart-card";
import { RoleDistributionChart } from "./role-distribution-chart";
import { UserActivityChart } from "../user-activity-chart";
import { RoleStat } from "./types";

interface DashboardChartsSectionProps {
  roleStats: RoleStat[];
}

export function DashboardChartsSection({
  roleStats,
}: DashboardChartsSectionProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ChartCard
        title="Distribución por Roles"
        description="Porcentaje de usuarios por cada rol"
      >
        <RoleDistributionChart data={roleStats} />
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
