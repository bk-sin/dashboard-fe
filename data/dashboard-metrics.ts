export const getDashboardMetrics = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    stats: {
      totalUsers: 2450,
      newUsersThisMonth: 180,
      activeUsers: 1980,
      blockedUsers: 15,
      unverifiedUsers: 30,
      loginAttemptsToday: 1250,
      failedLoginsToday: 42,
      totalEndpoints: 48,
      protectedEndpoints: 42,
      newUsersToday: 25,
      newUsersThisWeek: 95,
      totalRoles: 5,
      activeRoles: 4,

      activeUsersPercentage: Math.round((1980 / 2450) * 100),
      attentionRequiredCount: 15 + 30, // 45
      loginSuccessRate: Math.round(((1250 - 42) / 1250) * 100),
    },
  };
};
