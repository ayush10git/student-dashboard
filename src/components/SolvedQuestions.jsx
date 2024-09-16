"use client";
import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register necessary components from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const SolvedQuestions = ({
  easySolved,
  easyTotal,
  mediumSolved,
  mediumTotal,
  hardSolved,
  hardTotal,
}) => {
  // Calculate the total number of questions solved
  const totalSolved = easySolved + mediumSolved + hardSolved;
  const totalQuestions = easyTotal + mediumTotal + hardTotal;

  // Calculate percentages for each category
  const easyPercentage = ((easySolved / easyTotal) * 100).toFixed(1);
  const mediumPercentage = ((mediumSolved / mediumTotal) * 100).toFixed(1);
  const hardPercentage = ((hardSolved / hardTotal) * 100).toFixed(1);

  // State for animated progress bar widths
  const [easyWidth, setEasyWidth] = useState(0);
  const [mediumWidth, setMediumWidth] = useState(0);
  const [hardWidth, setHardWidth] = useState(0);

  useEffect(() => {
    // Animate progress bars
    const animateBars = () => {
      setEasyWidth(easyPercentage);
      setMediumWidth(mediumPercentage);
      setHardWidth(hardPercentage);
    };

    // Start animation on mount
    animateBars();
  }, [easyPercentage, mediumPercentage, hardPercentage]);

  // Data configuration for the Doughnut chart
  const data = {
    datasets: [
      {
        data: [totalSolved, totalQuestions - totalSolved], // Data for each category
        backgroundColor: ["#60A5FA", "#E0E0E0"], // Colors for each category
        borderWidth: 0, // Remove borders to create a smoother look
        cutout: "90%", // Adjust hollow center to make the doughnut thicker
      },
    ],
  };

  // Options configuration for the Doughnut chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            const percentage = ((value / totalQuestions) * 100).toFixed(1);
            return `${value} (${percentage}%)`;
          },
        },
      },
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  return (
    <div className="w-[820px] h-[400px] bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <h1 className="text-[29px] font-bold mb-4">Questions Solved</h1>
      <hr />
      <div className="flex justify-around items-center h-[90%] gap-6">
        <div className="relative w-[200px] h-[200px]">
          {/* Render the Doughnut chart */}
          <Doughnut data={data} options={options} />
          {/* Display the actual values and total in the center */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-xl font-bold">
            <span>
              {totalSolved}/{totalQuestions}
            </span>
            <span className="text-sm text-gray-500">Questions</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[300px]">
          {/* Progress bar for easy questions */}
          <div className="flex flex-col items-center">
            <div className="text-sm text-gray-700 mb-1">
              {easySolved}/{easyTotal}
            </div>
            <div className="bg-gray-200 h-2 w-full rounded-lg overflow-hidden">
              <div
                className="bg-green-500 h-2 rounded-lg"
                style={{
                  width: `${easyWidth}%`,
                  transition: "width 1s ease-out",
                }}
              ></div>
            </div>
          </div>
          {/* Progress bar for medium questions */}
          <div className="flex flex-col items-center">
            <div className="text-sm text-gray-700 mb-1">
              {mediumSolved}/{mediumTotal}
            </div>
            <div className="bg-gray-200 h-2 w-full rounded-lg overflow-hidden">
              <div
                className="bg-yellow-500 h-2 rounded-lg"
                style={{
                  width: `${mediumWidth}%`,
                  transition: "width 1s ease-out",
                }}
              ></div>
            </div>
          </div>
          {/* Progress bar for hard questions */}
          <div className="flex flex-col items-center">
            <div className="text-sm text-gray-700 mb-1">
              {hardSolved}/{hardTotal}
            </div>
            <div className="bg-gray-200 h-2 w-full rounded-lg overflow-hidden">
              <div
                className="bg-red-500 h-2 rounded-lg"
                style={{
                  width: `${hardWidth}%`,
                  transition: "width 1s ease-out",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolvedQuestions;
