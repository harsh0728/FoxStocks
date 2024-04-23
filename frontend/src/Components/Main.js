import React from "react";
import { CiBellOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import profile from "../Assests/profile.jpeg";
import Content from "./Content";

const Main = () => {
  return (
    <div className="pt-6">
      <div className="flex justify-around place-content-center items-center px-4 ">
        <div className="text-lg font-semibold flex justify-start pr-[400px] ">Hello, Matt</div>
        <div className="flex items-center space-x-4 w-[50%]">
          <div className="relative w-[100%] ">
            <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              className="w-[400px] pl-10 pr-4 py-2  bg-gray-100 rounded-md text-gray-600 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring focus:ring-blue-400"
              type="text"
              placeholder="Search for stocks and more"
            />
          </div>
          <div className="flex">
            <CiBellOn className="text-gray-400 size-6" />
          </div>
          <img className="w-12 h-12 rounded-full" src={profile} alt="Profile" />
        </div>
      </div>
      <div className="bg-gray-100 h-full">
        <Content />
      </div>
    </div>
  );
};

export default Main;
