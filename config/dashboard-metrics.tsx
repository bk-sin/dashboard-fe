import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Globe,
  Shield,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import {
  DashboardStats,
  DashboardPresentation,
} from "@/components/dashboard/types";

interface MetricConfig {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  valueKey?: keyof DashboardStats;
  getValue?: (presentation: DashboardPresentation) => string | number;
  getDescription: (
    stats: DashboardStats,
    presentation: DashboardPresentation,
  ) => React.ReactNode;
  getValueClassName?: (presentation: DashboardPresentation) => string;
}

export const MAIN_METRICS_CONFIG: MetricConfig[] = [
  {
    id: "total-users",
    title: "Total Usuarios",
    icon: Users,
    valueKey: "totalUsers",
    getDescription: (stats, presentation) => (
      <span className="text-green-600 flex items-center">
        <TrendingUp className="h-3 w-3 mr-1" />
        {presentation.newUsersDisplay}
      </span>
    ),
  },
  {
    id: "active-users",
    title: "Usuarios Activos",
    icon: UserCheck,
    valueKey: "activeUsers",
    getDescription: (stats, presentation) => presentation.activeUsersDisplay,
  },
  {
    id: "attention-required",
    title: "Requieren Atención",
    icon: AlertTriangle,
    valueKey: "attentionRequiredCount",
    getDescription: (stats, presentation) => presentation.attentionDisplay,
    getValueClassName: (presentation) => presentation.attentionRequiredColor,
  },
  {
    id: "daily-activity",
    title: "Actividad Hoy",
    icon: Activity,
    valueKey: "loginAttemptsToday",
    getDescription: (stats) => (
      <span className="text-red-600">
        {stats.failedLoginsToday} intentos fallidos
      </span>
    ),
  },
];

export const SECONDARY_METRICS_CONFIG: MetricConfig[] = [
  {
    id: "endpoints",
    title: "Endpoints",
    icon: Globe,
    valueKey: "totalEndpoints",
    getDescription: (stats) => `${stats.protectedEndpoints} protegidos`,
  },
  {
    id: "new-today",
    title: "Nuevos Hoy",
    icon: TrendingUp,
    valueKey: "newUsersToday",
    getDescription: (stats) => `+${stats.newUsersThisWeek} esta semana`,
  },
  {
    id: "success-rate",
    title: "Tasa de Éxito",
    icon: CheckCircle,
    getValue: (presentation) => presentation.successRateDisplay,
    getDescription: () => "Logins exitosos",
    getValueClassName: (presentation) => presentation.successRateColor,
  },
  {
    id: "active-roles",
    title: "Roles Activos",
    icon: Shield,
    valueKey: "activeRoles",
    getDescription: (stats) => `de ${stats.totalRoles} totales`,
  },
];
