import React from "react";

const TabComponentInternet = () => {
  return (
    <div>
      <p className="text-xs text-gray-700 text-center yekanBold">
        شما هیچ بسته فعالی ندارید
      </p>
      <div className="flex justify-between items-center pt-4">
        <button className="bg-yellow-400 text-gray-700 rounded-full px-2 py-2 yekanBold text-sm">
          خرید بسته‌های اینترنت
        </button>
        <button className="bg-red-400 text-white rounded-full px-2 py-2 yekanBold text-sm">
          اینترنت اظطراری
        </button>
      </div>
    </div>
  );
};

export default TabComponentInternet;
