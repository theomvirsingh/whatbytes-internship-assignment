"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Dot,
} from "recharts";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

const data = [
  { percentile: 0, numberOfStudent: 2 },
  { percentile: 10, numberOfStudent: 3 },
  { percentile: 20, numberOfStudent: 4 },
  { percentile: 25, numberOfStudent: 1 }, // 👈 dummy point
  { percentile: 30, numberOfStudent: 6 },
  { percentile: 35, numberOfStudent: 8 },
  { percentile: 40, numberOfStudent: 12 },
  { percentile: 45, numberOfStudent: 15 },
  { percentile: 50, numberOfStudent: 20 },
  { percentile: 55, numberOfStudent: 16 },
  { percentile: 60, numberOfStudent: 12 },
  { percentile: 70, numberOfStudent: 6 },
  { percentile: 75, numberOfStudent: 2 }, // 👈 dummy point
  { percentile: 80, numberOfStudent: 4 },
  { percentile: 90, numberOfStudent: 4 },
  { percentile: 100, numberOfStudent: 2 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-300 rounded shadow text-sm">
        <p className="font-semibold">{payload[0].value}</p>
        <p className="text-purple-400">
          numberOfStudent : {payload[0].payload.numberOfStudent}
        </p>
      </div>
    );
  }
  return null;
};

const ComparisonGraph = () => {
  const userPercentile = 30;

  return (
    <div className="border border-gray-200 rounded-lg p-4 mt-4 w-[650px] shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-bold text-lg mb-2">Comparison Graph</h2>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">
              You scored 30% percentile
            </span>{" "}
            which is lower than the average percentile 72% of all the engineers
            who took this assessment
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded-full">
          <TbBrandGoogleAnalytics className="text-xl text-red-500" />
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} connectNulls={true}>
          <XAxis
            dataKey="percentile"
            ticks={[0, 25, 50, 75, 100]}
            type="number"
            domain={[0, 100]}
            allowDuplicatedCategory={false}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine
            x={userPercentile}
            stroke="#999"
            label={{
              value: "your percentile",
              position: "insideBottomLeft",
              fill: "#999",
            }}
          />
          <Line
            type="monotone"
            dataKey="numberOfStudent"
            stroke="#8B5CF6"
            strokeWidth={1}
            dot={{ r: 4, fill: "#fff", stroke: "#8B5CF6", strokeWidth: 1 }}
            activeDot={{ r: 6, fill: "#8B5CF6" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonGraph;
