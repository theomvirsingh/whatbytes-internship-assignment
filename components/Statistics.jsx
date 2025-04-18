"use client";
import React, { useState, useEffect } from "react";

const Statistics = () => {
  const [stats, setStats] = useState({
    rank: 4,
    percentile: 90,
    score: 12,
  });

  useEffect(() => {
    const savedStats = localStorage.getItem("userStats");
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }

    const handleStatsUpdate = (event) => {
      setStats(event.detail);
    };

    window.addEventListener("statsUpdated", handleStatsUpdate);

    return () => {
      window.removeEventListener("statsUpdated", handleStatsUpdate);
    };
  }, []);

  return (
    <div className="border border-gray-200 rounded-lg p-4 mt-4 w-full">
      <h2 className="font-bold text-lg mb-4 text-gray-900">Quick Statistics</h2>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex flex-row gap-2 sm:gap-3 items-center w-full sm:w-[28%] border-b sm:border-b-0 sm:border-r border-gray-200 mb-3 sm:mb-2.5 pb-3 sm:pb-0">
          <div className="bg-gray-100 text-base sm:text-xl rounded-full p-2 sm:p-3 mb-1">
            🏆
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-lg sm:text-xl text-gray-900">
              {stats.rank}
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">YOUR RANK</div>
          </div>
        </div>

        <div className="flex flex-row gap-2 sm:gap-3 items-center w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-200 mb-3 sm:mb-2.5 pb-3 sm:pb-0">
          <div className="bg-gray-100 text-base sm:text-xl rounded-full p-2 sm:p-3 mb-1">
            🗓️
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-lg sm:text-xl text-gray-900">
              {stats.percentile}%
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">PERCENTILE</div>
          </div>
        </div>

        <div className="flex flex-row gap-2 sm:gap-3 items-center w-full sm:w-1/3 mb-2.5">
          <div className="bg-gray-100 text-base sm:text-xl rounded-full p-2 sm:p-3 mb-1">
            ✅
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-lg sm:text-xl text-gray-900">
              {stats.score} / 15
            </div>
            <div className="text-gray-400 text-xs sm:text-sm">
              CORRECT ANSWERS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
