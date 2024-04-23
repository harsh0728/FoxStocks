import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   {
//     name: "10 am",
//     uv: 5000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "",
//     uv: 8000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "",
//     uv: 6000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "11 am",
//     uv: 10000,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "",
//     uv: 8500,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "",
//     uv: 7000,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "12 pm",
//     uv: 11200,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

const SecondBalance = () => {
  const [bgchange, setBgChange] = useState(false);
  const [activeButton, setActiveButton] = useState("NASDAQ");
  const [activePeriod, setActivePeriod] = useState("1D");
  const [data, setData] = useState([
    { name: "10 am", uv: 5000, pv: 2400, amt: 2400 },
    { name: "", uv: 8000, pv: 1398, amt: 2210 },
    { name: "", uv: 6000, pv: 9800, amt: 2290 },
    { name: "11 am", uv: 10000, pv: 3908, amt: 2000 },
    { name: "", uv: 8500, pv: 4800, amt: 2181 },
    { name: "", uv: 7000, pv: 3800, amt: 2500 },
    { name: "12 pm", uv: 11200, pv: 4300, amt: 2100 },
  ]);

  const handleChange = (buttonName) => {
    setActiveButton(buttonName);
    setBgChange(true);
  };

  const handlePeriodChange = (period) => {
    setActivePeriod(period);
    let newData;
    switch (period) {
      case "1D":
        newData = [
          { name: "10 am", uv: 5000, pv: 2400, amt: 2400 },
          { name: "", uv: 8000, pv: 1398, amt: 2210 },
          { name: "", uv: 6000, pv: 9800, amt: 2290 },
          { name: "11 am", uv: 10000, pv: 3908, amt: 2000 },
          { name: "", uv: 8500, pv: 4800, amt: 2181 },
          { name: "", uv: 7000, pv: 3800, amt: 2500 },
          { name: "12 pm", uv: 11200, pv: 4300, amt: 2100 },
        ];
        break;
      case "5D":
        // Define data for 5D period
        newData = [
          { name: "10 am", uv: 2000, pv: 2400, amt: 2400 },
          { name: "", uv: 4000, pv: 1398, amt: 2210 },
          { name: "", uv: 3000, pv: 9800, amt: 2290 },
          { name: "11 am", uv: 7000, pv: 3908, amt: 2000 },
          { name: "", uv: 8500, pv: 9000, amt: 2181 },
          { name: "", uv: 7000, pv: 6000, amt: 2500 },
          { name: "12 pm", uv: 10000, pv: 4300, amt: 2100 },
        ];
        break;
      case "1M":
        // Define data for 1M period
        newData = [
          { name: "10 am", uv: 11000, pv: 2400, amt: 2400 },
          { name: "", uv: 8000, pv: 1398, amt: 2210 },
          { name: "", uv: 6000, pv: 9800, amt: 2290 },
          { name: "11 am", uv: 3000, pv: 3908, amt: 2000 },
          { name: "", uv: 8500, pv: 4800, amt: 2181 },
          { name: "", uv: 7000, pv: 3800, amt: 2500 },
          { name: "12 pm", uv: 7200, pv: 4300, amt: 2100 },
        ];
        break;
      case "6M":
        // Define data for 6M period
        newData = [
          { name: "10 am", uv: 6000, pv: 9200, amt: 2400 },
          { name: "", uv: 4000, pv: 1398, amt: 2210 },
          { name: "", uv: 3000, pv: 9800, amt: 2290 },
          { name: "11 am", uv: 7000, pv: 3908, amt: 2000 },
          { name: "", uv: 8500, pv: 9000, amt: 2181 },
          { name: "", uv: 7000, pv: 6000, amt: 2500 },
          { name: "12 pm", uv: 10000, pv: 4300, amt: 2100 },
        ];
        break;
      case "1Y":
        // Define data for 1Y period
        newData = [
          { name: "10 am", uv: 7000, pv: 2400, amt: 2400 },
          { name: "", uv: 8000, pv: 1398, amt: 2210 },
          { name: "", uv: 6000, pv: 9800, amt: 2290 },
          { name: "11 am", uv: 1000, pv: 3908, amt: 2000 },
          { name: "", uv: 8500, pv: 4800, amt: 2181 },
          { name: "", uv: 7000, pv: 3800, amt: 2500 },
          { name: "12 pm", uv: 1200, pv: 4300, amt: 2100 },
        ];
        break;
      case "NASDAQ":
        setData([
          { name: "10 am", uv: 6000, pv: 3400, amt: 3400 },
          { name: "", uv: 9000, pv: 2398, amt: 2810 },
          { name: "", uv: 7000, pv: 11800, amt: 3290 },
          { name: "11 am", uv: 12000, pv: 4908, amt: 3000 },
          { name: "", uv: 10500, pv: 5800, amt: 3581 },
          { name: "", uv: 9000, pv: 4800, amt: 4100 },
          { name: "12 pm", uv: 14200, pv: 6300, amt: 3100 },
        ]);
        break;
      case "SSE":
        setData([
          { name: "10 am", uv: 4000, pv: 2400, amt: 2400 },
          { name: "", uv: 7000, pv: 3398, amt: 3210 },
          { name: "", uv: 5000, pv: 10800, amt: 3290 },
          { name: "11 am", uv: 8000, pv: 4908, amt: 3000 },
          { name: "", uv: 7500, pv: 5800, amt: 3581 },
          { name: "", uv: 6000, pv: 4800, amt: 4100 },
          { name: "12 pm", uv: 10200, pv: 6300, amt: 3100 },
        ]);
        break;
      case "Euronext":
        setData([
          { name: "10 am", uv: 8000, pv: 5400, amt: 5400 },
          { name: "", uv: 11000, pv: 5398, amt: 5210 },
          { name: "", uv: 9000, pv: 16800, amt: 5290 },
          { name: "11 am", uv: 13000, pv: 9908, amt: 5000 },
          { name: "", uv: 11500, pv: 12800, amt: 5481 },
          { name: "", uv: 10000, pv: 11800, amt: 6000 },
          { name: "12 pm", uv: 14200, pv: 14300, amt: 5100 },
        ]);
        break;
      case "BSE":
        setData([
          { name: "10 am", uv: 3000, pv: 2400, amt: 2400 },
          { name: "", uv: 5000, pv: 2398, amt: 2210 },
          { name: "", uv: 4000, pv: 11800, amt: 2290 },
          { name: "11 am", uv: 6000, pv: 4908, amt: 2000 },
          { name: "", uv: 5500, pv: 5800, amt: 2181 },
          { name: "", uv: 4000, pv: 4800, amt: 2500 },
          { name: "12 pm", uv: 8200, pv: 6300, amt: 2100 },
        ]);
        break;
      // default:
      //   newData = [];
    }
    setData(newData);
  };

  return (
    <div className="flex flex-col">
      <div className="flex text-[#838383] gap-7 pb-4 font-medium justify-start items-center">
        <div>
          <button
            className="text-sm p-2"
            onClick={() => handleChange("NASDAQ")}
            style={{
              backgroundColor:
                activeButton === "NASDAQ" ? "#6425FE" : "transparent",
              color: activeButton === "NASDAQ" ? "white" : "#838383",
              borderRadius: "8px",
            }}
          >
            NASDAQ
          </button>
        </div>
        <div>
          <button
            className="text-sm p-2"
            onClick={() => handleChange("SSE")}
            style={{
              backgroundColor:
                activeButton === "SSE" ? "#6425FE" : "transparent",
              color: activeButton === "SSE" ? "white" : "#838383",
              borderRadius: "8px",
              height: "40px",
            }}
          >
            SSE
          </button>
        </div>
        <div>
          <button
            className="text-sm p-2"
            onClick={() => handleChange("Euronext")}
            style={{
              backgroundColor:
                activeButton === "Euronext" ? "#6425FE" : "transparent",
              color: activeButton === "Euronext" ? "white" : "#838383",
              borderRadius: "8px",
              height: "40px",
            }}
          >
            Euronext
          </button>
        </div>
        <div>
          <button
            className="text-sm p-2"
            onClick={() => handleChange("BSE")}
            style={{
              backgroundColor:
                activeButton === "BSE" ? "#6425FE" : "transparent",
              color: activeButton === "BSE" ? "white" : "#838383",
              borderRadius: "8px",
              height: "40px",
            }}
          >
            BSE
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          className="text-sm p-2"
          onClick={() => handlePeriodChange("1D")}
          style={{
            backgroundColor: activePeriod === "1D" ? "#6425FE" : "transparent",
            color: activePeriod === "1D" ? "white" : "#838383",
            borderRadius: "8px",
          }}
        >
          1D
        </button>
        <button
          className="text-sm p-2"
          onClick={() => handlePeriodChange("5D")}
          style={{
            backgroundColor: activePeriod === "5D" ? "#6425FE" : "transparent",
            color: activePeriod === "5D" ? "white" : "#838383",
            borderRadius: "8px",
          }}
        >
          5D
        </button>
        <button
          className="text-sm p-2"
          onClick={() => handlePeriodChange("1M")}
          style={{
            backgroundColor: activePeriod === "1M" ? "#6425FE" : "transparent",
            color: activePeriod === "1M" ? "white" : "#838383",
            borderRadius: "8px",
          }}
        >
          1M
        </button>
        <button
          className="text-sm p-2"
          onClick={() => handlePeriodChange("6M")}
          style={{
            backgroundColor: activePeriod === "6M" ? "#6425FE" : "transparent",
            color: activePeriod === "6M" ? "white" : "#838383",
            borderRadius: "8px",
          }}
        >
          6M
        </button>
        <button
          className="text-sm p-2"
          onClick={() => handlePeriodChange("1Y")}
          style={{
            backgroundColor: activePeriod === "1Y" ? "#6425FE" : "transparent",
            color: activePeriod === "1Y" ? "white" : "#838383",
            borderRadius: "8px",
          }}
        >
          1Y
        </button>
      </div>
      <div className="my-6" style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          {activePeriod && (
            <AreaChart
              width={400}
              height={300}
              data={data}
              margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="1 2" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#9747FF"
                fillOpacity={0.5}
                fill="url(#colorUv)"
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
        {/* Add other periods' charts similarly */}
      </div>

      <div className="flex gap-32">
        <div className="flex flex-col gap-1">
          <div className="text-[#838383] font-base text-sm">High</div>
          <div className="font-medium">11,691.89</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[#838383] font-base text-sm">
            Prev Close (Avr 28 Days)
          </div>
          <div className="font-medium">11,512.41</div>
        </div>
      </div>
      <div className="flex gap-32 pt-4">
        <div className="flex flex-col gap-1">
          <div className="text-[#838383] font-base text-sm">Low</div>
          <div className="font-medium">11,470.47</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[#838383] font-base text-sm">Open</div>
          <div className="font-medium">11,690.11</div>
        </div>
      </div>
    </div>
  );
};

export default SecondBalance;
