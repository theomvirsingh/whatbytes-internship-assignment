"use client";

import React, { useState, useEffect } from "react";
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

const data = [
  { percentile: 0, numberOfStudent: 2 },
  { percentile: 10, numberOfStudent: 3 },
  { percentile: 20, numberOfStudent: 4 },
  { percentile: 25, numberOfStudent: 1 },
  { percentile: 30, numberOfStudent: 6 },
  { percentile: 35, numberOfStudent: 8 },
  { percentile: 40, numberOfStudent: 12 },
  { percentile: 45, numberOfStudent: 15 },
  { percentile: 50, numberOfStudent: 20 },
  { percentile: 55, numberOfStudent: 16 },
  { percentile: 60, numberOfStudent: 12 },
  { percentile: 70, numberOfStudent: 6 },
  { percentile: 75, numberOfStudent: 2 },
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
  const [userPercentile, setUserPercentile] = useState(30);
  const averagePercentile = 72;

  useEffect(() => {
    const savedStats = localStorage.getItem("userStats");
    if (savedStats) {
      const { percentile } = JSON.parse(savedStats);
      setUserPercentile(percentile);
    }

    const handleStatsUpdate = (event) => {
      setUserPercentile(event.detail.percentile);
    };

    window.addEventListener("statsUpdated", handleStatsUpdate);

    return () => {
      window.removeEventListener("statsUpdated", handleStatsUpdate);
    };
  }, []);

  const comparisonText =
    userPercentile > averagePercentile
      ? "higher than"
      : userPercentile < averagePercentile
      ? "lower than"
      : "the same as the";

  return (
    <div className="border border-gray-200 rounded-lg p-3 sm:p-4 mt-4 w-full shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
        <div>
          <h2 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">
            Comparison Graph
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            <span className="font-semibold text-gray-800">
              You scored {userPercentile}% percentile
            </span>{" "}
            which is {comparisonText} average percentile {averagePercentile}% of
            all the engineers who took this assessment
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded-full">📈 </div>
      </div>

      <div className="w-full h-[250px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            connectNulls={true}
            margin={{ top: 10, right: 20, left: 10, bottom: 20 }}
          >
            <XAxis
              dataKey="percentile"
              ticks={[0, 25, 50, 75, 100]}
              type="number"
              domain={[-2, 102]}
              allowDuplicatedCategory={false}
              tick={{ fontSize: 10 }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis hide domain={["dataMin - 1", "dataMax + 1"]} />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine
              x={userPercentile}
              stroke="#999"
              label={{
                value: "your percentile",
                position: "insideBottomLeft",
                fill: "#999",
                fontSize: 10,
              }}
            />
            <Line
              type="monotone"
              dataKey="numberOfStudent"
              stroke="#8B5CF6"
              strokeWidth={1.5}
              dot={{ r: 3, fill: "#fff", stroke: "#8B5CF6", strokeWidth: 1 }}
              activeDot={{ r: 5, fill: "#8B5CF6" }}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComparisonGraph;
