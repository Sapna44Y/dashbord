"use client";

import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState } from "react";

interface BarChartProps {
  data: {
    labels: string[];
    individual: number[];
    nonIndividual: number[];
  };
}

export function KycBarChart({ data }: BarChartProps) {
  const [timeFilter, setTimeFilter] = useState<"today" | "yesterday" | "both">("both");
  const [viewFilter, setViewFilter] = useState<"individual" | "nonIndividual" | "both">("both");

  const filterButton = (label: string, value: any, currentValue: any, setter: any) => (
    <button
      onClick={() => setter(value)}
      className={`px-2 sm:px-3 py-1 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm
        ${currentValue === value
          ? "bg-blue-500 text-white shadow-sm"
          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
    >
      {label}
    </button>
  );

 
  const chartData = [];
  if (timeFilter === "today" || timeFilter === "both") {
    chartData.push({
      name: "Today",
      Individual: data.individual[0],
      "Non-Individual": data.nonIndividual[0],
    });
  }
  if (timeFilter === "yesterday" || timeFilter === "both") {
    chartData.push({
      name: "Yesterday",
      Individual: data.individual[1],
      "Non-Individual": data.nonIndividual[1],
    });
  }


  const todayIndividual = data.individual[0];
  const yesterdayIndividual = data.individual[1];
  const todayNonIndividual = data.nonIndividual[0];
  const yesterdayNonIndividual = data.nonIndividual[1];

  return (
    <div className="space-y-4 w-full">
      <div className=" w-full">
        <div className="w-full ">
          <div className="h-64 xs:h-72 sm:h-80 md:h-96 bg-white dark:bg-gray-800 p-3 sm:p-4 ">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" strokeOpacity={0.5} />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  tickMargin={10}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  tickMargin={10}
                />
                <Tooltip 
                  contentStyle={{
                    background: 'hsl(var(--background))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                    fontSize: 14
                  }}
                />
                <Legend 
                  wrapperStyle={{
                    paddingTop: 20,
                    fontSize: 12
                  }}
                />
                {(viewFilter === "individual" || viewFilter === "both") && (
                  <Bar 
                    dataKey="Individual" 
                    fill="#3b82f6" 
                    name="Individual" 
                    radius={[4, 4, 0, 0]}
                  />
                )}
                {(viewFilter === "nonIndividual" || viewFilter === "both") && (
                  <Bar 
                    dataKey="Non-Individual" 
                    fill="#10b981" 
                    name="Non-Individual"
                    radius={[4, 4, 0, 0]} 
                  />
                )}
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>

      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-500 dark:text-gray-400">Time Period</span>
          <div className="flex flex-wrap gap-2">
            {filterButton("Today", "today", timeFilter, setTimeFilter)}
            {filterButton("Yesterday", "yesterday", timeFilter, setTimeFilter)}
            {filterButton("Both", "both", timeFilter, setTimeFilter)}
          </div>
        </div>
        
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-500 dark:text-gray-400">View Type</span>
          <div className="flex flex-wrap gap-2">
            {filterButton("Individual", "individual", viewFilter, setViewFilter)}
            {filterButton("Non-Individual", "nonIndividual", viewFilter, setViewFilter)}
            {filterButton("Both", "both", viewFilter, setViewFilter)}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}