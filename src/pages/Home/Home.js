import React from "react";
import Sidebar from "./../../components/Sidebar/Sidebar";
import Body from "./../../components/Body/Body";

const Home = () => {
  return (
    <div className="bg-gray-100 flex">
      <Sidebar />
      <Body />
    </div>
  );
};

export default Home;
