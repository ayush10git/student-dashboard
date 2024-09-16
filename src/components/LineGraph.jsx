"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineGraph = ({ subject, testResults }) => {
  const data = {
    labels: testResults.map((_, index) => `Test ${index + 1}`),
    datasets: [
      {
        label: `${subject} Test Scores`,
        data: testResults,
        fill: false,
        backgroundColor: "#60A5FA", 
        borderColor: "#60A5FA",
        pointBackgroundColor: "#1E40AF",
        pointBorderColor: "#fff",
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="w-[1000px] h-[550px] p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {subject} Test Results
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
