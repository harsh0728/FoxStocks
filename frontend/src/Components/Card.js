// import React from "react";

// const Card = ({ background }) => {
//   const isBlueBackground = background === "#B79BFF";
//   const textColor = isBlueBackground ? "#FFFFFF" : "#000000"; // Conditionally set text color based on background

//   return (
//     <div
//       style={{ background, color: textColor }} // Set background and text color dynamically
//       className={`w-[209px] h-[116px] rounded-md flex flex-col gap-6 items-center m-auto justify-center`}
//     >
//       <div className="flex gap-[80px] w-[185px] overflow-hidden ">
//         <div className="flex gap-1 ">
//           <div className="text-sm">logo</div>
//           <div className="w-9  font-medium text-base">Company</div>
//         </div>
//         <div>
//             <div>Short</div>
//             <div>Profit/Loss</div>
//             {/* P/L should be in + or - like +5.43 or -3.5 */}
//         </div>
//       </div>
//       <div className="flex gap-[34px] w-[185px] justify-between ">
//         <div className=" ">
//           <div
//             className={`font-normal ${
//               isBlueBackground ? "text-white" : "text-[#838383]"
//             }`}
//           >
//             Current Value
//           </div>
//           <div className="font-medium">$ 203.65</div>
//         </div>
//         <div>one</div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from "react";

const Card = ({ stockData }) => {
  const { logo, PorL, companyName, shortName, currentValue, background } =
    stockData;
  const isBlueBackground = background === "#B79BFF";
  const textColor = isBlueBackground ? "#FFFFFF" : "#000000";

  return (
    <div
      style={{ background, color: textColor }}
      className="w-[270px] h-[140px] rounded-md flex flex-col gap-6 items-center m-auto justify-center"
    >
      <div className="flex gap-[80px]  ">
        <div className="flex gap-1 ">
          <div className="text-sm flex items-center ">
            <img
              src={logo}
              alt="Company Logo"
              className="w-14 h-8  mix-blend-multiply"
            />
          </div>
          <div
            className="w-9 font-medium text-sm flex items-center
          "
          >
            {companyName}
          </div>
        </div>
        <div>
          <div>{shortName}</div>
          <div>{PorL}</div>
        </div>
      </div>
      <div className="flex gap-[34px] items-center w-full px-6  justify-between">
        <div>
          <div
            className={`font-normal ${
              isBlueBackground ? "text-white" : "text-[#838383]"
            }`}
          >
            Current Value
          </div>
          <div className="font-medium">$ {currentValue}</div>
        </div>
        <div>one</div>
      </div>
    </div>
  );
};

export default Card;
