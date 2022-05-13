import React from "react";

const Time = ({ title, value }) => {
  return (
    <div className="flex items-center flex-col">
      <span className="text-2xl">{value}</span>
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default Time;
