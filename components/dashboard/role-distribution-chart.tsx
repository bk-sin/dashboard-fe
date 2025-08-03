"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { RoleStat } from "./types";

interface RoleDistributionChartProps {
  data: RoleStat[];
}

export function RoleDistributionChart({ data }: RoleDistributionChartProps) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={80}
          paddingAngle={2}
          dataKey="userCount"
          nameKey="name"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number, name: string) => [
            `${value} usuarios`,
            name,
          ]}
          labelFormatter={(name: string) => name}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
