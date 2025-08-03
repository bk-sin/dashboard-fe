"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { getDashboardData } from "@/data/dashboard-data";

export const useDashboardData = () => {
  return useSuspenseQuery({
    queryKey: ["dashboardData"],
    queryFn: getDashboardData,
  });
};
