// import React from "react";
// import { FaPlus } from "react-icons/fa6";
// import WatchListCard from "./WatchListCard";
// import { stockData } from "../StocksData";
// //import stockData from "../StocksData.js";


// const WatchList = () => {
//   return (
//     <div className="flex flex-col gap-4">
//       <div className="flex justify-between mt-4">
//         <div className="text-lg font-base">WatchList</div>
//         <div className="">
//           <div className="bg-[#6425FE] h-8 w-8 rounded-md flex items-center justify-center">
//             <FaPlus className="text-white" />
//           </div>
//         </div>
//       </div>
//       <div>
//         {stockData.map((stock, index) => (
//           <WatchListCard key={index} stock={stock} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WatchList;


import React from "react";
import { FaPlus } from "react-icons/fa6";
import WatchListCard from "./WatchListCard";
import { stockData } from "../StocksData";

const WatchList = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between mt-4">
        <div className="text-lg font-base">WatchList</div>
        <div className="">
          <div className="bg-[#6425FE] h-8 w-8 rounded-md flex items-center justify-center">
            <FaPlus className="text-white" />
          </div>
        </div>
      </div>
      <div className="overflow-auto max-h-[450px]">
        {stockData.slice(0, 15).map((stock, index) => ( // Remove the unnecessary comment
          <WatchListCard key={index} stock={stock} />
        ))}
      </div>
    </div>
  );
};

export default WatchList;
