import React from "react";

const topics = [
  {
    title: "HTML Tools, Forms, History",
    percentage: 80,
    color: "blue",
    barColor: "bg-blue-500",
    bgColor: "bg-blue-100",
    textColor: "text-blue-500",
  },
  {
    title: "Tags & References in HTML",
    percentage: 60,
    color: "orange",
    barColor: "bg-orange-400",
    bgColor: "bg-orange-100",
    textColor: "text-orange-400",
  },
  {
    title: "Tables & References in HTML",
    percentage: 24,
    color: "red",
    barColor: "bg-red-400",
    bgColor: "bg-red-100",
    textColor: "text-red-400",
  },
  {
    title: "Tables & CSS Bascis",
    percentage: 96,
    color: "green",
    barColor: "bg-green-500",
    bgColor: "bg-green-100",
    textColor: "text-green-500",
  },
];

const SyllabusWise = () => {
  return (
    <div className="w-full p-4 sm:p-6 md:p-8 border border-gray-200 rounded-lg mt-5">
      <h2 className="font-semibold text-base sm:text-lg text-gray-900 mb-4 sm:mb-6 md:mb-9">
        Syllabus Wise Analysis
      </h2>
      {topics.map((item, index) => (
        <div key={index} className="mb-4 sm:mb-5">
          <div className="flex justify-between items-center mb-1 sm:mb-2">
            <p className="text-sm sm:text-[16px] text-gray-700">{item.title}</p>
          </div>
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <div
              className={`w-[75%] sm:w-[80%] h-[8px] sm:h-[10px] rounded-full ${item.bgColor}`}
            >
              <div
                className={`h-full rounded-full ${item.barColor}`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>

            <span
              className={`text-xs sm:text-sm font-semibold ${item.textColor}`}
            >
              {item.percentage}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SyllabusWise;
