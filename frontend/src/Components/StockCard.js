import React from "react";
import StocksData from "../StocksData.js";

import tesla from "../Assests/tesla.jpeg";
import tsla from "../Assests/tsla.png";

const StockCard = (StocksData) => {
  return (
    <div className="py-4 px-3 ">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <div>
            <img src={tsla} />
          </div>
          <div>Tesla Inc</div>
        </div>
        <div className="flex flex-col items-end">
            <div>TSLA</div>
            <div className="text-[#77B900] font-semibold text-md">+17.63</div>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <div className="flex flex-col">
          <div className="text-[#838383]">Invested Value</div>
          <div className="font-semibold text-lg">$29.34</div>
        </div>
        <div className="flex flex-col">
          <div className="text-[#838383]">Current Value</div>
          <div className="font-semibold text-lg">$177.90</div>
        </div>
        <div>one</div>
      </div>
    </div>
  );
};

export default StockCard;
