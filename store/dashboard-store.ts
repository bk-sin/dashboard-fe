import React from "react";
import { create } from "zustand";
import { getDashboardActivity } from "@/data/dashboard-activity";
import { getDashboardCharts } from "@/data/dashboard-charts";
import { getDashboardMetrics } from "@/data/dashboard-metrics";
import {
  ActivityItem,
  RecentUser,
  RoleStat,
  DashboardStats,
} from "@/components/dashboard/types";

interface DashboardActivityData {
  recentUsers: RecentUser[];
  recentActivity: ActivityItem[];
}

interface DashboardMetricsData {
  stats: DashboardStats;
}

interface DashboardChartsData {
  roleStats: RoleStat[];
}

interface DashboardState {
  activityData: DashboardActivityData | null;
  activityLoading: boolean;
  activityError: string | null | Error;

  metricsData: DashboardMetricsData | null;
  metricsLoading: boolean;
  metricsError: string | null | Error;

  chartsData: DashboardChartsData | null;
  chartsLoading: boolean;
  chartsError: string | null | Error;

  fetchActivity: () => Promise<void>;
  fetchMetrics: () => Promise<void>;
  fetchCharts: () => Promise<void>;
  resetActivity: () => void;
  resetMetrics: () => void;
  resetCharts: () => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  activityData: null,
  activityLoading: false,
  activityError: null,

  metricsData: null,
  metricsLoading: false,
  metricsError: null,

  chartsData: null,
  chartsLoading: false,
  chartsError: null,

  fetchActivity: async () => {
    set({ activityLoading: true, activityError: null });
    try {
      const data = await getDashboardActivity();
      set({ activityData: data, activityLoading: false });
    } catch (error) {
      set({
        activityError:
          error instanceof Error
            ? error.message
            : "Error loading activity data",
        activityLoading: false,
      });
    }
  },

  fetchMetrics: async () => {
    set({ metricsLoading: true, metricsError: null });
    try {
      const data = await getDashboardMetrics();
      set({ metricsData: data, metricsLoading: false });
    } catch (error) {
      set({
        metricsError:
          error instanceof Error ? error.message : "Error loading metrics data",
        metricsLoading: false,
      });
    }
  },

  fetchCharts: async () => {
    set({ chartsLoading: true, chartsError: null });
    try {
      const data = await getDashboardCharts();
      set({ chartsData: data, chartsLoading: false });
    } catch (error) {
      set({
        chartsError:
          error instanceof Error ? error.message : "Error loading charts data",
        chartsLoading: false,
      });
    }
  },

  resetActivity: () => {
    set({ activityData: null, activityLoading: false, activityError: null });
  },

  resetMetrics: () => {
    set({ metricsData: null, metricsLoading: false, metricsError: null });
  },

  resetCharts: () => {
    set({ chartsData: null, chartsLoading: false, chartsError: null });
  },
}));

export const useDashboardActivity = (initialData?: DashboardActivityData) => {
  const { activityData, activityLoading, activityError, fetchActivity } =
    useDashboardStore();

  React.useEffect(() => {
    if (initialData && !activityData && !activityLoading && !activityError) {
      useDashboardStore.setState({ activityData: initialData });
    }
  }, [initialData, activityData, activityLoading, activityError]);

  if (!activityData && !activityLoading && !activityError && !initialData) {
    void fetchActivity();
  }

  return {
    data: activityData || initialData,
    isLoading: activityLoading && !initialData,
    error: activityError,
    refetch: fetchActivity,
  };
};

export const useDashboardMetrics = (initialData?: DashboardMetricsData) => {
  const { metricsData, metricsLoading, metricsError, fetchMetrics } =
    useDashboardStore();

  React.useEffect(() => {
    if (initialData && !metricsData && !metricsLoading && !metricsError) {
      useDashboardStore.setState({ metricsData: initialData });
    }
  }, [initialData, metricsData, metricsLoading, metricsError]);

  if (!metricsData && !metricsLoading && !metricsError && !initialData) {
    void fetchMetrics();
  }

  return {
    data: metricsData || initialData,
    isLoading: metricsLoading && !initialData,
    error: metricsError,
    refetch: fetchMetrics,
  };
};

export const useDashboardCharts = (initialData?: DashboardChartsData) => {
  const { chartsData, chartsLoading, chartsError, fetchCharts } =
    useDashboardStore();

  React.useEffect(() => {
    if (initialData && !chartsData && !chartsLoading && !chartsError) {
      useDashboardStore.setState({ chartsData: initialData });
    }
  }, [initialData, chartsData, chartsLoading, chartsError]);

  if (!chartsData && !chartsLoading && !chartsError && !initialData) {
    void fetchCharts();
  }

  return {
    data: chartsData || initialData,
    isLoading: chartsLoading && !initialData,
    error: chartsError,
    refetch: fetchCharts,
  };
};
