import React from "react";
import Navbar from "../Components/Navbar";
import Main from "../Components/Main";

const Home = () => {
  return <div className=" h-screen flex ">
    <div className="w-[20%] bg-white"><Navbar/></div>
    <div className="w-full "><Main/></div>
  </div>;
};

export default Home;
