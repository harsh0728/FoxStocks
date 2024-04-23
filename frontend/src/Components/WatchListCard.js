import React from "react";

const WatchListCard = ({ stock }) => {
  const { logo, PorL, companyName, shortName, currentValue, background } =
    stock;

  return (
    <div className="overflow-hidden ">
      <div className="flex justify-between py-3 ">
        <div className="flex gap-2 items-center">
          <img
            className="items-center"
            src={logo}
            alt={companyName}
            style={{ width: "45px", height: "40px" }}
          />
          <div className="flex flex-col">
            <div className="font-medium text-lg">{companyName}</div>
            <div className="text-[#838383]">{shortName}</div>
          </div>
        </div>
        <div>${currentValue}</div>
      </div>
      <div className="bg-[#E8E9FF] h-1"></div>
    </div>
  );
};

export default WatchListCard;
