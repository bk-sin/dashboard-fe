"use server";

import { revalidateTag } from "next/cache";

export function revalidateDashboardData() {
  revalidateTag("dashboardData");
}
