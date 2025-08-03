"use client";

import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { DashboardMain } from "../components/dashboard/dashboard-main";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { DashboardSkeleton } from "@/components/dashboard/dashboard-skeleton";

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert" className="p-4 bg-red-100 text-red-700 rounded">
      <p>Algo salió mal:</p>
      <pre className="text-sm">{error.message}</pre>
    </div>
  );
}

export default function Home() {
  return (
    <DashboardLayout>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardMain />
        </Suspense>
      </ErrorBoundary>
    </DashboardLayout>
  );
}
