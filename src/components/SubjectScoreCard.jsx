import React from "react";

const SubjectScoreCard = ({subject}) => {
  return (
    <div className="flex flex-col w-[500px] gap-3 items-center shadow-md p-6">
      <h1 className="text-[1.9rem] font-bold">{subject}</h1>
      <hr />
      <div className="flex gap-[2.8rem]">
        <div className="flex flex-col gap-3">
          <div className="">
            <span className="text-lg text-gray-400">Questions Attended</span>
            <h2 className="text-[2.6rem] font-bold">125</h2>
          </div>
          <div className="">
            <span className="text-lg text-gray-400">Your Score</span>
            <h2 className="text-[2.6rem] text-blue-400 font-bold">513</h2>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="">
            <span className="text-lg text-gray-400">Solved Correctly</span>
            <h2 className="text-[2.6rem] font-bold">110</h2>
          </div>
          <div className="">
            <span className="text-lg text-gray-400">Accuracy</span>
            <h2 className="text-[2.6rem] text-green-500 font-bold">90%</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectScoreCard;
