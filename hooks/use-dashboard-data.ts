"use client";

import { getDashboardActivity } from "@/data/dashboard-activity";
import { getDashboardCharts } from "@/data/dashboard-charts";
import { getDashboardMetrics } from "@/data/dashboard-metrics";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useDashboardActivity() {
  return useSuspenseQuery({
    queryKey: ["dashboard-activity"],
    queryFn: getDashboardActivity,
    refetchInterval: 30000,
    staleTime: 2 * 60 * 1000,
  });
}

export function useDashboardMetrics() {
  return useSuspenseQuery({
    queryKey: ["dashboard-metrics"],
    queryFn: getDashboardMetrics,
    staleTime: 1 * 60 * 1000,
  });
}

export function useDashboardCharts() {
  return useSuspenseQuery({
    queryKey: ["dashboard-charts"],
    queryFn: getDashboardCharts,
    staleTime: 5 * 60 * 1000,
  });
}
