import React from "react";
import MenuIcon from "./../MenuIcon/MenuIcon";
import Button from "./../Button/Button";
import CheckIcon from "@mui/icons-material/Check";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const BodyHeader = () => {
  return (
    <div className="border-b-2 border-gray-300  w-full h-16 items-center flex px-4 justify-between">
      <div className="flex items-center gap-3 font-semibold text-[#4A515C]">
        <MenuIcon />
        <span className="">Edit Campaign</span>
      </div>

      <div className="flex gap-3 items-center">
        <Button
          Icon={CheckIcon}
          bg="bg-white"
          border="border-[#F3474B]"
          color="text-[#F3474B]"
          className="hidden"
        >
          Delete
        </Button>
        <Button
          Icon={FileCopyIcon}
          bg="bg-white"
          border="border-[#4A515C]"
          color="text-[#4A515C]"
          className="hidden"
        >
          clone
        </Button>
        <Button
          Icon={CheckIcon}
          bg="bg-[#118142]"
          border="border-transparent"
          color="text-white"
          className="hidden"
        >
          Save
        </Button>
        <NotificationsIcon className="text-[#F3474B] cursor-pointer" />
        <div className="text-gray-400 flex items-center gap-1 cursor-pointer font-semibold">
          <PowerSettingsNewIcon className="" />
          Logout
        </div>
      </div>
    </div>
  );
};

export default BodyHeader;
