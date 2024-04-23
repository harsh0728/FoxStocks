import React from "react";
import FirstBalance from "./FirstBalance";
import SecondBalance from "./SecondBalance";
import ThirdBalance from "./ThirdBalance";

const Balance = () => {
  return (
    <div className="flex justify-between ">
      <div className="bg-[#ffffff]  py-5 px-3  w-[385px]">
        <FirstBalance />
      </div>
      <div className="bg-[#ffffff] py-5 px-3 w-[385px]">
        <SecondBalance />
      </div>
      <div className="bg-[#ffffff] py-5 px-3 w-[385px]">
        <ThirdBalance />
      </div>
    </div>
  );
};

export default Balance;
