import React from "react";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stocks from "./Stocks";
import Balance from "./Balance";
import Portfolio from "./Portfolio";

const Content = () => {
  return (
    <div className="w-[1200px] ml-5 mr-5 top-5 h-full pl-5 pt-5  gap-4 flex flex-col  ">
      <div className="mb-0 pb-0 text-start">My Stocks</div>
      <div className="bg-[#ffffff] h-[160px] ">
        <Stocks />
      </div>
      <div className=" ">
        <Balance />
      </div>
      <div className=" ">
        <Portfolio />
      </div>
    </div>
  );
};

export default Content;
