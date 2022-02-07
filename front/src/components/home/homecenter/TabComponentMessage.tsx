import React from "react";

const TabComponentMessage = () => {
  return (
    <div>
      <p className="text-gray-700 text-xs yekanBold text-center">
        شما هیچ بسته پیامک فعالی ندارید
      </p>
      <div className="flex justify-center items-center pt-4">
        <button className="bg-yellow-400 text-gray-700 rounded-full px-6 py-2 yekanBold text-sm">
          خرید بسته‌های پیامک
        </button>
      </div>
    </div>
  );
};

export default TabComponentMessage;
