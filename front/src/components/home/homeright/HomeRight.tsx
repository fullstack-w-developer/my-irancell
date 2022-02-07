import React from "react";
import LogoHome from "./../../../assests/image/logo-main.2c66576.svg";
import Menu from "./Menu";
const HomeRight = () => {
  return (
    <>
      <div className="mx-4 ">
        <div className="flex mt-14 items-center">
          <img src={LogoHome} alt="logo" className="h-12 w-12" />
          <p className="text-md text-gray-700 yekanBold pr-3">ایرانسل من</p>
        </div>
        <div className="w-full mt-8">
          <button className=" w-full py-2 bg-yellow-400 text-gray-600 rounded-full yekanBold text-sm">
            خرید بسته
          </button>
        </div>
      </div>
      <div className="mr-4 mt-10">
        <Menu />
      </div>
    </>
  );
};

export default HomeRight;
