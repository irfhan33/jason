import React from "react";
import BodyHeader from "./../BodyHeader/BodyHeader";
import BodyContent from "./../BodyContent/BodyContent";

const Body = () => {
  return (
    <div className="bg-gray-200 flex grow flex-col">
      <BodyHeader />
      <BodyContent />
    </div>
  );
};

export default Body;
