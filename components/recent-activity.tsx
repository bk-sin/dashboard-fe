"use client";

import { Badge } from "@/components/ui/badge";
import { UserPlus, Shield, Ban, Power, AlertTriangle } from "lucide-react";
import { ActivityItem } from "./dashboard/types";

interface RecentActivityProps {
  activities: ActivityItem[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "user_created":
        return <UserPlus className="h-4 w-4 text-green-500" />;
      case "role_changed":
        return <Shield className="h-4 w-4 text-blue-500" />;
      case "user_blocked":
        return <Ban className="h-4 w-4 text-red-500" />;
      case "user_activated":
        return <Power className="h-4 w-4 text-green-500" />;
      case "login_failed":
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "info":
        return "default";
      case "warning":
        return "secondary";
      case "error":
        return "destructive";
      default:
        return "outline";
    }
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInMinutes = Math.floor(
      (now.getTime() - time.getTime()) / (1000 * 60),
    );

    if (diffInMinutes < 1) return "Ahora";
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h`;
    return `${Math.floor(diffInMinutes / 1440)}d`;
  };

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-3">
          <div className="mt-0.5">{getActivityIcon(activity.type)}</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">{activity.description}</p>
            <p className="text-xs text-muted-foreground truncate">
              {activity.user}
            </p>
          </div>
          <div className="text-right">
            <Badge
              variant={getSeverityColor(activity.severity)}
              className="text-xs"
            >
              {formatTimeAgo(activity.timestamp)}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
}
