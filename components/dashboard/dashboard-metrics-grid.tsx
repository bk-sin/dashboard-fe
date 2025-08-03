import { MetricCard } from "./metric-card";
import {
  MAIN_METRICS_CONFIG,
  SECONDARY_METRICS_CONFIG,
} from "@/config/dashboard-metrics";
import { DashboardStats, DashboardPresentation } from "./types";

interface DashboardMetricsGridProps {
  stats: DashboardStats;
  presentation: DashboardPresentation;
  variant?: "main" | "secondary";
}

export function DashboardMetricsGrid({
  stats,
  presentation,
  variant = "main",
}: DashboardMetricsGridProps) {
  const config =
    variant === "main" ? MAIN_METRICS_CONFIG : SECONDARY_METRICS_CONFIG;

  const gridClassName =
    variant === "main"
      ? "grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      : "grid gap-4 md:grid-cols-4";

  return (
    <div className={gridClassName}>
      {config.map((metric) => {
        const IconComponent = metric.icon;

        const value = metric.getValue
          ? metric.getValue(presentation)
          : metric.valueKey
            ? stats[metric.valueKey]
            : 0;

        return (
          <MetricCard
            key={metric.id}
            title={metric.title}
            value={value}
            icon={<IconComponent className="h-4 w-4 text-muted-foreground" />}
            description={metric.getDescription(stats, presentation)}
            valueClassName={metric.getValueClassName?.(presentation)}
          />
        );
      })}
    </div>
  );
}
