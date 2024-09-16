import React from "react";
import { FaBookOpen } from "react-icons/fa";
import {
  MdOutlineAnalytics,
  MdOutlineSpaceDashboard,
  MdOutlineAssignmentTurnedIn,
} from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="min-w-[320px] bg-[#DAE2E9] h-screen flex flex-col justify-between p-4 shadow-md fixed top-0 left-0 z-[1000]">
      <div className="flex flex-col gap-6">
        <div className="h-[4rem] text-[35px] font-bold ml-5 tracking-wider text-center m-7">
          Logo
        </div>
        <div className="flex flex-col gap-6 text-2xl">
          <Link href="/">
            <div className="flex mb-2 justify-start gap-2 pl-5 hover:bg-blue-400 p-2 rounded-md group cursor-pointer hover:shadow-lg w-full hover:scale-105 transition-transform duration-300 active:bg-blue-400">
              <MdOutlineSpaceDashboard className="text-3xl text-gray-600 group-hover:text-white" />
              <h3 className="text-2xl text-gray-800 group-hover:text-white font-semibold ">
                Dashboard
              </h3>
            </div>
          </Link>

          <Link href="/analytics">
            <div className="flex mb-2 justify-start gap-2 pl-5 hover:bg-blue-400 p-2 rounded-md group cursor-pointer hover:shadow-lg w-full hover:scale-105 transition-transform duration-300">
              <MdOutlineAnalytics className="text-3xl text-gray-600 group-hover:text-white " />
              <h3 className="text-2xl text-gray-800 group-hover:text-white font-semibold ">
                Analytics
              </h3>
            </div>
          </Link>

          <div className="flex mb-2 justify-start gap-2 pl-5 hover:bg-blue-400 p-2 rounded-md group cursor-pointer hover:shadow-lg w-full hover:scale-105 transition-transform duration-300">
            <FaBookOpen className="text-3xl text-gray-600 group-hover:text-white " />
            <h3 className="text-2xl text-gray-800 group-hover:text-white font-semibold ">
              Courses
            </h3>
          </div>
          <div className="flex mb-2 justify-start gap-2 pl-5 hover:bg-blue-400 p-2 rounded-md group cursor-pointer hover:shadow-lg w-full hover:scale-105 transition-transform duration-300">
            <GrNotes className="text-3xl text-gray-600 group-hover:text-white " />
            <h3 className="text-2xl text-gray-800 group-hover:text-white font-semibold ">
              Notes
            </h3>
          </div>
          <div className="flex mb-2 justify-start gap-2 pl-5 hover:bg-blue-400 p-2 rounded-md group cursor-pointer hover:shadow-lg w-full hover:scale-105 transition-transform duration-300">
            <MdOutlineAssignmentTurnedIn className="text-3xl text-gray-600 group-hover:text-white " />
            <h3 className="text-2xl text-gray-800 group-hover:text-white font-semibold ">
              Assignments
            </h3>
          </div>
        </div>
      </div>
      <div className="flex gap-4 w-full items-center justify-center mb-5 text-2xl bg-blue-400 p-4 rounded-full text-white cursor-pointer hover:scale-105 transition-transform duration-300">
        <CgProfile className="w-8 h-8" />
        <h1>My Profile</h1>
      </div>
    </div>
  );
}

export default Sidebar;