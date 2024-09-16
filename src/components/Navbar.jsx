"use client";
import React from "react";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-[calc(100vw-330px)] h-[100px] p-5 shadow-md fixed top-0 left-[320px] z-[1000] bg-white">
      <div className="">
        <h2 className="text-2xl tracking-wide">Hi, Julia</h2>
        <span className="text-sm text-gray-400">Today, 15th Sep 2024</span>
      </div>
      <div className="flex gap-8">
        <CiBellOn className="text-3xl" />
        <div className="flex gap-2 items-center">
          <CiSearch className="text-3xl " />
          <input
            type="text"
            placeholder="search"
            className="w-[15rem] h-8 border-b-2 focus:outline-none text-[20px] text-gray-500"
          />
        </div>
        <span className="flex items-center gap-2 text-[20px]">
          <AiOutlineLogout />
          Logout
        </span>
      </div>
    </div>
  );
};

export default Navbar;