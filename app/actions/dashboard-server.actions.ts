"use server";

import { getDashboardActivity } from "@/data/dashboard-activity";
import { getDashboardMetrics } from "@/data/dashboard-metrics";
import { getDashboardCharts } from "@/data/dashboard-charts";

export async function fetchAllDashboardData() {
  try {
    const [activityData, metricsData, chartsData] = await Promise.all([
      getDashboardActivity(),
      getDashboardMetrics(),
      getDashboardCharts(),
    ]);

    return {
      success: true,
      data: {
        activityData,
        metricsData,
        chartsData,
      },
    };
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function fetchDashboardActivity() {
  try {
    const data = await getDashboardActivity();
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching dashboard activity:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function fetchDashboardMetrics() {
  try {
    const data = await getDashboardMetrics();
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching dashboard metrics:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function fetchDashboardCharts() {
  try {
    const data = await getDashboardCharts();
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching dashboard charts:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
