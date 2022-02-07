import React from "react";
import UserIcon from "./../../../assests/image/userIcon.png";
import MoreInfo from "./MoreInfo";
const InfoUser = () => {
  return (
    <div className="p-3 bg-white rounded-lg shadow-lg">
      <div className="flex items-center  mt-4">
        <img src={UserIcon} alt="user" className="w-10 h-10" />
        <div className="pr-10">
          <p className="text-sm text-gray yekanBold">مهدی شریفلو</p>
          <p className="text-sm text-gray yekanBold">9052549459</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between  mt-10  pb-4">
          <div>
            <p className="text-xs yekanBold text-gray-500">موجودی کل</p>
            <p className="text-md yekanBold text-black pt-1">1233333 ریال</p>
          </div>
          <button className="bg-yellow-400 text-sm text-black shadow-md  py-2 px-12 rounded-full yekanBold self-end">
            شارژ مجدد
          </button>
        </div>
      </div>
      <MoreInfo />
    </div>
  );
};

export default InfoUser;
