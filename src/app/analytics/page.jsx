"use client";
import React, { useState } from "react";
import SubjectScoreCard from "@/components/SubjectScoreCard";
import LineGraph from "@/components/LineGraph";
import AverageScoreCard from "@/components/AverageScoreCard";
import SolvedQuestions from "@/components/SolvedQuestions";
import Todo from "@/components/Todo";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("DBMS");

  const subjects = ["DBMS", "OOPS", "OS", "CN"];

  // Test results for different subjects
  const testResultsDBMS = [
    78, 85, 92, 88, 95, 76, 84, 93, 89, 90, 77, 88, 91, 85, 87,
  ];
  const testResultsOOPs = [
    72, 81, 89, 83, 91, 79, 82, 87, 85, 88, 80, 83, 89, 86, 90,
  ];
  const testResultsOS = [
    68, 75, 82, 78, 87, 73, 80, 85, 83, 86, 74, 79, 84, 81, 88,
  ];
  const testResultsNetworks = [
    85, 90, 88, 92, 94, 87, 89, 91, 90, 93, 86, 88, 92, 89, 91,
  ];

  // Example data for solved questions, average score, etc.
  const totalTests = 10;
  const totalMarksPerTest = 100;

  const subjectData = {
    DBMS: {
      testsAttended: 250,
      averageScore: 72,
      easySolved: 50,
      easyTotal: 82,
      mediumSolved: 48,
      mediumTotal: 85,
      hardSolved: 31,
      hardTotal: 63,
    },
    OOPS: {
      testsAttended: 270,
      averageScore: 75,
      easySolved: 60,
      easyTotal: 90,
      mediumSolved: 50,
      mediumTotal: 80,
      hardSolved: 35,
      hardTotal: 70,
    },
    OS: {
      testsAttended: 280,
      averageScore: 78,
      easySolved: 55,
      easyTotal: 85,
      mediumSolved: 52,
      mediumTotal: 82,
      hardSolved: 38,
      hardTotal: 65,
    },
    CN: {
      testsAttended: 300,
      averageScore: 80,
      easySolved: 65,
      easyTotal: 92,
      mediumSolved: 55,
      mediumTotal: 87,
      hardSolved: 40,
      hardTotal: 70,
    },
  };

  return (
    <div className="p-9 flex flex-col gap-4 relative top-[100px] left-[320px] w-[calc(100vw-320px)]">
      <div className="flex gap-6 mb-4 justify-center">
        {subjects.map((subject) => (
          <button
            key={subject}
            onClick={() => setActiveTab(subject)}
            className={`px-4 py-2 text-lg font-medium ${
              activeTab === subject
                ? "border-b-blue-500 border-b-2 text-blue-500"
                : "bg-white text-gray-700 hover:bg-gray-300"
            }`}
          >
            {subject}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {activeTab === "DBMS" && (
          <div className="flex flex-col gap-8">
            <div className="flex gap-8 w-full">
              <SubjectScoreCard subject="DBMS" />
              <AverageScoreCard
                totalTests={totalTests}
                testsAttended={subjectData.DBMS.testsAttended}
                totalMarksPerTest={totalMarksPerTest}
                averageScore={subjectData.DBMS.averageScore}
              />
              <SolvedQuestions
                easySolved={subjectData.DBMS.easySolved}
                easyTotal={subjectData.DBMS.easyTotal}
                mediumSolved={subjectData.DBMS.mediumSolved}
                mediumTotal={subjectData.DBMS.mediumTotal}
                hardSolved={subjectData.DBMS.hardSolved}
                hardTotal={subjectData.DBMS.hardTotal}
              />
            </div>
            <div className="flex gap-9">
              <LineGraph subject="DBMS" testResults={testResultsDBMS} />
              <Todo text="Make a note" />
            </div>
          </div>
        )}

        {activeTab === "OOPS" && (
          <div className="flex flex-col gap-8">
            <div className="flex gap-8 w-full">
              <SubjectScoreCard subject="OOPS" />
              <AverageScoreCard
                totalTests={totalTests}
                testsAttended={subjectData.OOPS.testsAttended}
                totalMarksPerTest={totalMarksPerTest}
                averageScore={subjectData.OOPS.averageScore}
              />
              <SolvedQuestions
                easySolved={subjectData.OOPS.easySolved}
                easyTotal={subjectData.OOPS.easyTotal}
                mediumSolved={subjectData.OOPS.mediumSolved}
                mediumTotal={subjectData.OOPS.mediumTotal}
                hardSolved={subjectData.OOPS.hardSolved}
                hardTotal={subjectData.OOPS.hardTotal}
              />
            </div>
            <div className="flex gap-9">
              <LineGraph subject="OOPS" testResults={testResultsOOPs} />
              <Todo text="Make a note" />
            </div>
          </div>
        )}

        {activeTab === "OS" && (
          <div className="flex flex-col gap-8">
            <div className="flex gap-8 w-full">
              <SubjectScoreCard subject="OS" />
              <AverageScoreCard
                totalTests={totalTests}
                testsAttended={subjectData.OS.testsAttended}
                totalMarksPerTest={totalMarksPerTest}
                averageScore={subjectData.OS.averageScore}
              />
              <SolvedQuestions
                easySolved={subjectData.OS.easySolved}
                easyTotal={subjectData.OS.easyTotal}
                mediumSolved={subjectData.OS.mediumSolved}
                mediumTotal={subjectData.OS.mediumTotal}
                hardSolved={subjectData.OS.hardSolved}
                hardTotal={subjectData.OS.hardTotal}
              />
            </div>
            <div className="flex gap-9">
              <LineGraph subject="OS" testResults={testResultsOS} />
              <Todo text="Make a note" />
            </div>
          </div>
        )}

        {activeTab === "CN" && (
          <div className="flex flex-col gap-8">
            <div className="flex gap-8 w-full">
              <SubjectScoreCard subject="CN" />
              <AverageScoreCard
                totalTests={totalTests}
                testsAttended={subjectData.CN.testsAttended}
                totalMarksPerTest={totalMarksPerTest}
                averageScore={subjectData.CN.averageScore}
              />
              <SolvedQuestions
                easySolved={subjectData.CN.easySolved}
                easyTotal={subjectData.CN.easyTotal}
                mediumSolved={subjectData.CN.mediumSolved}
                mediumTotal={subjectData.CN.mediumTotal}
                hardSolved={subjectData.CN.hardSolved}
                hardTotal={subjectData.CN.hardTotal}
              />
            </div>
            <div className="flex gap-9">
              <LineGraph subject="CN" testResults={testResultsNetworks} />
              <Todo text="Make a note" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;
