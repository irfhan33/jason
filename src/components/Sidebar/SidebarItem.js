import React from "react";
import { IconButton } from "@mui/material";
const SidebarItem = ({ Icon }) => {
  return (
    <IconButton>
      <Icon className=" text-gray-400 " fontSize="large" />
    </IconButton>
  );
};

export default SidebarItem;
