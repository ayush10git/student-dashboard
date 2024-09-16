"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register necessary components from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PerformanceCard = ({ value, total }) => {
  // Calculate percentage
  const percentage = ((value / total) * 100).toFixed(1);

  // Data configuration for the Doughnut chart
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage], // The percentage and the remaining part
        backgroundColor: ["#60A5FA", "#E0E0E0"], // Color for the percentage and background
        borderWidth: 0, // Remove borders to create a smoother look
        cutout: "80%", // Hollow center to create a gauge effect
        circumference: 180, // Create a half-circle (180 degrees)
        rotation: -90, // Rotate to make it a gauge (starts from the bottom)
      },
    ],
  };

  // Options configuration for the Doughnut chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: false }, // Disable tooltip
      legend: { display: false }, // Hide the legend
    },
  };

  return (
    <div className="w-[800px] h-[400px] bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <h1 className="text-[29px] font-bold mb-4">Overall Performance</h1>
      <hr />
      <div className="flex justify-center items-center flex-wrap gap-[6rem] h-[80%]">
        <div className="relative w-[300px] h-[150px] flex-shrink-0">
          {/* Render the customized Doughnut chart as a gauge */}
          <Doughnut data={data} options={options} />
          {/* Display the actual value and total in the center */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-xl font-bold">
            <span>
              {value} / {total}
            </span>
            <span className="text-sm text-gray-500">({percentage}%)</span>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <span className="text-gray-500 font-light">Profiling for</span>
          <h2 className="text-xl font-semibold">Computer Science</h2>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
