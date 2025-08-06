import { ActivityItem, RecentUser } from "@/components/dashboard/types";

interface DashboardActivityData {
  recentUsers: RecentUser[];
  recentActivity: ActivityItem[];
}

export const getDashboardActivity =
  async (): Promise<DashboardActivityData> => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const now = new Date();
    const getRandomDate = (minutesAgo: number) => {
      const date = new Date(now.getTime() - minutesAgo * 60000);
      return date.toISOString();
    };

    return {
      recentUsers: [
        {
          id: "1",
          firstName: "Ana",
          lastName: "Gomez",
          email: "ana.gomez@example.com",
          role: "Editor",
          createdAt: getRandomDate(15),
        },
        {
          id: "2",
          firstName: "Carlos",
          lastName: "Rodriguez",
          email: "carlos.rodriguez@example.com",
          role: "User",
          createdAt: getRandomDate(30),
        },
        {
          id: "3",
          firstName: "Maria",
          lastName: "Lopez",
          email: "maria.lopez@example.com",
          role: "Moderator",
          createdAt: getRandomDate(45),
        },
        {
          id: "4",
          firstName: "Luis",
          lastName: "Martinez",
          email: "luis.martinez@example.com",
          role: "User",
          createdAt: getRandomDate(60),
        },
      ],
      recentActivity: [
        {
          id: 1,
          type: "user_created",
          user: "ana.gomez@example.com",
          timestamp: getRandomDate(5),
          severity: "info",
          description: "Nuevo usuario creado",
        },
        {
          id: 2,
          type: "role_changed",
          user: "carlos.rodriguez@example.com",
          timestamp: getRandomDate(10),
          severity: "info",
          description: "Rol de usuario cambiado a Editor.",
        },
        {
          id: 3,
          type: "login_failed",
          user: "unknown@example.com",
          timestamp: getRandomDate(12),
          severity: "error",
          description: "Error para iniciar sesion. Usuario desconocido.",
        },
        {
          id: 4,
          type: "user_blocked",
          user: "maria.lopez@example.com",
          timestamp: getRandomDate(20),
          severity: "warning",
          description: "Usuario bloqueado por múltiples intentos fallidos.",
        },
      ],
    };
  };
