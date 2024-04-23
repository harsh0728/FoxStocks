import { React, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PortfolioAnalytics = () => {
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
      case "5Y":
        // Define data for 1Y period
        newData = [
          { name: "10 am", uv: 8700, pv: 2400, amt: 2400 },
          { name: "", uv: 8000, pv: 1398, amt: 2210 },
          { name: "", uv: 6000, pv: 9800, amt: 2290 },
          { name: "11 am", uv: 2000, pv: 3908, amt: 2000 },
          { name: "", uv: 8500, pv: 4800, amt: 2181 },
          { name: "", uv: 7000, pv: 3800, amt: 2500 },
          { name: "12 pm", uv: 6200, pv: 4300, amt: 2100 },
        ];
        break;
      case "Max":
        // Define data for 1Y period
        newData = [
          { name: "10 am", uv: 1000, pv: 2400, amt: 2400 },
          { name: "", uv: 8000, pv: 1398, amt: 2210 },
          { name: "", uv: 6000, pv: 9800, amt: 2290 },
          { name: "11 am", uv: 3000, pv: 3908, amt: 2000 },
          { name: "", uv: 8500, pv: 4800, amt: 2181 },
          { name: "", uv: 7000, pv: 3800, amt: 2500 },
          { name: "12 pm", uv: 9200, pv: 4300, amt: 2100 },
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
    <div>
      <div className="flex justify-between items-center py-6 px-3">
        <div className="font-semibold">Portfolio Analytics</div>
        <div>
          <div className="flex justify-between gap-6">
            <button
              className="text-sm p-2"
              onClick={() => handlePeriodChange("1D")}
              style={{
                backgroundColor:
                  activePeriod === "1D" ? "#6425FE" : "transparent",
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
                backgroundColor:
                  activePeriod === "5D" ? "#6425FE" : "transparent",
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
                backgroundColor:
                  activePeriod === "1M" ? "#6425FE" : "transparent",
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
                backgroundColor:
                  activePeriod === "6M" ? "#6425FE" : "transparent",
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
                backgroundColor:
                  activePeriod === "1Y" ? "#6425FE" : "transparent",
                color: activePeriod === "1Y" ? "white" : "#838383",
                borderRadius: "8px",
              }}
            >
              1Y
            </button>
            <button
              className="text-sm p-2"
              onClick={() => handlePeriodChange("5Y")}
              style={{
                backgroundColor:
                  activePeriod === "5Y" ? "#6425FE" : "transparent",
                color: activePeriod === "5Y" ? "white" : "#838383",
                borderRadius: "8px",
              }}
            >
              5Y
            </button>
            <button
              className="text-sm p-2"
              onClick={() => handlePeriodChange("Max")}
              style={{
                backgroundColor:
                  activePeriod === "Max" ? "#6425FE" : "transparent",
                color: activePeriod === "Max" ? "white" : "#838383",
                borderRadius: "8px",
              }}
            >
              Max
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="my-6 mr-6 pr-5" style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            {activePeriod && (
              <AreaChart
                width={400}
                height={400}
                data={data}
                margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={1} />
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
                  fillOpacity={0.9}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            )}
          </ResponsiveContainer>
          {/* Add other periods' charts similarly */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioAnalytics;
