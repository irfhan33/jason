import React from "react";

const CardLeftBox = ({ children }) => {
  return (
    <div className="bg-[#FAFCFE] rounded-lg border-2 border-gray-200 px-4 py-2">
      {children}
    </div>
  );
};

export default CardLeftBox;
