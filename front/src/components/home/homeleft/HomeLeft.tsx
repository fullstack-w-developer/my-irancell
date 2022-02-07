import React from "react";
import QuickAccess from "./QuickAccess";
import GameBaner from "./GameBaner";
import SliderHeaderLeft from "./SliderHeaderLeft";

const HomeLeft = () => {
  return (
    <>
      <div className="py-4 border-b border-gray-400">
        <p className="yekanBold  text-gray-600 pr-3 text-sm">دسترسی سریع</p>
      </div>
      <div className="mt-6">
        <QuickAccess />
        <GameBaner />
        <SliderHeaderLeft />
      </div>
    </>
  );
};

export default HomeLeft;
