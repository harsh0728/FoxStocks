import React from "react";

const ThirdBalance = () => {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <p className="text-[#2C2C2C] font-semibold text-md">Snapshot</p>
      </div>
      <div className="flex justify-start items-center gap-24 py-3">
        <div className="py-2 ">
          <div className="text-[#838383]  font-base">Prev Close</div>
          <div className="text-[#2C2C2C] font-semibold text-xl pt-[6px]">
            12,051.48
          </div>
        </div>
        <div className="">
          <div className="text-[#838383] font-base">Open</div>
          <div className="text-[#2C2C2C] font-semibold text-xl pt-[6px]">
            12.000.21
          </div>
        </div>
      </div>
      <div className="bg-[#E8E9FF] h-1 my-2 mb-3"></div>
      <div>
        <div className="flex justify-between">
          <div className="flex flex-col items-start">
            <div className="text-[#2C2C2C] text-md font-semibold">
              11,999.87
            </div>
            <div className="text-[#838383] text-sm font-normal">Day Low</div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-[#2C2C2C] text-md font-semibold">
              12,248.15
            </div>
            <div className="text-[#838383] text-sm font-normal ">
              Day High
            </div>
          </div>
        </div>
        <div className="py-[6px]">
          <div className="bg-[#F8A5FF] h-1 mt-3 relative"></div>
          <div className="bg-[#2C2C2C] h-5 w-1 items-center absolute right-40 top-[527px]"></div>
          <div className="absolute right-28 text-xl font-medium pt-3 pr-0">
            12.166.60
          </div>
        </div>
      </div>
      <div className="pt-12">
        <div className="flex justify-between">
          <div className="flex flex-col items-start">
            <div className="text-[#2C2C2C] text-md font-semibold">
              10,440.64
            </div>
            <div className="text-[#838383] text-sm font-normal">
              52 Week Low
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-[#2C2C2C] text-md font-semibold">
              15,265.42
            </div>
            <div className="text-[#838383] text-sm font-normal">
              52 Week High
            </div>
          </div>
        </div>
        <div className="py-[6px]">
          <div className="bg-[#F8A5FF] h-1 mt-3 relative"></div>
          <div className="bg-[#2C2C2C] h-5 w-1 items-center absolute right-80 top-[648px]"></div>
          <div className="absolute right-72 text-xl font-medium pt-3 pr-0">
            12.166.60
          </div>
          <div className="bg-[#E8E9FF] h-1 mt-16 mb-3"></div>
        </div>
      </div>

      <div className="flex justify-start items-center gap-24 pt-4">
        <div className="py-1 ">
          <div className="text-[#838383]  font-base">Trade Time</div>
          <div className="text-[#2C2C2C] font-semibold text-lg">05:16 PM</div>
        </div>
        <div className="">
          <div className="text-[#838383] font-base">Trade Date</div>
          <div className="text-[#2C2C2C] font-semibold text-lg">01/27/23</div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBalance;
