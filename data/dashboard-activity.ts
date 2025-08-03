export const getDashboardActivity = async () => {
  // Simular delay moderado para activity
  await new Promise((resolve) => setTimeout(resolve, 400));

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
        id: "1",
        action: "User Login",
        user: "ana.gomez@example.com",
        timestamp: getRandomDate(5),
        status: "success",
      },
      {
        id: "2",
        action: "Profile Update",
        user: "carlos.rodriguez@example.com",
        timestamp: getRandomDate(10),
        status: "success",
      },
      {
        id: "3",
        action: "Failed Login",
        user: "unknown@example.com",
        timestamp: getRandomDate(12),
        status: "error",
      },
      {
        id: "4",
        action: "Role Change",
        user: "maria.lopez@example.com",
        timestamp: getRandomDate(20),
        status: "success",
      },
    ],
  };
};
