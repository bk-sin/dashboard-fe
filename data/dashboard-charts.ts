export const getDashboardCharts = async () => {
  // Simular delay de API más lento para charts
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    roleStats: [
      {
        id: 1,
        name: "Admin",
        slug: "admin",
        userCount: 5,
        percentage: 0.2,
        color: "#FF6384",
      },
      {
        id: 2,
        name: "Editor",
        slug: "editor",
        userCount: 20,
        percentage: 0.8,
        color: "#36A2EB",
      },
      {
        id: 3,
        name: "User",
        slug: "user",
        userCount: 1200,
        percentage: 49.0,
        color: "#FFCE56",
      },
      {
        id: 4,
        name: "Moderator",
        slug: "moderator",
        userCount: 125,
        percentage: 5.1,
        color: "#4BC0C0",
      },
      {
        id: 5,
        name: "Viewer",
        slug: "viewer",
        userCount: 1100,
        percentage: 44.9,
        color: "#9966FF",
      },
    ],
  };
};
