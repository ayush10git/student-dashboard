import React from "react";

const AverageScoreCard = ({
  totalTests,
  testsAttended,
  totalMarksPerTest = 100,
  averageScore,
}) => {
  const averagePercentage = ((averageScore / totalMarksPerTest) * 100).toFixed(
    1
  );

  return (
    <div className="flex flex-col w-[500px] gap-3 items-center shadow-md p-6">
      <h1 className="text-[1.9rem] font-bold">Average Test Performance</h1>
      <hr />
      <div className="flex gap-[2.8rem]">
        <div className="flex flex-col gap-3">
          <div className="">
            <span className="text-lg text-gray-400">Total Tests Given</span>
            <h2 className="text-[2.6rem] font-bold">{totalTests}</h2>
          </div>
          <div className="">
            <span className="text-lg text-gray-400">
              Total Questions Attended
            </span>
            <h2 className="text-[2.6rem] font-bold">{testsAttended}</h2>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="">
            <span className="text-lg text-gray-400">Average Score</span>
            <h2 className="text-[2.6rem] text-blue-400 font-bold">
              {averageScore}
            </h2>
          </div>
          <div className="">
            <span className="text-lg text-gray-400">Average Percentage</span>
            <h2 className="text-[2.6rem] text-green-500 font-bold">
              {averagePercentage}%
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageScoreCard;
