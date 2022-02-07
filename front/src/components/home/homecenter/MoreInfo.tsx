import React from "react";
import { useToggle } from "./../../../hook/useToggle";

const MoreInfo = () => {
  const { toggle, closeToggle } = useToggle();
  return (
    <div>
      {toggle && (
        <>
          <div className="mt-4 transition-all">
            <div className="flex justify-between border-b border-solid border-gray-400 pb-2">
              <p className="text-xs text-black yekanBold">موجودی اصلی</p>
              <p className="text-xs text-gray-500 yekanBold">123456 ریال</p>
            </div>
            <div className="flex justify-between border-b border-solid border-gray-400 pb-2 mt-3">
              <p className="text-xs text-black yekanBold">موجودی شگفت انگیز</p>
              <p className="text-xs text-gray-500 yekanBold">0 ریال</p>
            </div>
          </div>
        </>
      )}
      <div
        className={`flex justify-between items-center ${
          toggle ? "bordet-t-0" : "border-t border-solid border-gray-400"
        }`}
      >
        <button
          onClick={closeToggle}
          className={"text-blue-300 yekanBold text-sm mt-2"}
        >
          {toggle ? "بستن" : "اطلاعات بیشتر"}
        </button>
        <button className="yekanBold bg-red-500 px-2 py-1 mt-2 text-white text-sm rounded-full">
          شارژ اظطراری
        </button>
      </div>
    </div>
  );
};

export default MoreInfo;
