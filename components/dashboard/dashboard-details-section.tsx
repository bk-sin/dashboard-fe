"use client";

import { Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { RoleDetailsCard } from "./role-details-card";
import { RecentUsersCard } from "./recent-users-card";
import { RecentActivity } from "../recent-activity";
import {
  useDashboardActivity,
  useDashboardCharts,
} from "@/store/dashboard-store";
import { ActivityItem, RecentUser, RoleStat } from "./types";
import { ErrorFallback, LoadingFallback } from "./dashboard-metrics-grid";

interface DashboardDetailsSectionProps {
  initialData?: {
    recentUsers: RecentUser[];
    recentActivity: ActivityItem[];
  };
  initialChartsData?: {
    roleStats: RoleStat[];
  };
}

export function DashboardDetailsSection({
  initialData,
  initialChartsData,
}: DashboardDetailsSectionProps) {
  const {
    data: activityData,
    isLoading: isActivityLoading,
    error: activityError,
    refetch: refetchActivity,
  } = useDashboardActivity(initialData);
  const {
    data: chartsData,
    isLoading: isChartsLoading,
    error: chartsError,
    refetch: refetchCharts,
  } = useDashboardCharts(initialChartsData);

  if (isActivityLoading || !activityData) {
    return <LoadingFallback />;
  }

  if (isChartsLoading || !chartsData) {
    return <LoadingFallback />;
  }

  if (activityError) {
    return <ErrorFallback error={activityError} refetch={refetchActivity} />;
  }
  if (chartsError) {
    return <ErrorFallback error={chartsError} refetch={refetchCharts} />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <RoleDetailsCard roleStats={chartsData.roleStats} />
      <RecentUsersCard recentUsers={activityData.recentUsers} />
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-4 w-4" /> Actividad Reciente
          </CardTitle>
          <CardDescription>Últimas acciones del sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <RecentActivity activities={activityData.recentActivity} />
        </CardContent>
      </Card>
    </div>
  );
}
