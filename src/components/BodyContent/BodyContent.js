import React from "react";
import CardLeft from "./../CardLeft/CardLeft";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";

const BodyContent = () => {
  const Buttons = [
    {
      name: "Sign Up",
      bg: "[#4A515C]",
      color: "white",
      border: "transparent",
    },
    {
      name: "Logged-in",
      bg: "transparent",
      color: "[#4A515C]",
      border: "[#4A515C]",
    },
    {
      name: "Ended",
      bg: "transparent",
      color: "[#4A515C]",
      border: "[#4A515C]",
    },
  ];
  return (
    <div className="grow p-4 grid-cols-2 grid gap-[2%]">
      <div className="">
        <CardLeft />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full flex-col flex items-center h-full max-w-lg">
          {/* Buttons */}
          <div className="flex gap-3">
            {Buttons.map((button) => (
              <div
                className={`border-2 border-[#4A515C] w-fit rounded-lg text-sm font-semibold px-4 py-1 bg-${button.bg} text-${button.color} flex items-center cursor-pointer`}
              >
                {button.name}
              </div>
            ))}
          </div>

          {/* Right Card */}
          <div className="bg-[#7F61AB] h-full mt-3 w-full rounded-2xl flex flex-col items-center p-4 text-white">
            <h1 className="text-4xl ">GIVE AWAY</h1>
            <div className="flex gap-2 items-center">
              <div className="h-[3px] w-16 bg-white"></div>
              <span>WIN IN 3 EASY STEPS</span>
              <div className="h-[3px] w-16 bg-white"></div>
            </div>
            <div className="py-4 flex gap-20">
              <div className="flex flex-col items-center">
                <FaceRetouchingNaturalIcon sx={{ fontSize: 40 }} />
                <span>follow</span>
              </div>
              <div className="flex flex-col items-center">
                <EmojiPeopleIcon sx={{ fontSize: 40 }} />
                <span>refer a friend</span>
              </div>
              <div className="flex flex-col items-center">
                <SettingsAccessibilityIcon sx={{ fontSize: 40 }} />
                <span>share</span>
              </div>
            </div>
            <div className="bg-white flex flex-col items-center w-full rounded-lg text-gray-800 p-3">
              <h1 className="text-lg font-semibold">WIN A $200 GIFT CARD</h1>
            </div>
          </div>

          <div className="ml-auto text-white bg-[#7F61AB] mt-3 rounded-[100px] cursor-pointer select-none py-3 px-5 flex items-center gap-3">
            <CardGiftcardIcon />
            Giveaway
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
