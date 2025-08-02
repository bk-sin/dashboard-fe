"use client";

import WelcomeMessage from "./welcome-message";

export function DashboardMain() {
  return (
    <div className="space-y-6">
      <WelcomeMessage />
      <div>
        <h1 className="text-3xl font-bold">Dashboard Principal</h1>
        <p className="text-muted-foreground">
          Resumen de métricas clave y rendimiento de tu tienda
        </p>
      </div>

      {/* <MetricsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <WeeklySalesChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomerStats />
        <TopProducts />
      </div>

      <RecentOrders /> */}
    </div>
  );
}
