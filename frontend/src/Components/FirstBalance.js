import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import StockCard from "./StockCard";

const FirstBalance = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div>Balance</div>
        <div className="flex gap-3  text-xl font-bold">
          <div className="bg-[#6425FE] w-[70%] h-14 rounded-lg text-[#FFFFFF]">
            <p className="flex justify-start pl-5 py-3 ">$14,032.56</p>
          </div>
          <div className="bg-[#C7FFA5] rounded-lg w-[30%]">
            <p className="flex justify-start pl-2 py-3 ">+5.63%</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="py-2 pt-6">Invested</div>
        <div className="flex  text-xl font-bold">
          <div className="flex items-center justify-between bg-[#2C2C2C] w-[100%] h-14 rounded-lg text-[#FFFFFF]">
            <p className="flex justify-start pl-5 py-3 ">$14,032.56</p>
            <div className="mr-3 flex items-center justify-center w-12 bg-[#6425FE] rounded-xl ">
              <p className="flex justify-start py-3  text-white  ">
                <FaArrowRightLong className="text-white" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="py-2 pt-6">Top Stock</div>
        <div>
          <StockCard />
        </div>
        <div className="flex justify-center">
          <div className="bg-[#6425FE] h-12 w-[14%] rounded-lg flex items-center justify-center">
            <FaArrowRightLong className="text-white rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBalance;
