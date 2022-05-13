import React from "react";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import BrushIcon from "@mui/icons-material/Brush";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const CardLeftHeader = () => {
  return (
    <div className="flex justify-evenly px-4 bg-[#FAFCFE] border-b-2 border-gray-200">
      <CardLeftHeaderItem Icon={CardGiftcardIcon} title="Giveaway" />
      <CardLeftHeaderItem Icon={FlashOnIcon} title="Entry Actions" active />
      <CardLeftHeaderItem Icon={BrushIcon} title="Design" />
      <CardLeftHeaderItem Icon={SettingsSuggestIcon} title="Advanced" />
    </div>
  );
};

const CardLeftHeaderItem = ({ Icon, title, active }) => {
  return (
    <div
      className={`flex flex-col items-center  py-3 cursor-pointer ${
        !active ? "text-gray-400" : "text-gray-800"
      }`}
    >
      <Icon sx={{ fontSize: 46 }} />
      <span className="font-semibold">{title}</span>
    </div>
  );
};

export default CardLeftHeader;
