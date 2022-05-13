import React from "react";

const Button = ({ children, Icon, bg, border, color }) => {
  return (
    <div
      className={`px-6 py-1 ${color} rounded-lg flex items-center ${bg} border-2 ${border} uppercase text-sm font-semibold gap-1 cursor-pointer`}
    >
      <Icon fontSize="small" />
      {children}
    </div>
  );
};

export default Button;
