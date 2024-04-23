import { React, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { TiShoppingBag } from "react-icons/ti";
import { TbChartCandle } from "react-icons/tb";
import { CiBank } from "react-icons/ci";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdOutlinePhotoAlbum } from "react-icons/md";
import { TbVectorBezierArc } from "react-icons/tb";

const Dashboard = () => {
  const [bgselect, setBgSelect] = useState("dashboard");

  const selectChanges=(sel)=>{
    setBgSelect(sel);
  }

  return (
    <div className="flex flex-col  justify-center w-full items-center">
      <div className="text-[#7E7D82] pr-[146px]  items-center flex justify-start pt-3">
        <p className="items-center  pl-6 ">User Panel</p>
      </div>
      <div className=" flex items-center gap-2 bg-[#EFE9FF] w-[95%] rounded-md h-11 justify-start pl-5 ">
        <div className="text-[#6425FE]">
          <MdDashboard />
        </div>
        <div className="text-[#6425FE] ">
          <p className="font-500 ">Dashboard</p>
        </div>
      </div>
      <div className=" flex items-center gap-2  w-full h-10 justify-start pl-6 ">
        <div className="text-[#84828A]">
          <TiShoppingBag />
        </div>
        <div className="text-[#84828A] ">
          <p className="font-500 ">Portfolio</p>
        </div>
      </div>

      <div className=" flex items-center gap-2  w-full h-10 justify-start pl-6 ">
        <div className="text-[#84828A]">
          <TbChartCandle />
        </div>
        <div className="text-[#84828A] ">
          <p className="font-500 ">Trading & Market</p>
        </div>
      </div>
      <div className=" flex items-center gap-2  w-full h-10 justify-start pl-6 ">
        <div className="text-[#84828A]">
          <MdOutlinePhotoAlbum />
        </div>
        <div className="text-[#84828A] ">
          <p className="font-500 ">Research Portal</p>
        </div>
      </div>
      <div className=" flex items-center gap-2  w-full h-10 justify-start pl-6 ">
        <div className="text-[#84828A]">
          <CiBank />
        </div>
        <div className="text-[#84828A] ">
          <p className="font-500 ">Wallet Transfer Pay</p>
        </div>
      </div>
      <div className=" flex items-center gap-2  w-full h-10 justify-start pl-6 ">
        <div className="text-[#84828A]">
          <FaArrowRightArrowLeft />
        </div>
        <div className="text-[#84828A] ">
          <p className="font-500 ">Reporting & Transaction</p>
        </div>
      </div>
      <div className=" flex items-center gap-2  w-full h-10 justify-start pl-6 ">
        <div className="text-[#84828A]">
          <TbVectorBezierArc />
        </div>
        <div className="text-[#84828A] ">
          <p className="font-500 ">Tutorial</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
