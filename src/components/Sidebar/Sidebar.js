import React from "react";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import SidebarItem from "./SidebarItem";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const Sidebar = () => {
  return (
    <div className="bg-white w-16 min-h-screen  pt-16">
      <div className="flex flex-col items-center gap-3 border-t-2 border-gray-200 pt-3">
        <SidebarItem Icon={DisplaySettingsIcon} />
        <SidebarItem Icon={CardGiftcardIcon} />
        <SidebarItem Icon={PeopleIcon} />
        <SidebarItem Icon={SettingsOutlinedIcon} />
        <SidebarItem Icon={HelpOutlineOutlinedIcon} />
      </div>
    </div>
  );
};

export default Sidebar;
