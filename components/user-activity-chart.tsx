"use client";

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { day: "Lun", registros: 12, logins: 234 },
  { day: "Mar", registros: 19, logins: 287 },
  { day: "Mié", registros: 8, logins: 198 },
  { day: "Jue", registros: 15, logins: 312 },
  { day: "Vie", registros: 22, logins: 398 },
  { day: "Sáb", registros: 6, logins: 156 },
  { day: "Dom", registros: 4, logins: 123 },
];

export function UserActivityChart() {
  return (
    <ChartContainer
      config={{
        registros: {
          label: "Nuevos Registros",
          color: "hsl(var(--chart-1))",
        },
        logins: {
          label: "Logins",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[200px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="registros"
            stroke="var(--color-registros)"
            strokeWidth={2}
            dot={{ fill: "var(--color-registros)" }}
          />
          <Line
            type="monotone"
            dataKey="logins"
            stroke="var(--color-logins)"
            strokeWidth={2}
            dot={{ fill: "var(--color-logins)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
