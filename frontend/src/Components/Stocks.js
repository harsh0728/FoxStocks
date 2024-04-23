import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fb from "../Assests/fb.jpeg";
import apple from "../Assests/apple.jpeg";
import amazon from "../Assests/amazon.jpeg";
import google from "../Assests/google.jpeg";
import jj from "../Assests/j&j.jpeg";
import microsoft from "../Assests/microsoft.jpeg";
import pg from "../Assests/p&g.jpeg";
import tesla from "../Assests/tesla.jpeg";
import visa from "../Assests/visa.jpeg";

const Stocks = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    //<div className="flex py-3 px-3 gap-2 rounded-md bg-[#ffffff]   ">
    // <Slider
    //   className=" overflow-hidden flex py-3 px-3  rounded-md bg-[#ffffff]   "
    //   {...settings}
    // >
    //   <div>
    //     <Card background="#A6F7E2" stockData={stockData}/>
    //   </div>
    //   <div>
    //     <Card background="#B79BFF" stockData={stockData} />
    //   </div>
    //   <div>
    //     <Card background="#FFE5A5" stockData={stockData}/>
    //   </div>
    //   <div>
    //     <Card background="#C7FFA5" stockData={stockData}/>
    //   </div>
    //   <div>
    //     <Card background="#F8A5FF" stockData={stockData}/>
    //   </div>
    //   <div>
    //     <Card background="#B79BFF" stockData={stockData}/>
    //   </div>
    // </Slider>
    //</div>

    <Slider
      className="overflow-hidden flex py-3 px-3 rounded-md bg-[#ffffff]"
      {...settings}
    >
      {stockData.map((stock, index) => (
        <div key={index}>
          <Card background="#A6F7E2" stockData={stock} />
        </div>
      ))}
    </Slider>
  );
};

export default Stocks;

const stockData = [
  {
    companyName: "Nvidia",
    shortName: "NVDA",
    currentValue: 300.45,
    logo: apple,
    PorL: "+17.63",
    background: "#A6F7E2",
    priceData: {
      low: 295.1,
      high: 305.7,
      avg: 300.2,
    },
    graphData: [
      { date: "2024-04-01", value: 295.1 },
      { date: "2024-04-02", value: 297.5 },
      // Add more data points as needed
    ],
  },
  {
    companyName: "Apple",
    shortName: "AAPL",
    currentValue: 175.6,
    logo: apple,
    PorL: "+17.63",
    background: "#B79BFF",
    priceData: {
      low: 170.25,
      high: 180.9,
      avg: 175.1,
    },
    graphData: [
      { date: "2024-04-01", value: 172.3 },
      { date: "2024-04-02", value: 174.8 },
      // Add more data points as needed
    ],
  },
  {
    companyName: "Microsoft",
    shortName: "MSFT",
    currentValue: 290.8,
    logo: microsoft,
    PorL: "+17.63",
    background: "#FFE5A5",
    priceData: {
      low: 285.6,
      high: 295.4,
      avg: 290.2,
    },
    graphData: [
      { date: "2024-04-01", value: 288.2 },
      { date: "2024-04-02", value: 292.1 },
      // Add more data points as needed
    ],
  },
  {
    companyName: "Amazon",
    shortName: "AMZN",
    currentValue: 3500.2,
    logo: amazon,
    PorL: "+17.63",
    background: "#C7FFA5",
    priceData: {
      low: 3480.5,
      high: 3525.8,
      avg: 3500.1,
    },
    graphData: [
      { date: "2024-04-01", value: 3490.3 },
      { date: "2024-04-02", value: 3510.4 },
      // Add more data points as needed
    ],
  },
  {
    companyName: "Google",
    shortName: "GOOGL",
    currentValue: 2600.75,
    logo: google,
    PorL: "+17.63",
    background: "#F8A5FF",
    priceData: {
      low: 2585.2,
      high: 2625.9,
      avg: 2600.5,
    },
    graphData: [
      { date: "2024-04-01", value: 2590.8 },
      { date: "2024-04-02", value: 2610.6 },
      // Add more data points as needed
    ],
  },
  // Add more companies following the same structure
  {
    companyName: "Tesla",
    shortName: "TSLA",
    currentValue: 800.3,
    logo: tesla,
    PorL: "+17.63",
    background: "#B79BFF",
    priceData: {
      low: 790.5,
      high: 810.8,
      avg: 800.1,
    },
    graphData: [
      { date: "2024-04-01", value: 795.4 },
      { date: "2024-04-02", value: 802.6 },
      // Add more data points as needed
    ],
  },
  {
    companyName: "Facebook",
    shortName: "FB",
    currentValue: 330.25,
    logo: fb,
    PorL: "+17.63",
    background: "#FFE5A5",
    priceData: {
      low: 325.4,
      high: 335.9,
      avg: 330.1,
    },
    graphData: [
      { date: "2024-04-01", value: 328.5 },
      { date: "2024-04-02", value: 332.2 },
      // Add more data points as needed
    ],
  },
  {
    companyName: "J&J",
    shortName: "JNJ",
    currentValue: 160.9,
    logo: jj,
    PorL: "+17.63",
    background: "#F8A5FF",
    priceData: {
      low: 158.2,
      high: 163.4,
      avg: 160.7,
    },
    graphData: [
      { date: "2024-04-01", value: 159.8 },
      { date: "2024-04-02", value: 162.5 },
      // Add more data points as needed
    ],
  },
  {
    companyName: "PGC",
    shortName: "PG",
    currentValue: 140.8,
    logo: pg,
    PorL: "+17.63",
    background: "#B79BFF",
    priceData: {
      low: 138.5,
      high: 142.7,
      avg: 140.6,
    },
    graphData: [
      { date: "2024-04-01", value: 139.9 },
      { date: "2024-04-02", value: 141.2 },
      // Add more data points as needed
    ],
  },
  {
    companyName: "Visa",
    shortName: "V",
    currentValue: 220.6,
    logo: visa,
    PorL: "+17.63",
    background: "#FFE5A5",
    priceData: {
      low: 218.4,
      high: 223.2,
      avg: 220.5,
    },
    graphData: [
      { date: "2024-04-01", value: 219.8 },
      { date: "2024-04-02", value: 221.9 },
      // Add more data points as needed
    ],
  },
  // Add more companies following the same structure
];
