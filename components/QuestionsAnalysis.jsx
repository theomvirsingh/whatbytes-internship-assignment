'use client'

import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const QuestionsAnalysis = () => {
  const total = 15;
  const correct = 10;
  const incorrect = total - correct;

  const data = [
    { name: 'Correct', value: correct },
    { name: 'Remaining', value: incorrect },
  ];

  const COLORS = ['#4F86F9', '#F1F5F9']; // Blue and light-gray

  return (
    <div className="w-[500px] p-6 border border-gray-200 rounded-lg mt-5">
      {/* Title & Score */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-900">Question Analysis</h2>
        <span className="text-indigo-600 font-semibold text-sm">{correct}/{total}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-6">
        <span className="font-semibold text-gray-900">
          You scored {correct} question correct out of {total}.
        </span>{' '}
        However it still needs some improvements
      </p>

      {/* Donut Chart + Emoji Center */}
      <div className="relative w-[180px] h-[180px] mx-auto">
        <PieChart width={180} height={180}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            startAngle={90}
            endAngle={-270} // 🔄 Reverse these to make clockwise
            dataKey="value"
            clockwise
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>

        {/* 🎯 emoji in center */}
        <div className="absolute inset-0 flex items-center justify-center text-2xl">
          🎯
        </div>
      </div>
    </div>
  );
};

export default QuestionsAnalysis;
