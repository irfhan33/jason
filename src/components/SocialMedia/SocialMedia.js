import React from "react";

const SocialMedia = ({ Icon, title, notif, color }) => {
  return (
    <div className="flex  w-full justify-between border-t border-gray-300 py-2 items-center">
      <div className={`flex items-center gap-3 ${color}`}>
        <Icon />
        <p>{title}</p>
      </div>
      <div className="bg-gray-400 w-6 h-6 flex items-center justify-center rounded-lg text-white text-sm">
        {notif}
      </div>
    </div>
  );
};

export default SocialMedia;
