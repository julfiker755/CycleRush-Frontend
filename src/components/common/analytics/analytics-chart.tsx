"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  BarChart,
  Bar,
} from "recharts";

const chartConfig: ChartConfig = {
  xAxis: {
    label: "Month",
  },
  yAxis: {
    label: "Value",
  },
};
// Fake chart data for demonstration
const chartDataset = {
  revenue: [
    { month: "Jan", value: 12000 },
    { month: "Feb", value: 18000 },
    { month: "Mar", value: 14000 },
    { month: "Apr", value: 20000 },
    { month: "May", value: 22000 },
  ],
  orders: [
    { month: "Jan", value: 150 },
    { month: "Feb", value: 300 },
    { month: "Mar", value: 250 },
    { month: "Apr", value: 400 },
    { month: "May", value: 380 },
  ],
  users: [
    { month: "Jan", value: 50 },
    { month: "Feb", value: 75 },
    { month: "Mar", value: 90 },
    { month: "Apr", value: 120 },
    { month: "May", value: 100 },
  ],
};

export default function AnalyticsChart() {
  const [chartType, setChartType] = useState<"revenue" | "orders" | "users">(
    "revenue"
  );
  const [chartView, setChartView] = useState<"line" | "bar">("line");

  const chartData = chartDataset[chartType];

  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-semibold">Overview</h4>
          <div className="flex gap-4">
            {/* Chart Type Selector */}
            <Select
              value={chartType}
              onValueChange={(val) => setChartType(val as typeof chartType)}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Chart Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="revenue">Revenue</SelectItem>
                <SelectItem value="orders">Orders</SelectItem>
                <SelectItem value="users">Users</SelectItem>
              </SelectContent>
            </Select>

            {/* Chart View Selector */}
            <Select
              value={chartView}
              onValueChange={(val) => setChartView(val as typeof chartView)}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Chart View" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="line">Trend View</SelectItem>
                <SelectItem value="bar">Analysis View</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
          {chartView === "line" ? (
            <LineChart data={chartData} width={600} height={300}>
              <CartesianGrid strokeDasharray="6 6" />
              <XAxis dataKey="month" tickLine={false} tickMargin={10} />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="oklch(0.637 0.237 25.331)"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          ) : (
            <BarChart data={chartData} width={600} height={300}>
              <CartesianGrid strokeDasharray="6 6" />
              <XAxis dataKey="month" tickLine={false} tickMargin={10} />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" fill="oklch(0.637 0.237 25.331)" />
            </BarChart>
          )}
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
