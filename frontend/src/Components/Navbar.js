import React from "react";
import Dashboard from "./Dashboard";
import Thoughts from "../Assests/Thoughts.png";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between gap-0  h-[40%] fixed">
      <div className="   w-[100%]  pt-6 pl-6 pb-8 gap-[12px]">
        <p className="w-[100px] h-5  font-bold text-2xl">Foxstocks</p>
      </div>
      <div className="flex flex-auto">
        <Dashboard />
      </div>

      <div className="flex justify-center">
        <img src={Thoughts} alt="Thoughts" />
      </div>

      <div className="pt-4 flex items-center pl-6 gap-2 text-[#7E7D82]">
        <div>
          <IoIosLogOut />
        </div>
        <div>Logout</div>
      </div>
    </div>
  );
};

export default Navbar;
