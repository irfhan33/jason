import React from "react";

const Button = ({ children, Icon, bg, border, color, className }) => {
  return (
    <div
      className={`px-6 py-1 ${color} rounded-lg lg:flex items-center ${bg} border-2 ${border} uppercase text-sm font-semibold gap-1 cursor-pointer ${className}`}
    >
      <Icon fontSize="small" />
      {children}
    </div>
  );
};

export default Button;
