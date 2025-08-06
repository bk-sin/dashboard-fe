"use client";

import { MetricCard } from "./metric-card";
import { GRID_VARIANTS_CONFIG } from "@/config/dashboard-metrics";
import { useDashboardPresentation } from "@/hooks/use-dashboard-calculations";
import { useDashboardMetrics } from "@/store/dashboard-store";
import { Button } from "../ui/button";
import { DashboardStats } from "./types";

interface DashboardMetricsGridProps {
  variant?: "main" | "secondary";
  initialData?: {
    stats: DashboardStats;
  };
}

export function DashboardMetricsGrid({
  variant = "main",
  initialData,
}: DashboardMetricsGridProps) {
  const { data, isLoading, error, refetch } = useDashboardMetrics(initialData);

  if (isLoading || !data) {
    return <LoadingFallback />;
  }

  if (error) {
    return <ErrorFallback error={error} refetch={refetch} />;
  }

  const presentation = useDashboardPresentation(data.stats);
  const { config, className } = GRID_VARIANTS_CONFIG[variant];

  return (
    <div className={className}>
      {config.map((metric) => {
        const IconComponent = metric.icon;

        const value = metric.getValue
          ? metric.getValue(presentation)
          : metric.valueKey
            ? data.stats[metric.valueKey]
            : 0;

        return (
          <MetricCard
            key={metric.id}
            title={metric.title}
            value={value}
            icon={<IconComponent className="h-4 w-4 text-muted-foreground" />}
            description={metric.getDescription(data.stats, presentation)}
            valueClassName={metric.getValueClassName?.(presentation)}
          />
        );
      })}
    </div>
  );
}

export function ErrorFallback({
  error,
  refetch,
}: {
  error: string | Error | null;
  refetch?: () => void;
}) {
  const errorMessage = error instanceof Error ? error.message : error;
  return (
    <div className="flex items-center justify-center p-8 border border-red-200 rounded-lg bg-red-50">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-red-800 mb-2">
          Error loading metrics
        </h3>
        <p className="text-red-600 text-sm">{errorMessage}</p>
        {refetch && <Button onClick={refetch}>Try again</Button>}
      </div>
    </div>
  );
}

export function LoadingFallback() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-lg border bg-card p-6"
        >
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 bg-gray-300 rounded"></div>
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
          </div>
          <div className="mt-2 h-8 w-16 bg-gray-300 rounded"></div>
          <div className="mt-1 h-3 w-24 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
}
