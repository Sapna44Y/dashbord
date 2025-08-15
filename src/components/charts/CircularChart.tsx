"use client";

import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
  Tooltip
} from "recharts";

interface CircularChartProps {
  data: {
    solicited: number;
    received: number;
    consumed: number;
    pending: number;
  };
}

export function CircularChart({ data }: CircularChartProps) {
  const chartData = [
    { name: "Solicited", value: data.solicited, fill: "#009688" },
    { name: "Received", value: data.received, fill: "#1565C0" },
    { name: "Consumed", value: data.consumed, fill: "#42A5F5" },
    { name: "Pending", value: data.pending, fill: "#FF5252" },
  ];

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="20%"
          outerRadius="82%"  
          barSize={12}
          data={chartData}
          startAngle={100}
          endAngle={-260}
          margin={{
            top: 0,
            right: 90,  
            bottom: 0,
            left: 20,
          }}
        >
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="value"
            cornerRadius={10}
          />
          <Tooltip />
          <Legend 
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            align="right"
            wrapperStyle={{
              width: '100px',  
              right: '-10px',  
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}