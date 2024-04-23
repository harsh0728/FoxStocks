import React from "react";
import WatchList from "./WatchList";
import PortfolioAnalytics from "./PortfolioAnalytics";

const Portfolio = () => {
  return (
    <div className="flex justify-between ">
      <div className="w-[66.5%] px-3 bg-[#ffffff]">
        <PortfolioAnalytics />
      </div>
      <div className=" w-[385px] px-3 bg-[#ffffff]">
        <WatchList />
      </div>
    </div>
  );
};

export default Portfolio;
