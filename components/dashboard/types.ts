export interface DashboardStats {
  totalUsers: number;
  newUsersThisMonth: number;
  activeUsers: number;
  blockedUsers: number;
  unverifiedUsers: number;
  loginAttemptsToday: number;
  failedLoginsToday: number;
  totalEndpoints: number;
  protectedEndpoints: number;
  newUsersToday: number;
  newUsersThisWeek: number;
  totalRoles: number;
  activeRoles: number;
  // Calculados en backend
  activeUsersPercentage: number;
  attentionRequiredCount: number;
  loginSuccessRate: number;
}

export interface DashboardPresentation {
  activeUsersDisplay: string;
  newUsersDisplay: string;
  successRateDisplay: string;
  attentionDisplay: string;
  attentionRequiredColor: string;
  successRateColor: string;
  successRateIcon: React.ComponentType<{ className?: string }>;
  newUsersIcon: React.ComponentType<{ className?: string }>;
  metricCardClassName: string;
}

export interface RoleStat {
  id: number;
  name: string;
  slug: string;
  userCount: number;
  percentage: number;
  color: string;
}

export interface RecentUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAt: string;
}

export interface DashboardData {
  stats: DashboardStats;
  roleStats: RoleStat[];
  recentUsers: RecentUser[];
  recentActivity: ActivityItem[];
}

export interface ActivityItem {
  id: number;
  type:
    | "user_created"
    | "role_changed"
    | "user_blocked"
    | "user_activated"
    | "login_failed";
  description: string;
  user: string;
  timestamp: string;
  severity: "info" | "warning" | "error";
}
