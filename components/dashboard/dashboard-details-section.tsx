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
import { RoleStat, RecentUser, ActivityItem } from "./types";

interface DashboardDetailsSectionProps {
  roleStats: RoleStat[];
  recentUsers: RecentUser[];
  recentActivity: ActivityItem[];
}

export function DashboardDetailsSection({
  roleStats,
  recentUsers,
  recentActivity,
}: DashboardDetailsSectionProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <RoleDetailsCard roleStats={roleStats} />
      <RecentUsersCard recentUsers={recentUsers} />
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-4 w-4" /> Actividad Reciente
          </CardTitle>
          <CardDescription>Últimas acciones del sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <RecentActivity activities={recentActivity} />
        </CardContent>
      </Card>
    </div>
  );
}
