import React from "react";
import CardLeftHeader from "./CardLeftHeader";
import CardLeftBody from "./CardLeftBody";

const CardLeft = () => {
  return (
    <div className="bg-white h-full rounded-xl overflow-hidden">
      <CardLeftHeader />
      <CardLeftBody />
    </div>
  );
};

export default CardLeft;
