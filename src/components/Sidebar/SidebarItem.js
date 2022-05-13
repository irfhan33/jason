import React from "react";
import { IconButton } from "@mui/material";
const SidebarItem = ({ Icon, active }) => {
  return (
    <IconButton>
      <Icon
        className={` text-gray-400 ${active && "text-[#CC1D2B]"}`}
        fontSize="large"
      />
    </IconButton>
  );
};

export default SidebarItem;
